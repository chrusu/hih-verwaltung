import React, { useState, useEffect } from 'react';
import BaseModal from './BaseModal';
import * as FormComponents from '../common/FormComponents';
import * as TableComponents from '../common/TableComponents';
import { SmallButton } from '../common/Buttons';
import { useFormValidation } from '../../hooks/useFormValidation';
import { validatePosition } from '../../utils/validationSchemas';
import offertenService from '../../services/offertenService';
import rechnungenService from '../../services/rechnungenService';
import { theme } from '../../themes/terminal';

const {
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  ButtonGroup,
  Button
} = FormComponents;

const {
  Table,
  Th,
  Td,
  Tr,
  TotalRow,
  MobileCard,
  CardHeader,
  CardField,
  EmptyState
} = TableComponents;

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

  const EINHEITEN = ['Std', 'Tag', 'Stk', 'Psch', 'Monat'];
  const KATEGORIEN = ['Beratung', 'Entwicklung', 'Design', 'Testing', 'Wartung', 'Hosting', 'E-Commerce', 'Sonstiges'];

  // Initial Values für neue Position
  const getInitialValues = () => ({
    beschreibung: '',
    menge: 1,
    einheit: 'Std',
    einzelpreis: 0,
    rabatt: 0,
    kategorie: 'Entwicklung'
  });

  // Form Validation Hook für neue Position
  const {
    formData: newPosition,
    setFormData: setNewPosition,
    resetForm: resetNewPosition
  } = useFormValidation(getInitialValues(), validatePosition);

  // Positionen laden
  useEffect(() => {
    if (isOpen && offerte) {
      loadPositionen();
    }
  }, [isOpen, offerte]);

  const loadPositionen = async () => {
    if (!offerte) return;
    
    try {
      const isRechnung = offerte.nummer?.startsWith('REC-');
      const service = isRechnung ? rechnungenService : offertenService;
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
      const isRechnung = offerte.nummer?.startsWith('REC-');
      const service = isRechnung ? rechnungenService : offertenService;
      
      await service.updatePosition(offerte.id, editingId, updatedData);

      setPositionen(prev => prev.map(pos => 
        pos.id === editingId ? { ...pos, ...updatedData } : pos
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
      const isRechnung = offerte.nummer?.startsWith('REC-');
      const service = isRechnung ? rechnungenService : offertenService;
      await service.deletePosition(offerte.id, positionId);
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

      const isRechnung = offerte.nummer?.startsWith('REC-');
      const service = isRechnung ? rechnungenService : offertenService;
      const response = await service.addPosition(offerte.id, positionData);
      const neuePosition = response.success ? response.data : response;

      setPositionen(prev => [...prev, neuePosition]);
      resetNewPosition();
      setIsAddingNew(false);
    } catch (error) {
      console.error('Fehler beim Hinzufügen der Position:', error);
      alert('Fehler beim Hinzufügen der Position: ' + error.message);
    }
  };

  // Render-Funktionen für Tabellenzellen
  const renderEditableCell = (position, field, type = 'text') => {
    if (editingId === position.id) {
      return (
        <Td editing>
          <Input
            type={type}
            value={editData[field] || ''}
            onChange={(e) => setEditData(prev => ({
              ...prev,
              [field]: type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value
            }))}
            style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs, margin: 0 }}
          />
        </Td>
      );
    }

    return (
      <Td numeric={type === 'number'}>
        {type === 'number' && typeof position[field] === 'number' 
          ? position[field].toFixed(2)
          : position[field]}
      </Td>
    );
  };

  const renderSelectableCell = (position, field, options) => {
    if (editingId === position.id) {
      return (
        <Td editing>
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
        </Td>
      );
    }

    return <Td>{position[field]}</Td>;
  };

  // Berechnungen
  const subtotal = positionen.reduce((sum, pos) => sum + pos.gesamtpreis, 0);
  const mwstBetrag = subtotal * ((offerte?.mwstSatz !== undefined ? offerte.mwstSatz : 7.7) / 100);
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
        {/* Desktop Tabelle */}
        <Table>
          <thead>
            <tr>
              <Th>Pos.</Th>
              <Th>Beschreibung</Th>
              <Th>Menge</Th>
              <Th>Einheit</Th>
              <Th>Einzelpreis</Th>
              <Th>Rabatt %</Th>
              <Th>Gesamtpreis</Th>
              <Th>Kategorie</Th>
              <Th>Aktionen</Th>
            </tr>
          </thead>
          <tbody>
            {positionen.map((position) => (
              <Tr 
                key={position.id} 
                editing={editingId === position.id}
              >
                <Td>{position.position}</Td>
                {renderEditableCell(position, 'beschreibung')}
                {renderEditableCell(position, 'menge', 'number')}
                {renderSelectableCell(position, 'einheit', EINHEITEN)}
                {renderEditableCell(position, 'einzelpreis', 'number')}
                {renderEditableCell(position, 'rabatt', 'number')}
                <Td numeric>CHF {position.gesamtpreis.toFixed(2)}</Td>
                {renderSelectableCell(position, 'kategorie', KATEGORIEN)}
                <Td actions>
                  {editingId === position.id ? (
                    <>
                      <SmallButton variant="success" onClick={handleSaveEdit}>✓</SmallButton>
                      <SmallButton onClick={handleCancelEdit}>✗</SmallButton>
                    </>
                  ) : (
                    <>
                      <SmallButton onClick={() => handleEdit(position)}>✎</SmallButton>
                      <SmallButton variant="danger" onClick={() => handleDelete(position.id)}>🗑</SmallButton>
                    </>
                  )}
                </Td>
              </Tr>
            ))}
            
            {/* Neue Position hinzufügen */}
            {isAddingNew && (
              <Tr editing>
                <Td>{positionen.length + 1}</Td>
                <Td editing>
                  <Input
                    value={newPosition.beschreibung}
                    onChange={(e) => setNewPosition(prev => ({...prev, beschreibung: e.target.value}))}
                    placeholder="Beschreibung..."
                    style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs, margin: 0 }}
                  />
                </Td>
                <Td editing>
                  <Input
                    type="number"
                    value={newPosition.menge}
                    onChange={(e) => setNewPosition(prev => ({...prev, menge: parseFloat(e.target.value) || 0}))}
                    style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs, margin: 0 }}
                  />
                </Td>
                <Td editing>
                  <Select
                    value={newPosition.einheit}
                    onChange={(e) => setNewPosition(prev => ({...prev, einheit: e.target.value}))}
                    style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs }}
                  >
                    {EINHEITEN.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Select>
                </Td>
                <Td editing>
                  <Input
                    type="number"
                    step="0.01"
                    value={newPosition.einzelpreis}
                    onChange={(e) => setNewPosition(prev => ({...prev, einzelpreis: parseFloat(e.target.value) || 0}))}
                    style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs, margin: 0 }}
                  />
                </Td>
                <Td editing>
                  <Input
                    type="number"
                    step="0.1"
                    value={newPosition.rabatt}
                    onChange={(e) => setNewPosition(prev => ({...prev, rabatt: parseFloat(e.target.value) || 0}))}
                    style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs, margin: 0 }}
                  />
                </Td>
                <Td numeric>
                  CHF {calculateGesamtpreis(newPosition.menge, newPosition.einzelpreis, newPosition.rabatt).toFixed(2)}
                </Td>
                <Td editing>
                  <Select
                    value={newPosition.kategorie}
                    onChange={(e) => setNewPosition(prev => ({...prev, kategorie: e.target.value}))}
                    style={{ fontSize: theme.fontSizes.sm, padding: theme.spacing.xs }}
                  >
                    {KATEGORIEN.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Select>
                </Td>
                <Td actions>
                  <SmallButton variant="success" onClick={handleAddNew}>✓</SmallButton>
                  <SmallButton onClick={() => setIsAddingNew(false)}>✗</SmallButton>
                </Td>
              </Tr>
            )}
            
            {/* Summen */}
            <TotalRow>
              <Td colSpan="6" style={{ textAlign: 'right', fontWeight: 'bold' }}>Subtotal:</Td>
              <Td numeric style={{ fontWeight: 'bold', color: theme.colors.accentGreen }}>
                CHF {subtotal.toFixed(2)}
              </Td>
              <Td colSpan="2"></Td>
            </TotalRow>
            <TotalRow>
              <Td colSpan="6" style={{ textAlign: 'right', fontWeight: 'bold' }}>
                MwSt ({offerte.mwstSatz !== undefined ? offerte.mwstSatz : 7.7}%):
              </Td>
              <Td numeric style={{ fontWeight: 'bold', color: theme.colors.accentYellow }}>
                CHF {mwstBetrag.toFixed(2)}
              </Td>
              <Td colSpan="2"></Td>
            </TotalRow>
            <TotalRow>
              <Td colSpan="6" style={{ textAlign: 'right', fontWeight: 'bold' }}>Gesamtbetrag:</Td>
              <Td numeric style={{ fontWeight: 'bold', color: theme.colors.accentBlue, fontSize: theme.fontSizes.base }}>
                CHF {gesamtBrutto.toFixed(2)}
              </Td>
              <Td colSpan="2"></Td>
            </TotalRow>
          </tbody>
        </Table>

        {/* Mobile Card View */}
        <div style={{ display: 'none' }} className="mobile-only">
          {positionen.map((position) => (
            <MobileCard 
              key={position.id}
              editing={editingId === position.id}
            >
              <CardHeader>
                <span style={{ fontWeight: 'bold', color: theme.colors.accentCyan }}>
                  Position {position.position}
                </span>
                <div style={{ display: 'flex', gap: theme.spacing.xs }}>
                  {editingId === position.id ? (
                    <>
                      <SmallButton variant="success" onClick={handleSaveEdit}>✓</SmallButton>
                      <SmallButton onClick={handleCancelEdit}>✗</SmallButton>
                    </>
                  ) : (
                    <>
                      <SmallButton onClick={() => handleEdit(position)}>✎</SmallButton>
                      <SmallButton variant="danger" onClick={() => handleDelete(position.id)}>🗑</SmallButton>
                    </>
                  )}
                </div>
              </CardHeader>
              
              <CardField label="Beschreibung" value={position.beschreibung} />
              <CardField label="Menge" value={`${position.menge} ${position.einheit}`} />
              <CardField label="Einzelpreis" value={`CHF ${position.einzelpreis.toFixed(2)}`} />
              <CardField label="Rabatt" value={`${position.rabatt}%`} />
              <CardField label="Kategorie" value={position.kategorie} />
              <CardField 
                label="Gesamtpreis" 
                value={`CHF ${position.gesamtpreis.toFixed(2)}`}
                highlight
              />
            </MobileCard>
          ))}

          <div style={{ 
            background: theme.colors.bgSecondary, 
            border: `2px solid ${theme.colors.accentGreen}`,
            borderRadius: theme.borderRadius.base,
            padding: theme.spacing.md,
            marginTop: theme.spacing.lg
          }}>
            <CardField label="Subtotal" value={`CHF ${subtotal.toFixed(2)}`} />
            <CardField 
              label={`MwSt (${offerte.mwstSatz !== undefined ? offerte.mwstSatz : 7.7}%)`} 
              value={`CHF ${mwstBetrag.toFixed(2)}`} 
            />
            <CardField 
              label="Gesamtbetrag" 
              value={`CHF ${gesamtBrutto.toFixed(2)}`}
              highlight
            />
          </div>
        </div>

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
              📝 {offerte.nummer?.startsWith('REC-') ? 'Rechnung' : 'Offerte'} bearbeiten
            </Button>
          )}
        </ButtonGroup>

        <ButtonGroup>
          <Button onClick={onClose}>Schließen</Button>
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
