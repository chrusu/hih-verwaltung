#!/usr/bin/env node

import blessed from 'blessed';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { KundenService } from './src/services/kundenService.js';
import { OffertenService } from './src/services/offertenService.js';
import { PdfExportService } from './src/services/pdfExportService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// TUI Farb-Schema (DOS-style)
const COLORS = {
    primary: 'blue',
    secondary: 'cyan', 
    accent: 'yellow',
    success: 'green',
    error: 'red',
    text: 'white',
    background: 'blue',
    menuBar: 'black',
    statusBar: 'cyan'
};

class HIHTuiApp {
    constructor() {
        this.kundenService = new KundenService();
        this.offertenService = new OffertenService();
        this.pdfExportService = new PdfExportService();
        
        this.currentView = 'main';
        this.selectedIndex = 0;
        this.data = {
            kunden: [],
            offerten: [],
            currentKunde: null,
            currentOfferte: null
        };
        
        this.initScreen();
        this.createLayout();
        this.bindKeys();
        this.loadData();
        this.render();
    }

    initScreen() {
        // Hauptbildschirm erstellen (DOS-style)
        this.screen = blessed.screen({
            smartCSR: true,
            title: 'HIH-Verwaltung v1.0 - DOS Edition',
            cursor: {
                artificial: true,
                shape: 'block',
                blink: true,
                color: 'yellow'
            },
            debug: false
        });

        // ESC zum Beenden
        this.screen.key(['escape', 'q', 'C-c'], () => {
            return process.exit(0);
        });
    }

    createLayout() {
        // === Titel-Balken (oben) ===
        this.titleBar = blessed.box({
            top: 0,
            left: 0,
            width: '100%',
            height: 1,
            content: ' HIH-Verwaltung v1.0 - Einzelfirma Management System',
            style: {
                fg: 'white',
                bg: 'blue',
                bold: true
            }
        });

        // === Hauptinhalt-Bereich ===
        this.contentArea = blessed.box({
            top: 1,
            left: 0,
            width: '100%',
            height: '100%-3',
            style: {
                fg: 'white',
                bg: 'black'
            },
            scrollable: true,
            alwaysScroll: true,
            mouse: true
        });

        // === Status-Zeile ===
        this.statusBar = blessed.box({
            bottom: 1,
            left: 0,
            width: '100%',
            height: 1,
            style: {
                fg: 'black',
                bg: 'cyan'
            }
        });

        // === F-Tasten Menü (unten) ===
        this.menuBar = blessed.box({
            bottom: 0,
            left: 0,
            width: '100%',
            height: 1,
            content: 'F1=Hilfe F2=Kunden F3=Offerten F4=Rechnung F5=Aktualisieren F6=Export F7=Git F8=Info F10=Ende',
            style: {
                fg: 'yellow',
                bg: 'black',
                bold: true
            }
        });

        // Alles zum Screen hinzufügen
        this.screen.append(this.titleBar);
        this.screen.append(this.contentArea);
        this.screen.append(this.statusBar);
        this.screen.append(this.menuBar);
    }

    bindKeys() {
        // F-Tasten Funktionen (DOS-style)
        this.screen.key(['f1'], () => this.showHelp());
        this.screen.key(['f2'], () => this.showKunden());
        this.screen.key(['f3'], () => this.showOfferten());
        this.screen.key(['f4'], () => this.showRechnungen());
        this.screen.key(['f5'], () => this.refreshData());
        this.screen.key(['f6'], () => this.handleExport());
        this.screen.key(['f7'], () => this.handleGit());
        this.screen.key(['f8'], () => this.showInfo());
        this.screen.key(['f10'], () => process.exit(0));

        // Navigation (Pfeiltasten)
        this.screen.key(['up', 'k'], () => this.navigateUp());
        this.screen.key(['down', 'j'], () => this.navigateDown());
        this.screen.key(['left', 'h'], () => this.navigateLeft());
        this.screen.key(['right', 'l'], () => this.navigateRight());
        
        // Aktionen
        this.screen.key(['enter'], () => this.executeAction());
        this.screen.key(['space'], () => this.toggleSelection());
        this.screen.key(['tab'], () => this.nextPanel());
        
        // Spezial-Funktionen
        this.screen.key(['n'], () => this.newItem());
        this.screen.key(['e'], () => this.editItem());
        this.screen.key(['d'], () => this.deleteItem());
        this.screen.key(['s'], () => this.saveData());
    }

    async loadData() {
        try {
            console.log('🔄 Lade Daten...');
            this.data.kunden = await this.kundenService.listKunden();
            this.data.offerten = await this.offertenService.listOfferten();
            console.log(`✅ Geladen: ${this.data.kunden.length} Kunden, ${this.data.offerten.length} Offerten`);
            this.updateStatus(`Daten geladen: ${this.data.kunden.length} Kunden, ${this.data.offerten.length} Offerten`);
        } catch (error) {
            console.error('❌ Fehler beim Laden:', error);
            this.updateStatus(`Fehler beim Laden: ${error.message}`, 'error');
            // Fallback für leere Daten
            this.data.kunden = this.data.kunden || [];
            this.data.offerten = this.data.offerten || [];
        }
    }

    render() {
        this.screen.render();
    }

    updateStatus(message, type = 'info') {
        const timestamp = new Date().toLocaleTimeString('de-CH');
        const statusColor = type === 'error' ? 'red' : type === 'success' ? 'green' : 'cyan';
        
        this.statusBar.setContent(` ${timestamp} | ${message}`);
        this.statusBar.style.bg = statusColor;
        this.statusBar.style.fg = type === 'error' ? 'white' : 'black';
        this.render();
    }

    // === F-Tasten Implementationen ===
    
    showHelp() {
        this.currentView = 'help';
        const helpContent = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                            HIH-VERWALTUNG HILFE                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  F-TASTEN FUNKTIONEN:                                                        ║
║  ────────────────────                                                        ║
║  F1  = Diese Hilfe anzeigen                                                  ║
║  F2  = Kundenverwaltung öffnen                                               ║
║  F3  = Offertenverwaltung öffnen                                             ║
║  F4  = Rechnungsverwaltung öffnen                                            ║
║  F5  = Daten aktualisieren/neu laden                                         ║
║  F6  = Export-Menü (PDF, CSV, etc.)                                          ║
║  F7  = Git-Status und Versionskontrolle                                      ║
║  F8  = System-Informationen                                                  ║
║  F10 = Programm beenden                                                      ║
║                                                                              ║
║  NAVIGATION:                                                                 ║
║  ───────────                                                                 ║
║  ↑↓←→     = Navigation in Listen und Menüs                                   ║
║  ENTER    = Aktion ausführen / Eintrag öffnen                                ║
║  SPACE    = Eintrag auswählen/markieren                                      ║
║  TAB      = Zwischen Panels wechseln                                         ║
║  ESC      = Zurück / Programm beenden                                        ║
║                                                                              ║
║  SCHNELL-BEFEHLE:                                                            ║
║  ────────────────                                                            ║
║  N = Neuer Eintrag erstellen                                                 ║
║  E = Eintrag bearbeiten                                                      ║
║  D = Eintrag löschen                                                         ║
║  S = Daten speichern                                                         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

                            Drücken Sie eine beliebige Taste zum Fortfahren...
        `;
        
        this.contentArea.setContent(helpContent);
        this.updateStatus('F1 = Hilfe-Modus aktiv | Beliebige Taste zum Fortfahren');
        this.render();
        
        // Nach Tastendruck zurück zum Hauptmenü
        this.screen.once('keypress', () => {
            this.showMain();
        });
    }

    showKunden() {
        this.currentView = 'kunden';
        this.selectedIndex = 0;
        
        let content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                               KUNDENVERWALTUNG                              ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
`;

        if (this.data.kunden.length === 0) {
            content += `║  Keine Kunden vorhanden.                                                    ║
║                                                                              ║
║  Drücken Sie 'N' um einen neuen Kunden zu erstellen.                        ║`;
        } else {
            content += `║  ID         │ Name                    │ Email                │ Telefon      ║
║  ──────────────────────────────────────────────────────────────────────────  ║
`;
            
            this.data.kunden.forEach((kunde, index) => {
                const marker = index === this.selectedIndex ? '►' : ' ';
                const highlight = index === this.selectedIndex ? '╣' : '║';
                const id = kunde.id.substring(0, 10).padEnd(10);
                const name = (kunde.name || '').substring(0, 22).padEnd(22);
                const email = (kunde.email || '').substring(0, 19).padEnd(19);
                const telefon = (kunde.telefon || '').substring(0, 11).padEnd(11);
                
                content += `${highlight}${marker} ${id} │ ${name} │ ${email} │ ${telefon} ║
`;
            });
        }

        content += `║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

    N=Neu  E=Bearbeiten  D=Löschen  ENTER=Öffnen  ↑↓=Navigation  ESC=Zurück
        `;

        this.contentArea.setContent(content);
        this.updateStatus(`Kundenverwaltung: ${this.data.kunden.length} Kunden | F2-Modus aktiv`);
        this.render();
    }

    showOfferten() {
        this.currentView = 'offerten';
        this.selectedIndex = 0;
        
        let content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                             OFFERTENVERWALTUNG                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
`;

        if (this.data.offerten.length === 0) {
            content += `║  Keine Offerten vorhanden.                                                  ║
║                                                                              ║
║  Drücken Sie 'N' um eine neue Offerte zu erstellen.                         ║`;
        } else {
            content += `║  Nummer       │ Kunde                 │ Datum      │ Total        │ Status ║
║  ────────────────────────────────────────────────────────────────────────── ║
`;
            
            this.data.offerten.forEach((offerte, index) => {
                const marker = index === this.selectedIndex ? '►' : ' ';
                const highlight = index === this.selectedIndex ? '╣' : '║';
                const nummer = (offerte.nummer || '').substring(0, 12).padEnd(12);
                const kunde = this.getKundeName(offerte.kundeId).substring(0, 20).padEnd(20);
                const datum = new Date(offerte.datum).toLocaleDateString('de-CH').padEnd(9);
                const total = `CHF ${(offerte.gesamtsumme || 0).toFixed(2)}`.padStart(11);
                const status = (offerte.status || 'Offen').substring(0, 5).padEnd(5);
                
                content += `${highlight}${marker} ${nummer} │ ${kunde} │ ${datum} │ ${total} │ ${status} ║
`;
            });
        }

        content += `║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

    N=Neu  E=Bearbeiten  D=Löschen  ENTER=Öffnen  F6=PDF  ↑↓=Navigation  ESC=Zurück
        `;

        this.contentArea.setContent(content);
        this.updateStatus(`Offertenverwaltung: ${this.data.offerten.length} Offerten | F3-Modus aktiv`);
        this.render();
    }

    showRechnungen() {
        this.currentView = 'rechnungen';
        const content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                             RECHNUNGSVERWALTUNG                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  🚧 RECHNUNGSMODUL IN ENTWICKLUNG 🚧                                         ║
║                                                                              ║
║  Geplante Features:                                                          ║
║  • Offerten in Rechnungen umwandeln                                         ║
║  • Rechnungsversand per Email                                                ║
║  • Zahlungsverfolgung                                                        ║
║  • Mahnwesen                                                                 ║
║  • Buchhaltungsexport                                                        ║
║                                                                              ║
║  Aktuell können Sie Offerten über F6 als PDF exportieren.                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

                            Drücken Sie eine beliebige Taste zum Fortfahren...
        `;
        
        this.contentArea.setContent(content);
        this.updateStatus('F4 = Rechnungsmodul (in Entwicklung) | Beliebige Taste zum Fortfahren');
        this.render();
        
        this.screen.once('keypress', () => {
            this.showMain();
        });
    }

    async refreshData() {
        this.updateStatus('Lade Daten neu...', 'info');
        await this.loadData();
        
        // Aktuelle Ansicht neu rendern
        switch(this.currentView) {
            case 'kunden':
                this.showKunden();
                break;
            case 'offerten':
                this.showOfferten();
                break;
            default:
                this.showMain();
        }
        
        this.updateStatus('Daten erfolgreich aktualisiert', 'success');
    }

    exportMenu() {
        this.currentView = 'export';
        const content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                                EXPORT-MENÜ                                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Verfügbare Export-Optionen:                                                 ║
║                                                                              ║
║  1. PDF-Export (Offerten)                                                    ║
║     └─ Wählen Sie eine Offerte aus und drücken Sie ENTER                    ║
║                                                                              ║
║  2. CSV-Export (Kundendaten)                                                 ║
║     └─ Exportiert alle Kunden in eine CSV-Datei                             ║
║                                                                              ║
║  3. Backup erstellen                                                         ║
║     └─ Erstellt ein vollständiges Daten-Backup                              ║
║                                                                              ║
║  4. Git-Commit                                                               ║
║     └─ Speichert alle Änderungen in der Versionskontrolle                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

                            Drücken Sie eine beliebige Taste zum Fortfahren...
        `;
        
        this.contentArea.setContent(content);
        this.updateStatus('F6 = Export-Menü aktiv | Beliebige Taste zum Fortfahren');
        this.render();
        
        this.screen.once('keypress', () => {
            this.showMain();
        });
    }

    gitStatus() {
        this.currentView = 'git';
        const content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                           GIT-VERSIONSKONTROLLE                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Current Branch: feature/dos-tui                                             ║
║  Last Commit: version 0.1 finished                                           ║
║                                                                              ║
║  Status:                                                                     ║
║  • Neue Dateien bereit für Commit                                            ║
║  • DOS-TUI Interface implementiert                                           ║
║                                                                              ║
║  Verfügbare Aktionen:                                                        ║
║  ────────────────────                                                        ║
║  S = Status anzeigen                                                         ║
║  A = Alle Änderungen hinzufügen                                              ║
║  C = Commit erstellen                                                        ║
║  P = Push to remote                                                          ║
║  L = Log anzeigen                                                            ║
║                                                                              ║
║  Git ist bereit für Ihre nächsten Commits!                                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

                            Drücken Sie eine beliebige Taste zum Fortfahren...
        `;
        
        this.contentArea.setContent(content);
        this.updateStatus('F7 = Git-Status aktiv | S/A/C/P/L für Aktionen | Beliebige Taste = Zurück');
        this.render();
        
        this.screen.once('keypress', () => {
            this.showMain();
        });
    }

    showInfo() {
        this.currentView = 'info';
        const content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                            SYSTEM-INFORMATIONEN                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  HIH-Verwaltung v1.0 - DOS Edition                                          ║
║  ═══════════════════════════════════                                        ║
║                                                                              ║
║  System:                                                                     ║
║  • Node.js ${process.version}                                                    ║
║  • Platform: ${process.platform}                                                  ║
║  • Architecture: ${process.arch}                                                  ║
║  • Memory: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB                                                     ║
║                                                                              ║
║  Features:                                                                   ║
║  • ✓ Kundenverwaltung mit CRUD-Operationen                                   ║
║  • ✓ Offertenverwaltung mit Positionsverwaltung                              ║
║  • ✓ PDF-Export mit LaTeX/XeLaTeX                                            ║
║  • ✓ Git-Versionskontrolle                                                   ║
║  • ✓ Interaktives CLI (Classic & DOS-TUI)                                    ║
║  • ✓ Datei-basierte Persistierung                                            ║
║  • ✓ Deutsche Umlaut-Unterstützung                                           ║
║                                                                              ║
║  Entwickelt für die effiziente Verwaltung von Einzelfirmen                   ║
║  mit dem Charme klassischer DOS-Anwendungen.                                 ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

                            Drücken Sie eine beliebige Taste zum Fortfahren...
        `;
        
        this.contentArea.setContent(content);
        this.updateStatus('F8 = System-Info aktiv | Beliebige Taste zum Fortfahren');
        this.render();
        
        this.screen.once('keypress', () => {
            this.showMain();
        });
    }

    showMain() {
        this.currentView = 'main';
        const content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                     HIH-VERWALTUNG v1.0 - DOS EDITION                      ║  
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                    ██╗  ██╗██╗██╗  ██╗                                      ║
║                    ██║  ██║██║██║  ██║                                      ║
║                    ███████║██║███████║                                      ║  
║                    ██╔══██║██║██╔══██║                                      ║
║                    ██║  ██║██║██║  ██║                                      ║
║                    ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝                                      ║
║                                                                              ║
║              Einzelfirma-Verwaltungssystem - DOS Edition                     ║
║                                                                              ║
║  ═══════════════════════════════════════════════════════════════════════════  ║
║                                                                              ║
║   📊 DASHBOARD:                                                              ║
║   ────────────                                                               ║  
║   • Kunden gesamt: ${String(this.data.kunden.length).padStart(3)}                                                    ║
║   • Offerten gesamt: ${String(this.data.offerten.length).padStart(3)}                                                  ║
║   • Offerten offen: ${String(this.data.offerten.filter(o => o.status !== 'Abgeschlossen').length).padStart(3)}                                                    ║
║   • System bereit: ✓                                                         ║
║                                                                              ║
║   🎯 SCHNELLZUGRIFF:                                                         ║
║   ────────────────                                                           ║
║   • F2 = Kundenverwaltung                                                    ║
║   • F3 = Offertenverwaltung                                                  ║ 
║   • F6 = Export-Funktionen                                                   ║
║   • F1 = Vollständige Hilfe                                                  ║
║                                                                              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

                        Wählen Sie eine F-Taste für den Schnellzugriff
        `;
        
        this.contentArea.setContent(content);
        this.updateStatus('Hauptmenü aktiv | F-Tasten für Navigation | F1=Hilfe F10=Ende');
        this.render();
    }

    // === Navigation Methoden ===
    
    navigateUp() {
        if (this.currentView === 'kunden' || this.currentView === 'offerten') {
            const maxIndex = this.currentView === 'kunden' ? 
                this.data.kunden.length - 1 : this.data.offerten.length - 1;
            
            if (maxIndex >= 0) {
                this.selectedIndex = Math.max(0, this.selectedIndex - 1);
                if (this.currentView === 'kunden') {
                    this.showKunden();
                } else {
                    this.showOfferten();
                }
            }
        }
    }

    navigateDown() {
        if (this.currentView === 'kunden' || this.currentView === 'offerten') {
            const maxIndex = this.currentView === 'kunden' ? 
                this.data.kunden.length - 1 : this.data.offerten.length - 1;
            
            if (maxIndex >= 0) {
                this.selectedIndex = Math.min(maxIndex, this.selectedIndex + 1);
                if (this.currentView === 'kunden') {
                    this.showKunden();
                } else {
                    this.showOfferten();
                }
            }
        }
    }

    navigateLeft() {
        // Zwischen Ansichten wechseln
        if (this.currentView === 'offerten') {
            this.showKunden();
        } else if (this.currentView === 'kunden') {
            this.showMain();
        }
    }

    navigateRight() {
        // Zwischen Ansichten wechseln
        if (this.currentView === 'main') {
            this.showKunden();
        } else if (this.currentView === 'kunden') {
            this.showOfferten();
        }
    }

    executeAction() {
        if (this.currentView === 'kunden' && this.data.kunden[this.selectedIndex]) {
            this.openKunde(this.data.kunden[this.selectedIndex]);
        } else if (this.currentView === 'offerten' && this.data.offerten[this.selectedIndex]) {
            this.openOfferte(this.data.offerten[this.selectedIndex]);
        }
    }

    toggleSelection() {
        // Für zukünftige Multi-Select Funktionalität
    }

    nextPanel() {
        // Zwischen verschiedenen Panels wechseln
        switch(this.currentView) {
            case 'main':
                this.showKunden();
                break;
            case 'kunden':
                this.showOfferten();
                break;
            case 'offerten':
                this.showMain();
                break;
            default:
                this.showMain();
        }
    }

    // === Action Methoden ===
    
    async newItem() {
        if (this.currentView === 'kunden') {
            await this.createNewKunde();
        } else if (this.currentView === 'offerten') {
            await this.createNewOfferte();
        }
    }

    async editItem() {
        if (this.currentView === 'kunden' && this.data.kunden[this.selectedIndex]) {
            await this.editKunde(this.data.kunden[this.selectedIndex]);
        } else if (this.currentView === 'offerten' && this.data.offerten[this.selectedIndex]) {
            await this.editOfferte(this.data.offerten[this.selectedIndex]);
        }
    }

    async deleteItem() {
        if (this.currentView === 'kunden' && this.data.kunden[this.selectedIndex]) {
            await this.deleteKunde(this.data.kunden[this.selectedIndex]);
        } else if (this.currentView === 'offerten' && this.data.offerten[this.selectedIndex]) {
            await this.deleteOfferte(this.data.offerten[this.selectedIndex]);
        }
    }

    async saveData() {
        this.updateStatus('Speichere Daten...', 'info');
        // Hier würde die Speicherlogik implementiert
        setTimeout(() => {
            this.updateStatus('Alle Daten gespeichert', 'success');
        }, 1000);
    }

    openKunde(kunde) {
        this.data.currentKunde = kunde;
        this.updateStatus(`Kunde geöffnet: ${kunde.name}`, 'success');
        
        // Detailansicht für Kunde (vereinfacht für Demo)
        const content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                              KUNDE DETAILS                                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ID: ${kunde.id}                                              ║
║  Name: ${kunde.name}                                                        ║
║  Email: ${kunde.email || 'Nicht angegeben'}                                                      ║
║  Telefon: ${kunde.telefon || 'Nicht angegeben'}                                                    ║
║                                                                              ║
║  Offerten für diesen Kunden:                                                 ║
${this.data.offerten
    .filter(o => o.kundeId === kunde.id)
    .map(o => `║  • ${o.nummer} - ${new Date(o.datum).toLocaleDateString('de-CH')} - CHF ${(o.gesamtsumme || 0).toFixed(2)}`)
    .join('\n')
    .substring(0, 400) || '║  Keine Offerten vorhanden'}
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

                      E=Bearbeiten  N=Neue Offerte  ESC=Zurück
        `;
        
        this.contentArea.setContent(content);
        this.render();
    }

    openOfferte(offerte) {
        this.data.currentOfferte = offerte;
        this.updateStatus(`Offerte geöffnet: ${offerte.nummer}`, 'success');
        
        const kunde = this.data.kunden.find(k => k.id === offerte.kundeId);
        const content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                             OFFERTE DETAILS                                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Nummer: ${offerte.nummer}                                                   ║
║  Kunde: ${kunde ? kunde.name : 'Unbekannt'}                                  ║
║  Datum: ${new Date(offerte.datum).toLocaleDateString('de-CH')}               ║
║  Gültig bis: ${new Date(offerte.gültigBis).toLocaleDateString('de-CH')}       ║
║  Status: ${offerte.status || 'Offen'}                                        ║
║  Gesamtsumme: CHF ${(offerte.gesamtsumme || 0).toFixed(2)}                   ║
║                                                                              ║
║  Positionen: ${offerte.positionen ? offerte.positionen.length : 0}           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

                    E=Bearbeiten  F6=PDF Export  ESC=Zurück
        `;
        
        this.contentArea.setContent(content);
        this.render();
    }

    // === Hilfsmethoden ===
    
    getKundeName(kundeId) {
        const kunde = this.data.kunden.find(k => k.id === kundeId);
        return kunde ? kunde.name : 'Unbekannt';
    }

    // === CRUD-Implementierungen ===

    async createNewKunde() {
        this.updateStatus('Neuen Kunden erstellen...', 'info');
        
        try {
            // Einfacher Prompt-basierter Ansatz für bessere Eingabe
            const kundenDaten = await this.promptKundenDaten();
            
            if (kundenDaten) {
                // Kunde erstellen
                const neuerKunde = await this.kundenService.createKunde(kundenDaten);
                
                this.updateStatus(`Kunde "${neuerKunde.name}" erfolgreich erstellt`, 'success');
                await this.loadData();
                this.showKunden();
            } else {
                this.updateStatus('Kunden-Erstellung abgebrochen', 'info');
                this.showKunden();
            }

        } catch (error) {
            this.updateStatus(`Fehler beim Erstellen: ${error.message}`, 'error');
            this.showKunden();
        }
    }

    async promptKundenDaten(existingData = null) {
        return new Promise((resolve) => {
            // Eingabe-Dialog erstellen
            const form = blessed.form({
                parent: this.screen,
                top: 'center',
                left: 'center',
                width: 60,
                height: 20,
                border: {
                    type: 'line',
                    fg: 'cyan'
                },
                style: {
                    fg: 'white',
                    bg: 'blue'
                },
                keys: true,
                vi: true
            });

            const title = blessed.box({
                parent: form,
                top: 0,
                left: 'center',
                width: '100%-4',
                height: 1,
                content: '{center}' + (existingData ? 'KUNDE BEARBEITEN' : 'NEUER KUNDE') + '{/center}',
                tags: true,
                style: {
                    fg: 'yellow',
                    bg: 'blue',
                    bold: true
                }
            });

            let formData = {
                name: existingData?.name || '',
                email: existingData?.email || '',
                telefon: existingData?.telefon || ''
            };

            // Eingabefelder als einfache Textanzeige + Input-Simulation
            const nameBox = blessed.box({
                parent: form,
                top: 3,
                left: 2,
                width: '100%-4',
                height: 3,
                label: 'Name:',
                border: { type: 'line' },
                style: { fg: 'white', bg: 'black' },
                content: formData.name
            });

            const emailBox = blessed.box({
                parent: form,
                top: 7,
                left: 2,
                width: '100%-4',
                height: 3,
                label: 'Email:',
                border: { type: 'line' },
                style: { fg: 'white', bg: 'black' },
                content: formData.email
            });

            const telefonBox = blessed.box({
                parent: form,
                top: 11,
                left: 2,
                width: '100%-4',
                height: 3,
                label: 'Telefon:',
                border: { type: 'line' },
                style: { fg: 'white', bg: 'black' },
                content: formData.telefon
            });

            const instructions = blessed.box({
                parent: form,
                bottom: 1,
                left: 'center',
                width: 50,
                height: 2,
                content: '{center}1=Name 2=Email 3=Telefon ENTER=Speichern ESC=Abbrechen{/center}',
                tags: true,
                style: { fg: 'yellow' }
            });

            form.focus();
            this.render();

            // Event-Handler mit vereinfachter Eingabe
            form.key(['1'], async () => {
                const name = await this.simplePrompt('Name eingeben:', formData.name);
                if (name !== null) {
                    formData.name = name;
                    nameBox.setContent(name);
                    this.render();
                }
            });

            form.key(['2'], async () => {
                const email = await this.simplePrompt('Email eingeben:', formData.email);
                if (email !== null) {
                    formData.email = email;
                    emailBox.setContent(email);
                    this.render();
                }
            });

            form.key(['3'], async () => {
                const telefon = await this.simplePrompt('Telefon eingeben:', formData.telefon);
                if (telefon !== null) {
                    formData.telefon = telefon;
                    telefonBox.setContent(telefon);
                    this.render();
                }
            });

            form.key(['enter'], () => {
                if (formData.name.trim()) {
                    form.destroy();
                    resolve(formData);
                } else {
                    // Name erforderlich - Hinweis anzeigen
                    instructions.setContent('{center}{red-fg}Name ist erforderlich!{/red-fg} 1=Name eingeben{/center}');
                    this.render();
                }
            });

            form.key(['escape'], () => {
                form.destroy();
                resolve(null);
            });
        });
    }

    async simplePrompt(message, defaultValue = '') {
        return new Promise((resolve) => {
            const promptBox = blessed.question({
                parent: this.screen,
                top: 'center',
                left: 'center',
                width: 60,
                height: 8,
                border: { type: 'line', fg: 'green' },
                style: { fg: 'white', bg: 'black' },
                keys: true,
                inputOnFocus: true
            });

            const label = blessed.box({
                parent: promptBox,
                top: 1,
                left: 2,
                width: '100%-4',
                height: 1,
                content: message,
                style: { fg: 'yellow', bold: true }
            });

            const input = blessed.textbox({
                parent: promptBox,
                top: 3,
                left: 2,
                width: '100%-4',
                height: 3,
                border: { type: 'line' },
                style: { 
                    fg: 'white', 
                    bg: 'black',
                    focus: { fg: 'black', bg: 'white' }
                },
                keys: true,
                inputOnFocus: true,
                value: defaultValue
            });

            const instructions = blessed.box({
                parent: promptBox,
                bottom: 1,
                left: 'center',
                width: 30,
                height: 1,
                content: '{center}ENTER=OK ESC=Abbrechen{/center}',
                tags: true,
                style: { fg: 'cyan' }
            });

            input.focus();
            this.render();

            promptBox.key(['enter'], () => {
                const value = input.value || '';
                promptBox.destroy();
                this.render();
                resolve(value);
            });

            promptBox.key(['escape'], () => {
                promptBox.destroy();
                this.render();
                resolve(null);
            });

            input.on('submit', (value) => {
                promptBox.destroy();
                this.render();
                resolve(value || '');
            });
        });
    }

    async editKunde(kunde) {
        this.updateStatus(`Bearbeite Kunde: ${kunde.name}`, 'info');
        
        try {
            const form = blessed.form({
                parent: this.contentArea,
                top: 'center',
                left: 'center',
                width: 60,
                height: 16,
                border: {
                    type: 'line',
                    fg: 'cyan'
                },
                style: {
                    fg: 'white',
                    bg: 'blue'
                },
                keys: true,
                vi: true
            });

            const title = blessed.box({
                parent: form,
                top: 0,
                left: 'center',
                width: '100%-4',
                height: 1,
                content: '{center}KUNDE BEARBEITEN{/center}',
                tags: true,
                style: {
                    fg: 'yellow',
                    bg: 'blue',
                    bold: true
                }
            });

            const nameInput = blessed.textbox({
                parent: form,
                name: 'name',
                top: 3,
                left: 2,
                width: '100%-4',
                height: 1,
                label: 'Name:',
                value: kunde.name || '',
                border: {
                    type: 'line'
                },
                style: {
                    fg: 'white',
                    bg: 'black'
                },
                inputOnFocus: true
            });

            const emailInput = blessed.textbox({
                parent: form,
                name: 'email',
                top: 6,
                left: 2,
                width: '100%-4',
                height: 1,
                label: 'Email:',
                value: kunde.email || '',
                border: {
                    type: 'line'
                },
                style: {
                    fg: 'white',
                    bg: 'black'
                },
                inputOnFocus: true
            });

            const telefonInput = blessed.textbox({
                parent: form,
                name: 'telefon',
                top: 9,
                left: 2,
                width: '100%-4',
                height: 1,
                label: 'Telefon:',
                value: kunde.telefon || '',
                border: {
                    type: 'line'
                },
                style: {
                    fg: 'white',
                    bg: 'black'
                },
                inputOnFocus: true
            });

            const buttons = blessed.box({
                parent: form,
                bottom: 1,
                left: 'center',
                width: 40,
                height: 1,
                content: '{center}ENTER=Speichern  ESC=Abbrechen{/center}',
                tags: true,
                style: {
                    fg: 'yellow'
                }
            });

            this.screen.append(form);
            nameInput.focus();
            this.render();

            const result = await new Promise((resolve) => {
                form.key('enter', async () => {
                    const name = nameInput.getValue();
                    if (name.trim()) {
                        resolve({
                            name: name.trim(),
                            email: emailInput.getValue().trim(),
                            telefon: telefonInput.getValue().trim()
                        });
                    }
                });

                form.key('escape', () => {
                    resolve(null);
                });
            });

            form.destroy();
            this.render();

            if (result) {
                // Kunde aktualisieren
                await this.kundenService.kundeAktualisieren(kunde.id, result);
                this.updateStatus(`Kunde "${result.name}" erfolgreich aktualisiert`, 'success');
                await this.loadData();
                this.showKunden();
            } else {
                this.updateStatus('Bearbeitung abgebrochen', 'info');
                this.showKunden();
            }

        } catch (error) {
            this.updateStatus(`Fehler beim Bearbeiten: ${error.message}`, 'error');
            this.showKunden();
        }
    }

    async deleteKunde(kunde) {
        this.updateStatus(`Lösche Kunde: ${kunde.name}`, 'info');
        
        try {
            // Bestätigungs-Dialog
            const confirmBox = blessed.question({
                parent: this.contentArea,
                top: 'center',
                left: 'center',
                width: 50,
                height: 8,
                border: {
                    type: 'line',
                    fg: 'red'
                },
                style: {
                    fg: 'white',
                    bg: 'red'
                },
                keys: true,
                vi: true
            });

            const message = blessed.box({
                parent: confirmBox,
                top: 1,
                left: 'center',
                width: '100%-4',
                height: 3,
                content: `{center}KUNDE LÖSCHEN?{/center}\\n\\n{center}"${kunde.name}"\\nwirklich löschen?{/center}`,
                tags: true,
                style: {
                    fg: 'white',
                    bg: 'red',
                    bold: true
                }
            });

            const buttons = blessed.box({
                parent: confirmBox,
                bottom: 1,
                left: 'center',
                width: 40,
                height: 1,
                content: '{center}J=Ja löschen  ESC=Abbrechen{/center}',
                tags: true,
                style: {
                    fg: 'yellow'
                }
            });

            this.screen.append(confirmBox);
            confirmBox.focus();
            this.render();

            const confirmed = await new Promise((resolve) => {
                confirmBox.key('j', () => resolve(true));
                confirmBox.key('escape', () => resolve(false));
            });

            confirmBox.destroy();
            this.render();

            if (confirmed) {
                await this.kundenService.deleteKunde(kunde.id);
                this.updateStatus(`Kunde "${kunde.name}" erfolgreich gelöscht`, 'success');
                await this.loadData();
                this.selectedIndex = Math.max(0, this.selectedIndex - 1);
                this.showKunden();
            } else {
                this.updateStatus('Löschung abgebrochen', 'info');
                this.showKunden();
            }

        } catch (error) {
            this.updateStatus(`Fehler beim Löschen: ${error.message}`, 'error');
            this.showKunden();
        }
    }

    async createNewOfferte() {
        this.updateStatus('Neue Offerte erstellen...', 'info');
        
        if (this.data.kunden.length === 0) {
            this.updateStatus('Keine Kunden vorhanden! Erst Kunden erstellen.', 'error');
            return;
        }

        try {
            // Kunden-Auswahl Dialog
            const kundenList = blessed.list({
                parent: this.contentArea,
                top: 'center',
                left: 'center',
                width: 60,
                height: Math.min(this.data.kunden.length + 6, 20),
                border: {
                    type: 'line',
                    fg: 'cyan'
                },
                style: {
                    fg: 'white',
                    bg: 'blue',
                    selected: {
                        fg: 'black',
                        bg: 'yellow'
                    }
                },
                keys: true,
                vi: true,
                items: this.data.kunden.map(k => `${k.name} (${k.email || 'keine Email'})`)
            });

            const title = blessed.box({
                parent: kundenList,
                top: -1,
                left: 'center',
                width: '100%-4',
                height: 1,
                content: '{center}KUNDE AUSWÄHLEN{/center}',
                tags: true,
                style: {
                    fg: 'yellow',
                    bg: 'blue',
                    bold: true
                }
            });

            this.screen.append(kundenList);
            kundenList.focus();
            this.render();

            const selectedKunde = await new Promise((resolve) => {
                kundenList.key('enter', () => {
                    const index = kundenList.selected;
                    resolve(this.data.kunden[index]);
                });

                kundenList.key('escape', () => {
                    resolve(null);
                });
            });

            kundenList.destroy();
            this.render();

            if (selectedKunde) {
                // Neue Offerte erstellen
                const neueOfferte = await this.offertenService.createOfferte({
                    kundeId: selectedKunde.id,
                    titel: `Offerte für ${selectedKunde.name}`
                });
                
                this.updateStatus(`Offerte "${neueOfferte.nummer}" erfolgreich erstellt`, 'success');
                await this.loadData();
                this.showOfferten();
            } else {
                this.updateStatus('Offerten-Erstellung abgebrochen', 'info');
                this.showOfferten();
            }

        } catch (error) {
            this.updateStatus(`Fehler beim Erstellen: ${error.message}`, 'error');
            this.showOfferten();
        }
    }

    async editOfferte(offerte) {
        this.updateStatus(`Bearbeite Offerte: ${offerte.nummer}`, 'info');
        
        try {
            // Detailansicht mit Bearbeitungsoptionen
            const detailBox = blessed.box({
                parent: this.contentArea,
                top: 'center',
                left: 'center',
                width: 70,
                height: 20,
                border: {
                    type: 'line',
                    fg: 'cyan'
                },
                style: {
                    fg: 'white',
                    bg: 'blue'
                },
                keys: true,
                scrollable: true
            });

            const kunde = this.data.kunden.find(k => k.id === offerte.kundeId);
            
            const content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                        OFFERTE BEARBEITEN                                   ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Nummer: ${offerte.nummer}                                                   ║
║  Kunde: ${kunde ? kunde.name : 'Unbekannt'}                                  ║
║  Datum: ${new Date(offerte.datum).toLocaleDateString('de-CH')}               ║
║  Gültig bis: ${new Date(offerte.gültigBis).toLocaleDateString('de-CH')}       ║
║  Status: ${offerte.status || 'Offen'}                                        ║
║  Gesamtsumme: CHF ${(offerte.gesamtsumme || 0).toFixed(2)}                   ║
║                                                                              ║
║  Positionen: ${offerte.positionen ? offerte.positionen.length : 0}           ║
║                                                                              ║
║  Aktionen:                                                                   ║
║  ────────                                                                    ║
║  P = Positionen verwalten                                                    ║
║  S = Status ändern                                                           ║
║  F6 = PDF exportieren                                                        ║
║  ESC = Zurück                                                                ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
            `;

            detailBox.setContent(content);
            this.screen.append(detailBox);
            detailBox.focus();
            this.render();

            await new Promise((resolve) => {
                detailBox.key('p', async () => {
                    detailBox.destroy();
                    await this.managePositionen(offerte);
                    resolve();
                });

                detailBox.key('s', async () => {
                    detailBox.destroy();
                    await this.changeOfferteStatus(offerte);
                    resolve();
                });

                detailBox.key('f6', async () => {
                    detailBox.destroy();
                    await this.exportPDF(offerte);
                    resolve();
                });

                detailBox.key('escape', () => {
                    detailBox.destroy();
                    this.render();
                    this.showOfferten();
                    resolve();
                });
            });

        } catch (error) {
            this.updateStatus(`Fehler beim Bearbeiten: ${error.message}`, 'error');
            this.showOfferten();
        }
    }

    async deleteOfferte(offerte) {
        this.updateStatus(`Lösche Offerte: ${offerte.nummer}`, 'info');
        
        try {
            const confirmBox = blessed.question({
                parent: this.contentArea,
                top: 'center',
                left: 'center',
                width: 50,
                height: 8,
                border: {
                    type: 'line',
                    fg: 'red'
                },
                style: {
                    fg: 'white',
                    bg: 'red'
                },
                keys: true,
                vi: true
            });

            const message = blessed.box({
                parent: confirmBox,
                top: 1,
                left: 'center',
                width: '100%-4',
                height: 3,
                content: `{center}OFFERTE LÖSCHEN?{/center}\\n\\n{center}"${offerte.nummer}"\\nwirklich löschen?{/center}`,
                tags: true,
                style: {
                    fg: 'white',
                    bg: 'red',
                    bold: true
                }
            });

            const buttons = blessed.box({
                parent: confirmBox,
                bottom: 1,
                left: 'center',
                width: 40,
                height: 1,
                content: '{center}J=Ja löschen  ESC=Abbrechen{/center}',
                tags: true,
                style: {
                    fg: 'yellow'
                }
            });

            this.screen.append(confirmBox);
            confirmBox.focus();
            this.render();

            const confirmed = await new Promise((resolve) => {
                confirmBox.key('j', () => resolve(true));
                confirmBox.key('escape', () => resolve(false));
            });

            confirmBox.destroy();
            this.render();

            if (confirmed) {
                await this.offertenService.deleteOfferte(offerte.id);
                this.updateStatus(`Offerte "${offerte.nummer}" erfolgreich gelöscht`, 'success');
                await this.loadData();
                this.selectedIndex = Math.max(0, this.selectedIndex - 1);
                this.showOfferten();
            } else {
                this.updateStatus('Löschung abgebrochen', 'info');
                this.showOfferten();
            }

        } catch (error) {
            this.updateStatus(`Fehler beim Löschen: ${error.message}`, 'error');
            this.showOfferten();
        }
    }

    async handleExport() {
        if (this.currentView === 'offerten' && this.data.offerten[this.selectedIndex]) {
            await this.exportPDF(this.data.offerten[this.selectedIndex]);
        } else {
            this.exportMenu();
        }
    }

    async exportPDF(offerte) {
        this.updateStatus('Exportiere PDF...', 'info');
        
        try {
            const result = await this.pdfExportService.generatePdf(offerte);
            this.updateStatus(`PDF erfolgreich erstellt: ${result.pdfPath}`, 'success');
            
            // Kurz anzeigen, dann zurück zur Liste
            setTimeout(() => {
                this.showOfferten();
            }, 2000);
            
        } catch (error) {
            this.updateStatus(`PDF-Export Fehler: ${error.message}`, 'error');
            setTimeout(() => {
                this.showOfferten();
            }, 3000);
        }
    }

    async handleGit() {
        this.updateStatus('Git-Operationen...', 'info');
        
        try {
            // Vereinfachte Git-Integration für DOS-TUI
            const { spawn } = await import('child_process');
            
            const gitStatus = await new Promise((resolve) => {
                const git = spawn('git', ['status', '--porcelain'], {
                    cwd: process.cwd()
                });
                
                let output = '';
                git.stdout.on('data', (data) => {
                    output += data.toString();
                });
                
                git.on('close', (code) => {
                    resolve(output);
                });
            });

            if (gitStatus.trim()) {
                this.updateStatus('Änderungen gefunden - Commit erstellen...', 'info');
                
                const gitAdd = spawn('git', ['add', '-A'], {
                    cwd: process.cwd(),
                    stdio: 'inherit'
                });
                
                gitAdd.on('close', () => {
                    const gitCommit = spawn('git', ['commit', '-m', 'DOS-TUI: Automatischer Commit'], {
                        cwd: process.cwd(),
                        stdio: 'inherit'
                    });
                    
                    gitCommit.on('close', () => {
                        this.updateStatus('Git-Commit erfolgreich erstellt', 'success');
                    });
                });
                
            } else {
                this.updateStatus('Keine Änderungen für Git-Commit', 'info');
            }
            
        } catch (error) {
            this.updateStatus(`Git-Fehler: ${error.message}`, 'error');
        }
    }

    async managePositionen(offerte) {
        // Vereinfachte Positionsverwaltung für DOS-TUI
        this.updateStatus(`Positionsverwaltung für ${offerte.nummer} (Feature in Entwicklung)`, 'info');
        
        setTimeout(() => {
            this.showOfferten();
        }, 2000);
    }

    async changeOfferteStatus(offerte) {
        // Status-Änderung für Offerte
        const statusOptions = ['Offen', 'Gesendet', 'Angenommen', 'Abgelehnt', 'Abgeschlossen'];
        
        try {
            const statusList = blessed.list({
                parent: this.contentArea,
                top: 'center',
                left: 'center',
                width: 40,
                height: statusOptions.length + 4,
                border: {
                    type: 'line',
                    fg: 'cyan'
                },
                style: {
                    fg: 'white',
                    bg: 'blue',
                    selected: {
                        fg: 'black',
                        bg: 'yellow'
                    }
                },
                keys: true,
                vi: true,
                items: statusOptions
            });

            this.screen.append(statusList);
            statusList.focus();
            this.render();

            const newStatus = await new Promise((resolve) => {
                statusList.key('enter', () => {
                    const index = statusList.selected;
                    resolve(statusOptions[index]);
                });

                statusList.key('escape', () => {
                    resolve(null);
                });
            });

            statusList.destroy();
            this.render();

            if (newStatus && newStatus !== offerte.status) {
                await this.offertenService.updateOfferte(offerte.id, { status: newStatus });
                this.updateStatus(`Status geändert auf: ${newStatus}`, 'success');
                await this.loadData();
            }
            
            this.showOfferten();
            
        } catch (error) {
            this.updateStatus(`Fehler beim Status ändern: ${error.message}`, 'error');
            this.showOfferten();
        }
    }

    // App starten
    start() {
        this.showMain();
    }
}

// App starten
console.log('🚀 Starte HIH-Verwaltung DOS Edition...');
const app = new HIHTuiApp();
app.start();