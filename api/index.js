/**
 * Vercel Serverless Function für HIH-Verwaltung API
 */

import { VercelKundenService, VercelOffertenService } from './vercelServices.js';
import { initDemoData } from './storage.js';

// Services initialisieren mit Memory-Speicher
const kundenService = new VercelKundenService();
const offertenService = new VercelOffertenService();

// Demo-Daten beim ersten Aufruf laden
initDemoData();

export default async function handler(req, res) {
    const { method, url } = req;
    const urlPath = url.split('?')[0];
    
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    if (method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        // === Kunden API ===
        if (urlPath === '/api/kunden' && method === 'GET') {
            const kunden = await kundenService.listKunden();
            return res.json({ success: true, data: kunden });
        }
        
        if (urlPath === '/api/kunden' && method === 'POST') {
            const kunde = await kundenService.createKunde(req.body);
            return res.json({ success: true, data: kunde });
        }
        
        if (urlPath.startsWith('/api/kunden/') && method === 'GET') {
            const kundeId = urlPath.split('/')[3];
            const kunde = await kundenService.getKunde(kundeId);
            if (!kunde) {
                return res.status(404).json({ success: false, error: 'Kunde nicht gefunden' });
            }
            return res.json({ success: true, data: kunde });
        }
        
        if (urlPath.startsWith('/api/kunden/') && method === 'PUT') {
            const kundeId = urlPath.split('/')[3];
            const kunde = await kundenService.updateKunde(kundeId, req.body);
            return res.json({ success: true, data: kunde });
        }
        
        if (urlPath.startsWith('/api/kunden/') && method === 'DELETE') {
            const kundeId = urlPath.split('/')[3];
            await kundenService.deleteKunde(kundeId);
            return res.json({ success: true });
        }

        // === Offerten API ===
        if (urlPath === '/api/offerten' && method === 'GET') {
            const offerten = await offertenService.listOfferten();
            return res.json({ success: true, data: offerten });
        }
        
        if (urlPath === '/api/offerten' && method === 'POST') {
            const offerte = await offertenService.createOfferte(req.body);
            return res.json({ success: true, data: offerte });
        }
        
        if (urlPath.startsWith('/api/offerten/') && method === 'GET') {
            const offerteId = urlPath.split('/')[3];
            const offerte = await offertenService.getOfferte(offerteId);
            if (!offerte) {
                return res.status(404).json({ success: false, error: 'Offerte nicht gefunden' });
            }
            return res.json({ success: true, data: offerte });
        }
        
        if (urlPath.startsWith('/api/offerten/') && urlPath.endsWith('/status') && method === 'PUT') {
            const offerteId = urlPath.split('/')[3];
            const { status } = req.body;
            const offerte = await offertenService.updateStatus(offerteId, status);
            return res.json({ success: true, data: offerte });
        }

        // === Positionen API ===
        if (urlPath.startsWith('/api/offerten/') && urlPath.endsWith('/positionen') && method === 'GET') {
            const offerteId = urlPath.split('/')[3];
            const positionen = await offertenService.getPositionen(offerteId);
            return res.json({ success: true, data: positionen });
        }
        
        if (urlPath.startsWith('/api/offerten/') && urlPath.endsWith('/positionen') && method === 'POST') {
            const offerteId = urlPath.split('/')[3];
            const position = await offertenService.addPosition(offerteId, req.body);
            return res.json({ success: true, data: position });
        }
        
        if (urlPath.startsWith('/api/offerten/') && urlPath.includes('/positionen/') && method === 'PUT') {
            const parts = urlPath.split('/');
            const offerteId = parts[3];
            const positionId = parts[5];
            const position = await offertenService.updatePosition(offerteId, positionId, req.body);
            return res.json({ success: true, data: position });
        }
        
        if (urlPath.startsWith('/api/offerten/') && urlPath.includes('/positionen/') && method === 'DELETE') {
            const parts = urlPath.split('/');
            const offerteId = parts[3];
            const positionId = parts[5];
            await offertenService.deletePosition(offerteId, positionId);
            return res.json({ success: true });
        }

        // === PDF Export (vorerst deaktiviert) ===
        if (urlPath.startsWith('/api/export/pdf/') && method === 'POST') {
            return res.json({ 
                success: false, 
                error: 'PDF-Export ist in der Vercel-Version noch nicht verfügbar. Wir arbeiten an einer Lösung.' 
            });
        }

        // 404 für unbekannte Routen
        res.status(404).json({ success: false, error: 'API-Endpunkt nicht gefunden' });
        
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message || 'Interner Server-Fehler' 
        });
    }
}