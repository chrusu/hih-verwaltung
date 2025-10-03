/**
 * API Endpunkt: /api/offerten/[id]/positionen
 * Positionen einer Offerte verwalten
 */

import { VercelOffertenService } from '../../../vercelServices.js';
import { initDemoData } from '../../../storage.js';

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
                const positionen = await offertenService.getPositionen(id);
                return res.json({ success: true, data: positionen });
                
            case 'POST':
                const neuePosition = await offertenService.addPosition(id, req.body);
                return res.json({ success: true, data: neuePosition });
                
            default:
                res.status(405).json({ success: false, error: 'Method not allowed' });
        }
        
    } catch (error) {
        console.error('Positionen API Error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message || 'Interner Server-Fehler' 
        });
    }
}