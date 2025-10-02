/**
 * Service für Offertenverwaltung
 */

import path from 'path';
import { FileManager } from '../fileManager.js';
import { Offerte, Offertposition } from '../models.js';

export class OffertenService {
  constructor(basePath = './data') {
    this.fileManager = new FileManager(basePath);
    this.basePath = basePath;
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
    return await this.fileManager.listOfferten();
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
    const positionen = await this.fileManager.readCsvFile(positionenPath);

    // Gesamtsumme berechnen
    const gesamtsumme = positionen.reduce((sum, pos) => {
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
      positionen: positionen.map(p => new Offertposition({
        ...p,
        menge: parseFloat(p.menge) || 0,
        einzelpreis: parseFloat(p.einzelpreis) || 0,
        rabatt: parseFloat(p.rabatt) || 0
      })),
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
    
    return positionenData.map(p => new Offertposition({
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
}