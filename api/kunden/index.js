/**
 * API Endpunkt: /api/kunden
 * Verwaltet alle Kunden-Operationen
 */

import { VercelKundenService } from '../vercelServices.js';
import { initDemoData } from '../storage.js';

// Demo-Daten initialisieren
initDemoData();

const kundenService = new VercelKundenService();

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
                const kunden = await kundenService.listKunden();
                return res.json({ success: true, data: kunden });
                
            case 'POST':
                const neuerKunde = await kundenService.createKunde(req.body);
                return res.json({ success: true, data: neuerKunde });
                
            default:
                res.status(405).json({ success: false, error: 'Method not allowed' });
        }
        
    } catch (error) {
        console.error('Kunden API Error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message || 'Interner Server-Fehler' 
        });
    }
}