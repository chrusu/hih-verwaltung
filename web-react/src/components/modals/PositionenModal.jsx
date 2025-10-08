import React, { useState, useEffect } from 'react';
import BaseModal from './BaseModal';
import * as FormComponents from '../common/FormComponents';
import offertenService from '../../services/offertenService';
import rechnungenService from '../../services/rechnungenService';

const {
  Form,
  FormSection,
  FormSectionTitle,
  FormRow,
  FormGroup,
  Label,
  Input,
  Select,
  ButtonGroup,
  Button,
  ErrorMessage
} = FormComponents;

// Styled Components für Positionen-Tabelle
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

const PositionenTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${theme.spacing.md} 0;
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.sm};
  
  /* Hide table on mobile */
  @media (max-width: 768px) {
    display: none;
  }
`;

const PositionenTh = styled.th`
  background: ${theme.colors.bgSecondary};
  color: ${theme.colors.accentCyan};
  padding: ${theme.spacing.sm};
  text-align: left;
  border: 1px solid ${theme.colors.borderColor};
  font-size: ${theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.wide};
`;

const PositionenTd = styled.td`
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.borderColor};
  background: ${theme.colors.bgTertiary};
  color: ${theme.colors.textPrimary};
  
  &.editing {
    padding: 2px;
  }
  
  &.numeric {
    text-align: right;
    font-family: ${theme.fonts.mono};
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fontWeights.medium};
  }
  
  &.actions {
    text-align: center;
    width: 120px;
  }
`;

const PositionenTr = styled.tr`
  &:hover {
    background: ${theme.colors.bgSecondary};
    
    td {
      color: ${theme.colors.textPrimary};
    }
  }
  
  &.editing {
    background: ${theme.colors.accentBlue}22;
    
    td {
      color: ${theme.colors.textPrimary};
    }
  }
`;

const SmallButton = styled(Button)`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  font-size: ${theme.fontSizes.xs};
  min-width: auto;
  margin: 0 2px;
`;

const SmallInput = styled(Input)`
  padding: ${theme.spacing.xs};
  font-size: ${theme.fontSizes.sm};
  margin: 0;
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.textPrimary};
  border: 1px solid ${theme.colors.accentBlue};
  
  &:focus {
    background: ${theme.colors.bgPrimary};
    border-color: ${theme.colors.accentGreen};
    color: ${theme.colors.textPrimary};
  }
`;

const TotalRow = styled.tr`
  background: ${theme.colors.bgSecondary};
  font-weight: bold;
  
  td {
    border-top: 2px solid ${theme.colors.accentGreen};
    color: ${theme.colors.textPrimary};
  }
`;

// Mobile Card View Components
const MobilePositionsList = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    margin: ${theme.spacing.md} 0;
  }
`;

const PositionCard = styled.div`
  background: ${theme.colors.bgTertiary};
  border: 1px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.base};
  margin-bottom: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  
  &.editing {
    border-color: ${theme.colors.accentBlue};
    background: ${theme.colors.accentBlue}22;
  }
`;

const PositionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
  padding-bottom: ${theme.spacing.sm};
  border-bottom: 1px solid ${theme.colors.borderColor};
`;

const PositionNumber = styled.span`
  font-weight: bold;
  color: ${theme.colors.accentCyan};
  font-size: ${theme.fontSizes.base};
`;

const PositionActions = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
`;

const PositionField = styled.div`
  margin-bottom: ${theme.spacing.sm};
`;

const FieldLabel = styled.div`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.wide};
  margin-bottom: ${theme.spacing.xs};
`;

const FieldValue = styled.div`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.sm};
  
  &.numeric {
    font-family: ${theme.fonts.mono};
    font-weight: ${theme.fontWeights.medium};
  }
`;

const MobileTotalCard = styled.div`
  background: ${theme.colors.bgSecondary};
  border: 2px solid ${theme.colors.accentGreen};
  border-radius: ${theme.borderRadius.base};
  padding: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const TotalRow2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
  font-weight: bold;
  
  &:last-child {
    margin-bottom: 0;
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.accentBlue};
  }
`;

const PositionenModal = ({ 
  isOpen, 
  onClose, 
  offerte,
  onSave,
  onEditEntity,
  loading = false 
}) => {
  const [positionen, setPositionen] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newPosition, setNewPosition] = useState({
    beschreibung: '',
    menge: 1,
    einheit: 'Std',
    einzelpreis: 0,
    rabatt: 0,
    kategorie: 'Entwicklung'
  });

  // Positionen laden
  useEffect(() => {
    if (isOpen && offerte) {
      loadPositionen();
    }
  }, [isOpen, offerte]);

  const loadPositionen = async () => {
    if (!offerte) return;
    
    try {
      // Prüfe ob es eine Rechnung oder Offerte ist
      const isRechnung = offerte.nummer?.startsWith('REC-');
      const service = isRechnung ? rechnungenService : offertenService;
      
      // Hole Positionen vom Backend
      const response = await service.getPositionen(offerte.id);
      const positionenData = response.success ? response.data : response;
      
      setPositionen(Array.isArray(positionenData) ? positionenData : []);
    } catch (error) {
      console.error('Fehler beim Laden der Positionen:', error);
      setPositionen([]);
    }
  };

  const calculateGesamtpreis = (menge, einzelpreis, rabatt) => {
    const subtotal = menge * einzelpreis;
    const rabattBetrag = subtotal * (rabatt / 100);
    return subtotal - rabattBetrag;
  };

  const handleEdit = (position) => {
    setEditingId(position.id);
    setEditData({
      beschreibung: position.beschreibung,
      menge: position.menge,
      einheit: position.einheit,
      einzelpreis: position.einzelpreis,
      rabatt: position.rabatt,
      kategorie: position.kategorie
    });
  };

  const handleSaveEdit = async () => {
    try {
      const gesamtpreis = calculateGesamtpreis(
        editData.menge, 
        editData.einzelpreis, 
        editData.rabatt
      );

      const updatedData = { ...editData, gesamtpreis };
      
      // Prüfe ob es eine Rechnung oder Offerte ist
      const isRechnung = offerte.nummer?.startsWith('REC-');
      const service = isRechnung ? rechnungenService : offertenService;
      
      // API-Call zum Speichern
      await service.updatePosition(offerte.id, editingId, updatedData);

      // Update lokale State nach erfolgreichem API-Call
      setPositionen(prev => prev.map(pos => 
        pos.id === editingId 
          ? { ...pos, ...updatedData }
          : pos
      ));

      setEditingId(null);
      setEditData({});
    } catch (error) {
      console.error('Fehler beim Speichern der Position:', error);
      alert('Fehler beim Speichern der Position: ' + error.message);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleDelete = async (positionId) => {
    if (!confirm('Position wirklich löschen?')) return;

    try {
      // Prüfe ob es eine Rechnung oder Offerte ist
      const isRechnung = offerte.nummer?.startsWith('REC-');
      const service = isRechnung ? rechnungenService : offertenService;
      
      // API-Call zum Löschen
      await service.deletePosition(offerte.id, positionId);
      
      // Update lokale State nach erfolgreichem API-Call
      setPositionen(prev => prev.filter(pos => pos.id !== positionId));
    } catch (error) {
      console.error('Fehler beim Löschen der Position:', error);
      alert('Fehler beim Löschen der Position: ' + error.message);
    }
  };

  const handleAddNew = async () => {
    try {
      const gesamtpreis = calculateGesamtpreis(
        newPosition.menge,
        newPosition.einzelpreis,
        newPosition.rabatt
      );

      const positionData = {
        position: positionen.length + 1,
        ...newPosition,
        gesamtpreis
      };

      // Prüfe ob es eine Rechnung oder Offerte ist
      const isRechnung = offerte.nummer?.startsWith('REC-');
      const service = isRechnung ? rechnungenService : offertenService;
      
      // API-Call zum Erstellen
      const response = await service.addPosition(offerte.id, positionData);
      const neuePosition = response.success ? response.data : response;

      // Update lokale State mit der vom Server zurückgegebenen Position
      setPositionen(prev => [...prev, neuePosition]);

      // Reset form
      setNewPosition({
        beschreibung: '',
        menge: 1,
        einheit: 'Std',
        einzelpreis: 0,
        rabatt: 0,
        kategorie: 'Entwicklung'
      });
      setIsAddingNew(false);
    } catch (error) {
      console.error('Fehler beim Hinzufügen der Position:', error);
      alert('Fehler beim Hinzufügen der Position: ' + error.message);
    }
  };

  const renderEditableCell = (position, field, type = 'text') => {
    if (editingId === position.id) {
      return (
        <PositionenTd className="editing">
          <SmallInput
            type={type}
            value={editData[field] || ''}
            onChange={(e) => setEditData(prev => ({
              ...prev,
              [field]: type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value
            }))}
          />
        </PositionenTd>
      );
    }

    return (
      <PositionenTd className={type === 'number' ? 'numeric' : ''}>
        {type === 'number' && typeof position[field] === 'number' 
          ? position[field].toFixed(2)
          : position[field]}
      </PositionenTd>
    );
  };

  const renderSelectableCell = (position, field, options) => {
    if (editingId === position.id) {
      return (
        <PositionenTd className="editing">
          <Select
            value={editData[field] || position[field]}
            onChange={(e) => setEditData(prev => ({
              ...prev,
              [field]: e.target.value
            }))}
            style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs }}
          >
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </PositionenTd>
      );
    }

    return (
      <PositionenTd>{position[field]}</PositionenTd>
    );
  };

  const subtotal = positionen.reduce((sum, pos) => sum + pos.gesamtpreis, 0);
  const mwstBetrag = subtotal * ((offerte?.mwstSatz || 7.7) / 100);
  const gesamtBrutto = subtotal + mwstBetrag;

  if (!offerte) return null;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={`Positionen: ${offerte.titel} (${offerte.nummer})`}
      closeOnOverlay={!loading}
      wide={true}
    >
      <div>
        <FormSectionTitle>Offerten-Positionen</FormSectionTitle>
        
        <PositionenTable>
          <thead>
            <tr>
              <PositionenTh>Pos.</PositionenTh>
              <PositionenTh>Beschreibung</PositionenTh>
              <PositionenTh>Menge</PositionenTh>
              <PositionenTh>Einheit</PositionenTh>
              <PositionenTh>Einzelpreis</PositionenTh>
              <PositionenTh>Rabatt %</PositionenTh>
              <PositionenTh>Gesamtpreis</PositionenTh>
              <PositionenTh>Kategorie</PositionenTh>
              <PositionenTh>Aktionen</PositionenTh>
            </tr>
          </thead>
          <tbody>
            {positionen.map((position) => (
              <PositionenTr 
                key={position.id} 
                className={editingId === position.id ? 'editing' : ''}
              >
                <PositionenTd>{position.position}</PositionenTd>
                {renderEditableCell(position, 'beschreibung')}
                {renderEditableCell(position, 'menge', 'number')}
                {renderSelectableCell(position, 'einheit', ['Std', 'Tag', 'Stk', 'Psch', 'Monat'])}
                {renderEditableCell(position, 'einzelpreis', 'number')}
                {renderEditableCell(position, 'rabatt', 'number')}
                <PositionenTd className="numeric">
                  CHF {position.gesamtpreis.toFixed(2)}
                </PositionenTd>
                {renderSelectableCell(position, 'kategorie', ['Beratung', 'Entwicklung', 'Design', 'Testing', 'Wartung', 'Hosting', 'Sonstiges'])}
                <PositionenTd className="actions">
                  {editingId === position.id ? (
                    <>
                      <SmallButton variant="success" onClick={handleSaveEdit}>
                        ✓
                      </SmallButton>
                      <SmallButton onClick={handleCancelEdit}>
                        ✗
                      </SmallButton>
                    </>
                  ) : (
                    <>
                      <SmallButton onClick={() => handleEdit(position)}>
                        ✎
                      </SmallButton>
                      <SmallButton variant="danger" onClick={() => handleDelete(position.id)}>
                        🗑
                      </SmallButton>
                    </>
                  )}
                </PositionenTd>
              </PositionenTr>
            ))}
            
            {/* Neue Position hinzufügen */}
            {isAddingNew && (
              <PositionenTr className="editing">
                <PositionenTd>{positionen.length + 1}</PositionenTd>
                <PositionenTd className="editing">
                  <SmallInput
                    value={newPosition.beschreibung}
                    onChange={(e) => setNewPosition(prev => ({...prev, beschreibung: e.target.value}))}
                    placeholder="Beschreibung..."
                  />
                </PositionenTd>
                <PositionenTd className="editing">
                  <SmallInput
                    type="number"
                    value={newPosition.menge}
                    onChange={(e) => setNewPosition(prev => ({...prev, menge: parseFloat(e.target.value) || 0}))}
                  />
                </PositionenTd>
                <PositionenTd className="editing">
                  <Select
                    value={newPosition.einheit}
                    onChange={(e) => setNewPosition(prev => ({...prev, einheit: e.target.value}))}
                    style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs }}
                  >
                    <option value="Std">Std</option>
                    <option value="Tag">Tag</option>
                    <option value="Stk">Stk</option>
                    <option value="Psch">Psch</option>
                    <option value="Monat">Monat</option>
                  </Select>
                </PositionenTd>
                <PositionenTd className="editing">
                  <SmallInput
                    type="number"
                    step="0.01"
                    value={newPosition.einzelpreis}
                    onChange={(e) => setNewPosition(prev => ({...prev, einzelpreis: parseFloat(e.target.value) || 0}))}
                  />
                </PositionenTd>
                <PositionenTd className="editing">
                  <SmallInput
                    type="number"
                    step="0.1"
                    value={newPosition.rabatt}
                    onChange={(e) => setNewPosition(prev => ({...prev, rabatt: parseFloat(e.target.value) || 0}))}
                  />
                </PositionenTd>
                <PositionenTd className="numeric">
                  CHF {calculateGesamtpreis(newPosition.menge, newPosition.einzelpreis, newPosition.rabatt).toFixed(2)}
                </PositionenTd>
                <PositionenTd className="editing">
                  <Select
                    value={newPosition.kategorie}
                    onChange={(e) => setNewPosition(prev => ({...prev, kategorie: e.target.value}))}
                    style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs }}
                  >
                    <option value="Beratung">Beratung</option>
                    <option value="Entwicklung">Entwicklung</option>
                    <option value="Design">Design</option>
                    <option value="Testing">Testing</option>
                    <option value="Wartung">Wartung</option>
                    <option value="Hosting">Hosting</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </Select>
                </PositionenTd>
                <PositionenTd className="actions">
                  <SmallButton variant="success" onClick={handleAddNew}>
                    ✓
                  </SmallButton>
                  <SmallButton onClick={() => setIsAddingNew(false)}>
                    ✗
                  </SmallButton>
                </PositionenTd>
              </PositionenTr>
            )}
            
            {/* Summen-Zeile */}
            <TotalRow>
              <PositionenTd colSpan="6" style={{ textAlign: 'right', fontWeight: 'bold' }}>
                Subtotal:
              </PositionenTd>
              <PositionenTd className="numeric" style={{ fontWeight: 'bold', color: theme.colors.accentGreen }}>
                CHF {subtotal.toFixed(2)}
              </PositionenTd>
              <PositionenTd colSpan="2"></PositionenTd>
            </TotalRow>
            <TotalRow>
              <PositionenTd colSpan="6" style={{ textAlign: 'right', fontWeight: 'bold' }}>
                MwSt ({offerte.mwstSatz || 7.7}%):
              </PositionenTd>
              <PositionenTd className="numeric" style={{ fontWeight: 'bold', color: theme.colors.accentYellow }}>
                CHF {mwstBetrag.toFixed(2)}
              </PositionenTd>
              <PositionenTd colSpan="2"></PositionenTd>
            </TotalRow>
            <TotalRow>
              <PositionenTd colSpan="6" style={{ textAlign: 'right', fontWeight: 'bold' }}>
                Gesamtbetrag:
              </PositionenTd>
              <PositionenTd className="numeric" style={{ fontWeight: 'bold', color: theme.colors.accentBlue, fontSize: theme.fontSizes.base }}>
                CHF {gesamtBrutto.toFixed(2)}
              </PositionenTd>
              <PositionenTd colSpan="2"></PositionenTd>
            </TotalRow>
          </tbody>
        </PositionenTable>

        {/* Mobile Card View */}
        <MobilePositionsList>
          {positionen.map((position) => (
            <PositionCard 
              key={position.id} 
              className={editingId === position.id ? 'editing' : ''}
            >
              <PositionHeader>
                <PositionNumber>Position {position.position}</PositionNumber>
                <PositionActions>
                  {editingId === position.id ? (
                    <>
                      <SmallButton variant="success" onClick={handleSaveEdit}>
                        ✓ Speichern
                      </SmallButton>
                      <SmallButton onClick={handleCancelEdit}>
                        ✗ Abbrechen
                      </SmallButton>
                    </>
                  ) : (
                    <>
                      <SmallButton onClick={() => handleEdit(position)}>
                        ✎ Bearbeiten
                      </SmallButton>
                      <SmallButton variant="danger" onClick={() => handleDelete(position.id)}>
                        🗑 Löschen
                      </SmallButton>
                    </>
                  )}
                </PositionActions>
              </PositionHeader>
              
              <PositionField>
                <FieldLabel>Beschreibung</FieldLabel>
                <FieldValue>
                  {editingId === position.id ? (
                    <SmallInput
                      value={editData.beschreibung || position.beschreibung}
                      onChange={(e) => setEditData(prev => ({...prev, beschreibung: e.target.value}))}
                    />
                  ) : (
                    position.beschreibung
                  )}
                </FieldValue>
              </PositionField>

              <div style={{ display: 'flex', gap: theme.spacing.md }}>
                <PositionField style={{ flex: 1 }}>
                  <FieldLabel>Menge</FieldLabel>
                  <FieldValue className="numeric">
                    {editingId === position.id ? (
                      <SmallInput
                        type="number"
                        value={editData.menge || position.menge}
                        onChange={(e) => setEditData(prev => ({...prev, menge: parseFloat(e.target.value) || 0}))}
                      />
                    ) : (
                      position.menge
                    )}
                  </FieldValue>
                </PositionField>

                <PositionField style={{ flex: 1 }}>
                  <FieldLabel>Einheit</FieldLabel>
                  <FieldValue>
                    {editingId === position.id ? (
                      <Select
                        value={editData.einheit || position.einheit}
                        onChange={(e) => setEditData(prev => ({...prev, einheit: e.target.value}))}
                        style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs }}
                      >
                        {['Std', 'Tag', 'Stk', 'Psch', 'Monat'].map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </Select>
                    ) : (
                      position.einheit
                    )}
                  </FieldValue>
                </PositionField>
              </div>

              <div style={{ display: 'flex', gap: theme.spacing.md }}>
                <PositionField style={{ flex: 1 }}>
                  <FieldLabel>Einzelpreis</FieldLabel>
                  <FieldValue className="numeric">
                    {editingId === position.id ? (
                      <SmallInput
                        type="number"
                        step="0.01"
                        value={editData.einzelpreis || position.einzelpreis}
                        onChange={(e) => setEditData(prev => ({...prev, einzelpreis: parseFloat(e.target.value) || 0}))}
                      />
                    ) : (
                      `CHF ${position.einzelpreis.toFixed(2)}`
                    )}
                  </FieldValue>
                </PositionField>

                <PositionField style={{ flex: 1 }}>
                  <FieldLabel>Rabatt %</FieldLabel>
                  <FieldValue className="numeric">
                    {editingId === position.id ? (
                      <SmallInput
                        type="number"
                        step="0.1"
                        value={editData.rabatt || position.rabatt}
                        onChange={(e) => setEditData(prev => ({...prev, rabatt: parseFloat(e.target.value) || 0}))}
                      />
                    ) : (
                      `${position.rabatt}%`
                    )}
                  </FieldValue>
                </PositionField>
              </div>

              <PositionField>
                <FieldLabel>Kategorie</FieldLabel>
                <FieldValue>
                  {editingId === position.id ? (
                    <Select
                      value={editData.kategorie || position.kategorie}
                      onChange={(e) => setEditData(prev => ({...prev, kategorie: e.target.value}))}
                      style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs }}
                    >
                      {['Beratung', 'Entwicklung', 'Design', 'Testing', 'Wartung', 'Hosting', 'Sonstiges'].map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </Select>
                  ) : (
                    position.kategorie
                  )}
                </FieldValue>
              </PositionField>

              <PositionField>
                <FieldLabel>Gesamtpreis</FieldLabel>
                <FieldValue className="numeric" style={{ fontSize: theme.fontSizes.base, fontWeight: 'bold', color: theme.colors.accentGreen }}>
                  CHF {position.gesamtpreis.toFixed(2)}
                </FieldValue>
              </PositionField>
            </PositionCard>
          ))}

          {/* Mobile Total Card */}
          <MobileTotalCard>
            <TotalRow2>
              <span>Subtotal:</span>
              <span>CHF {subtotal.toFixed(2)}</span>
            </TotalRow2>
            <TotalRow2>
              <span>MwSt ({offerte.mwstSatz || 7.7}%):</span>
              <span>CHF {mwstBetrag.toFixed(2)}</span>
            </TotalRow2>
            <TotalRow2>
              <span>Gesamtbetrag:</span>
              <span>CHF {gesamtBrutto.toFixed(2)}</span>
            </TotalRow2>
          </MobileTotalCard>
        </MobilePositionsList>

        <ButtonGroup>
          <Button 
            onClick={() => setIsAddingNew(true)}
            disabled={isAddingNew || editingId}
            variant="success"
          >
            + Neue Position
          </Button>
          {offerte && onEditEntity && (
            <Button 
              onClick={() => {
                onClose();
                onEditEntity(offerte);
              }}
              variant="secondary"
            >
              📝 {offerte.nummer ? 'Rechnung' : 'Offerte'} bearbeiten
            </Button>
          )}
        </ButtonGroup>

        <ButtonGroup>
          <Button onClick={onClose}>
            Schließen
          </Button>
          <Button 
            variant="primary"
            onClick={() => onSave && onSave({ positionen, subtotal, mwstBetrag, gesamtBrutto })}
            disabled={loading || editingId || isAddingNew}
          >
            {loading ? 'Speichern...' : 'Änderungen speichern'}
          </Button>
        </ButtonGroup>
      </div>
    </BaseModal>
  );
};

export default PositionenModal;