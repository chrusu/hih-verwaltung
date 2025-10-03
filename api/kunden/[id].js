/**
 * API Endpunkt: /api/kunden/[id]
 * Einzelne Kunden-Operationen
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

    // Kunde ID aus URL extrahieren
    const { id } = req.query;
    
    if (!id) {
        return res.status(400).json({ success: false, error: 'Kunden-ID fehlt' });
    }

    try {
        switch (req.method) {
            case 'GET':
                const kunde = await kundenService.getKunde(id);
                if (!kunde) {
                    return res.status(404).json({ success: false, error: 'Kunde nicht gefunden' });
                }
                return res.json({ success: true, data: kunde });
                
            case 'PUT':
                const updatedKunde = await kundenService.updateKunde(id, req.body);
                return res.json({ success: true, data: updatedKunde });
                
            case 'DELETE':
                await kundenService.deleteKunde(id);
                return res.json({ success: true });
                
            default:
                res.status(405).json({ success: false, error: 'Method not allowed' });
        }
        
    } catch (error) {
        console.error('Kunde API Error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message || 'Interner Server-Fehler' 
        });
    }
}