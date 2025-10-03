/**
 * Vercel-angepasste Services für HIH-Verwaltung
 */

import { VercelFileManager } from './vercelFileManager.js';
import { storage } from './storage.js';
import { nanoid } from 'nanoid';

// === Modelle ===
class Kunde {
    constructor(data) {
        this.id = data.id || `KUNDE-${nanoid(8)}`;
        this.name = data.name || '';
        this.adresse = data.adresse || {};
        this.email = data.email || '';
        this.telefon = data.telefon || '';
        this.mwstNummer = data.mwstNummer || '';
        this.notizen = data.notizen || '';
    }
}

class Offerte {
    constructor(data) {
        this.id = data.id || `OFF-${nanoid(8)}`;
        this.nummer = data.nummer || '';
        this.kundeId = data.kundeId || '';
        this.titel = data.titel || '';
        this.beschreibung = data.beschreibung || '';
        this.datum = data.datum || new Date().toISOString().split('T')[0];
        this.gueltigBis = data.gueltigBis || '';
        this.status = data.status || 'entwurf';
        this.mwstSatz = parseFloat(data.mwstSatz) || 7.7;
        this.zahlungskonditionen = data.zahlungskonditionen || '30 Tage netto';
        this.verzeichnis = data.verzeichnis || this.nummer;
    }
}

class Offertposition {
    constructor(data) {
        this.id = data.id || `POS-${nanoid(8)}`;
        this.offerteId = data.offerteId || '';
        this.position = parseInt(data.position) || 1;
        this.beschreibung = data.beschreibung || '';
        this.menge = parseFloat(data.menge) || 0;
        this.einheit = data.einheit || 'Stk';
        this.einzelpreis = parseFloat(data.einzelpreis) || 0;
        this.rabatt = parseFloat(data.rabatt) || 0;
        this.kategorie = data.kategorie || '';
    }

    get gesamtpreis() {
        const bruttopreis = this.menge * this.einzelpreis;
        const rabattBetrag = bruttopreis * (this.rabatt / 100);
        return bruttopreis - rabattBetrag;
    }
}

// === Services ===
export class VercelKundenService {
    constructor() {
        this.fileManager = new VercelFileManager();
    }

    async listKunden() {
        return storage.kunden || [];
    }

    async createKunde(data) {
        const kunde = new Kunde(data);
        storage.kunden = storage.kunden || [];
        storage.kunden.push(kunde);
        return kunde;
    }

    async getKunde(identifier) {
        return storage.kunden.find(k => k.id === identifier || k.name === identifier);
    }

    async updateKunde(identifier, data) {
        const index = storage.kunden.findIndex(k => k.id === identifier);
        if (index >= 0) {
            storage.kunden[index] = { ...storage.kunden[index], ...data };
            return storage.kunden[index];
        }
        throw new Error(`Kunde '${identifier}' nicht gefunden`);
    }

    async deleteKunde(identifier) {
        storage.kunden = storage.kunden.filter(k => k.id !== identifier);
        return true;
    }
}

export class VercelOffertenService {
    constructor() {
        this.fileManager = new VercelFileManager();
    }

    async listOfferten() {
        const offerten = storage.offerten || [];
        
        // Berechne Gesamtsumme für jede Offerte
        return offerten.map(offerte => {
            const positionen = storage.positionen.filter(p => p.offerteId === offerte.id);
            const subtotal = positionen.reduce((sum, pos) => {
                const position = new Offertposition(pos);
                return sum + position.gesamtpreis;
            }, 0);
            
            const mwstBetrag = subtotal * (offerte.mwstSatz / 100);
            const gesamtBrutto = subtotal + mwstBetrag;
            
            return {
                ...offerte,
                gesamtsumme: subtotal,
                mwstBetrag: mwstBetrag,
                gesamtBrutto: gesamtBrutto
            };
        });
    }

    async createOfferte(data) {
        // Kunde validieren
        const kunde = storage.kunden.find(k => k.id === data.kundeId);
        if (!kunde) {
            throw new Error(`Kunde '${data.kundeId}' nicht gefunden`);
        }

        // Offertennummer generieren
        const year = new Date().getFullYear();
        const existing = storage.offerten.filter(o => 
            o.nummer?.startsWith(`OFF-${year}`)
        );
        const nextNum = existing.length + 1;
        const nummer = `OFF-${year}-${nextNum.toString().padStart(3, '0')}`;
        
        const offerte = new Offerte({
            ...data,
            nummer: nummer,
            kundeId: kunde.id
        });

        storage.offerten = storage.offerten || [];
        storage.offerten.push(offerte);
        
        return offerte;
    }

    async getOfferte(identifier) {
        const offerte = storage.offerten.find(o => 
            o.id === identifier || o.nummer === identifier
        );
        
        if (!offerte) return null;

        // Positionen laden und filtern
        const positionenData = storage.positionen.filter(p => p.offerteId === offerte.id);
        const validPositions = positionenData.filter(p => p && p.id && p.beschreibung);

        // Gesamtsumme berechnen
        const gesamtsumme = validPositions.reduce((sum, pos) => {
            const position = new Offertposition(pos);
            return sum + position.gesamtpreis;
        }, 0);

        const mwstBetrag = gesamtsumme * (offerte.mwstSatz / 100);
        const gesamtBrutto = gesamtsumme + mwstBetrag;

        return {
            ...offerte,
            positionen: validPositions.map(p => new Offertposition(p)).sort((a, b) => a.position - b.position),
            gesamtsumme: gesamtsumme,
            mwstBetrag: mwstBetrag,
            gesamtBrutto: gesamtBrutto
        };
    }

    async updateStatus(identifier, neuerStatus) {
        const gültigeStatus = ['entwurf', 'gesendet', 'angenommen', 'abgelehnt'];
        if (!gültigeStatus.includes(neuerStatus)) {
            throw new Error(`Ungültiger Status: ${neuerStatus}`);
        }

        const index = storage.offerten.findIndex(o => 
            o.id === identifier || o.nummer === identifier
        );
        
        if (index >= 0) {
            storage.offerten[index].status = neuerStatus;
            return storage.offerten[index];
        }
        
        throw new Error(`Offerte '${identifier}' nicht gefunden`);
    }

    async getPositionen(offerteIdentifier) {
        const offerte = storage.offerten.find(o => 
            o.id === offerteIdentifier || o.nummer === offerteIdentifier
        );
        
        if (!offerte) {
            throw new Error(`Offerte '${offerteIdentifier}' nicht gefunden`);
        }

        const positionenData = storage.positionen.filter(p => p.offerteId === offerte.id);
        const validPositions = positionenData.filter(p => p && p.id && p.beschreibung);
        
        return validPositions.map(p => new Offertposition(p)).sort((a, b) => a.position - b.position);
    }

    async addPosition(offerteIdentifier, positionData) {
        const offerte = storage.offerten.find(o => 
            o.id === offerteIdentifier || o.nummer === offerteIdentifier
        );
        
        if (!offerte) {
            throw new Error(`Offerte '${offerteIdentifier}' nicht gefunden`);
        }

        // Nächste Positionsnummer ermitteln
        const existingPositions = storage.positionen.filter(p => p.offerteId === offerte.id);
        const nextPosition = existingPositions.length > 0 
            ? Math.max(...existingPositions.map(p => parseInt(p.position) || 0)) + 1 
            : 1;

        const position = new Offertposition({
            ...positionData,
            offerteId: offerte.id,
            position: nextPosition
        });

        storage.positionen = storage.positionen || [];
        storage.positionen.push(position);
        
        return position;
    }

    async updatePosition(offerteIdentifier, positionId, updateData) {
        const index = storage.positionen.findIndex(p => p.id === positionId);
        
        if (index >= 0) {
            storage.positionen[index] = { 
                ...storage.positionen[index], 
                ...updateData,
                menge: parseFloat(updateData.menge) || storage.positionen[index].menge,
                einzelpreis: parseFloat(updateData.einzelpreis) || storage.positionen[index].einzelpreis,
                rabatt: parseFloat(updateData.rabatt) || storage.positionen[index].rabatt
            };
            return new Offertposition(storage.positionen[index]);
        }
        
        throw new Error(`Position '${positionId}' nicht gefunden`);
    }

    async deletePosition(offerteIdentifier, positionId) {
        const index = storage.positionen.findIndex(p => p.id === positionId);
        
        if (index >= 0) {
            storage.positionen.splice(index, 1);
            return true;
        }
        
        throw new Error(`Position '${positionId}' nicht gefunden`);
    }
}