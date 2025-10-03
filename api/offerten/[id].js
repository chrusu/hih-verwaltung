/**
 * API Endpunkt: /api/offerten/[id]
 * Einzelne Offerten-Operationen
 */

import { VercelOffertenService } from '../vercelServices.js';
import { initDemoData } from '../storage.js';

// Demo-Daten initialisieren
initDemoData();

const offertenService = new VercelOffertenService();

export default async function handler(req, res) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Offerte ID aus URL extrahieren
    const { id } = req.query;
    
    if (!id) {
        return res.status(400).json({ success: false, error: 'Offerten-ID fehlt' });
    }

    try {
        switch (req.method) {
            case 'GET':
                const offerte = await offertenService.getOfferte(id);
                if (!offerte) {
                    return res.status(404).json({ success: false, error: 'Offerte nicht gefunden' });
                }
                return res.json({ success: true, data: offerte });
                
            case 'PUT':
                // Prüfen ob es sich um Status-Update handelt
                if (req.url.endsWith('/status')) {
                    const { status } = req.body;
                    const updatedOfferte = await offertenService.updateStatus(id, status);
                    return res.json({ success: true, data: updatedOfferte });
                }
                // Allgemeines Update würde hier implementiert werden
                return res.status(501).json({ success: false, error: 'Not implemented' });
                
            default:
                res.status(405).json({ success: false, error: 'Method not allowed' });
        }
        
    } catch (error) {
        console.error('Offerte API Error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message || 'Interner Server-Fehler' 
        });
    }
}