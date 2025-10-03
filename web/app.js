/**
 * HIH-Verwaltung Web Terminal Edition
 * Frontend JavaScript für DOS-TUI inspirierte Navigation
 */

class HIHTerminalWeb {
    constructor() {
        console.log('HIHTerminalWeb constructor called');
        this.currentScreen = 'startup';
        this.selectedIndex = 0;
        this.isModalInEditMode = false;
        this.data = {
            kunden: [],
            offerten: []
        };
        
        console.log('Calling init()');
        this.init();
    }

    async init() {
        this.setupEventListeners();
        this.startClock();
        await this.loadData();
        this.updateDashboard();
        this.updateStatus('System bereit - F-Tasten für Navigation');
    }

    // === EVENT LISTENERS ===
    setupEventListeners() {
        console.log('Setting up event listeners');
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        console.log('Keydown event listener added');
        
        // Additional F6 capture attempts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F6' || e.code === 'F6') {
                console.log('F6 CAPTURED in secondary listener');
                e.preventDefault();
                e.stopPropagation();
                this.exportMenu();
                return false;
            }
        }, true); // Use capture phase
        
        // Also try keyup for F6
        document.addEventListener('keyup', (e) => {
            if (e.key === 'F6' || e.code === 'F6') {
                console.log('F6 CAPTURED in keyup');
                e.preventDefault();
                this.exportMenu();
                return false;
            }
        });
        
        // Menu Bar Clicks (Desktop + Mobile)
        document.querySelectorAll('.menu-item, .btn-key').forEach(item => {
            item.addEventListener('click', () => {
                const key = item.dataset.key;
                this.handleFunctionKey(key);
            });
        });

        // Modal Events
        document.getElementById('modalSave').addEventListener('click', () => this.handleModalSave());
        document.getElementById('modalCancel').addEventListener('click', () => this.closeModal());
        
        // Click outside modal to close
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                this.closeModal();
            }
        });
    }

    // === KEYBOARD HANDLING ===
    handleKeyPress(e) {
        console.log('KEY PRESSED:', e.key, 'Code:', e.code, 'Target:', e.target.tagName);
        
        // Special handling for F6 - browser often captures this
        if (e.key === 'F6' || e.code === 'F6') {
            console.log('F6 DETECTED - preventing browser default');
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            this.handleFunctionKey('F6');
            return false;
        }
        
        // Check if we're in an input field
        const isInInput = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.contentEditable === 'true';
        
        // Skip navigation if we're typing in an input field
        if (isInInput) {
            // Only handle ESC and actual function keys (not letters) in input fields
            if (e.key === 'Escape') {
                e.preventDefault();
                this.handleEscape();
            }
            // Only handle actual F-Keys (F1, F2, etc.) not regular letters
            else if (e.key.match(/^F\d+$/)) {
                e.preventDefault();
                this.handleFunctionKey(e.key);
            }
            // Let all other keys (including F, Shift+F, etc.) pass through for normal typing
            return;
        }
        
        // F-Tasten (F1-F12) - handle when NOT in input field
        if (e.key.match(/^F\d+$/)) {
            console.log('F-Key detected:', e.key, 'preventDefault called');
            e.preventDefault();
            e.stopPropagation();
            this.handleFunctionKey(e.key);
            return;
        }

        // Navigation und Aktionen (nur wenn nicht in Input-Feld)
        switch (e.key) {
            case 'ArrowUp':
                e.preventDefault();
                this.navigateUp();
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.navigateDown();
                break;
            case 'Enter':
                console.log('ENTER KEY - calling executeAction()');
                e.preventDefault();
                this.executeAction();
                break;
            case 'Escape':
                e.preventDefault();
                this.handleEscape();
                break;
            case 'n':
            case 'N':
                if (!this.isModalOpen()) {
                    e.preventDefault();
                    this.newItem();
                }
                break;
            case 'e':
            case 'E':
                if (!this.isModalOpen()) {
                    e.preventDefault();
                    this.editItem();
                }
                break;
            case 'd':
            case 'D':
                if (!this.isModalOpen()) {
                    e.preventDefault();
                    this.deleteItem();
                }
                break;
            case 'p':
            case 'P':
                // Alternative zu F6 für PDF-Export
                if (!this.isModalOpen()) {
                    console.log('P KEY - Alternative PDF export');
                    e.preventDefault();
                    this.exportMenu();
                }
                break;
        }
    }

    handleFunctionKey(key) {
        console.log('FUNCTION KEY CALLED:', key);
        // Visual feedback
        this.highlightMenuKey(key);
        
        switch (key) {
            case 'F1':
                this.showHelp();
                break;
            case 'F2':
                this.showKunden();
                break;
            case 'F3':
                this.showOfferten();
                break;
            case 'F4':
                this.showRechnungen();
                break;
            case 'F5':
                this.refreshData();
                break;
            case 'F6':
                console.log('F6 KEY - calling exportMenu()');
                this.exportMenu();
                break;
            case 'F7':
                this.gitStatus();
                break;
            case 'F8':
                this.showInfo();
                break;
            case 'F10':
                this.confirmExit();
                break;
        }
    }

    highlightMenuKey(key) {
        // Visual feedback für F-Tasten
        const menuItem = document.querySelector(`[data-key="${key}"]`);
        if (menuItem) {
            menuItem.classList.add('active');
            setTimeout(() => menuItem.classList.remove('active'), 200);
        }
    }

    // === SCREEN MANAGEMENT ===
    showScreen(screenName) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
        
        // Show requested screen
        const screen = document.getElementById(`${screenName}Screen`);
        if (screen) {
            screen.classList.remove('hidden');
            this.currentScreen = screenName;
            this.selectedIndex = 0;
        }
    }

    // === F-KEY FUNCTIONS ===
    showHelp() {
        this.updateStatus('F1 = Hilfe-System (Feature in Entwicklung)');
        this.showModal('HILFE-SYSTEM', `
            <pre class="help-text">
╔══════════════════════════════════════════════════════════════════════════════╗
║                            HIH-VERWALTUNG HILFE                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  F-TASTEN FUNKTIONEN:                                                        ║
║  ────────────────────                                                        ║
║  F1  = Diese Hilfe anzeigen                                                  ║
║  F2  = Kundenverwaltung öffnen                                               ║
║  F3  = Offertenverwaltung öffnen                                             ║
║  F5  = Daten aktualisieren/neu laden                                         ║
║  F6  = Export-Menü (PDF, CSV, etc.)                                          ║
║  F8  = System-Informationen                                                  ║
║  F10 = Programm beenden                                                      ║
║                                                                              ║
║  NAVIGATION:                                                                 ║
║  ───────────                                                                 ║
║  ↑↓       = Navigation in Listen                                             ║
║  ENTER    = Aktion ausführen / Eintrag öffnen                                ║
║  ESC      = Zurück / Dialog schließen                                        ║
║                                                                              ║
║  SCHNELL-BEFEHLE:                                                            ║
║  ────────────────                                                            ║
║  N = Neuer Eintrag erstellen                                                 ║
║  E = Eintrag bearbeiten                                                      ║
║  D = Eintrag löschen                                                         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
            </pre>
        `, 'normal', 'readonly');
    }

    showKunden() {
        this.showScreen('kunden');
        this.renderKundenTable();
        this.updateStatus(`Kundenverwaltung: ${this.data.kunden.length} Kunden | F2-Modus aktiv`);
    }

    showOfferten() {
        this.showScreen('offerten');
        this.renderOffertenTable();
        this.updateStatus(`Offertenverwaltung: ${this.data.offerten.length} Offerten | F3-Modus aktiv`);
    }

    showRechnungen() {
        this.updateStatus('F4 = Rechnungsmodul (in Entwicklung)');
    }

    async refreshData() {
        this.updateStatus('Lade Daten neu...', 'info');
        await this.loadData();
        this.updateDashboard();
        
        // Current screen refresh
        if (this.currentScreen === 'kunden') {
            this.renderKundenTable();
        } else if (this.currentScreen === 'offerten') {
            this.renderOffertenTable();
        }
        
        this.updateStatus('Daten erfolgreich aktualisiert', 'success');
    }

    async exportMenu() {
        if (this.currentScreen === 'offerten') {
            const data = this.getCurrentData();
            if (data.length > 0 && data[this.selectedIndex]) {
                const offerte = data[this.selectedIndex];
                await this.exportOffertePdf(offerte);
            } else {
                this.updateStatus('Keine Offerte ausgewählt für PDF-Export', 'warning');
            }
        } else {
            this.updateStatus('PDF-Export nur für Offerten verfügbar', 'info');
        }
    }

    async exportOffertePdf(offerte) {
        try {
            this.updateStatus(`Erstelle PDF für ${offerte.nummer}...`, 'info');
            
            const response = await this.apiCall(`/api/export/pdf/${offerte.id}`, {
                method: 'POST'
            });
            
            if (response.success) {
                this.updateStatus(`PDF erfolgreich erstellt: ${response.data?.filename || 'pdf'}`, 'success');
                
                // Starte Download direkt
                const pdfUrl = `/api/export/pdf/${offerte.id}/download`;
                
                // Erstelle temporären Download-Link
                const downloadLink = document.createElement('a');
                downloadLink.href = pdfUrl;
                downloadLink.download = `offerte_${offerte.nummer}.pdf`;
                downloadLink.style.display = 'none';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
            } else {
                throw new Error(response.error || 'PDF-Erstellung fehlgeschlagen');
            }
            
        } catch (error) {
            console.error('PDF-Export Fehler:', error);
            this.updateStatus(`PDF-Export fehlgeschlagen: ${error.message}`, 'error');
        }
    }

    gitStatus() {
        this.updateStatus('F7 = Git-Status (Feature in Entwicklung)');
    }

    showInfo() {
        this.showModal('SYSTEM-INFORMATIONEN', `
            <pre class="info-text">
╔══════════════════════════════════════════════════════════════════════════════╗
║                            SYSTEM-INFORMATIONEN                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  HIH-Verwaltung v1.0 - Web Terminal Edition                                 ║
║  ═══════════════════════════════════════════════                           ║
║                                                                              ║
║  Browser: ${navigator.userAgent.split(' ')[0]}                                ║
║  Platform: ${navigator.platform}                                              ║
║  Language: ${navigator.language}                                               ║
║  Screen: ${screen.width}x${screen.height}                                     ║
║                                                                              ║
║  Features:                                                                   ║
║  • ✓ Terminal-Style Web Interface                                            ║
║  • ✓ F-Tasten Navigation                                                     ║
║  • ✓ Responsive Design                                                       ║
║  • ✓ Pastel Dark Theme                                                       ║
║  • ✓ Monospace Typography                                                    ║
║                                                                              ║
║  Web Edition des beliebten DOS-TUI Verwaltungssystems                       ║
║  für moderne Browser mit klassischer Terminal-Ästhetik.                     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
            </pre>
        `, 'normal', 'readonly');
    }

    async showOffertenDetail(offerte) {
        try {
            this.updateStatus('Lade Offerte-Details...', 'info');
            // Lade Positionen für diese Offerte
            const positionenResponse = await this.apiCall(`/api/offerten/${offerte.id}/positionen`);
            const positionen = positionenResponse.data || [];
            
            // Berechne Gesamtsumme - Position.gesamtpreis korrekt berechnen
            const subtotal = positionen.reduce((sum, pos) => {
                // Berechne gesamtpreis wie in der Offertposition Klasse
                const menge = parseFloat(pos.menge) || 0;
                const einzelpreis = parseFloat(pos.einzelpreis) || 0;
                const rabatt = parseFloat(pos.rabatt) || 0;
                
                const bruttoPreis = menge * einzelpreis;
                const gesamtpreis = bruttoPreis - (bruttoPreis * rabatt / 100);
                
                return sum + gesamtpreis;
            }, 0);
            
            const mwst = subtotal * (offerte.mwstSatz || 7.7) / 100;
            const total = subtotal + mwst;
            
            const kunde = this.data.kunden.find(k => k.id === offerte.kundeId);
            
            const detailHtml = `
                <div class="offerte-detail">
                    <div class="detail-header">
                        <div class="detail-info">
                            <h4>${offerte.titel}</h4>
                            <p><strong>Nummer:</strong> ${offerte.nummer}</p>
                            <p><strong>Kunde:</strong> ${kunde ? kunde.name : 'Unbekannt'}</p>
                            <p><strong>Status:</strong> <span class="status-badge status-${offerte.status}">${offerte.status}</span></p>
                            <p><strong>Datum:</strong> ${new Date(offerte.datum).toLocaleDateString('de-CH')}</p>
                            <p><strong>Gültig bis:</strong> ${new Date(offerte.gültigBis).toLocaleDateString('de-CH')}</p>
                        </div>
                        <div class="detail-actions">
                            <button class="btn btn-secondary" onclick="hihApp.showOffertenForm(hihApp.data.offerten[hihApp.selectedIndex])">✏️ Bearbeiten</button>
                            <button class="btn btn-primary" onclick="hihApp.exportOffertePdf(hihApp.data.offerten[hihApp.selectedIndex])">📄 PDF</button>
                        </div>
                    </div>
                    
                    <div class="positionen-section">
                        <div class="section-header">
                            <h5>Positionen</h5>
                            <button class="btn btn-small btn-primary" onclick="hihApp.showPositionForm('${offerte.id}')">+ Position</button>
                        </div>
                        
                        <div class="positionen-table-container">
                            <table class="positionen-table">
                                <thead>
                                    <tr>
                                        <th>Pos.</th>
                                        <th>Beschreibung</th>
                                        <th>Menge</th>
                                        <th>Einheit</th>
                                        <th>Einzelpreis</th>
                                        <th>Rabatt</th>
                                        <th>Gesamt</th>
                                        <th>Aktionen</th>
                                    </tr>
                                </thead>
                                <tbody id="positionenTableBody">
                                                                        ${positionen.map(pos => {
                                        // Berechne korrekten Gesamtpreis
                                        const menge = parseFloat(pos.menge) || 0;
                                        const einzelpreis = parseFloat(pos.einzelpreis) || 0;
                                        const rabatt = parseFloat(pos.rabatt) || 0;
                                        const bruttoPreis = menge * einzelpreis;
                                        const gesamtpreis = bruttoPreis - (bruttoPreis * rabatt / 100);
                                        
                                        return `
                                        <tr data-position-id="${pos.id}">
                                            <td>${pos.position}</td>
                                            <td>${pos.beschreibung}</td>
                                            <td>${menge}</td>
                                            <td>${pos.einheit}</td>
                                            <td>CHF ${einzelpreis.toFixed(2)}</td>
                                            <td>${rabatt}%</td>
                                            <td>CHF ${gesamtpreis.toFixed(2)}</td>
                                            <td>
                                                <button class="btn btn-tiny btn-secondary" onclick="hihApp.editPosition('${pos.id}', '${offerte.id}')">✏️</button>
                                                <button class="btn btn-tiny btn-danger" onclick="hihApp.deletePosition('${pos.id}', '${offerte.id}')">🗑️</button>
                                            </td>
                                        </tr>
                                        `;
                                    }).join('')}
                                </tbody>
                            </table>
                            ${positionen.length === 0 ? '<p class="empty-message">Keine Positionen vorhanden. Klicken Sie "+ Position" um eine hinzuzufügen.</p>' : ''}
                        </div>
                        
                        <div class="totals-section">
                            <div class="totals-row">
                                <span>Subtotal:</span>
                                <span>CHF ${subtotal.toFixed(2)}</span>
                            </div>
                            <div class="totals-row">
                                <span>MwSt (${offerte.mwstSatz}%):</span>
                                <span>CHF ${mwst.toFixed(2)}</span>
                            </div>
                            <div class="totals-row total-row">
                                <span><strong>Total:</strong></span>
                                <span><strong>CHF ${total.toFixed(2)}</strong></span>
                            </div>
                        </div>
                    </div>
                    
                    ${offerte.beschreibung ? `
                        <div class="beschreibung-section">
                            <h5>Beschreibung</h5>
                            <p>${offerte.beschreibung}</p>
                        </div>
                    ` : ''}
                </div>
            `;
            
            this.showModal(`Offerte ${offerte.nummer}`, detailHtml, 'large', 'readonly');
            
        } catch (error) {
            console.error('Fehler beim Laden der Offerte-Details:', error);
            this.updateStatus('Fehler beim Laden der Details', 'error');
        }
    }

    // === POSITIONEN MANAGEMENT ===
    showPositionForm(offerteId, position = null) {
        const isEdit = position !== null;
        const title = isEdit ? 'POSITION BEARBEITEN' : 'NEUE POSITION';
        
        const formHtml = `
            <div class="form-group">
                <label class="form-label">Beschreibung:</label>
                <input type="text" class="form-input" id="positionBeschreibung" value="${position?.beschreibung || ''}" required>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Menge:</label>
                    <input type="number" class="form-input" id="positionMenge" value="${position?.menge || 1}" min="0" step="0.01" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Einheit:</label>
                    <select class="form-input" id="positionEinheit">
                        <option value="Stk" ${position?.einheit === 'Stk' ? 'selected' : ''}>Stück</option>
                        <option value="Std" ${position?.einheit === 'Std' ? 'selected' : ''}>Stunden</option>
                        <option value="Tag" ${position?.einheit === 'Tag' ? 'selected' : ''}>Tage</option>
                        <option value="kg" ${position?.einheit === 'kg' ? 'selected' : ''}>Kilogramm</option>
                        <option value="m" ${position?.einheit === 'm' ? 'selected' : ''}>Meter</option>
                        <option value="m²" ${position?.einheit === 'm²' ? 'selected' : ''}>Quadratmeter</option>
                        <option value="Pauschal" ${position?.einheit === 'Pauschal' ? 'selected' : ''}>Pauschal</option>
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Einzelpreis (CHF):</label>
                    <input type="number" class="form-input" id="positionEinzelpreis" value="${position?.einzelpreis || 0}" min="0" step="0.01" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Rabatt (%):</label>
                    <input type="number" class="form-input" id="positionRabatt" value="${position?.rabatt || 0}" min="0" max="100" step="0.1">
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">Kategorie:</label>
                <input type="text" class="form-input" id="positionKategorie" value="${position?.kategorie || ''}" placeholder="z.B. Entwicklung, Design, Beratung">
            </div>
            
            <input type="hidden" id="positionOfferteId" value="${offerteId}">
            <input type="hidden" id="positionId" value="${position?.id || ''}">
        `;
        
        this.showModal(title, formHtml);
        
        setTimeout(() => {
            document.getElementById('positionBeschreibung').focus();
        }, 100);
    }

    async savePosition() {
        const offerteId = document.getElementById('positionOfferteId').value;
        const positionId = document.getElementById('positionId').value;
        const beschreibung = document.getElementById('positionBeschreibung').value.trim();
        const menge = parseFloat(document.getElementById('positionMenge').value);
        const einheit = document.getElementById('positionEinheit').value;
        const einzelpreis = parseFloat(document.getElementById('positionEinzelpreis').value);
        const rabatt = parseFloat(document.getElementById('positionRabatt').value) || 0;
        const kategorie = document.getElementById('positionKategorie').value.trim();
        
        if (!beschreibung) {
            this.updateStatus('Beschreibung ist erforderlich!', 'error');
            document.getElementById('positionBeschreibung').focus();
            return;
        }
        
        if (isNaN(menge) || menge <= 0) {
            this.updateStatus('Menge muss größer als 0 sein!', 'error');
            document.getElementById('positionMenge').focus();
            return;
        }
        
        if (isNaN(einzelpreis) || einzelpreis < 0) {
            this.updateStatus('Einzelpreis muss 0 oder größer sein!', 'error');
            document.getElementById('positionEinzelpreis').focus();
            return;
        }
        
        try {
            this.updateStatus('Speichere Position...', 'info');
            
            const positionData = {
                beschreibung,
                menge,
                einheit,
                einzelpreis,
                rabatt,
                kategorie
            };
            
            const isEdit = positionId && positionId !== '';
            
            if (isEdit) {
                await this.apiCall(`/api/offerten/${offerteId}/positionen/${positionId}`, {
                    method: 'PUT',
                    body: JSON.stringify(positionData)
                });
                this.updateStatus('Position erfolgreich aktualisiert', 'success');
            } else {
                await this.apiCall(`/api/offerten/${offerteId}/positionen`, {
                    method: 'POST',
                    body: JSON.stringify(positionData)
                });
                this.updateStatus('Position erfolgreich erstellt', 'success');
            }
            
            this.closeModal();
            
            // Offerte-Detail neu laden
            const offerte = this.data.offerten.find(o => o.id === offerteId);
            if (offerte) {
                await this.showOffertenDetail(offerte);
            }
            
        } catch (error) {
            console.error('Fehler beim Speichern der Position:', error);
            this.updateStatus(`Fehler beim Speichern: ${error.message}`, 'error');
        }
    }

    async editPosition(positionId, offerteId) {
        try {
            // Position-Daten laden (vereinfacht - aus dem DOM holen)
            const row = document.querySelector(`tr[data-position-id="${positionId}"]`);
            if (!row) {
                this.updateStatus('Position nicht gefunden', 'error');
                return;
            }
            
            // Daten aus der Tabelle extrahieren (vereinfacht)
            const cells = row.querySelectorAll('td');
            const position = {
                id: positionId,
                position: parseInt(cells[0].textContent),
                beschreibung: cells[1].textContent,
                menge: parseFloat(cells[2].textContent),
                einheit: cells[3].textContent,
                einzelpreis: parseFloat(cells[4].textContent.replace('CHF ', '')),
                rabatt: parseFloat(cells[5].textContent.replace('%', '')),
                kategorie: '' // Kategorie ist nicht in der Tabelle sichtbar
            };
            
            this.showPositionForm(offerteId, position);
            
        } catch (error) {
            console.error('Fehler beim Laden der Position:', error);
            this.updateStatus('Fehler beim Laden der Position', 'error');
        }
    }

    async deletePosition(positionId, offerteId) {
        if (confirm('Position wirklich löschen?')) {
            try {
                await this.apiCall(`/api/offerten/${offerteId}/positionen/${positionId}`, {
                    method: 'DELETE'
                });
                
                this.updateStatus('Position erfolgreich gelöscht', 'success');
                
                // Offerte-Detail neu laden
                const offerte = this.data.offerten.find(o => o.id === offerteId);
                if (offerte) {
                    await this.showOffertenDetail(offerte);
                }
                
            } catch (error) {
                console.error('Fehler beim Löschen der Position:', error);
                this.updateStatus('Fehler beim Löschen der Position', 'error');
            }
        }
    }

    confirmExit() {
        if (confirm('HIH-Verwaltung wirklich beenden?')) {
            window.close();
        }
    }

    // === DATA MANAGEMENT ===
    async loadData() {
        try {
            const [kundenResponse, offertenResponse] = await Promise.all([
                this.apiCall('/api/kunden'),
                this.apiCall('/api/offerten')
            ]);
            
            this.data = {
                kunden: kundenResponse.data || [],
                offerten: offertenResponse.data || []
            };
        } catch (error) {
            console.error('Fehler beim Laden der Daten:', error);
            this.updateStatus('Fehler beim Laden der Daten', 'error');
            // Fallback zu Mock-Daten
            this.data = await this.mockApiCall();
        }
    }

    async apiCall(endpoint, options = {}) {
        const baseUrl = window.location.origin;
        const url = `${baseUrl}${endpoint}`;
        
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            ...options
        };
        
        const response = await fetch(url, defaultOptions);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        
        return await response.json();
    }

    async mockApiCall() {
        // Fallback Mock-Daten wenn API nicht verfügbar
        return {
            kunden: [
                { id: 'KD-lK0yqbS', name: 'Muster AG', email: 'test2@muster.ch', telefon: '044 123 45' },
                { id: 'KD-SJWly-z', name: 'Max Mustermann', email: '', telefon: '' },
                { id: 'KD-YjuN8oo', name: 'AGFAR AG', email: 'info@agfar.ch', telefon: '' }
            ],
            offerten: [
                { id: 'OFF-001', nummer: 'OFF-2025-001', kundeId: 'KD-lK0yqbS', datum: '2025-01-15', gesamtsumme: 2500.00, status: 'Offen' }
            ]
        };
    }

    // === TABLE RENDERING ===
    renderKundenTable() {
        const tbody = document.getElementById('kundenTableBody');
        tbody.innerHTML = '';

        if (this.data.kunden.length === 0) {
            const row = document.createElement('tr');
            row.className = 'empty-row';
            row.innerHTML = '<td colspan="4" class="desktop-only">Keine Kunden vorhanden. Drücken Sie "N" um einen neuen Kunden zu erstellen.</td><td class="mobile-only">Keine Kunden vorhanden.<br><small>Drücken Sie "N" um einen neuen Kunden zu erstellen.</small></td>';
            tbody.appendChild(row);
            return;
        }

        this.data.kunden.forEach((kunde, index) => {
            const row = document.createElement('tr');
            row.className = 'data-row';
            if (index === this.selectedIndex) {
                row.classList.add('selected');
            }
            
            row.innerHTML = `
                <td class="col-id desktop-only">${kunde.id}</td>
                <td class="col-name">
                    <div class="mobile-kunde-info">
                        <div class="kunde-name">${kunde.name || ''}</div>
                        <div class="kunde-details">
                            ${kunde.email ? `📧 ${kunde.email}` : ''}
                            ${kunde.email && kunde.telefon ? ' • ' : ''}
                            ${kunde.telefon ? `📞 ${kunde.telefon}` : ''}
                        </div>
                    </div>
                    <span class="desktop-only">${kunde.name || ''}</span>
                </td>
                <td class="col-email desktop-only">${kunde.email || ''}</td>
                <td class="col-phone desktop-only">${kunde.telefon || ''}</td>
            `;
            
            row.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.selectRow(index);
                setTimeout(() => {
                    this.showKundenForm(this.data.kunden[index]);
                }, 10);
            });
            tbody.appendChild(row);
        });
    }

    renderOffertenTable() {
        const tbody = document.getElementById('offertenTableBody');
        tbody.innerHTML = '';

        if (this.data.offerten.length === 0) {
            const row = document.createElement('tr');
            row.className = 'empty-row';
            row.innerHTML = '<td colspan="6" class="desktop-only">Keine Offerten vorhanden. Drücken Sie "N" um eine neue Offerte zu erstellen.</td><td colspan="2" class="mobile-only">Keine Offerten vorhanden.<br><small>Drücken Sie "N" um eine neue Offerte zu erstellen.</small></td>';
            tbody.appendChild(row);
            return;
        }

        this.data.offerten.forEach((offerte, index) => {
            const row = document.createElement('tr');
            row.className = 'data-row';
            if (index === this.selectedIndex) {
                row.classList.add('selected');
            }
            
            const kunde = this.data.kunden.find(k => k.id === offerte.kundeId);
            const datum = new Date(offerte.datum).toLocaleDateString('de-CH');
            const total = `CHF ${(offerte.gesamtBrutto || 0).toFixed(2)}`;
            
            row.innerHTML = `
                <td class="col-nummer desktop-only">${offerte.nummer || ''}</td>
                <td class="col-titel">
                    <div class="mobile-offerte-info">
                        <div class="offerte-header">
                            <span class="offerte-titel">${offerte.titel || 'Ohne Titel'}</span>
                            <span class="offerte-total">${total}</span>
                        </div>
                        <div class="offerte-details">
                            👤 ${kunde ? kunde.name : 'Unbekannt'} • 📅 ${datum}
                        </div>
                    </div>
                    <span class="desktop-only">${offerte.titel || 'Ohne Titel'}</span>
                </td>
                <td class="col-kunde desktop-only">${kunde ? kunde.name : 'Unbekannt'}</td>
                <td class="col-datum desktop-only">${datum}</td>
                <td class="col-total desktop-only">${total}</td>
                <td class="col-status">
                    <span class="status-badge status-${(offerte.status || 'offen').toLowerCase()}">${offerte.status || 'Offen'}</span>
                </td>
            `;
            
            row.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.selectRow(index);
                setTimeout(() => {
                    this.showOffertenDetail(this.data.offerten[index]);
                }, 10);
            });
            tbody.appendChild(row);
        });
    }

    // === NAVIGATION ===
    selectRow(index) {
        this.selectedIndex = index;
        if (this.currentScreen === 'kunden') {
            this.renderKundenTable();
        } else if (this.currentScreen === 'offerten') {
            this.renderOffertenTable();
        }
    }

    navigateUp() {
        if (this.getCurrentData().length > 0) {
            this.selectedIndex = Math.max(0, this.selectedIndex - 1);
            this.refreshCurrentTable();
        }
    }

    navigateDown() {
        const data = this.getCurrentData();
        if (data.length > 0) {
            this.selectedIndex = Math.min(data.length - 1, this.selectedIndex + 1);
            this.refreshCurrentTable();
        }
    }

    getCurrentData() {
        return this.currentScreen === 'kunden' ? this.data.kunden : this.data.offerten;
    }

    refreshCurrentTable() {
        if (this.currentScreen === 'kunden') {
            this.renderKundenTable();
        } else if (this.currentScreen === 'offerten') {
            this.renderOffertenTable();
        }
    }

    // === ACTIONS ===
    executeAction() {
        console.log('executeAction() called - currentScreen:', this.currentScreen, 'selectedIndex:', this.selectedIndex);
        const data = this.getCurrentData();
        console.log('executeAction() data:', data);
        
        if (data.length > 0 && data[this.selectedIndex]) {
            if (this.currentScreen === 'offerten') {
                this.showOffertenDetail(data[this.selectedIndex]);
            } else {
                this.editItem();
            }
        } else {
            this.updateStatus('Kein Eintrag ausgewählt', 'warning');
        }
    }

    newItem() {
        if (this.currentScreen === 'kunden') {
            this.showKundenForm();
        } else if (this.currentScreen === 'offerten') {
            this.showOffertenForm();
        }
    }

    editItem() {
        const data = this.getCurrentData();
        if (data.length > 0 && data[this.selectedIndex]) {
            if (this.currentScreen === 'kunden') {
                this.showKundenForm(data[this.selectedIndex]);
            } else if (this.currentScreen === 'offerten') {
                this.showOffertenForm(data[this.selectedIndex]);
            }
        }
    }

    async deleteItem() {
        const data = this.getCurrentData();
        if (data.length > 0 && data[this.selectedIndex]) {
            const item = data[this.selectedIndex];
            const itemName = this.currentScreen === 'kunden' ? item.name : item.nummer;
            
            if (confirm(`"${itemName}" wirklich löschen?`)) {
                try {
                    const endpoint = this.currentScreen === 'kunden' 
                        ? `/api/kunden/${item.id}` 
                        : `/api/offerten/${item.id}`;
                    
                    await this.apiCall(endpoint, { method: 'DELETE' });
                    this.updateStatus(`${itemName} gelöscht`, 'success');
                    
                    // Selection anpassen
                    this.selectedIndex = Math.max(0, this.selectedIndex - 1);
                    await this.refreshData();
                    
                } catch (error) {
                    console.error('Fehler beim Löschen:', error);
                    this.updateStatus('Fehler beim Löschen', 'error');
                }
            }
        }
    }

    handleEscape() {
        if (this.isModalOpen()) {
            this.closeModal();
        } else if (this.currentScreen !== 'startup') {
            this.showScreen('startup');
            this.updateStatus('Zurück zum Hauptmenü');
        }
    }

    // === MODAL MANAGEMENT ===
    showModal(title, content, size = 'normal', buttonType = 'save') {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalBody').innerHTML = content;
        
        const modalContent = document.querySelector('.modal-content');
        modalContent.classList.remove('modal-large', 'modal-small');
        if (size === 'large') {
            modalContent.classList.add('modal-large');
        } else if (size === 'small') {
            modalContent.classList.add('modal-small');
        }
        
        // Update buttons based on type
        const saveBtn = document.getElementById('modalSave');
        const cancelBtn = document.getElementById('modalCancel');
        
        if (buttonType === 'readonly') {
            saveBtn.textContent = 'SCHLIEßEN';
            saveBtn.className = 'btn btn-primary';
            cancelBtn.style.display = 'none';
        } else {
            saveBtn.textContent = 'SPEICHERN';
            saveBtn.className = 'btn btn-primary';
            cancelBtn.style.display = 'inline-block';
            cancelBtn.textContent = 'ABBRECHEN';
        }
        
        document.getElementById('modal').classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('modal').classList.add('hidden');
        this.isModalInEditMode = false; // Reset edit mode
    }

    isModalOpen() {
        return !document.getElementById('modal').classList.contains('hidden');
    }

    showKundenForm(kunde = null) {
        const isEdit = kunde !== null;
        const title = isEdit ? 'KUNDE BEARBEITEN' : 'NEUER KUNDE';
        this.isModalInEditMode = isEdit; // Track edit mode
        
        const formHtml = `
            <div class="form-group">
                <label class="form-label">Name:</label>
                <input type="text" class="form-input" id="kundenName" value="${kunde?.name || ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Email:</label>
                <input type="email" class="form-input" id="kundenEmail" value="${kunde?.email || ''}">
            </div>
            <div class="form-group">
                <label class="form-label">Telefon:</label>
                <input type="tel" class="form-input" id="kundenTelefon" value="${kunde?.telefon || ''}">
            </div>
        `;
        
        this.showModal(title, formHtml);
        
        // Focus first input
        setTimeout(() => {
            document.getElementById('kundenName').focus();
        }, 100);
    }

    showOffertenForm(offerte = null) {
        const isEdit = offerte !== null;
        const title = isEdit ? 'OFFERTE BEARBEITEN' : 'NEUE OFFERTE';
        this.isModalInEditMode = isEdit;
        
        // Kundenliste für Dropdown
        const kundenOptions = this.data.kunden.map(kunde => 
            `<option value="${kunde.id}" ${offerte?.kundeId === kunde.id ? 'selected' : ''}>${kunde.name}</option>`
        ).join('');
        
        // Standard-Datum: heute
        const heute = new Date().toISOString().split('T')[0];
        // Standard-Gültigkeitsdatum: 45 Tage ab heute  
        const gueltigBis = new Date();
        gueltigBis.setDate(gueltigBis.getDate() + 45);
        const gueltigBisStr = gueltigBis.toISOString().split('T')[0];
        
        const formHtml = `
            <div class="form-group">
                <label class="form-label">Titel:</label>
                <input type="text" class="form-input" id="offertenTitel" value="${offerte?.titel || ''}" required>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Kunde:</label>
                    <select class="form-input" id="offertenKunde" required>
                        <option value="">-- Kunde auswählen --</option>
                        ${kundenOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Status:</label>
                    <select class="form-input" id="offertenStatus">
                        <option value="entwurf" ${offerte?.status === 'entwurf' ? 'selected' : ''}>Entwurf</option>
                        <option value="versendet" ${offerte?.status === 'versendet' ? 'selected' : ''}>Versendet</option>
                        <option value="angenommen" ${offerte?.status === 'angenommen' ? 'selected' : ''}>Angenommen</option>
                        <option value="abgelehnt" ${offerte?.status === 'abgelehnt' ? 'selected' : ''}>Abgelehnt</option>
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Datum:</label>
                    <input type="date" class="form-input" id="offertenDatum" value="${offerte?.datum || heute}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Gültig bis:</label>
                    <input type="date" class="form-input" id="offertenGueltigBis" value="${offerte?.gültigBis || gueltigBisStr}" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">MwSt-Satz (%):</label>
                    <input type="number" class="form-input" id="offertenMwst" value="${offerte?.mwstSatz || 7.7}" step="0.1" min="0" max="25">
                </div>
                <div class="form-group">
                    <label class="form-label">Zahlungsbedingungen:</label>
                    <select class="form-input" id="offertenZahlung">
                        <option value="30 Tage netto" ${offerte?.zahlungsbedingungen === '30 Tage netto' ? 'selected' : ''}>30 Tage netto</option>
                        <option value="14 Tage netto" ${offerte?.zahlungsbedingungen === '14 Tage netto' ? 'selected' : ''}>14 Tage netto</option>
                        <option value="Sofort" ${offerte?.zahlungsbedingungen === 'Sofort' ? 'selected' : ''}>Sofort</option>
                        <option value="Bei Erhalt" ${offerte?.zahlungsbedingungen === 'Bei Erhalt' ? 'selected' : ''}>Bei Erhalt</option>
                    </select>
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">Beschreibung:</label>
                <textarea class="form-input form-textarea" id="offertenBeschreibung" rows="3" placeholder="Kurze Beschreibung der Offerte...">${offerte?.beschreibung || ''}</textarea>
            </div>
            
            <div class="form-group">
                <label class="form-label">Notizen (intern):</label>
                <textarea class="form-input form-textarea" id="offertenNotizen" rows="2" placeholder="Interne Notizen...">${offerte?.notizen || ''}</textarea>
            </div>
        `;
        
        this.showModal(title, formHtml);
        
        // Focus first input
        setTimeout(() => {
            document.getElementById('offertenTitel').focus();
        }, 100);
    }

    async handleModalSave() {
        console.log('handleModalSave() called - currentScreen:', this.currentScreen);
        console.log('Modal content:', document.querySelector('.modal-content'));
        
        // Check if it's a readonly modal (button says "SCHLIEßEN")
        const saveBtn = document.getElementById('modalSave');
        if (saveBtn.textContent === 'SCHLIEßEN') {
            console.log('Readonly modal - just closing');
            this.closeModal();
            return;
        }
        
        if (this.currentScreen === 'kunden') {
            await this.saveKunde();
        } else if (this.currentScreen === 'offerten') {
            // Prüfe ob es sich um ein Positionen-Formular handelt
            const positionEl = document.getElementById('positionOfferteId');
            const offertenTitelEl = document.getElementById('offertenTitel');
            console.log('positionOfferteId element:', positionEl);
            console.log('offertenTitel element:', offertenTitelEl);
            
            if (positionEl) {
                console.log('Calling savePosition()');
                await this.savePosition();
            } else if (offertenTitelEl) {
                console.log('Calling saveOfferte()');
                await this.saveOfferte();
            } else {
                console.error('Neither position nor offerte form elements found!');
                this.updateStatus('Formular-Fehler: Unbekannter Formular-Typ', 'error');
            }
        }
    }

    async saveKunde() {
        const name = document.getElementById('kundenName').value.trim();
        const email = document.getElementById('kundenEmail').value.trim();
        const telefon = document.getElementById('kundenTelefon').value.trim();
        
        if (!name) {
            this.updateStatus('Name ist erforderlich!', 'error');
            document.getElementById('kundenName').focus();
            return;
        }
        
        try {
            this.updateStatus('Speichere Kunde...', 'info');
            const kundenData = { name, email, telefon };
            
            // Debug: Log the state
            console.log('Save Debug:', {
                selectedIndex: this.selectedIndex,
                isModalInEditMode: this.isModalInEditMode,
                kundenCount: this.data.kunden.length,
                selectedKunde: this.selectedIndex >= 0 ? this.data.kunden[this.selectedIndex] : null
            });
            
            // Bestimme ob Edit oder Create - verbesserte Logik
            const selectedKunde = this.selectedIndex >= 0 && this.selectedIndex < this.data.kunden.length 
                ? this.data.kunden[this.selectedIndex] 
                : null;
            const isEdit = selectedKunde && this.isModalInEditMode === true;
            
            console.log('Operation:', isEdit ? 'UPDATE' : 'CREATE', { selectedKunde, isEdit });
            
            if (isEdit) {
                const result = await this.apiCall(`/api/kunden/${selectedKunde.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(kundenData)
                });
                console.log('Update result:', result);
                this.updateStatus(`Kunde "${name}" erfolgreich aktualisiert`, 'success');
            } else {
                const result = await this.apiCall('/api/kunden', {
                    method: 'POST',
                    body: JSON.stringify(kundenData)
                });
                console.log('Create result:', result);
                this.updateStatus(`Kunde "${name}" erfolgreich erstellt`, 'success');
            }
            
            // Schließe Modal und lade Daten neu
            this.closeModal();
            await this.refreshData();
            
            // Update current screen
            if (this.currentScreen === 'kunden') {
                this.renderKundenTable();
            }
            
        } catch (error) {
            console.error('Fehler beim Speichern:', error);
            this.updateStatus(`Fehler beim Speichern: ${error.message}`, 'error');
        }
    }

    async saveOfferte() {
        console.log('saveOfferte() called');
        
        // Check if elements exist
        const titelEl = document.getElementById('offertenTitel');
        console.log('offertenTitel element:', titelEl);
        if (!titelEl) {
            console.error('offertenTitel element not found!');
            this.updateStatus('Formular-Fehler: Titel-Feld nicht gefunden', 'error');
            return;
        }
        
        const titel = titelEl.value.trim();
        const kundeId = document.getElementById('offertenKunde').value;
        const status = document.getElementById('offertenStatus').value;
        const datum = document.getElementById('offertenDatum').value;
        const gueltigBis = document.getElementById('offertenGueltigBis').value;
        const mwstSatz = parseFloat(document.getElementById('offertenMwst').value);
        const zahlungsbedingungen = document.getElementById('offertenZahlung').value;
        const beschreibung = document.getElementById('offertenBeschreibung').value.trim();
        const notizen = document.getElementById('offertenNotizen').value.trim();
        
        // Validierung
        if (!titel) {
            this.updateStatus('Titel ist erforderlich!', 'error');
            document.getElementById('offertenTitel').focus();
            return;
        }
        
        if (!kundeId) {
            this.updateStatus('Kunde ist erforderlich!', 'error');
            document.getElementById('offertenKunde').focus();
            return;
        }
        
        if (!datum || !gueltigBis) {
            this.updateStatus('Datum und Gültigkeitsdatum sind erforderlich!', 'error');
            return;
        }
        
        // Überprüfe, ob Gültigkeitsdatum nach Offertendatum liegt
        if (new Date(gueltigBis) <= new Date(datum)) {
            this.updateStatus('Gültigkeitsdatum muss nach dem Offertendatum liegen!', 'error');
            document.getElementById('offertenGueltigBis').focus();
            return;
        }
        
        try {
            this.updateStatus('Speichere Offerte...', 'info');
            const offertenData = {
                titel,
                kundeId,
                status,
                datum,
                gültigBis: gueltigBis,
                mwstSatz,
                zahlungsbedingungen,
                beschreibung,
                notizen
            };
            
            // Debug: Log the state
            console.log('Save Offerte Debug:', {
                selectedIndex: this.selectedIndex,
                isModalInEditMode: this.isModalInEditMode,
                offertenCount: this.data.offerten.length,
                selectedOfferte: this.selectedIndex >= 0 ? this.data.offerten[this.selectedIndex] : null
            });
            
            // Bestimme ob Edit oder Create
            const selectedOfferte = this.selectedIndex >= 0 && this.selectedIndex < this.data.offerten.length 
                ? this.data.offerten[this.selectedIndex] 
                : null;
            const isEdit = selectedOfferte && this.isModalInEditMode === true;
            
            console.log('Offerte Operation:', isEdit ? 'UPDATE' : 'CREATE', { selectedOfferte, isEdit });
            
            if (isEdit) {
                const result = await this.apiCall(`/api/offerten/${selectedOfferte.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(offertenData)
                });
                console.log('Update result:', result);
                this.updateStatus(`Offerte "${titel}" erfolgreich aktualisiert`, 'success');
            } else {
                const result = await this.apiCall('/api/offerten', {
                    method: 'POST',
                    body: JSON.stringify(offertenData)
                });
                console.log('Create result:', result);
                this.updateStatus(`Offerte "${titel}" erfolgreich erstellt`, 'success');
            }
            
            // Schließe Modal und lade Daten neu
            this.closeModal();
            await this.refreshData();
            
            // Update current screen
            if (this.currentScreen === 'offerten') {
                this.renderOffertenTable();
            }
            
        } catch (error) {
            console.error('Fehler beim Speichern der Offerte:', error);
            this.updateStatus(`Fehler beim Speichern: ${error.message}`, 'error');
        }
    }

    // === UTILITIES ===
    updateDashboard() {
        document.getElementById('kundenCount').textContent = this.data.kunden.length;
        document.getElementById('offertenCount').textContent = this.data.offerten.length;
        document.getElementById('offertenOffen').textContent = 
            this.data.offerten.filter(o => o.status === 'Offen').length;
    }

    updateStatus(message, type = 'info') {
        const statusElement = document.getElementById('statusMessage');
        statusElement.textContent = message;
        
        // Color coding
        statusElement.className = 'status-message';
        if (type === 'success') {
            statusElement.style.color = 'var(--accent-success)';
        } else if (type === 'error') {
            statusElement.style.color = 'var(--accent-error)';
        } else if (type === 'warning') {
            statusElement.style.color = 'var(--accent-warning)';
        } else {
            statusElement.style.color = 'var(--status-text)';
        }
    }

    startClock() {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('de-CH');
            document.getElementById('statusTime').textContent = timeString;
        };
        
        updateTime();
        setInterval(updateTime, 1000);
    }
}

// Test if JavaScript is loading
console.log('app.js script is loading...');

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM LOADED - Initializing HIHTerminalWeb');
    window.hihApp = new HIHTerminalWeb();
    console.log('HIHTerminalWeb initialized:', window.hihApp);
    
    // Test keyboard immediately
    setTimeout(() => {
        console.log('Testing keyboard events - press any key now!');
    }, 1000);
});

// Prevent context menu for authentic terminal feel
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Prevent text selection for terminal authenticity
document.addEventListener('selectstart', (e) => {
    if (!e.target.classList.contains('form-input')) {
        e.preventDefault();
    }
});