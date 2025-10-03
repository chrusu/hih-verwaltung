#!/usr/bin/env node

/**
 * HIH-Verwaltung Web API Server
 * Express.js Backend für das Terminal Web Interface
 */

import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Services importieren
import { KundenService } from './src/services/kundenService.js';
import { OffertenService } from './src/services/offertenService.js';
import { PdfExportService } from './src/services/pdfExportService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Services initialisieren
const kundenService = new KundenService('./data');
const offertenService = new OffertenService('./data');
const pdfExportService = new PdfExportService();

// === MIDDLEWARE ===
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files für Web Interface
app.use(express.static(path.join(__dirname, 'web')));

// Logging Middleware
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleTimeString('de-CH');
    console.log(`🌐 ${timestamp} | ${req.method} ${req.path}`);
    next();
});

// === API ROUTES ===

// === Kunden API ===
app.get('/api/kunden', async (req, res) => {
    try {
        const kunden = await kundenService.listKunden();
        res.json({ success: true, data: kunden });
    } catch (error) {
        console.error('❌ Fehler beim Laden der Kunden:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get('/api/kunden/:id', async (req, res) => {
    try {
        const kunde = await kundenService.getKunde(req.params.id);
        if (kunde) {
            res.json({ success: true, data: kunde });
        } else {
            res.status(404).json({ success: false, error: 'Kunde nicht gefunden' });
        }
    } catch (error) {
        console.error('❌ Fehler beim Laden des Kunden:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/kunden', async (req, res) => {
    try {
        const { name, email, telefon } = req.body;
        
        if (!name?.trim()) {
            return res.status(400).json({ success: false, error: 'Name ist erforderlich' });
        }
        
        const neuerKunde = await kundenService.createKunde({
            name: name.trim(),
            email: email?.trim() || '',
            telefon: telefon?.trim() || ''
        });
        
        console.log(`✅ Neuer Kunde erstellt: ${neuerKunde.name} (${neuerKunde.id})`);
        res.status(201).json({ success: true, data: neuerKunde });
    } catch (error) {
        console.error('❌ Fehler beim Erstellen des Kunden:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.put('/api/kunden/:id', async (req, res) => {
    try {
        const { name, email, telefon } = req.body;
        
        if (!name?.trim()) {
            return res.status(400).json({ success: false, error: 'Name ist erforderlich' });
        }
        
        const aktualisierterKunde = await kundenService.updateKunde(req.params.id, {
            name: name.trim(),
            email: email?.trim() || '',
            telefon: telefon?.trim() || ''
        });
        
        console.log(`✅ Kunde aktualisiert: ${aktualisierterKunde.name} (${req.params.id})`);
        res.json({ success: true, data: aktualisierterKunde });
    } catch (error) {
        console.error('❌ Fehler beim Aktualisieren des Kunden:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.delete('/api/kunden/:id', async (req, res) => {
    try {
        await kundenService.deleteKunde(req.params.id);
        console.log(`✅ Kunde gelöscht: ${req.params.id}`);
        res.json({ success: true, message: 'Kunde erfolgreich gelöscht' });
    } catch (error) {
        console.error('❌ Fehler beim Löschen des Kunden:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// === Offerten API ===
app.get('/api/offerten', async (req, res) => {
    try {
        const offerten = await offertenService.listOfferten();
        res.json({ success: true, data: offerten });
    } catch (error) {
        console.error('❌ Fehler beim Laden der Offerten:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get('/api/offerten/:id', async (req, res) => {
    try {
        const offerte = await offertenService.getOfferte(req.params.id);
        if (offerte) {
            res.json({ success: true, data: offerte });
        } else {
            res.status(404).json({ success: false, error: 'Offerte nicht gefunden' });
        }
    } catch (error) {
        console.error('❌ Fehler beim Laden der Offerte:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/offerten', async (req, res) => {
    try {
        const { 
            kundeId, 
            titel, 
            status, 
            datum, 
            gültigBis, 
            mwstSatz, 
            zahlungsbedingungen, 
            beschreibung, 
            notizen 
        } = req.body;
        
        if (!kundeId?.trim()) {
            return res.status(400).json({ success: false, error: 'Kunde-ID ist erforderlich' });
        }
        
        if (!titel?.trim()) {
            return res.status(400).json({ success: false, error: 'Titel ist erforderlich' });
        }
        
        const offertenData = {
            kundeId: kundeId.trim(),
            titel: titel.trim(),
            status: status || 'entwurf',
            datum: datum || new Date().toISOString().split('T')[0],
            gültigBis: gültigBis,
            mwstSatz: mwstSatz || 7.7,
            zahlungsbedingungen: zahlungsbedingungen || '30 Tage netto',
            beschreibung: beschreibung?.trim() || '',
            notizen: notizen?.trim() || ''
        };
        
        const neueOfferte = await offertenService.createOfferte(offertenData);
        
        console.log(`✅ Neue Offerte erstellt: ${neueOfferte.nummer} (${neueOfferte.id})`);
        res.status(201).json({ success: true, data: neueOfferte });
    } catch (error) {
        console.error('❌ Fehler beim Erstellen der Offerte:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.put('/api/offerten/:id', async (req, res) => {
    try {
        const updates = req.body;
        const aktualisierteOfferte = await offertenService.updateOfferte(req.params.id, updates);
        
        console.log(`✅ Offerte aktualisiert: ${aktualisierteOfferte.nummer} (${req.params.id})`);
        res.json({ success: true, data: aktualisierteOfferte });
    } catch (error) {
        console.error('❌ Fehler beim Aktualisieren der Offerte:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.delete('/api/offerten/:id', async (req, res) => {
    try {
        await offertenService.deleteOfferte(req.params.id);
        console.log(`✅ Offerte gelöscht: ${req.params.id}`);
        res.json({ success: true, message: 'Offerte erfolgreich gelöscht' });
    } catch (error) {
        console.error('❌ Fehler beim Löschen der Offerte:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// === PDF Export API ===
app.post('/api/export/pdf/:offerteId', async (req, res) => {
    try {
        const offerte = await offertenService.getOfferte(req.params.offerteId);
        if (!offerte) {
            return res.status(404).json({ success: false, error: 'Offerte nicht gefunden' });
        }
        
        const result = await pdfExportService.exportToPdf(offerte.nummer);
        
        console.log(`✅ PDF erstellt: ${result.pdfPath}`);
        res.json({ 
            success: true, 
            data: {
                pdfPath: result.pdfPath,
                filename: path.basename(result.pdfPath)
            }
        });
    } catch (error) {
        console.error('❌ Fehler beim PDF-Export:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get('/api/export/pdf/:offerteId/download', async (req, res) => {
    try {
        const offerte = await offertenService.getOfferte(req.params.offerteId);
        if (!offerte) {
            return res.status(404).json({ success: false, error: 'Offerte nicht gefunden' });
        }
        
        // Versuche existierende PDF zu finden
        const expectedPdfName = `offerte_${offerte.nummer}.pdf`;
        let pdfPath = path.join('./data/exports', expectedPdfName);
        
        // Prüfe ob PDF existiert
        try {
            await fs.access(pdfPath);
        } catch {
            // PDF existiert nicht, erstelle es
            const result = await pdfExportService.exportToPdf(offerte.nummer);
            // Aktualisiere pdfPath mit dem generierten Pfad
            pdfPath = result.pdfPath;
        }
        
        // Sende PDF als Download
        res.download(pdfPath, expectedPdfName, (err) => {
            if (err) {
                console.error('❌ Fehler beim PDF-Download:', err);
                res.status(500).json({ success: false, error: 'Download fehlgeschlagen' });
            } else {
                console.log(`✅ PDF heruntergeladen: ${expectedPdfName}`);
            }
        });
        
    } catch (error) {
        console.error('❌ Fehler beim PDF-Download:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// === Positionen API ===
app.get('/api/offerten/:offerteId/positionen', async (req, res) => {
    try {
        const positionen = await offertenService.getPositionen(req.params.offerteId);
        res.json({ success: true, data: positionen });
    } catch (error) {
        console.error('❌ Fehler beim Laden der Positionen:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/offerten/:offerteId/positionen', async (req, res) => {
    try {
        const { beschreibung, menge, einheit, einzelpreis, rabatt, kategorie } = req.body;
        
        if (!beschreibung?.trim()) {
            return res.status(400).json({ success: false, error: 'Beschreibung ist erforderlich' });
        }
        
        const positionData = {
            beschreibung: beschreibung.trim(),
            menge: menge || 1,
            einheit: einheit || 'Stk',
            einzelpreis: einzelpreis || 0,
            rabatt: rabatt || 0,
            kategorie: kategorie?.trim() || ''
        };
        
        const neuePosition = await offertenService.addPosition(req.params.offerteId, positionData);
        
        console.log(`✅ Neue Position erstellt für Offerte ${req.params.offerteId}`);
        res.status(201).json({ success: true, data: neuePosition });
    } catch (error) {
        console.error('❌ Fehler beim Erstellen der Position:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.put('/api/offerten/:offerteId/positionen/:positionId', async (req, res) => {
    try {
        const updates = req.body;
        const aktualisiertePosition = await offertenService.updatePosition(req.params.offerteId, req.params.positionId, updates);
        
        console.log(`✅ Position aktualisiert: ${req.params.positionId}`);
        res.json({ success: true, data: aktualisiertePosition });
    } catch (error) {
        console.error('❌ Fehler beim Aktualisieren der Position:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.delete('/api/offerten/:offerteId/positionen/:positionId', async (req, res) => {
    try {
        console.log(`🗑️ Lösche Position: ${req.params.positionId} aus Offerte: ${req.params.offerteId}`);
        await offertenService.deletePosition(req.params.offerteId, req.params.positionId);
        console.log(`✅ Position gelöscht: ${req.params.positionId}`);
        res.json({ success: true, message: 'Position erfolgreich gelöscht' });
    } catch (error) {
        console.error('❌ Fehler beim Löschen der Position:', error);
        console.error('❌ Stack trace:', error.stack);
        res.status(500).json({ success: false, error: error.message });
    }
});

// === Dashboard API ===
app.get('/api/dashboard', async (req, res) => {
    try {
        const kunden = await kundenService.listKunden();
        const offerten = await offertenService.listOfferten();
        
        const dashboard = {
            kundenCount: kunden.length,
            offertenCount: offerten.length,
            offertenOffen: offerten.filter(o => o.status === 'Offen' || !o.status).length,
            letzteAktivitaet: new Date().toISOString()
        };
        
        res.json({ success: true, data: dashboard });
    } catch (error) {
        console.error('❌ Fehler beim Laden des Dashboards:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// === Git Integration API ===
app.post('/api/git/commit', async (req, res) => {
    try {
        const { spawn } = await import('child_process');
        
        // Git status prüfen
        const gitStatus = await new Promise((resolve, reject) => {
            const git = spawn('git', ['status', '--porcelain'], { cwd: process.cwd() });
            let output = '';
            
            git.stdout.on('data', (data) => {
                output += data.toString();
            });
            
            git.on('close', (code) => {
                if (code === 0) {
                    resolve(output);
                } else {
                    reject(new Error(`Git status failed with code ${code}`));
                }
            });
        });
        
        if (gitStatus.trim()) {
            // Änderungen committen
            await new Promise((resolve, reject) => {
                const gitAdd = spawn('git', ['add', '-A'], { cwd: process.cwd() });
                gitAdd.on('close', (code) => {
                    if (code === 0) {
                        const gitCommit = spawn('git', ['commit', '-m', 'Web Interface: Automatischer Commit'], { cwd: process.cwd() });
                        gitCommit.on('close', (commitCode) => {
                            if (commitCode === 0) {
                                resolve();
                            } else {
                                reject(new Error(`Git commit failed with code ${commitCode}`));
                            }
                        });
                    } else {
                        reject(new Error(`Git add failed with code ${code}`));
                    }
                });
            });
            
            console.log('✅ Git-Commit erfolgreich erstellt');
            res.json({ success: true, message: 'Git-Commit erfolgreich erstellt' });
        } else {
            res.json({ success: true, message: 'Keine Änderungen für Git-Commit' });
        }
    } catch (error) {
        console.error('❌ Git-Fehler:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// === Main Route (Web Interface) ===
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// === Error Handling ===
app.use((err, req, res, next) => {
    console.error('❌ Server-Fehler:', err);
    res.status(500).json({ success: false, error: 'Interner Server-Fehler' });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Route nicht gefunden' });
});

// === SERVER START ===
app.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════════════════════════════════╗
║                    HIH-VERWALTUNG WEB SERVER GESTARTET                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  🌐 Web Interface: http://localhost:${PORT}                                      ║
║  📡 API Endpoint:  http://localhost:${PORT}/api                                  ║
║  🎯 Terminal UI:   Authentisches DOS-TUI im Browser                         ║
║                                                                              ║
║  ⌨️  F-Tasten Navigation aktiviert                                           ║
║  🎨 Pastel Dark Theme geladen                                                ║
║  📊 Services bereit: Kunden, Offerten, PDF-Export                           ║
║                                                                              ║
║  Bereit für Terminal-Style Web-Verwaltung! 🚀                               ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
    `);
});

export default app;