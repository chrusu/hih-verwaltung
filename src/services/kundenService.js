/**
 * Service für Kundenverwaltung
 */

import path from 'path';
import { FileManager } from '../fileManager.js';
import { Kunde, Kontakt } from '../models.js';

export class KundenService {
  constructor(basePath = './data') {
    this.fileManager = new FileManager(basePath);
    this.basePath = basePath;
  }

  /**
   * Erstellt einen neuen Kunden
   */
  async createKunde(data) {
    // Kundennummer generieren
    const nummer = await this.fileManager.getNextKundenNummer();
    
    // Kunde-Objekt erstellen
    const kunde = new Kunde({
      ...data,
      id: this.fileManager.generateId('KD'),
      nummer: nummer
    });

    // Verzeichnis erstellen
    const kundenDir = path.join(this.basePath, 'kunden', nummer);
    await this.fileManager.ensureDirectory(kundenDir);

    // Kunde.md schreiben
    const kundePath = path.join(kundenDir, 'kunde.md');
    await this.fileManager.writeMarkdownFile(kundePath, kunde.toMarkdown());

    // Leere kontakte.csv erstellen
    const kontaktePath = path.join(kundenDir, 'kontakte.csv');
    const kontaktHeaders = [
      'id', 'kundeId', 'typ', 'anrede', 'vorname', 'nachname', 
      'position', 'email', 'telefon', 'mobil', 'notizen', 'erstellt', 'aktiv'
    ];
    await this.fileManager.writeCsvFile(kontaktePath, [], kontaktHeaders);

    return kunde;
  }

  /**
   * Fügt Kontakt zu Kunde hinzu
   */
  async addKontakt(kundeIdentifier, kontaktData) {
    // Kunde finden
    const kunde = await this.fileManager.findKunde(kundeIdentifier);
    if (!kunde) {
      throw new Error(`Kunde '${kundeIdentifier}' nicht gefunden`);
    }

    // Kontakt erstellen
    const kontakt = new Kontakt({
      ...kontaktData,
      id: this.fileManager.generateId('KT'),
      kundeId: kunde.id
    });

    // Zu CSV hinzufügen
    const kontaktePath = path.join(this.basePath, 'kunden', kunde.verzeichnis, 'kontakte.csv');
    const kontaktHeaders = [
      'id', 'kundeId', 'typ', 'anrede', 'vorname', 'nachname', 
      'position', 'email', 'telefon', 'mobil', 'notizen', 'erstellt', 'aktiv'
    ];
    
    await this.fileManager.appendToCsv(kontaktePath, kontakt.toCsvRow(), kontaktHeaders);

    return kontakt;
  }

  /**
   * Listet alle Kunden auf
   */
  async listKunden() {
    return await this.fileManager.listKunden();
  }

  /**
   * Lädt Kunde mit Details
   */
  async getKunde(identifier) {
    const kunde = await this.fileManager.findKunde(identifier);
    if (!kunde) {
      return null;
    }

    // Kontakte laden
    const kontaktePath = path.join(this.basePath, 'kunden', kunde.verzeichnis, 'kontakte.csv');
    const kontakte = await this.fileManager.readCsvFile(kontaktePath);

    return {
      ...kunde,
      kontakte: kontakte.map(k => new Kontakt(k))
    };
  }

  /**
   * Lädt Kontakte eines Kunden
   */
  async getKontakte(kundeIdentifier) {
    const kunde = await this.fileManager.findKunde(kundeIdentifier);
    if (!kunde) {
      throw new Error(`Kunde '${kundeIdentifier}' nicht gefunden`);
    }

    const kontaktePath = path.join(this.basePath, 'kunden', kunde.verzeichnis, 'kontakte.csv');
    const kontakteData = await this.fileManager.readCsvFile(kontaktePath);
    
    return kontakteData.map(k => new Kontakt({
      ...k,
      aktiv: k.aktiv === 'true'
    }));
  }

  /**
   * Findet Kontakt
   */
  async findKontakt(kontaktId) {
    const kunden = await this.listKunden();
    
    for (const kunde of kunden) {
      const kontakte = await this.getKontakte(kunde.nummer);
      const kontakt = kontakte.find(k => k.id === kontaktId);
      if (kontakt) {
        return kontakt;
      }
    }
    
    return null;
  }
}