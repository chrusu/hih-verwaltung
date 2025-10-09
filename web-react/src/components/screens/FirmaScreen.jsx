import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';
import FirmaModal from '../modals/FirmaModal';
import firmaService from '../../services/firmaService';
import TerminalWindow from '../layout/TerminalWindow';
import { FKeyButton, FKeyLabel, FKeyText } from '../common/Buttons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.md};
  }
`;

const ActionBar = styled.div`
  background: ${theme.colors.bgSecondary};
  border-top: 2px solid ${theme.colors.borderColor};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm};
    gap: ${theme.spacing.sm};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.xl};
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${theme.colors.bgSecondary};
  border: 2px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.lg};
  }
`;

const CardTitle = styled.h2`
  color: ${theme.colors.accentCyan};
  font-size: ${theme.fontSizes.xl};
  margin: 0 0 ${theme.spacing.lg} 0;
  padding-bottom: ${theme.spacing.md};
  border-bottom: 2px solid ${theme.colors.borderColor};
`;

const ImageBox = styled.div`
  width: 100%;
  height: 80px;
  border: 2px dashed ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.base};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.bgTertiary};
  overflow: hidden;
  margin-bottom: ${theme.spacing.sm};
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  &:hover {
    border-color: ${theme.colors.accentBlue};
  }
`;

const UploadButton = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.textPrimary};
  border: 2px solid ${theme.colors.accentGreen};
  border-radius: ${theme.borderRadius.base};
  cursor: pointer;
  font-size: ${theme.fontSizes.sm};
  font-family: ${theme.fonts.mono};
  font-weight: ${theme.fontWeights.medium};
  transition: all 0.2s;
  
  &:hover {
    background: ${theme.colors.bgSecondary};
    border-color: ${theme.colors.accentCyan};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  input {
    display: none;
  }
`;

const ImagePlaceholder = styled.div`
  text-align: center;
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.xs};
  
  .icon {
    font-size: 1.5em;
    margin-bottom: ${theme.spacing.xs};
  }
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.div`
  margin-bottom: ${theme.spacing.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.sm};
  display: block;
  margin-bottom: 2px;
`;

const InfoValue = styled.span`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
`;

const ColorPreview = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.sm};
  border: 2px solid ${theme.colors.borderColor};
  background: ${props => props.color};
  vertical-align: middle;
  margin-left: ${theme.spacing.sm};
`;

const SignatureContainer = styled.div`
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.borderColor};
  
  img {
    max-width: 300px;
    max-height: 150px;
    display: block;
    margin-top: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};
    border: 1px solid ${theme.colors.borderColor};
    border-radius: ${theme.borderRadius.base};
    padding: ${theme.spacing.sm};
    background: white;
  }
`;

const SignatureUploadSection = styled.div`
  margin-top: ${theme.spacing.md};
  max-width: 300px;
`;const LoadingMessage = styled.div`
  text-align: center;
  padding: ${theme.spacing.xxl};
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.lg};
`;

const FirmaScreen = () => {
  const [firma, setFirma] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [uploadingSignature, setUploadingSignature] = useState(false);

  const loadFirma = useCallback(async () => {
    setLoading(true);
    try {
      const response = await firmaService.getFirma();
      const firmaData = response.success ? response.data : response;
      console.log('Firmendaten geladen:', firmaData);
      setFirma(firmaData);
    } catch (error) {
      console.error('Fehler beim Laden der Firmendaten:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFirma();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard Shortcut: E für Bearbeiten
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Nur wenn kein Input-Feld fokussiert ist
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }
      
      if (event.key === 'e' || event.key === 'E') {
        event.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleSave = async (data) => {
    setSaving(true);
    try {
      const response = await firmaService.updateFirma(data);
      const updatedFirma = response.success ? response.data : response;
      
      setFirma(updatedFirma);
      setIsModalOpen(false);
      
      // Reload um Änderungen zu aktualisieren
      await loadFirma();
    } catch (error) {
      console.error('Fehler beim Speichern der Firmendaten:', error);
      alert('Fehler beim Speichern: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleLogoUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validierung
    if (!file.type.startsWith('image/')) {
      alert('Bitte wählen Sie eine Bilddatei aus.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('Die Datei ist zu groß. Maximum: 10 MB');
      return;
    }

    setUploadingLogo(true);
    try {
      const formData = new FormData();
      formData.append('logo', file);
      
      // Aktuelle Firmendaten mitschicken
      Object.keys(firma).forEach(key => {
        if (key !== 'logoUrl' && key !== 'signatureUrl') {
          formData.append(key, firma[key]);
        }
      });

      const response = await firmaService.updateFirma(formData);
      console.log('Logo Upload Response:', response);
      
      // Reload um neues Logo anzuzeigen
      await loadFirma();
      alert('✅ Logo erfolgreich hochgeladen!');
    } catch (error) {
      console.error('Fehler beim Logo-Upload:', error);
      alert('Fehler beim Logo-Upload: ' + error.message);
    } finally {
      setUploadingLogo(false);
    }
  };

  const handleSignatureUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validierung
    if (!file.type.startsWith('image/')) {
      alert('Bitte wählen Sie eine Bilddatei aus.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('Die Datei ist zu groß. Maximum: 10 MB');
      return;
    }

    setUploadingSignature(true);
    try {
      const formData = new FormData();
      formData.append('signature', file);
      
      // Aktuelle Firmendaten mitschicken
      Object.keys(firma).forEach(key => {
        if (key !== 'logoUrl' && key !== 'signatureUrl') {
          formData.append(key, firma[key]);
        }
      });

      const response = await firmaService.updateFirma(formData);
      console.log('Unterschrift Upload Response:', response);
      
      // Reload um neue Unterschrift anzuzeigen
      await loadFirma();
      alert('✅ Unterschrift erfolgreich hochgeladen!');
    } catch (error) {
      console.error('Fehler beim Unterschrift-Upload:', error);
      alert('Fehler beim Unterschrift-Upload: ' + error.message);
    } finally {
      setUploadingSignature(false);
    }
  };

  if (loading) {
    return (
      <TerminalWindow title="🏢 Firmenprofil">
        <LoadingMessage>⏳ Firmendaten werden geladen...</LoadingMessage>
      </TerminalWindow>
    );
  }

  return (
    <TerminalWindow title="🏢 Firmenprofil">
      <Container>
        {/* Content */}
        <ContentWrapper>
          {firma && (
            <Grid>
              {/* Kachel 1: Kontaktdaten */}
              <Card>
                <CardTitle>📞 Kontaktdaten</CardTitle>
                <InfoItem>
                  <InfoLabel>Firmenname</InfoLabel>
                  <InfoValue>{firma.name}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Adresse</InfoLabel>
                  <InfoValue>
                    {firma.strasse && `${firma.strasse}, `}
                    {firma.plz} {firma.ort}
                    {firma.land && firma.land !== 'Schweiz' && `, ${firma.land}`}
                  </InfoValue>
                </InfoItem>
                {firma.email && (
                  <InfoItem>
                    <InfoLabel>E-Mail</InfoLabel>
                    <InfoValue>{firma.email}</InfoValue>
                  </InfoItem>
                )}
                {firma.telefon && (
                  <InfoItem>
                    <InfoLabel>Telefon</InfoLabel>
                    <InfoValue>{firma.telefon}</InfoValue>
                  </InfoItem>
                )}
                {firma.website && (
                  <InfoItem>
                    <InfoLabel>Website</InfoLabel>
                    <InfoValue>
                      <a href={firma.website} target="_blank" rel="noopener noreferrer" style={{ color: theme.colors.accentBlue }}>
                        {firma.website}
                      </a>
                    </InfoValue>
                  </InfoItem>
                )}
                {firma.slogan && (
                  <InfoItem>
                    <InfoLabel>Slogan</InfoLabel>
                    <InfoValue style={{ fontStyle: 'italic', color: theme.colors.textSecondary }}>
                      {firma.slogan}
                    </InfoValue>
                  </InfoItem>
                )}
              </Card>

              {/* Kachel 2: Finanzen */}
              <Card>
                <CardTitle>💰 Finanzen</CardTitle>
                {firma.uid && (
                  <InfoItem>
                    <InfoLabel>UID-Nummer</InfoLabel>
                    <InfoValue>{firma.uid}</InfoValue>
                  </InfoItem>
                )}
                {firma.iban && (
                  <InfoItem>
                    <InfoLabel>IBAN</InfoLabel>
                    <InfoValue>{firma.iban}</InfoValue>
                  </InfoItem>
                )}
                <InfoItem>
                  <InfoLabel>MwSt-Satz</InfoLabel>
                  <InfoValue>{firma.mwstSatz}%</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>MwSt-pflichtig</InfoLabel>
                  <InfoValue>{firma.mwstPflichtig ? 'Ja' : 'Nein'}</InfoValue>
                </InfoItem>
              </Card>

              {/* Kachel 3: Design */}
              <Card>
                <CardTitle>🎨 Design</CardTitle>
                <InfoItem>
                  <InfoLabel>Akzentfarbe</InfoLabel>
                  <InfoValue>
                    {firma['accent-color'] || firma.accentColor || '#bd00ff'}
                    <ColorPreview color={firma['accent-color'] || firma.accentColor || '#bd00ff'} />
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Hauptschriftart</InfoLabel>
                  <InfoValue>{firma['main-font'] || firma.mainFont || 'Lexend Exa'}</InfoValue>
                </InfoItem>
              </Card>

              {/* Kachel 4: Bilder */}
              <Card>
                <CardTitle>🖼️ Bilder</CardTitle>
                
                <ImagesGrid>
                  {/* Logo */}
                  <ImageItem>
                    <InfoLabel>Logo</InfoLabel>
                    <ImageBox>
                      {firma.logoUrl ? (
                        <img src={firma.logoUrl} alt="Firmenlogo" />
                      ) : (
                        <ImagePlaceholder>
                          <div className="icon">🏢</div>
                          <div>Kein Logo</div>
                        </ImagePlaceholder>
                      )}
                    </ImageBox>
                    <UploadButton>
                      {uploadingLogo ? '⏳ Lädt...' : '📷 Logo'}
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleLogoUpload}
                        disabled={uploadingLogo}
                      />
                    </UploadButton>
                  </ImageItem>

                  {/* Unterschrift */}
                  <ImageItem>
                    <InfoLabel>Unterschrift</InfoLabel>
                    <ImageBox>
                      {firma.signatureUrl ? (
                        <img src={firma.signatureUrl} alt="Unterschrift" style={{ background: 'white', padding: '4px' }} />
                      ) : (
                        <ImagePlaceholder>
                          <div className="icon">✍️</div>
                          <div>Keine Unterschrift</div>
                        </ImagePlaceholder>
                      )}
                    </ImageBox>
                    <UploadButton>
                      {uploadingSignature ? '⏳ Lädt...' : '✍️ Unterschrift'}
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleSignatureUpload}
                        disabled={uploadingSignature}
                      />
                    </UploadButton>
                  </ImageItem>
                </ImagesGrid>
              </Card>
            </Grid>
          )}
        </ContentWrapper>

        {/* Action Bar - unten */}
        <ActionBar>
          <FKeyButton onClick={() => setIsModalOpen(true)}>
            <FKeyLabel>E</FKeyLabel>
            <FKeyText>Bearbeiten</FKeyText>
          </FKeyButton>
        </ActionBar>

        {/* Modal */}
        <FirmaModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          firma={firma}
          onSave={handleSave}
          loading={saving}
        />
      </Container>
    </TerminalWindow>
  );
};

export default FirmaScreen;
