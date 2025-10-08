/**
 * Service für Rechnungsverwaltung
 */

import path from 'path';
import fs from 'fs/promises';
import { FileManager } from '../fileManager.js';
import { FirmaService } from './firmaService.js';

// Rechnung Model (ähnlich wie Offerte)
class Rechnung {
  constructor(data = {}) {
    this.id = data.id || '';
    this.nummer = data.nummer || '';
    this.kundeId = data.kundeId || '';
    this.offerteId = data.offerteId || null; // Optional: Verknüpfung zur Offerte
    this.titel = data.titel || '';
    this.datum = data.datum || new Date().toISOString().split('T')[0];
    this.faelligkeitsdatum = data.faelligkeitsdatum || this.berechneFaelligkeitsdatum(data.datum, 30);
    this.status = data.status || 'entwurf'; // entwurf, fertig, gesendet, bezahlt
    this.zahlungsbedingungen = data.zahlungsbedingungen || '30 Tage netto';
    this.mwstSatz = data.mwstSatz || 7.7;
    this.beschreibung = data.beschreibung || '';
    this.notizen = data.notizen || '';
    this.verzeichnis = data.verzeichnis || this.nummer;
    
    // QR-Rechnung Daten
    this.qrReferenz = data.qrReferenz || this.generiereQRReferenz();
    this.iban = data.iban || 'CH93 0076 2011 6238 5295 7'; // Beispiel, sollte konfigurierbar sein
  }

  berechneFaelligkeitsdatum(datum, tage = 30) {
    const d = datum ? new Date(datum) : new Date();
    d.setDate(d.getDate() + tage);
    return d.toISOString().split('T')[0];
  }

  generiereQRReferenz() {
    // Einfache QR-Referenz Generierung (27 Stellen mit Prüfziffer)
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const base = (timestamp + random).slice(-26).padStart(26, '0');
    
    // Modulo 10 rekursive Prüfziffer
    const checkDigit = this.berechneModulo10Rekursiv(base);
    return base + checkDigit;
  }

  berechneModulo10Rekursiv(nummer) {
    const table = [0, 9, 4, 6, 8, 2, 7, 1, 3, 5];
    let carry = 0;
    
    for (let i = 0; i < nummer.length; i++) {
      carry = table[(carry + parseInt(nummer[i])) % 10];
    }
    
    return ((10 - carry) % 10).toString();
  }

  toMarkdown() {
    return `---
id: ${this.id}
nummer: ${this.nummer}
kundeId: ${this.kundeId}
offerteId: ${this.offerteId || ''}
titel: ${this.titel}
datum: ${this.datum}
faelligkeitsdatum: ${this.faelligkeitsdatum}
status: ${this.status}
zahlungsbedingungen: ${this.zahlungsbedingungen}
mwstSatz: ${this.mwstSatz}
qrReferenz: ${this.qrReferenz}
iban: ${this.iban}
---

# ${this.titel}

${this.beschreibung}

## Notizen

${this.notizen}
`;
  }

  static fromMarkdown(content, filename) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
      throw new Error('Kein gültiges Frontmatter gefunden');
    }

    const frontmatter = match[1];
    const data = {};

    frontmatter.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim();
        data[key.trim()] = value;
      }
    });

    // Parse numerische Werte
    if (data.mwstSatz) data.mwstSatz = parseFloat(data.mwstSatz);

    // Verzeichnis aus Dateiname extrahieren
    if (filename) {
      const dirMatch = filename.match(/rechnungen\/([^/]+)\//);
      if (dirMatch) {
        data.verzeichnis = dirMatch[1];
      }
    }

    return new Rechnung(data);
  }
}

// Rechnungsposition Model (ähnlich wie Offertposition)
class Rechnungsposition {
  constructor(data = {}) {
    this.id = data.id || '';
    this.rechnungId = data.rechnungId || '';
    this.position = data.position || 1;
    this.beschreibung = data.beschreibung || '';
    this.menge = parseFloat(data.menge) || 1;
    this.einheit = data.einheit || 'Stk';
    this.einzelpreis = parseFloat(data.einzelpreis) || 0;
    this.rabatt = parseFloat(data.rabatt) || 0;
    this.gesamtpreis = this.berechneGesamtpreis();
    this.kategorie = data.kategorie || '';
  }

  berechneGesamtpreis() {
    const brutto = this.menge * this.einzelpreis;
    const rabattBetrag = brutto * (this.rabatt / 100);
    return brutto - rabattBetrag;
  }

  toCsvRow() {
    return {
      id: this.id,
      rechnungId: this.rechnungId,
      position: this.position,
      beschreibung: this.beschreibung,
      menge: this.menge,
      einheit: this.einheit,
      einzelpreis: this.einzelpreis,
      rabatt: this.rabatt,
      gesamtpreis: this.gesamtpreis,
      kategorie: this.kategorie
    };
  }

  static fromCsvRow(row) {
    return new Rechnungsposition(row);
  }
}

export class RechnungenService {
  constructor(basePath = './data') {
    this.fileManager = new FileManager(basePath);
    this.basePath = basePath;
    this.firmaService = new FirmaService(basePath);
  }

  /**
   * Erstellt eine neue Rechnung
   */
  async createRechnung(data) {
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

    // IBAN von Firma holen, falls nicht angegeben
    if (!data.iban) {
      const firma = await this.firmaService.getFirma();
      data.iban = firma.iban;
    }

    // Rechnungsnummer generieren
    const nummer = await this.getNextRechnungsNummer();
    
    // Rechnung-Objekt erstellen
    const rechnung = new Rechnung({
      ...data,
      id: this.fileManager.generateId('REC'),
      nummer: nummer,
      kundeId: kunde.id
    });

    // Verzeichnis erstellen
    const rechnungenDir = path.join(this.basePath, 'rechnungen', nummer);
    await this.fileManager.ensureDirectory(rechnungenDir);

    // Rechnung.md schreiben
    const rechnungPath = path.join(rechnungenDir, 'rechnung.md');
    await this.fileManager.writeMarkdownFile(rechnungPath, rechnung.toMarkdown());

    // Leere positionen.csv erstellen
    const positionenPath = path.join(rechnungenDir, 'positionen.csv');
    const positionHeaders = [
      'id', 'rechnungId', 'position', 'beschreibung', 'menge', 
      'einheit', 'einzelpreis', 'rabatt', 'gesamtpreis', 'kategorie'
    ];
    await this.fileManager.writeCsvFile(positionenPath, [], positionHeaders);

    return rechnung;
  }

  /**
   * Erstellt eine Rechnung aus einer Offerte
   */
  async createFromOfferte(offerteIdentifier) {
    // Offerte laden
    const offerte = await this.fileManager.findOfferte(offerteIdentifier);
    if (!offerte) {
      throw new Error(`Offerte '${offerteIdentifier}' nicht gefunden`);
    }

    // Positionen der Offerte laden
    const offertenDir = path.join(this.basePath, 'offerten', offerte.verzeichnis);
    const offertenPositionenPath = path.join(offertenDir, 'positionen.csv');
    const offertenPositionen = await this.fileManager.readCsvFile(offertenPositionenPath);

    // Rechnung erstellen
    const rechnung = await this.createRechnung({
      kundeId: offerte.kundeId,
      offerteId: offerte.id,
      titel: offerte.titel,
      beschreibung: offerte.beschreibung,
      zahlungsbedingungen: offerte.zahlungsbedingungen,
      mwstSatz: offerte.mwstSatz,
      notizen: `Erstellt aus Offerte ${offerte.nummer}`
    });

    // Positionen kopieren
    const rechnungenDir = path.join(this.basePath, 'rechnungen', rechnung.nummer);
    const rechnungPositionenPath = path.join(rechnungenDir, 'positionen.csv');

    const neuePositionen = offertenPositionen.map((pos, index) => {
      const rechnungPosition = new Rechnungsposition({
        ...pos,
        id: this.fileManager.generateId('RPOS'),
        rechnungId: rechnung.id,
        position: index + 1
      });
      return rechnungPosition.toCsvRow();
    });

    const positionHeaders = [
      'id', 'rechnungId', 'position', 'beschreibung', 'menge', 
      'einheit', 'einzelpreis', 'rabatt', 'gesamtpreis', 'kategorie'
    ];

    await this.fileManager.writeCsvFile(rechnungPositionenPath, neuePositionen, positionHeaders);

    return rechnung;
  }

  /**
   * Generiert die nächste Rechnungsnummer
   */
  async getNextRechnungsNummer() {
    const year = new Date().getFullYear();
    const rechnungenDir = path.join(this.basePath, 'rechnungen');
    
    try {
      await this.fileManager.ensureDirectory(rechnungenDir);
      const files = await this.fileManager.listDirectory(rechnungenDir);
      
      // Filter für Rechnungen des aktuellen Jahres
      const yearPrefix = `REC-${year}-`;
      const thisYearRechnungen = files
        .filter(f => f.startsWith(yearPrefix))
        .map(f => {
          const match = f.match(/REC-\d{4}-(\d{3})/);
          return match ? parseInt(match[1]) : 0;
        });
      
      const nextNumber = thisYearRechnungen.length > 0 
        ? Math.max(...thisYearRechnungen) + 1 
        : 1;
      
      return `REC-${year}-${String(nextNumber).padStart(3, '0')}`;
    } catch (error) {
      return `REC-${year}-001`;
    }
  }

  /**
   * Listet alle Rechnungen auf
   */
  async listRechnungen() {
    const rechnungenDir = path.join(this.basePath, 'rechnungen');
    
    try {
      await this.fileManager.ensureDirectory(rechnungenDir);
      const entries = await fs.readdir(rechnungenDir);
      const dirs = entries.filter(entry => entry.startsWith('REC-'));
      
      const rechnungen = [];
      
      for (const dir of dirs) {
        try {
          const rechnungPath = path.join(rechnungenDir, dir, 'rechnung.md');
          const content = await fs.readFile(rechnungPath, 'utf8');
          const rechnung = Rechnung.fromMarkdown(content, rechnungPath);
          
          // Positionen direkt laden (ohne getRechnung zu verwenden, um Endlosschleife zu vermeiden)
          const positionenPath = path.join(rechnungenDir, dir, 'positionen.csv');
          let positionen = [];
          try {
            const rows = await this.fileManager.readCsvFile(positionenPath);
            positionen = rows.map(row => Rechnungsposition.fromCsvRow(row));
          } catch (error) {
            // Keine Positionen vorhanden
          }
          
          const subtotal = positionen.reduce((sum, pos) => sum + pos.gesamtpreis, 0);
          const mwstBetrag = subtotal * (rechnung.mwstSatz / 100);
          const gesamtBrutto = subtotal + mwstBetrag;
          
          // Kundennamen laden
          let kundeName = 'Unbekannt';
          if (rechnung.kundeId) {
            try {
              const kunde = await this.fileManager.findKunde(rechnung.kundeId);
              if (kunde) {
                kundeName = kunde.name;
              }
            } catch (error) {
              console.warn(`Kunde ${rechnung.kundeId} nicht gefunden`);
            }
          }
          
          rechnungen.push({
            ...rechnung,
            gesamtsumme: subtotal,
            mwstBetrag: mwstBetrag,
            gesamtBrutto: gesamtBrutto,
            kundeName: kundeName
          });
        } catch (error) {
          console.warn(`Fehler beim Laden der Rechnung ${dir}:`, error.message);
        }
      }
      
      // Nach Nummer sortieren (neueste zuerst)
      return rechnungen.sort((a, b) => b.nummer.localeCompare(a.nummer));
    } catch (error) {
      console.error('Fehler beim Auflisten der Rechnungen:', error);
      return [];
    }
  }

  /**
   * Lädt eine Rechnung
   */
  async getRechnung(identifier) {
    const rechnungen = await this.listRechnungen();
    const rechnung = rechnungen.find(r => r.id === identifier || r.nummer === identifier);
    
    if (!rechnung) {
      return null;
    }

    // Positionen laden und filtern (leere Positionen ausschließen)
    const positionenPath = path.join(this.basePath, 'rechnungen', rechnung.verzeichnis, 'positionen.csv');
    
    try {
      const rows = await this.fileManager.readCsvFile(positionenPath);
      // Filtere leere oder ungültige Positionen heraus
      const validPositions = rows.filter(p => p && p.id && p.beschreibung);
      rechnung.positionen = validPositions.map(row => Rechnungsposition.fromCsvRow(row));
    } catch (error) {
      rechnung.positionen = [];
    }

    return rechnung;
  }

  /**
   * Lädt Positionen einer Rechnung
   */
  async getPositionen(rechnungIdentifier) {
    const rechnung = await this.getRechnung(rechnungIdentifier);
    if (!rechnung) {
      throw new Error(`Rechnung '${rechnungIdentifier}' nicht gefunden`);
    }

    // Positionen wurden bereits in getRechnung() geladen und gefiltert
    return rechnung.positionen || [];
  }

  /**
   * Aktualisiert eine Rechnung
   */
  async updateRechnung(identifier, updateData) {
    const rechnung = await this.getRechnung(identifier);
    if (!rechnung) {
      throw new Error(`Rechnung '${identifier}' nicht gefunden`);
    }

    // Daten aktualisieren
    const updatedRechnung = new Rechnung({
      ...rechnung,
      ...updateData,
      id: rechnung.id,
      nummer: rechnung.nummer,
      verzeichnis: rechnung.verzeichnis
    });

    // Rechnung.md aktualisieren
    const rechnungPath = path.join(this.basePath, 'rechnungen', rechnung.verzeichnis, 'rechnung.md');
    await this.fileManager.writeMarkdownFile(rechnungPath, updatedRechnung.toMarkdown());

    return updatedRechnung;
  }

  /**
   * Löscht eine Rechnung
   */
  async deleteRechnung(identifier) {
    const rechnung = await this.getRechnung(identifier);
    if (!rechnung) {
      throw new Error(`Rechnung '${identifier}' nicht gefunden`);
    }

    const rechnungDir = path.join(this.basePath, 'rechnungen', rechnung.verzeichnis);
    await this.fileManager.deleteDirectory(rechnungDir);
    
    return true;
  }

  /**
   * Fügt Position zu Rechnung hinzu
   */
  async addPosition(rechnungIdentifier, positionData) {
    const rechnung = await this.getRechnung(rechnungIdentifier);
    if (!rechnung) {
      throw new Error(`Rechnung '${rechnungIdentifier}' nicht gefunden`);
    }

    // Nächste Positionsnummer ermitteln
    const positionenPath = path.join(this.basePath, 'rechnungen', rechnung.verzeichnis, 'positionen.csv');
    const existingPositions = await this.fileManager.readCsvFile(positionenPath);
    const nextPosition = existingPositions.length > 0 
      ? Math.max(...existingPositions.map(p => parseInt(p.position) || 0)) + 1 
      : 1;

    // Position erstellen
    const position = new Rechnungsposition({
      ...positionData,
      id: this.fileManager.generateId('RPOS'),
      rechnungId: rechnung.id,
      position: nextPosition
    });

    // Zu CSV hinzufügen
    const positionHeaders = [
      'id', 'rechnungId', 'position', 'beschreibung', 'menge', 
      'einheit', 'einzelpreis', 'rabatt', 'gesamtpreis', 'kategorie'
    ];
    
    await this.fileManager.appendToCsv(positionenPath, position.toCsvRow(), positionHeaders);

    return position;
  }

  /**
   * Aktualisiert eine Position
   */
  async updatePosition(rechnungIdentifier, positionId, updates) {
    const rechnung = await this.getRechnung(rechnungIdentifier);
    if (!rechnung) {
      throw new Error(`Rechnung '${rechnungIdentifier}' nicht gefunden`);
    }

    // Positionen laden
    const positionen = rechnung.positionen || await this.getPositionen(rechnungIdentifier);
    
    // Position finden und aktualisieren
    const positionIndex = positionen.findIndex(p => p.id === positionId);
    if (positionIndex === -1) {
      throw new Error(`Position '${positionId}' nicht gefunden`);
    }

    // Position aktualisieren
    positionen[positionIndex] = new Rechnungsposition({
      ...positionen[positionIndex],
      ...updates,
      id: positionId, // ID nie überschreiben
      rechnungId: rechnung.id // RechnungId nie überschreiben
    });

    // Alle Positionen zurückschreiben
    const positionenPath = path.join(this.basePath, 'rechnungen', rechnung.verzeichnis, 'positionen.csv');
    await this.fileManager.writeCsvFile(positionenPath, positionen.map(p => p.toCsvRow()));
    
    return positionen[positionIndex];
  }

  /**
   * Löscht eine Position
   */
  async deletePosition(rechnungIdentifier, positionId) {
    const rechnung = await this.getRechnung(rechnungIdentifier);
    if (!rechnung) {
      throw new Error(`Rechnung '${rechnungIdentifier}' nicht gefunden`);
    }

    // Positionen laden
    const positionen = rechnung.positionen || await this.getPositionen(rechnungIdentifier);
    
    // Position finden und entfernen
    const positionIndex = positionen.findIndex(p => p.id === positionId);
    if (positionIndex === -1) {
      throw new Error(`Position '${positionId}' nicht gefunden`);
    }

    positionen.splice(positionIndex, 1);

    // Alle Positionen zurückschreiben
    const positionenPath = path.join(this.basePath, 'rechnungen', rechnung.verzeichnis, 'positionen.csv');
    await this.fileManager.writeCsvFile(positionenPath, positionen.map(p => p.toCsvRow()));
    
    return true;
  }
}

export { Rechnung, Rechnungsposition };
