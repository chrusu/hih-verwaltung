/**
 * Datei-Manager für HIH-Verwaltung
 * Verwaltet das Lesen und Schreiben von Markdown und CSV-Dateien
 */

import fs from 'fs/promises';
import { createReadStream } from 'fs';
import path from 'path';
import csv from 'csv-parser';
import createCsvWriter from 'csv-writer';
import { nanoid } from 'nanoid';

export class FileManager {
  constructor(basePath = './data') {
    this.basePath = basePath;
  }

  /**
   * Generiert eine eindeutige ID
   */
  generateId(prefix = '') {
    return prefix ? `${prefix}-${nanoid(8)}` : nanoid(10);
  }

  /**
   * Erstellt Verzeichnis falls es nicht existiert
   */
  async ensureDirectory(dirPath) {
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') {
        throw error;
      }
    }
  }

  /**
   * Schreibt Markdown-Datei
   */
  async writeMarkdownFile(filePath, content) {
    await this.ensureDirectory(path.dirname(filePath));
    await fs.writeFile(filePath, content, 'utf8');
  }

  /**
   * Liest Markdown-Datei und parst Frontmatter
   */
  async readMarkdownFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      
      if (!frontmatterMatch) {
        return { metadata: {}, content: content };
      }

      const [, frontmatter, markdownContent] = frontmatterMatch;
      const metadata = this.parseFrontmatter(frontmatter);
      
      return { metadata, content: markdownContent.trim() };
    } catch (error) {
      if (error.code === 'ENOENT') {
        return null;
      }
      throw error;
    }
  }

  /**
   * Parst YAML-Frontmatter (vereinfacht)
   */
  parseFrontmatter(frontmatter) {
    const lines = frontmatter.split('\n');
    const metadata = {};
    
    for (const line of lines) {
      const match = line.match(/^(\w+):\s*(.*)$/);
      if (match) {
        const [, key, value] = match;
        metadata[key] = this.parseYamlValue(value);
      }
    }
    
    return metadata;
  }

  /**
   * Parst YAML-Werte (vereinfacht)
   */
  parseYamlValue(value) {
    value = value.trim();
    
    // String in Anführungszeichen
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      return value.slice(1, -1);
    }
    
    // Boolean
    if (value === 'true') return true;
    if (value === 'false') return false;
    
    // Number
    if (!isNaN(value) && !isNaN(parseFloat(value))) {
      return parseFloat(value);
    }
    
    return value;
  }

  /**
   * Schreibt CSV-Datei
   */
  async writeCsvFile(filePath, data, headers) {
    await this.ensureDirectory(path.dirname(filePath));
    
    const csvWriter = createCsvWriter.createObjectCsvWriter({
      path: filePath,
      header: headers.map(h => ({ id: h, title: h }))
    });
    
    await csvWriter.writeRecords(data);
  }

  /**
   * Liest CSV-Datei
   */
  async readCsvFile(filePath) {
    return new Promise((resolve, reject) => {
      const results = [];
      
      fs.access(filePath)
        .then(() => {
          const stream = createReadStream(filePath);
          stream
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', reject);
        })
        .catch(() => resolve([])); // Datei existiert nicht
    });
  }

  /**
   * Fügt Zeile zu CSV hinzu
   */
  async appendToCsv(filePath, data, headers) {
    const existingData = await this.readCsvFile(filePath);
    existingData.push(data);
    await this.writeCsvFile(filePath, existingData, headers);
  }

  /**
   * Generiert nächste Kundennummer
   */
  async getNextKundenNummer() {
    const kundenDir = path.join(this.basePath, 'kunden');
    
    try {
      const entries = await fs.readdir(kundenDir);
      const nummern = entries
        .filter(entry => entry.startsWith('KUNDE-'))
        .map(entry => parseInt(entry.split('-')[1]))
        .filter(num => !isNaN(num));
      
      const maxNummer = nummern.length > 0 ? Math.max(...nummern) : 0;
      return `KUNDE-${String(maxNummer + 1).padStart(3, '0')}`;
    } catch {
      return 'KUNDE-001';
    }
  }

  /**
   * Generiert nächste Offertennummer
   */
  async getNextOffertenNummer() {
    const offertenDir = path.join(this.basePath, 'offerten');
    const jahr = new Date().getFullYear();
    
    try {
      const entries = await fs.readdir(offertenDir);
      const jahrPattern = `OFF-${jahr}-`;
      const nummern = entries
        .filter(entry => entry.startsWith(jahrPattern))
        .map(entry => parseInt(entry.split('-')[2]))
        .filter(num => !isNaN(num));
      
      const maxNummer = nummern.length > 0 ? Math.max(...nummern) : 0;
      return `OFF-${jahr}-${String(maxNummer + 1).padStart(3, '0')}`;
    } catch {
      return `OFF-${jahr}-001`;
    }
  }

  /**
   * Listet alle Kunden auf
   */
  async listKunden() {
    const kundenDir = path.join(this.basePath, 'kunden');
    
    try {
      const entries = await fs.readdir(kundenDir);
      const kunden = [];
      
      for (const entry of entries) {
        if (entry.startsWith('KUNDE-')) {
          const kundePath = path.join(kundenDir, entry, 'kunde.md');
          const kundeData = await this.readMarkdownFile(kundePath);
          if (kundeData) {
            kunden.push({
              ...kundeData.metadata,
              verzeichnis: entry
            });
          }
        }
      }
      
      return kunden.sort((a, b) => a.nummer.localeCompare(b.nummer));
    } catch {
      return [];
    }
  }

  /**
   * Listet alle Offerten auf
   */
  async listOfferten() {
    const offertenDir = path.join(this.basePath, 'offerten');
    
    try {
      const entries = await fs.readdir(offertenDir);
      const offerten = [];
      
      for (const entry of entries) {
        if (entry.startsWith('OFF-')) {
          const offertePath = path.join(offertenDir, entry, 'offerte.md');
          const offerteData = await this.readMarkdownFile(offertePath);
          if (offerteData) {
            offerten.push({
              ...offerteData.metadata,
              verzeichnis: entry
            });
          }
        }
      }
      
      return offerten.sort((a, b) => b.datum.localeCompare(a.datum));
    } catch {
      return [];
    }
  }

  /**
   * Findet Kunde nach ID oder Nummer
   */
  async findKunde(identifier) {
    const kunden = await this.listKunden();
    return kunden.find(k => k.id === identifier || k.nummer === identifier);
  }

  /**
   * Findet Offerte nach ID oder Nummer
   */
  async findOfferte(identifier) {
    const offerten = await this.listOfferten();
    return offerten.find(o => o.id === identifier || o.nummer === identifier);
  }
}