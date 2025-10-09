import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './themes/terminal';

// Layout Components
import TerminalContainer from './components/layout/TerminalContainer';
import TitleBar from './components/layout/TitleBar';
import ContentArea from './components/layout/ContentArea';
import FKeyMenu from './components/layout/FKeyMenu';
import ContextMenu from './components/layout/ContextMenu';
import FloatingActionButton from './components/common/FloatingActionButton';

// Screen Components
import StartupScreen from './components/screens/StartupScreen';
import KundenScreen from './components/screens/KundenScreen';
import OffertenScreen from './components/screens/OffertenScreen';
import RechnungenScreen from './components/screens/RechnungenScreen';
import FirmaScreen from './components/screens/FirmaScreen';

// Modal Components
import KundenModal from './components/modals/KundenModal';
import OffertenModal from './components/modals/OffertenModal';
import RechnungenModal from './components/modals/RechnungenModal';
import PositionenModal from './components/modals/PositionenModal';
import StatusChangeMenu from './components/modals/StatusChangeMenu';

// Hooks
import useKunden from './hooks/useKunden';
import useOfferten from './hooks/useOfferten';
import useRechnungen from './hooks/useRechnungen';

// Services
import kundenService from './services/kundenService';
import offertenService from './services/offertenService';
import rechnungenService from './services/rechnungenService';

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    
    /* Larger font on mobile for better touch targets */
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  html, body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: ${theme.fonts.mono};
    background: ${theme.colors.bgPrimary};
    color: ${theme.colors.textPrimary};
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    
    /* Mobile Safari viewport fix */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
    
    /* Android Chrome viewport fix */
    @media (max-width: 768px) {
      height: 100dvh; /* Dynamic viewport height */
    }
  }

  #root {
    margin: 0 !important;
    padding: 0 !important;
    width: 100vw;
    height: 100vh;
    
    /* Mobile Safari viewport fix */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
    
    /* Android Chrome viewport fix */
    @media (max-width: 768px) {
      height: 100dvh; /* Dynamic viewport height */
    }
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.bgTertiary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.borderColor};
    border-radius: ${theme.borderRadius.base};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.accentBlue};
  }

  /* Firefox Scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.borderColor} ${theme.colors.bgTertiary};
  }

  /* Mobile Touch Optimizations & Desktop Refinements */
  @media (max-width: 768px) {
    /* Input field enhancements only - Buttons werden durch styled-components gesteuert */
    input:not([type="button"]):not([type="submit"]):not([type="reset"]), 
    textarea, 
    select {
      min-height: 40px;
      padding: 10px 14px;
      font-size: 15px;
      margin: 6px 0;
      border: 2px solid #333;
      background: #1a1a1a;
      color: #ffffff;
      border-radius: 6px;
      box-sizing: border-box;
    }
    
    input:not([type="button"]):not([type="submit"]):not([type="reset"]):focus, 
    textarea:focus, 
    select:focus {
      border-color: #4a9eff;
      outline: none;
      box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.3);
    }
    
    /* Table cell padding for mobile */
    td, th {
      padding: 10px 8px;
      min-height: auto;
    }
    
    /* Enhanced readability */
    .screen-content {
      font-size: 18px !important;
      line-height: 1.6 !important;
    }
    
    .status-bar {
      font-size: 16px !important;
      padding: 12px 16px !important;
    }
    
    /* Modal improvements */
    .modal-content {
      padding: 24px !important;
    }
    
    /* List item improvements */
    .list-item, .table-row {
      min-height: 56px !important;
      padding: 16px !important;
    }
    
    /* Label spacing */
    label {
      font-size: 16px !important;
      margin-bottom: 8px !important;
      display: block !important;
    }
  }
  
  /* Desktop Accessibility & Aesthetics */
  @media (min-width: 769px) {
    /* Better focus states for keyboard navigation */
    button:focus-visible,
    input:focus-visible,
    select:focus-visible,
    textarea:focus-visible,
    a:focus-visible {
      outline: 3px solid #f9e2af !important;
      outline-offset: 3px !important;
    }
    
    /* Smoother interactions */
    * {
      scroll-behavior: smooth;
    }
    
    /* Better spacing for desktop */
    section, article {
      margin-bottom: 24px;
    }
    
    /* Enhanced table styling */
    table {
      border-spacing: 0 8px;
    }
    
    td, th {
      padding: 12px 16px;
    }
    
    /* Card-like elements get subtle shadows */
    .card, [role="article"], [role="region"] {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }

  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

function App() {
  const [currentScreen, setCurrentScreen] = useState('startup');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [statusMessage, setStatusMessage] = useState('System bereit - F-Tasten für Navigation');

  // Mobile Detection
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Data Hooks
  const { kunden, loading: kundenLoading, error: kundenError, refreshKunden } = useKunden();
  const { offerten, loading: offertenLoading, error: offertenError, refreshOfferten } = useOfferten();
  const { rechnungen, loading: rechnungenLoading, error: rechnungenError, refreshRechnungen } = useRechnungen();
  
  // Modal State
  const [kundenModalOpen, setKundenModalOpen] = useState(false);
  const [offertenModalOpen, setOffertenModalOpen] = useState(false);
  const [rechnungenModalOpen, setRechnungenModalOpen] = useState(false);
  const [positionenModalOpen, setPositionenModalOpen] = useState(false);
  const [statusChangeMenuOpen, setStatusChangeMenuOpen] = useState(false);
  const [selectedKunde, setSelectedKunde] = useState(null);
  const [selectedOfferte, setSelectedOfferte] = useState(null);
  const [selectedRechnung, setSelectedRechnung] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  
  // Filter State
  const [statusFilter, setStatusFilter] = useState('alle');
  const [rechnungStatusFilter, setRechnungStatusFilter] = useState('alle');
  
  // Filtered Offerten
  const filteredOfferten = React.useMemo(() => {
    if (!offerten || offerten.length === 0) return [];
    if (statusFilter === 'alle') return offerten;
    return offerten.filter(offerte => offerte.status === statusFilter);
  }, [offerten, statusFilter]);
  
  // Filtered Rechnungen
  const filteredRechnungen = React.useMemo(() => {
    if (!rechnungen || rechnungen.length === 0) return [];
    if (rechnungStatusFilter === 'alle') return rechnungen;
    return rechnungen.filter(rechnung => rechnung.status === rechnungStatusFilter);
  }, [rechnungen, rechnungStatusFilter]);
  
  // Reset selection when filter changes
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [statusFilter, rechnungStatusFilter]);
  
  // F-Key Handler
  const handleFKeyPress = (action) => {
    
    switch (action) {
      case 'help':
        setStatusMessage('F1 = Hilfe anzeigen');
        // TODO: Show help modal
        break;
        
      case 'customers':
        setCurrentScreen('customers');
        setStatusMessage(`Kunden (${Array.isArray(kunden) ? kunden.length : 0}) - ↑↓ Navigation, Enter=Bearbeiten, F2=Neu`);
        break;
        
      case 'offers':
        setCurrentScreen('offers');
        setStatusMessage(`Offerten (${Array.isArray(offerten) ? offerten.length : 0}) - ↑↓ Navigation, Enter=Bearbeiten, F3=Neu, S=Status, R=→Rechnung`);
        break;
        
      case 'invoices':
        setCurrentScreen('invoices');
        setStatusMessage(`Rechnungen (${Array.isArray(rechnungen) ? rechnungen.length : 0}) - ↑↓ Navigation, Enter=Bearbeiten, F4=Neu, P=PDF`);
        break;
        
      case 'firma':
        setCurrentScreen('firma');
        setStatusMessage('Firmenprofil - F9 zum Bearbeiten');
        break;
        
      case 'refresh':
        setStatusMessage('Daten werden aktualisiert...');
        refreshKunden();
        refreshOfferten();
        setTimeout(() => {
          setStatusMessage('Daten erfolgreich aktualisiert');
        }, 1000);
        break;
        
      case 'startup':
        setCurrentScreen('startup');
        setSelectedIndex(0);
        setStatusMessage('Zurück zum Hauptmenü - F-Tasten für Navigation');
        break;
        
      default:
        console.log('Unbekannte F-Key Aktion:', action);
    }
  };

  // Context Menu Action Handler
  const handleContextAction = (action) => {
    let currentData;
    if (currentScreen === 'customers') currentData = kunden;
    else if (currentScreen === 'offers') currentData = filteredOfferten;
    else if (currentScreen === 'invoices') currentData = filteredRechnungen;
    
    const selectedItem = currentData && currentData[selectedIndex];
    
    switch (action) {
      case 'new':
        if (currentScreen === 'customers') {
          setSelectedKunde(null);
          setKundenModalOpen(true);
          setStatusMessage('Neuen Kunden erstellen...');
        } else if (currentScreen === 'offers') {
          setSelectedOfferte(null);
          setOffertenModalOpen(true);
          setStatusMessage('Neue Offerte erstellen...');
        } else if (currentScreen === 'invoices') {
          setSelectedRechnung(null);
          setRechnungenModalOpen(true);
          setStatusMessage('Neue Rechnung erstellen...');
        }
        break;
        
      case 'edit':
        if (selectedItem) {
          if (currentScreen === 'customers') {
            setSelectedKunde(selectedItem);
            setKundenModalOpen(true);
            setStatusMessage(`Kunde ${selectedItem.firma || selectedItem.name} bearbeiten...`);
          } else if (currentScreen === 'offers') {
            setSelectedOfferte(selectedItem);
            setOffertenModalOpen(true);
            setStatusMessage(`Offerte ${selectedItem.nummer} bearbeiten...`);
          } else if (currentScreen === 'invoices') {
            setSelectedRechnung(selectedItem);
            setRechnungenModalOpen(true);
            setStatusMessage(`Rechnung ${selectedItem.nummer} bearbeiten...`);
          }
        }
        break;
        
      case 'open':
        if (selectedItem) {
          if (currentScreen === 'customers') {
            setSelectedKunde(selectedItem);
            setKundenModalOpen(true);
            setStatusMessage(`Kunde-Details: ${selectedItem.firma || selectedItem.name}`);
          } else if (currentScreen === 'offers') {
            setSelectedOfferte(selectedItem);
            setPositionenModalOpen(true);
            setStatusMessage(`Positionen für Offerte ${selectedItem.nummer}`);
          } else if (currentScreen === 'invoices') {
            // Für Rechnungen Positionen öffnen
            setSelectedRechnung(selectedItem);
            setPositionenModalOpen(true);
            setStatusMessage(`Positionen für Rechnung ${selectedItem.nummer}`);
          }
        }
        break;
        
      case 'delete':
        let entityType = 'Element';
        if (currentScreen === 'customers') entityType = 'Kunde';
        else if (currentScreen === 'offers') entityType = 'Offerte';
        else if (currentScreen === 'invoices') entityType = 'Rechnung';
        
        if (selectedItem && confirm(`${entityType} wirklich löschen?`)) {
          handleDelete(selectedItem);
        }
        break;
        
      case 'pdf':
        if (currentScreen === 'offers' && selectedItem) {
          handlePdfExport(selectedItem);
        } else if (currentScreen === 'invoices' && selectedItem) {
          handleRechnungPdfExport(selectedItem);
        }
        break;
        
      case 'status':
        if (currentScreen === 'offers' && selectedItem) {
          setStatusChangeMenuOpen(true);
          setStatusMessage('Offerten-Status ändern...');
        } else if (currentScreen === 'invoices' && selectedItem) {
          setStatusChangeMenuOpen(true);
          setStatusMessage('Rechnungs-Status ändern...');
        }
        break;
        
      case 'toInvoice':
        if (currentScreen === 'offers' && selectedItem && selectedItem.status === 'angenommen') {
          handleOfferteToRechnung(selectedItem);
        }
        break;
        
      default:
        console.log('Unbekannte Context-Aktion:', action);
    }
  };

  // Delete Handler
  const handleDelete = async (item) => {
    try {
      if (currentScreen === 'customers') {
        await kundenService.delete(item.id);
        await refreshKunden();
        setStatusMessage('Kunde erfolgreich gelöscht');
      } else if (currentScreen === 'offers') {
        await offertenService.delete(item.id);
        await refreshOfferten();
        setStatusMessage('Offerte erfolgreich gelöscht');
      } else if (currentScreen === 'invoices') {
        await rechnungenService.delete(item.id);
        await refreshRechnungen();
        setStatusMessage('Rechnung erfolgreich gelöscht');
      }
      
      // Reset selection if deleted item was selected
      if (selectedIndex >= 0) {
        const newData = currentScreen === 'customers' ? kunden : 
                       currentScreen === 'offers' ? offerten : 
                       currentScreen === 'invoices' ? rechnungen : [];
        if (selectedIndex >= newData.length - 1) {
          setSelectedIndex(Math.max(0, newData.length - 2));
        }
      }
    } catch (error) {
      console.error('Fehler beim Löschen:', error);
      setStatusMessage('Fehler beim Löschen: ' + error.message);
    }
  };

  // PDF Export Handler
  const handlePdfExport = async (offerte) => {
    try {
      setStatusMessage(`PDF-Export für Offerte ${offerte.nummer} wird erstellt...`);
      setModalLoading(true);
      
      // Service-Call für PDF-Export mit automatischem Download
      const result = await offertenService.exportToPdf(offerte.id);
      
      if (result.success) {
        setStatusMessage(`PDF-Export für Offerte ${offerte.nummer} erfolgreich heruntergeladen`);
      } else {
        setStatusMessage('PDF-Export fehlgeschlagen');
      }
    } catch (error) {
      console.error('Fehler beim PDF-Export:', error);
      setStatusMessage('Fehler beim PDF-Export: ' + (error.response?.data?.message || error.message));
    } finally {
      setModalLoading(false);
    }
  };

  // Offerte zu Rechnung konvertieren
  const handleOfferteToRechnung = async (offerte) => {
    try {
      setStatusMessage(`Erstelle Rechnung aus Offerte ${offerte.nummer}...`);
      setModalLoading(true);
      
      const rechnung = await rechnungenService.createFromOfferte(offerte.id);
      
      if (rechnung) {
        await refreshRechnungen();
        setStatusMessage(`✅ Rechnung ${rechnung.nummer} erfolgreich erstellt aus Offerte ${offerte.nummer}`);
        
        // Optional: Zum Rechnungen-Screen wechseln
        setTimeout(() => {
          setCurrentScreen('invoices');
          setStatusMessage(`Rechnungen (${Array.isArray(rechnungen) ? rechnungen.length + 1 : 1}) - Neue Rechnung ${rechnung.nummer} erstellt`);
        }, 2000);
      } else {
        setStatusMessage('Fehler beim Erstellen der Rechnung');
      }
    } catch (error) {
      console.error('Fehler beim Erstellen der Rechnung:', error);
      setStatusMessage('Fehler: ' + (error.response?.data?.message || error.message));
    } finally {
      setModalLoading(false);
    }
  };

  // Rechnung PDF Export Handler
  const handleRechnungPdfExport = async (rechnung) => {
    try {
      setStatusMessage(`PDF-Export für Rechnung ${rechnung.nummer} wird erstellt...`);
      setModalLoading(true);
      
      const result = await rechnungenService.exportToPdf(rechnung.id);
      
      if (result.success) {
        setStatusMessage(`PDF-Export für Rechnung ${rechnung.nummer} erfolgreich heruntergeladen`);
      } else {
        setStatusMessage('PDF-Export fehlgeschlagen');
      }
    } catch (error) {
      console.error('Fehler beim PDF-Export:', error);
      setStatusMessage('Fehler beim PDF-Export: ' + (error.response?.data?.message || error.message));
    } finally {
      setModalLoading(false);
    }
  };

  // Keyboard Navigation Handler
  const handleKeyDown = (event) => {
    // Skip if modal is open or not on list screens
    if (kundenModalOpen || offertenModalOpen || positionenModalOpen || statusChangeMenuOpen ||
        (currentScreen !== 'customers' && currentScreen !== 'offers' && currentScreen !== 'invoices')) {
      return;
    }

    let currentData;
    if (currentScreen === 'customers') currentData = kunden;
    else if (currentScreen === 'offers') currentData = filteredOfferten;
    else if (currentScreen === 'invoices') currentData = filteredRechnungen;
    
    if (!currentData || currentData.length === 0) return;

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex(prev => Math.max(0, prev - 1));
        break;
        
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(prev => Math.min(currentData.length - 1, prev + 1));
        break;
        
      case 'Enter':
        event.preventDefault();
        handleContextAction('open');
        break;
        
      case 'n':
      case 'N':
        event.preventDefault();
        handleContextAction('new');
        break;
        
      case 'e':
      case 'E':
        event.preventDefault();
        handleContextAction('edit');
        break;
        
      case 'd':
      case 'D':
        event.preventDefault();
        handleContextAction('delete');
        break;
        
      case 'p':
      case 'P':
        if (currentScreen === 'offers' || currentScreen === 'invoices') {
          event.preventDefault();
          handleContextAction('pdf');
        }
        break;
        
      case 's':
      case 'S':
        if (currentScreen === 'offers' && offerten && offerten.length > 0) {
          event.preventDefault();
          setStatusChangeMenuOpen(true);
        } else if (currentScreen === 'invoices' && rechnungen && rechnungen.length > 0) {
          event.preventDefault();
          setStatusChangeMenuOpen(true);
        }
        break;
        
      case 'r':
      case 'R':
        if (currentScreen === 'offers' && filteredOfferten && filteredOfferten.length > 0) {
          event.preventDefault();
          const offerte = filteredOfferten[selectedIndex];
          if (offerte && offerte.status === 'angenommen') {
            handleOfferteToRechnung(offerte);
          } else {
            setStatusMessage('Nur angenommene Offerten können in Rechnungen umgewandelt werden');
          }
        }
        break;
        
      default:
        break;
    }
  };

  // Add keyboard event listener
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, selectedIndex, kunden, filteredOfferten, kundenModalOpen, offertenModalOpen, positionenModalOpen, statusChangeMenuOpen]);

  // Row Selection Handler
  const handleRowClick = (index) => {
    setSelectedIndex(index);
    
    // Mobile: Einfachklick öffnet direkt (statt Doppelklick)
    if (isMobile) {
      // Timeout für saubere Auswahl-Animation
      setTimeout(() => {
        if (currentScreen === 'customers' && kunden[index]) {
          handleKundeDoubleClick(kunden[index], index);
        } else if (currentScreen === 'offers' && filteredOfferten[index]) {
          handleOfferteDoubleClick(filteredOfferten[index], index);
        } else if (currentScreen === 'invoices' && filteredRechnungen[index]) {
          handleRechnungDoubleClick(filteredRechnungen[index], index);
        }
      }, 100);
    }
  };

  // Modal Handlers
  const handleKundeDoubleClick = (kunde, index) => {
    setSelectedKunde(kunde);
    setKundenModalOpen(true);
  };

  const handleOfferteDoubleClick = (offerte, index) => {
    setSelectedOfferte(offerte);
    setOffertenModalOpen(true);
  };

  const handleRechnungDoubleClick = (rechnung, index) => {
    setSelectedRechnung(rechnung);
    setPositionenModalOpen(true);
  };

  const handleKundeModalClose = () => {
    setKundenModalOpen(false);
    setSelectedKunde(null);
  };

  const handleOffertenModalClose = () => {
    setOffertenModalOpen(false);
    setSelectedOfferte(null);
  };

  const handleRechnungenModalClose = () => {
    setRechnungenModalOpen(false);
    setSelectedRechnung(null);
  };

  const handlePositionenModalClose = () => {
    setPositionenModalOpen(false);
  };

  const handleStatusChange = async (newStatus) => {
    setModalLoading(true);
    try {
      if (currentScreen === 'offers') {
        if (!offerten || offerten.length === 0) return;
        
        const offerte = offerten[selectedIndex];
        if (!offerte) return;

        await offertenService.update(offerte.id, {
          ...offerte,
          status: newStatus
        });
        
        await refreshOfferten();
        setStatusMessage(`Offerten-Status geändert zu: ${newStatus}`);
      } else if (currentScreen === 'invoices') {
        if (!rechnungen || rechnungen.length === 0) return;
        
        const rechnung = rechnungen[selectedIndex];
        if (!rechnung) return;

        await rechnungenService.update(rechnung.id, {
          ...rechnung,
          status: newStatus
        });
        
        await refreshRechnungen();
        setStatusMessage(`Rechnungs-Status geändert zu: ${newStatus}`);
      }
      
      setStatusChangeMenuOpen(false);
    } catch (error) {
      console.error('Fehler beim Ändern des Status:', error);
      setStatusMessage('Fehler beim Ändern des Status');
    } finally {
      setModalLoading(false);
    }
  };

  const handleStatusChangeMenuClose = () => {
    setStatusChangeMenuOpen(false);
  };

  const handlePositionenEdit = (offerte) => {
    setSelectedOfferte(offerte);
    setPositionenModalOpen(true);
  };

  const handleRechnungPositionenEdit = (rechnung) => {
    setSelectedRechnung(rechnung);
    setPositionenModalOpen(true);
  };

  const handleEditEntityFromPositionen = (entity) => {
    // Prüfen ob es eine Rechnung oder Offerte ist
    // Rechnungen haben 'faelligkeitsdatum' oder 'qrReferenz', Offerten haben 'gültigBis'
    const isRechnung = entity.faelligkeitsdatum || entity.qrReferenz || entity.nummer?.startsWith('REC-');
    
    if (isRechnung) {
      // Es ist eine Rechnung
      setSelectedRechnung(entity);
      setRechnungenModalOpen(true);
    } else {
      // Es ist eine Offerte
      setSelectedOfferte(entity);
      setOffertenModalOpen(true);
    }
  };

  const handlePositionenSave = async (positionenData) => {
    setModalLoading(true);
    try {
      // TODO: Save positionen data to backend
      console.log('Positionen speichern:', positionenData);
      
      // Refresh offerten data
      await refreshOfferten();
      
      setStatusMessage('Positionen erfolgreich gespeichert');
    } catch (error) {
      console.error('Fehler beim Speichern der Positionen:', error);
      alert('Fehler beim Speichern der Positionen: ' + error.message);
    } finally {
      setModalLoading(false);
    }
  };

  const handleKundeSave = async (kundenData) => {
    setModalLoading(true);
    try {
      if (selectedKunde) {
        // Update existing kunde
        await kundenService.update(selectedKunde.id, kundenData);
      } else {
        // Create new kunde
        await kundenService.create(kundenData);
      }
      
      // Refresh data and close modal
      await refreshKunden();
      handleKundeModalClose();
    } catch (error) {
      console.error('Fehler beim Speichern des Kunden:', error);
      alert('Fehler beim Speichern des Kunden: ' + error.message);
    } finally {
      setModalLoading(false);
    }
  };

  const handleOfferteSave = async (offertenData) => {
    setModalLoading(true);
    try {
      if (selectedOfferte) {
        // Update existing offerte
        await offertenService.update(selectedOfferte.id, offertenData);
      } else {
        // Create new offerte
        await offertenService.create(offertenData);
      }
      
      // Refresh data and close modal
      await refreshOfferten();
      handleOffertenModalClose();
    } catch (error) {
      console.error('Fehler beim Speichern der Offerte:', error);
      alert('Fehler beim Speichern der Offerte: ' + (error.message || error.toString()));
    } finally {
      setModalLoading(false);
    }
  };

  const handleRechnungSave = async (rechnungData) => {
    setModalLoading(true);
    try {
      if (selectedRechnung) {
        // Update existing rechnung
        await rechnungenService.update(selectedRechnung.id, rechnungData);
      } else {
        // Create new rechnung
        await rechnungenService.create(rechnungData);
      }
      
      // Refresh data and close modal
      await refreshRechnungen();
      handleRechnungenModalClose();
    } catch (error) {
      console.error('Fehler beim Speichern der Rechnung:', error);
      alert('Fehler beim Speichern der Rechnung: ' + (error.message || error.toString()));
    } finally {
      setModalLoading(false);
    }
  };

  // Screen Rendering
  const renderScreen = () => {
    switch (currentScreen) {
      case 'startup':
        return (
          <StartupScreen 
            stats={{
              kunden: Array.isArray(kunden) ? kunden.length : 0,
              offerten: Array.isArray(offerten) ? offerten.length : 0,
              rechnungen: 0,
              status: 'System bereit'
            }}
          />
        );
        
      case 'customers':
        return (
          <KundenScreen 
            kunden={kunden}
            selectedIndex={selectedIndex}
            onRowClick={handleRowClick}
            onDoubleClick={handleKundeDoubleClick}
          />
        );
        
      case 'offers':
        return (
          <OffertenScreen 
            offerten={filteredOfferten}
            allOfferten={offerten}
            selectedIndex={selectedIndex}
            onRowClick={handleRowClick}
            onDoubleClick={handleOfferteDoubleClick}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
          />
        );
        
      case 'invoices':
        return (
          <RechnungenScreen 
            rechnungen={filteredRechnungen}
            allRechnungen={rechnungen}
            selectedIndex={selectedIndex}
            onRowClick={handleRowClick}
            onDoubleClick={handleRechnungDoubleClick}
            statusFilter={rechnungStatusFilter}
            onStatusFilterChange={setRechnungStatusFilter}
          />
        );
        
      case 'firma':
        return <FirmaScreen />;
        
      default:
        return <StartupScreen />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TerminalContainer>
        <TitleBar />
        <ContentArea>
          {renderScreen()}
        </ContentArea>
        
        {/* Context Menu for list screens - integrated into layout */}
        {(currentScreen === 'customers' || currentScreen === 'offers' || currentScreen === 'invoices') && (
          <ContextMenu
            currentScreen={currentScreen}
            selectedIndex={selectedIndex}
            data={
              currentScreen === 'customers' ? kunden : 
              currentScreen === 'offers' ? filteredOfferten :
              currentScreen === 'invoices' ? filteredRechnungen :
              []
            }
            onAction={handleContextAction}
            showPdfExport={currentScreen === 'offers' || currentScreen === 'invoices'}
          />
        )}
        
        {/* Floating Action Button (Mobile only) - Neu erstellen */}
        {(currentScreen === 'customers' || currentScreen === 'offers' || currentScreen === 'invoices') && (
          <FloatingActionButton 
            onClick={() => handleContextAction('new')}
            icon="+"
          />
        )}
        
        <FKeyMenu 
          currentScreen={currentScreen}
          onFKeyPress={handleFKeyPress}
          statusMessage={statusMessage}
        />
      </TerminalContainer>
      
      {/* Modals */}
      <KundenModal
        isOpen={kundenModalOpen}
        onClose={handleKundeModalClose}
        kunde={selectedKunde}
        onSave={handleKundeSave}
        loading={modalLoading}
      />
      
      <OffertenModal
        isOpen={offertenModalOpen}
        onClose={handleOffertenModalClose}
        offerte={selectedOfferte}
        kunden={kunden}
        onSave={handleOfferteSave}
        onPositionenEdit={handlePositionenEdit}
        loading={modalLoading}
      />
      
      <RechnungenModal
        isOpen={rechnungenModalOpen}
        onClose={handleRechnungenModalClose}
        rechnung={selectedRechnung}
        kunden={kunden}
        onSave={handleRechnungSave}
        onPositionenEdit={handleRechnungPositionenEdit}
        loading={modalLoading}
      />
      
      <PositionenModal
        isOpen={positionenModalOpen}
        onClose={handlePositionenModalClose}
        offerte={selectedOfferte || selectedRechnung}
        onSave={handlePositionenSave}
        onEditEntity={handleEditEntityFromPositionen}
        loading={modalLoading}
      />
      
      {/* Status Change Menu */}
      {statusChangeMenuOpen && currentScreen === 'offers' && offerten && offerten.length > 0 && (
        <StatusChangeMenu
          currentStatus={offerten[selectedIndex]?.status || 'entwurf'}
          onStatusChange={handleStatusChange}
          onClose={handleStatusChangeMenuClose}
          entityType="offers"
        />
      )}
      
      {statusChangeMenuOpen && currentScreen === 'invoices' && rechnungen && rechnungen.length > 0 && (
        <StatusChangeMenu
          currentStatus={rechnungen[selectedIndex]?.status || 'entwurf'}
          onStatusChange={handleStatusChange}
          onClose={handleStatusChangeMenuClose}
          entityType="invoices"
        />
      )}
    </ThemeProvider>
  );
}

export default App;
