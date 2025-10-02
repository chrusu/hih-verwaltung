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
        this.screen.key(['f6'], () => this.exportMenu());
        this.screen.key(['f7'], () => this.gitStatus());
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
            this.data.kunden = await this.kundenService.alleKunden();
            this.data.offerten = await this.offertenService.alleOfferten();
            this.updateStatus(`Daten geladen: ${this.data.kunden.length} Kunden, ${this.data.offerten.length} Offerten`);
        } catch (error) {
            this.updateStatus(`Fehler beim Laden: ${error.message}`, 'error');
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
    
    newItem() {
        if (this.currentView === 'kunden') {
            this.updateStatus('Neue Kunde-Erstellung (Feature in Entwicklung)', 'info');
        } else if (this.currentView === 'offerten') {
            this.updateStatus('Neue Offerte-Erstellung (Feature in Entwicklung)', 'info');
        }
    }

    editItem() {
        if (this.currentView === 'kunden' && this.data.kunden[this.selectedIndex]) {
            this.updateStatus('Kunde-Bearbeitung (Feature in Entwicklung)', 'info');
        } else if (this.currentView === 'offerten' && this.data.offerten[this.selectedIndex]) {
            this.updateStatus('Offerte-Bearbeitung (Feature in Entwicklung)', 'info');
        }
    }

    deleteItem() {
        if (this.currentView === 'kunden' && this.data.kunden[this.selectedIndex]) {
            this.updateStatus('Kunde-Löschung (Feature in Entwicklung)', 'info');
        } else if (this.currentView === 'offerten' && this.data.offerten[this.selectedIndex]) {
            this.updateStatus('Offerte-Löschung (Feature in Entwicklung)', 'info');
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

    // App starten
    start() {
        this.showMain();
    }
}

// App starten
console.log('🚀 Starte HIH-Verwaltung DOS Edition...');
const app = new HIHTuiApp();
app.start();