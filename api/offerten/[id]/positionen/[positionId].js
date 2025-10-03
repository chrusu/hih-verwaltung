/**
 * API Endpunkt: /api/offerten/[id]/positionen/[positionId]
 * Einzelne Position bearbeiten/löschen
 */

import { VercelOffertenService } from '../../../../vercelServices.js';
import { initDemoData } from '../../../../storage.js';

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

    // IDs aus URL extrahieren
    const { id, positionId } = req.query;
    
    if (!id || !positionId) {
        return res.status(400).json({ success: false, error: 'Offerten-ID oder Position-ID fehlt' });
    }

    try {
        switch (req.method) {
            case 'PUT':
                const updatedPosition = await offertenService.updatePosition(id, positionId, req.body);
                return res.json({ success: true, data: updatedPosition });
                
            case 'DELETE':
                await offertenService.deletePosition(id, positionId);
                return res.json({ success: true });
                
            default:
                res.status(405).json({ success: false, error: 'Method not allowed' });
        }
        
    } catch (error) {
        console.error('Position API Error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message || 'Interner Server-Fehler' 
        });
    }
}