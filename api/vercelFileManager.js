/**
 * Vercel-angepasster FileManager für HIH-Verwaltung
 * Verwendet Memory Storage statt Dateisystem
 */

import { storage } from './storage.js';
import { nanoid } from 'nanoid';

export class VercelFileManager {
    constructor(basePath = '/tmp') {
        this.basePath = basePath;
        console.log('📁 VercelFileManager initialisiert (Memory-basiert)');
    }

    // === ID Generation ===
    generateId(prefix = '') {
        return `${prefix}${prefix ? '-' : ''}${nanoid(8)}`;
    }

    // === Kunden ===
    async listKunden() {
        return storage.kunden || [];
    }

    async findKunde(identifier) {
        return storage.kunden.find(k => 
            k.id === identifier || 
            k.name?.toLowerCase().includes(identifier.toLowerCase())
        );
    }

    async saveKunde(kunde) {
        const existingIndex = storage.kunden.findIndex(k => k.id === kunde.id);
        if (existingIndex >= 0) {
            storage.kunden[existingIndex] = kunde;
        } else {
            storage.kunden.push(kunde);
        }
        return kunde;
    }

    async deleteKunde(kundeId) {
        storage.kunden = storage.kunden.filter(k => k.id !== kundeId);
        return true;
    }

    // === Offerten ===
    async listOfferten() {
        return storage.offerten || [];
    }

    async findOfferte(identifier) {
        return storage.offerten.find(o => 
            o.id === identifier || 
            o.nummer === identifier
        );
    }

    async saveOfferte(offerte) {
        const existingIndex = storage.offerten.findIndex(o => o.id === offerte.id);
        if (existingIndex >= 0) {
            storage.offerten[existingIndex] = offerte;
        } else {
            storage.offerten.push(offerte);
        }
        return offerte;
    }

    async getNextOffertenNummer() {
        const year = new Date().getFullYear();
        const existing = storage.offerten.filter(o => 
            o.nummer?.startsWith(`OFF-${year}`)
        );
        const nextNum = existing.length + 1;
        return `OFF-${year}-${nextNum.toString().padStart(3, '0')}`;
    }

    // === Positionen ===
    async getPositionen(offerteId) {
        return storage.positionen.filter(p => p.offerteId === offerteId) || [];
    }

    async savePosition(position) {
        const existingIndex = storage.positionen.findIndex(p => p.id === position.id);
        if (existingIndex >= 0) {
            storage.positionen[existingIndex] = position;
        } else {
            storage.positionen.push(position);
        }
        return position;
    }

    async deletePosition(positionId) {
        storage.positionen = storage.positionen.filter(p => p.id !== positionId);
        return true;
    }

    // === Kompatibilität mit bestehenden Services ===
    async readCsvFile(filePath) {
        // Simuliert CSV-Lesen aus Memory
        if (filePath.includes('positionen.csv')) {
            const offerteDir = filePath.split('/').slice(-2, -1)[0];
            const offerte = storage.offerten.find(o => o.verzeichnis === offerteDir);
            if (offerte) {
                return storage.positionen.filter(p => p.offerteId === offerte.id);
            }
        }
        return [];
    }

    async writeCsvFile(filePath, data, headers) {
        // Simuliert CSV-Schreiben (macht nichts, da Memory-basiert)
        console.log(`📝 Simuliere CSV-Schreibung: ${filePath}`);
        return true;
    }

    async appendToCsv(filePath, data, headers) {
        // Simuliert CSV-Anhängen (macht nichts, da Memory-basiert)
        console.log(`📝 Simuliere CSV-Anhang: ${filePath}`);
        return true;
    }

    async writeMarkdownFile(filePath, content) {
        // Simuliert Markdown-Schreiben (macht nichts, da Memory-basiert)
        console.log(`📝 Simuliere Markdown-Schreibung: ${filePath}`);
        return true;
    }

    async ensureDirectory(directoryPath) {
        // Simuliert Verzeichnis-Erstellung (macht nichts, da Memory-basiert)
        console.log(`📁 Simuliere Verzeichnis-Erstellung: ${directoryPath}`);
        return true;
    }
}