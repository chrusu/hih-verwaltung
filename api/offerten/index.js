/**
 * API Endpunkt: /api/offerten
 * Verwaltet alle Offerten-Operationen
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

    try {
        switch (req.method) {
            case 'GET':
                const offerten = await offertenService.listOfferten();
                return res.json({ success: true, data: offerten });
                
            case 'POST':
                const neueOfferte = await offertenService.createOfferte(req.body);
                return res.json({ success: true, data: neueOfferte });
                
            default:
                res.status(405).json({ success: false, error: 'Method not allowed' });
        }
        
    } catch (error) {
        console.error('Offerten API Error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message || 'Interner Server-Fehler' 
        });
    }
}