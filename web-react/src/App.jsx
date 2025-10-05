import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './themes/terminal';

// Layout Components
import TerminalContainer from './components/layout/TerminalContainer';
import TitleBar from './components/layout/TitleBar';
import ContentArea from './components/layout/ContentArea';
import FKeyMenu from './components/layout/FKeyMenu';
import ContextMenu from './components/layout/ContextMenu';

// Screen Components
import StartupScreen from './components/screens/StartupScreen';
import KundenScreen from './components/screens/KundenScreen';
import OffertenScreen from './components/screens/OffertenScreen';

// Modal Components
import KundenModal from './components/modals/KundenModal';
import OffertenModal from './components/modals/OffertenModal';
import PositionenModal from './components/modals/PositionenModal';

// Hooks
import useKunden from './hooks/useKunden';
import useOfferten from './hooks/useOfferten';

// Services
import kundenService from './services/kundenService';
import offertenService from './services/offertenService';

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 !important;
    padding: 0 !important;
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

  /* Mobile Touch Optimizations */
  @media (max-width: 768px) {
    /* Enhanced button and input styling for mobile */
    button, input[type="button"], input[type="submit"], input[type="reset"] {
      min-height: 52px !important;
      padding: 16px 20px !important;
      font-size: 18px !important;
      border-radius: 8px !important;
      min-width: 120px !important;
      margin: 8px 4px !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
      box-sizing: border-box !important;
    }
    
    button:hover, button:focus,
    input[type="button"]:hover, input[type="button"]:focus,
    input[type="submit"]:hover, input[type="submit"]:focus {
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3) !important;
    }
    
    /* Input field enhancements */
    input, textarea, select {
      min-height: 52px !important;
      padding: 16px 20px !important;
      font-size: 18px !important;
      margin: 8px 0 !important;
      border: 2px solid #333 !important;
      background: #1a1a1a !important;
      color: #ffffff !important;
      border-radius: 8px !important;
      box-sizing: border-box !important;
    }
    
    input:focus, textarea:focus, select:focus {
      border-color: #4a9eff !important;
      outline: none !important;
      box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.3) !important;
    }
    
    /* Table cell padding for mobile */
    td, th {
      padding: 16px 12px !important;
      min-height: 52px !important;
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

  // Data Hooks
  const { kunden, loading: kundenLoading, error: kundenError, refreshKunden } = useKunden();
  const { offerten, loading: offertenLoading, error: offertenError, refreshOfferten } = useOfferten();
  
  // Modal State
  const [kundenModalOpen, setKundenModalOpen] = useState(false);
  const [offertenModalOpen, setOffertenModalOpen] = useState(false);
  const [positionenModalOpen, setPositionenModalOpen] = useState(false);
  const [selectedKunde, setSelectedKunde] = useState(null);
  const [selectedOfferte, setSelectedOfferte] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);  // F-Key Handler
  const handleFKeyPress = (action) => {
    setSelectedIndex(0); // Reset selection when switching screens
    
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
        setStatusMessage(`Offerten (${Array.isArray(offerten) ? offerten.length : 0}) - ↑↓ Navigation, Enter=Bearbeiten, F3=Neu`);
        break;
        
      case 'invoices':
        setStatusMessage('F4 = Rechnungen (Feature in Entwicklung)');
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
    const currentData = currentScreen === 'customers' ? kunden : offerten;
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
          }
        }
        break;
        
      case 'delete':
        if (selectedItem && confirm(`${currentScreen === 'customers' ? 'Kunde' : 'Offerte'} wirklich löschen?`)) {
          handleDelete(selectedItem);
        }
        break;
        
      case 'pdf':
        if (currentScreen === 'offers' && selectedItem) {
          handlePdfExport(selectedItem);
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
      }
      
      // Reset selection if deleted item was selected
      if (selectedIndex >= 0) {
        const newData = currentScreen === 'customers' ? kunden : offerten;
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

  // Keyboard Navigation Handler
  const handleKeyDown = (event) => {
    // Skip if modal is open or not on list screens
    if (kundenModalOpen || offertenModalOpen || positionenModalOpen || 
        (currentScreen !== 'customers' && currentScreen !== 'offers')) {
      return;
    }

    const currentData = currentScreen === 'customers' ? kunden : offerten;
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
        if (currentScreen === 'offers') {
          event.preventDefault();
          handleContextAction('pdf');
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
  }, [currentScreen, selectedIndex, kunden, offerten, kundenModalOpen, offertenModalOpen, positionenModalOpen]);

  // Row Selection Handler
  const handleRowClick = (index) => {
    setSelectedIndex(index);
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

  const handleKundeModalClose = () => {
    setKundenModalOpen(false);
    setSelectedKunde(null);
  };

  const handleOffertenModalClose = () => {
    setOffertenModalOpen(false);
    setSelectedOfferte(null);
  };

  const handlePositionenModalClose = () => {
    setPositionenModalOpen(false);
  };

  const handlePositionenEdit = (offerte) => {
    setSelectedOfferte(offerte);
    setPositionenModalOpen(true);
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
            offerten={offerten}
            selectedIndex={selectedIndex}
            onRowClick={handleRowClick}
            onDoubleClick={handleOfferteDoubleClick}
          />
        );
        
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
        {(currentScreen === 'customers' || currentScreen === 'offers') && (
          <ContextMenu
            currentScreen={currentScreen}
            selectedIndex={selectedIndex}
            data={currentScreen === 'customers' ? kunden : offerten}
            onAction={handleContextAction}
            showPdfExport={currentScreen === 'offers'}
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
      
      <PositionenModal
        isOpen={positionenModalOpen}
        onClose={handlePositionenModalClose}
        offerte={selectedOfferte}
        onSave={handlePositionenSave}
        loading={modalLoading}
      />
    </ThemeProvider>
  );
}

export default App;
