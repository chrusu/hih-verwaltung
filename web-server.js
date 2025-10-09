#!/usr/bin/env node

/**
 * HIH-Verwaltung Web API Server
 * Express.js Backend für das Terminal Web Interface
 */

import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs/promises';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Services importieren
import { KundenService } from './src/services/kundenService.js';
import { OffertenService } from './src/services/offertenService.js';
import { RechnungenService } from './src/services/rechnungenService.js';
import { PdfExportService } from './src/services/pdfExportService.js';
import { FirmaService } from './src/services/firmaService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Services initialisieren
const kundenService = new KundenService('./data');
const offertenService = new OffertenService('./data');
const rechnungenService = new RechnungenService('./data');
const pdfExportService = new PdfExportService();
const firmaService = new FirmaService('./data');

// === MIDDLEWARE ===
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer für File-Uploads
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Static files für Web Interface
// Prüfen ob React-Build vorhanden ist, ansonsten fallback auf alte Web-Version
const reactBuildPath = path.join(__dirname, 'web-build');
const fallbackWebPath = path.join(__dirname, 'web');

try {
    await fs.access(reactBuildPath);
    console.log('🚀 Verwende React Build aus web-build/');
    app.use(express.static(reactBuildPath));
} catch {
    console.log('📁 React Build nicht gefunden, verwende legacy web/');
    app.use(express.static(fallbackWebPath));
}

// Logging Middleware
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleTimeString('de-CH');
    console.log(`🌐 ${timestamp} | ${req.method} ${req.path}`);
    next();
});

// === API ROUTES ===

// === Firma API ===
app.get('/api/firma', async (req, res) => {
    try {
        const firma = await firmaService.getFirma();
        
        // Logo & Unterschrift URLs hinzufügen
        const logoUrl = await firmaService.getLogoUrl();
        const signatureUrl = await firmaService.getSignatureUrl();
        
        res.json({ 
            success: true, 
            data: {
                ...firma,
                logoUrl,
                signatureUrl
            }
        });
    } catch (error) {
        console.error('❌ Fehler beim Laden der Firmendaten:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.put('/api/firma', upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'signature', maxCount: 1 }
]), async (req, res) => {
    try {
        // Firmendaten aus Body extrahieren
        const firmaData = { ...req.body };
        
        // Logo-Upload verarbeiten
        if (req.files && req.files.logo && req.files.logo[0]) {
            const logoFile = req.files.logo[0];
            await firmaService.uploadLogo(logoFile.buffer, logoFile.originalname);
            console.log(`📁 Logo hochgeladen: ${logoFile.originalname}`);
        }
        
        // Unterschrift-Upload verarbeiten
        if (req.files && req.files.signature && req.files.signature[0]) {
            const signatureFile = req.files.signature[0];
            await firmaService.uploadSignature(signatureFile.buffer, signatureFile.originalname);
            console.log(`✍️ Unterschrift hochgeladen: ${signatureFile.originalname}`);
        }
        
        // Firmendaten aktualisieren
        const firma = await firmaService.updateFirma(firmaData);
        
        // Logo & Unterschrift URLs hinzufügen
        const logoUrl = await firmaService.getLogoUrl();
        const signatureUrl = await firmaService.getSignatureUrl();
        
        console.log(`✅ Firmendaten aktualisiert`);
        res.json({ 
            success: true, 
            data: {
                ...firma,
                logoUrl,
                signatureUrl
            }
        });
    } catch (error) {
        console.error('❌ Fehler beim Aktualisieren der Firmendaten:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Firma Logo & Unterschrift abrufen
app.get('/api/firma/logo/:filename', async (req, res) => {
    try {
        const logoPath = await firmaService.getLogoPath();
        if (logoPath) {
            res.sendFile(logoPath);
        } else {
            res.status(404).json({ success: false, error: 'Logo nicht gefunden' });
        }
    } catch (error) {
        console.error('❌ Fehler beim Laden des Logos:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get('/api/firma/signature/:filename', async (req, res) => {
    try {
        const signaturePath = await firmaService.getSignaturePath();
        if (signaturePath) {
            res.sendFile(signaturePath);
        } else {
            res.status(404).json({ success: false, error: 'Unterschrift nicht gefunden' });
        }
    } catch (error) {
        console.error('❌ Fehler beim Laden der Unterschrift:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

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

// PDF direkt als Blob herunterladen (für Web Interface)
app.get('/api/offerten/:id/pdf', async (req, res) => {
    try {
        const offerte = await offertenService.getOfferte(req.params.id);
        if (!offerte) {
            return res.status(404).json({ success: false, error: 'Offerte nicht gefunden' });
        }
        
        console.log(`🔄 Generiere PDF für Offerte ${offerte.nummer}...`);
        const result = await pdfExportService.exportToPdf(offerte.nummer);
        
        // PDF-Datei lesen und als Blob senden
        const pdfBuffer = await fs.readFile(result.pdfPath);
        const filename = `offerte_${offerte.nummer}.pdf`;
        
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.setHeader('Content-Length', pdfBuffer.length);
        
        console.log(`✅ PDF gesendet: ${filename} (${pdfBuffer.length} bytes)`);
        res.send(pdfBuffer);
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

// === Rechnungen API ===
app.get('/api/rechnungen', async (req, res) => {
    try {
        const rechnungen = await rechnungenService.listRechnungen();
        res.json({ success: true, data: rechnungen });
    } catch (error) {
        console.error('❌ Fehler beim Laden der Rechnungen:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get('/api/rechnungen/:id', async (req, res) => {
    try {
        const rechnung = await rechnungenService.getRechnung(req.params.id);
        if (rechnung) {
            res.json({ success: true, data: rechnung });
        } else {
            res.status(404).json({ success: false, error: 'Rechnung nicht gefunden' });
        }
    } catch (error) {
        console.error('❌ Fehler beim Laden der Rechnung:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/rechnungen', async (req, res) => {
    try {
        const neueRechnung = await rechnungenService.createRechnung(req.body);
        console.log(`✅ Neue Rechnung erstellt: ${neueRechnung.nummer}`);
        res.status(201).json({ success: true, data: neueRechnung });
    } catch (error) {
        console.error('❌ Fehler beim Erstellen der Rechnung:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/rechnungen/from-offerte/:offerteId', async (req, res) => {
    try {
        const rechnung = await rechnungenService.createFromOfferte(req.params.offerteId);
        console.log(`✅ Rechnung aus Offerte erstellt: ${rechnung.nummer}`);
        res.status(201).json({ success: true, data: rechnung });
    } catch (error) {
        console.error('❌ Fehler beim Erstellen der Rechnung aus Offerte:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.put('/api/rechnungen/:id', async (req, res) => {
    try {
        const updatedRechnung = await rechnungenService.updateRechnung(req.params.id, req.body);
        console.log(`✅ Rechnung aktualisiert: ${updatedRechnung.nummer} (${updatedRechnung.id})`);
        res.json({ success: true, data: updatedRechnung });
    } catch (error) {
        console.error('❌ Fehler beim Aktualisieren der Rechnung:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.delete('/api/rechnungen/:id', async (req, res) => {
    try {
        await rechnungenService.deleteRechnung(req.params.id);
        console.log(`✅ Rechnung gelöscht: ${req.params.id}`);
        res.json({ success: true });
    } catch (error) {
        console.error('❌ Fehler beim Löschen der Rechnung:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get('/api/rechnungen/:rechnungId/positionen', async (req, res) => {
    try {
        const positionen = await rechnungenService.getPositionen(req.params.rechnungId);
        res.json({ success: true, data: positionen });
    } catch (error) {
        console.error('❌ Fehler beim Laden der Positionen:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/rechnungen/:rechnungId/positionen', async (req, res) => {
    try {
        const position = await rechnungenService.addPosition(req.params.rechnungId, req.body);
        console.log(`✅ Position zu Rechnung hinzugefügt`);
        res.status(201).json({ success: true, data: position });
    } catch (error) {
        console.error('❌ Fehler beim Hinzufügen der Position:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.put('/api/rechnungen/:rechnungId/positionen/:positionId', async (req, res) => {
    try {
        const position = await rechnungenService.updatePosition(req.params.rechnungId, req.params.positionId, req.body);
        console.log(`✅ Position aktualisiert`);
        res.json({ success: true, data: position });
    } catch (error) {
        console.error('❌ Fehler beim Aktualisieren der Position:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.delete('/api/rechnungen/:rechnungId/positionen/:positionId', async (req, res) => {
    try {
        await rechnungenService.deletePosition(req.params.rechnungId, req.params.positionId);
        console.log(`✅ Position gelöscht`);
        res.json({ success: true });
    } catch (error) {
        console.error('❌ Fehler beim Löschen der Position:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// PDF Export für Rechnungen (mit QR-Rechnung)
app.get('/api/rechnungen/:id/pdf', async (req, res) => {
    try {
        console.log(`🔄 Generiere PDF für Rechnung ${req.params.id}...`);
        
        const rechnung = await rechnungenService.getRechnung(req.params.id);
        if (!rechnung) {
            return res.status(404).json({ success: false, error: 'Rechnung nicht gefunden' });
        }

        // PDF mit QR-Rechnung generieren
        const result = await pdfExportService.exportRechnungPdf(rechnung.nummer);

        if (!result.success) {
            return res.status(500).json({ success: false, error: 'PDF-Generierung fehlgeschlagen' });
        }

        const filename = result.filename;
        const pdfPath = result.pdfPath;
        
        // PDF-Datei lesen und senden
        const pdfBuffer = await fs.readFile(pdfPath);
        
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.setHeader('Content-Length', pdfBuffer.length);
        
        res.send(pdfBuffer);
        
        console.log(`✅ PDF gesendet: ${filename} (${pdfBuffer.length} bytes)`);
    } catch (error) {
        console.error('❌ Fehler beim PDF-Export:', error);
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

// 404 Handler für unbekannte API-Routen
app.use('/api', (req, res) => {
    res.status(404).json({ success: false, error: 'API Route nicht gefunden' });
});

// SPA Fallback für React Router - muss am Ende stehen
app.get('/', async (req, res) => {
    const indexPath = path.join(__dirname, 'web-build', 'index.html');
    const fallbackIndexPath = path.join(__dirname, 'web', 'index.html');
    
    try {
        await fs.access(indexPath);
        res.sendFile(indexPath);
    } catch {
        try {
            await fs.access(fallbackIndexPath);
            res.sendFile(fallbackIndexPath);
        } catch {
            res.status(404).send('Index file not found');
        }
    }
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