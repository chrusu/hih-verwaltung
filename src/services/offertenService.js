/**
 * Service für Offertenverwaltung
 */

import path from 'path';
import { FileManager } from '../fileManager.js';
import { Offerte, Offertposition } from '../models.js';
import { FirmaService } from './firmaService.js';

export class OffertenService {
  constructor(basePath = './data') {
    this.fileManager = new FileManager(basePath);
    this.basePath = basePath;
    this.firmaService = new FirmaService(basePath);
  }

  /**
   * Erstellt eine neue Offerte
   */
  async createOfferte(data) {
    // Kunde validieren
    const kunde = await this.fileManager.findKunde(data.kundeId);
    if (!kunde) {
      throw new Error(`Kunde '${data.kundeId}' nicht gefunden`);
    }

    // MwSt-Satz von Firma holen, falls nicht explizit angegeben
    if (data.mwstSatz === undefined || data.mwstSatz === null) {
      const firma = await this.firmaService.getFirma();
      data.mwstSatz = firma.mwstSatz || 0;
    }

    // Offertennummer generieren
    const nummer = await this.fileManager.getNextOffertenNummer();
    
    // Offerte-Objekt erstellen
    const offerte = new Offerte({
      ...data,
      id: this.fileManager.generateId('OFF'),
      nummer: nummer,
      kundeId: kunde.id
    });

    // Verzeichnis erstellen
    const offertenDir = path.join(this.basePath, 'offerten', nummer);
    await this.fileManager.ensureDirectory(offertenDir);

    // Offerte.md schreiben
    const offertePath = path.join(offertenDir, 'offerte.md');
    await this.fileManager.writeMarkdownFile(offertePath, offerte.toMarkdown());

    // Leere positionen.csv erstellen
    const positionenPath = path.join(offertenDir, 'positionen.csv');
    const positionHeaders = [
      'id', 'offerteId', 'position', 'beschreibung', 'menge', 
      'einheit', 'einzelpreis', 'rabatt', 'gesamtpreis', 'kategorie'
    ];
    await this.fileManager.writeCsvFile(positionenPath, [], positionHeaders);

    return offerte;
  }

  /**
   * Fügt Position zu Offerte hinzu
   */
  async addPosition(offerteIdentifier, positionData) {
    // Offerte finden
    const offerte = await this.fileManager.findOfferte(offerteIdentifier);
    if (!offerte) {
      throw new Error(`Offerte '${offerteIdentifier}' nicht gefunden`);
    }

    // Nächste Positionsnummer ermitteln
    const positionenPath = path.join(this.basePath, 'offerten', offerte.verzeichnis, 'positionen.csv');
    const existingPositions = await this.fileManager.readCsvFile(positionenPath);
    const nextPosition = existingPositions.length > 0 
      ? Math.max(...existingPositions.map(p => parseInt(p.position) || 0)) + 1 
      : 1;

    // Position erstellen
    const position = new Offertposition({
      ...positionData,
      id: this.fileManager.generateId('POS'),
      offerteId: offerte.id,
      position: nextPosition
    });

    // Zu CSV hinzufügen
    const positionHeaders = [
      'id', 'offerteId', 'position', 'beschreibung', 'menge', 
      'einheit', 'einzelpreis', 'rabatt', 'gesamtpreis', 'kategorie'
    ];
    
    await this.fileManager.appendToCsv(positionenPath, position.toCsvRow(), positionHeaders);

    return position;
  }

  /**
   * Listet alle Offerten auf
   */
  async listOfferten() {
    const offerten = await this.fileManager.listOfferten();
    
    // Berechne Gesamtsumme und Kundennamen für jede Offerte
    const offertenMitSummeUndKunde = await Promise.all(offerten.map(async (offerte) => {
      try {
        const positionen = await this.getPositionen(offerte.id);
        
        // Berechne Subtotal aus Positionen
        const subtotal = positionen.reduce((sum, pos) => sum + pos.gesamtpreis, 0);
        
        // MwSt berechnen
        const mwstBetrag = subtotal * (offerte.mwstSatz / 100);
        const gesamtBrutto = subtotal + mwstBetrag;
        
        // Kundennamen laden
        let kundeName = 'Unbekannt';
        if (offerte.kundeId) {
          try {
            const kunde = await this.fileManager.findKunde(offerte.kundeId);
            if (kunde) {
              kundeName = kunde.name;
            }
          } catch (kundenError) {
            console.warn(`Kunde ${offerte.kundeId} nicht gefunden für Offerte ${offerte.nummer}`);
          }
        }
        
        return {
          ...offerte,
          gesamtsumme: subtotal,
          mwstBetrag: mwstBetrag,
          gesamtBrutto: gesamtBrutto,
          kundeName: kundeName
        };
      } catch (error) {
        // Falls Positionen nicht geladen werden können, Standardwerte
        return {
          ...offerte,
          gesamtsumme: 0,
          mwstBetrag: 0,
          gesamtBrutto: 0,
          kundeName: 'Unbekannt'
        };
      }
    }));
    
    return offertenMitSummeUndKunde;
  }

  /**
   * Lädt Offerte mit Details
   */
  async getOfferte(identifier) {
    const offerte = await this.fileManager.findOfferte(identifier);
    if (!offerte) {
      return null;
    }

    // Positionen laden
    const positionenPath = path.join(this.basePath, 'offerten', offerte.verzeichnis, 'positionen.csv');
    const positionenData = await this.fileManager.readCsvFile(positionenPath);
    
    // Filtere leere oder ungültige Positionen heraus (wie in getPositionen)
    const validPositions = positionenData.filter(p => p && p.id && p.beschreibung);

    // Gesamtsumme berechnen
    const gesamtsumme = validPositions.reduce((sum, pos) => {
      const position = new Offertposition({
        ...pos,
        menge: parseFloat(pos.menge) || 0,
        einzelpreis: parseFloat(pos.einzelpreis) || 0,
        rabatt: parseFloat(pos.rabatt) || 0
      });
      return sum + position.gesamtpreis;
    }, 0);

    const mwstBetrag = gesamtsumme * (offerte.mwstSatz / 100);
    const gesamtBrutto = gesamtsumme + mwstBetrag;

    return {
      ...offerte,
      positionen: validPositions.map(p => new Offertposition({
        ...p,
        menge: parseFloat(p.menge) || 0,
        einzelpreis: parseFloat(p.einzelpreis) || 0,
        rabatt: parseFloat(p.rabatt) || 0,
        position: parseInt(p.position) || 0
      })).sort((a, b) => a.position - b.position),
      gesamtsumme: gesamtsumme,
      mwstBetrag: mwstBetrag,
      gesamtBrutto: gesamtBrutto
    };
  }

  /**
   * Lädt Positionen einer Offerte
   */
  async getPositionen(offerteIdentifier) {
    const offerte = await this.fileManager.findOfferte(offerteIdentifier);
    if (!offerte) {
      throw new Error(`Offerte '${offerteIdentifier}' nicht gefunden`);
    }

    const positionenPath = path.join(this.basePath, 'offerten', offerte.verzeichnis, 'positionen.csv');
    const positionenData = await this.fileManager.readCsvFile(positionenPath);
    
    // Filtere leere oder ungültige Positionen heraus
    const validPositions = positionenData.filter(p => p && p.id && p.beschreibung);
    
    return validPositions.map(p => new Offertposition({
      ...p,
      menge: parseFloat(p.menge) || 0,
      einzelpreis: parseFloat(p.einzelpreis) || 0,
      rabatt: parseFloat(p.rabatt) || 0,
      position: parseInt(p.position) || 0
    })).sort((a, b) => a.position - b.position);
  }

  /**
   * Aktualisiert Offertenstatus
   */
  async updateStatus(identifier, neuerStatus) {
    const gültigeStatus = ['entwurf', 'gesendet', 'angenommen', 'abgelehnt'];
    if (!gültigeStatus.includes(neuerStatus)) {
      throw new Error(`Ungültiger Status: ${neuerStatus}`);
    }

    const offerte = await this.fileManager.findOfferte(identifier);
    if (!offerte) {
      throw new Error(`Offerte '${identifier}' nicht gefunden`);
    }

    // Offerte laden und aktualisieren
    const offertePath = path.join(this.basePath, 'offerten', offerte.verzeichnis, 'offerte.md');
    const offerteData = await this.fileManager.readMarkdownFile(offertePath);
    
    if (offerteData) {
      const aktualisierteOfferte = new Offerte({
        ...offerteData.metadata,
        status: neuerStatus
      });

      await this.fileManager.writeMarkdownFile(offertePath, aktualisierteOfferte.toMarkdown());
    }

    return { ...offerte, status: neuerStatus };
  }

  /**
   * Aktualisiert eine Offerte
   */
  async updateOfferte(offerteIdentifier, updates) {
    const offerte = await this.fileManager.findOfferte(offerteIdentifier);
    if (!offerte) {
      throw new Error(`Offerte '${offerteIdentifier}' nicht gefunden`);
    }

    // Vollständige Offerte laden
    const vollOfferte = await this.getOfferte(offerteIdentifier);
    
    // Daten aktualisieren
    const updatedOfferte = new Offerte({
      ...vollOfferte,
      ...updates,
      id: vollOfferte.id, // ID nie überschreiben
      nummer: vollOfferte.nummer, // Nummer nie überschreiben
      verzeichnis: vollOfferte.verzeichnis, // Verzeichnis nie überschreiben
      erstellt: vollOfferte.erstellt // Erstellungsdatum nie überschreiben
    });

    // Datei aktualisieren
    const offertenPath = path.join(this.basePath, 'offerten', offerte.verzeichnis, 'offerte.md');
    const content = updatedOfferte.toMarkdown();
    await this.fileManager.writeMarkdownFile(offertenPath, content);

    return updatedOfferte;
  }

  /**
   * Löscht eine Offerte
   */
  async deleteOfferte(offerteIdentifier) {
    const offerte = await this.fileManager.findOfferte(offerteIdentifier);
    if (!offerte) {
      throw new Error(`Offerte '${offerteIdentifier}' nicht gefunden`);
    }

    const offertenDir = path.join(this.basePath, 'offerten', offerte.verzeichnis);
    
    // Ganzes Verzeichnis löschen
    const fs = await import('fs/promises');
    await fs.rm(offertenDir, { recursive: true, force: true });
    
    return true;
  }

  /**
   * Aktualisiert eine Position
   */
  async updatePosition(offerteIdentifier, positionId, updates) {
    const vollOfferte = await this.getOfferte(offerteIdentifier);
    if (!vollOfferte) {
      throw new Error(`Offerte '${offerteIdentifier}' nicht gefunden`);
    }

    // Position finden und aktualisieren
    const positionIndex = vollOfferte.positionen.findIndex(p => p.id === positionId);
    if (positionIndex === -1) {
      throw new Error(`Position '${positionId}' nicht gefunden`);
    }

    // Position aktualisieren
    vollOfferte.positionen[positionIndex] = new Offertposition({
      ...vollOfferte.positionen[positionIndex],
      ...updates,
      id: positionId, // ID nie überschreiben
      offerteId: vollOfferte.id // OfferteId nie überschreiben
    });

    // Gesamtsumme neu berechnen
    this.berechneGesamtsumme(vollOfferte);

    // Speichern
    await this.saveOfferte(vollOfferte);
    
    return vollOfferte.positionen[positionIndex];
  }

  /**
   * Löscht eine Position
   */
  async deletePosition(offerteIdentifier, positionId) {
    const vollOfferte = await this.getOfferte(offerteIdentifier);
    if (!vollOfferte) {
      throw new Error(`Offerte '${offerteIdentifier}' nicht gefunden`);
    }

    // Position finden und entfernen
    const positionIndex = vollOfferte.positionen.findIndex(p => p.id === positionId);
    if (positionIndex === -1) {
      throw new Error(`Position '${positionId}' nicht gefunden`);
    }

    vollOfferte.positionen.splice(positionIndex, 1);

    // Gesamtsumme neu berechnen
    this.berechneGesamtsumme(vollOfferte);

    // Speichern
    await this.saveOfferte(vollOfferte);
    
    return true;
  }

  /**
   * Berechnet die Gesamtsumme einer Offerte
   */
  berechneGesamtsumme(offerte) {
    let gesamtsumme = 0;
    
    // Alle Positionen durchrechnen
    if (offerte.positionen) {
      for (const position of offerte.positionen) {
        if (position.beschreibung && position.menge && position.einzelpreis) {
          const positionTotal = position.menge * position.einzelpreis * (1 - (position.rabatt || 0) / 100);
          gesamtsumme += positionTotal;
        }
      }
    }
    
    // MwSt berechnen
    const mwstSatz = offerte.mwstSatz !== undefined ? offerte.mwstSatz : 7.7;
    const mwstBetrag = gesamtsumme * (mwstSatz / 100);
    const gesamtBrutto = gesamtsumme + mwstBetrag;
    
    // Werte in Offerte setzen
    offerte.gesamtsumme = Math.round(gesamtsumme * 100) / 100;
    offerte.mwstBetrag = Math.round(mwstBetrag * 100) / 100;
    offerte.gesamtBrutto = Math.round(gesamtBrutto * 100) / 100;
    
    return offerte;
  }

  /**
   * Speichert eine Offerte (Hilfsmethode)
   */
  async saveOfferte(offerte) {
    const offertenPath = path.join(this.basePath, 'offerten', offerte.verzeichnis, 'offerte.md');
    const content = offerte.toMarkdown();
    await this.fileManager.writeMarkdownFile(offertenPath, content);

    // Positionen CSV aktualisieren
    const positionenPath = path.join(this.basePath, 'offerten', offerte.verzeichnis, 'positionen.csv');
    const positionenData = offerte.positionen.map(p => p.toCsvRow());
    await this.fileManager.writeCsvFile(positionenPath, positionenData);
  }
}