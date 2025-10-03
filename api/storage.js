/**
 * Vercel Memory Storage für HIH-Verwaltung
 * Temporäre Lösung für Serverless Environment
 * 
 * WICHTIG: Daten gehen bei Neustart verloren!
 * Für Produktion sollte Vercel KV oder externe DB verwendet werden.
 */

// In-Memory Speicher
let storage = {
    kunden: [
        {
            id: 'KUNDE-001',
            name: 'Demo Kunde GmbH',
            adresse: {
                strasse: 'Musterstrasse 123',
                plz: '8000',
                ort: 'Zürich',
                land: 'Schweiz'
            },
            email: 'demo@kunde.ch',
            telefon: '+41 44 123 45 67',
            mwstNummer: 'CHE-123.456.789'
        }
    ],
    offerten: [
        {
            id: 'OFF-DEMO-001',
            nummer: 'OFF-2025-001',
            kundeId: 'KUNDE-001',
            titel: 'Demo Offerte',
            beschreibung: 'Beispiel-Offerte für Vercel Demo',
            datum: new Date().toISOString().split('T')[0],
            gueltigBis: new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
            status: 'entwurf',
            mwstSatz: 7.7,
            zahlungskonditionen: '30 Tage netto',
            verzeichnis: 'OFF-2025-001'
        }
    ],
    positionen: [
        {
            id: 'POS-DEMO-001',
            offerteId: 'OFF-DEMO-001',
            position: 1,
            beschreibung: 'Demo Position - Webentwicklung',
            menge: 10,
            einheit: 'Stunden',
            einzelpreis: 120.00,
            rabatt: 0,
            kategorie: 'Entwicklung'
        }
    ]
};

// Export für API
export { storage };

// Hilfsfunktionen
export function initDemoData() {
    console.log('🚀 Demo-Daten für Vercel geladen');
    return storage;
}

export function resetStorage() {
    storage = { kunden: [], offerten: [], positionen: [] };
    return storage;
}