import React, { useState, useEffect } from 'react';
import BaseModal from './BaseModal';
import * as FormComponents from '../common/FormComponents';
import firmaService from '../../services/firmaService';

const {
  Form,
  FormSection,
  FormSectionTitle,
  FormRow,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  ButtonGroup,
  Button,
  ErrorMessage
} = FormComponents;

const RechnungenModal = ({ 
  isOpen, 
  onClose, 
  rechnung = null, 
  kunden = [],
  onSave,
  onPositionenEdit,
  loading = false 
}) => {
  const [formData, setFormData] = useState({
    titel: '',
    kundeId: '',
    datum: '',
    faelligkeitsdatum: '',
    status: 'entwurf',
    zahlungsbedingungen: '30 Tage netto',
    mwstSatz: 0,
    iban: '',
    qrReferenz: '',
    beschreibung: '',
    notizen: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [defaultMwstSatz, setDefaultMwstSatz] = useState(0);
  const [defaultIban, setDefaultIban] = useState('');

  // Lade Standard-Einstellungen von Firma
  useEffect(() => {
    const loadFirmaSettings = async () => {
      try {
        const firma = await firmaService.get();
        setDefaultMwstSatz(firma?.mwstSatz || 0);
        setDefaultIban(firma?.iban || '');
      } catch (error) {
        console.error('Fehler beim Laden der Firmeneinstellungen:', error);
      }
    };
    loadFirmaSettings();
  }, []);

  // Initialize form data when rechnung changes
  useEffect(() => {
    if (rechnung) {
      // Format dates for input fields
      const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // YYYY-MM-DD format
      };

      setFormData({
        titel: rechnung.titel || '',
        kundeId: rechnung.kundeId || '',
        datum: formatDate(rechnung.datum),
        faelligkeitsdatum: formatDate(rechnung.faelligkeitsdatum),
        status: rechnung.status || 'entwurf',
        zahlungsbedingungen: rechnung.zahlungsbedingungen || '30 Tage netto',
        mwstSatz: rechnung.mwstSatz !== undefined ? rechnung.mwstSatz : defaultMwstSatz,
        iban: rechnung.iban || defaultIban,
        qrReferenz: rechnung.qrReferenz || '',
        beschreibung: rechnung.beschreibung || '',
        notizen: rechnung.notizen || ''
      });
    } else {
      // Reset for new rechnung
      const today = new Date();
      const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
      
      setFormData({
        titel: '',
        kundeId: '',
        datum: today.toISOString().split('T')[0],
        faelligkeitsdatum: nextMonth.toISOString().split('T')[0],
        status: 'entwurf',
        zahlungsbedingungen: '30 Tage netto',
        mwstSatz: defaultMwstSatz,
        iban: defaultIban,
        qrReferenz: '',
        beschreibung: '',
        notizen: ''
      });
    }
    setErrors({});
    setTouched({});
  }, [rechnung, isOpen, defaultMwstSatz, defaultIban]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.titel.trim()) {
      newErrors.titel = 'Titel ist erforderlich';
    }
    
    if (!formData.kundeId) {
      newErrors.kundeId = 'Kunde muss ausgewählt werden';
    }
    
    if (!formData.datum) {
      newErrors.datum = 'Rechnungsdatum ist erforderlich';
    }
    
    if (!formData.faelligkeitsdatum) {
      newErrors.faelligkeitsdatum = 'Fälligkeitsdatum ist erforderlich';
    }
    
    // Validate dates
    if (formData.datum && formData.faelligkeitsdatum) {
      const rechnungsdatum = new Date(formData.datum);
      const faelligkeitsdatum = new Date(formData.faelligkeitsdatum);
      
      if (faelligkeitsdatum < rechnungsdatum) {
        newErrors.faelligkeitsdatum = 'Fälligkeitsdatum muss nach dem Rechnungsdatum liegen';
      }
    }
    
    if (formData.mwstSatz < 0 || formData.mwstSatz > 100) {
      newErrors.mwstSatz = 'MwSt-Satz muss zwischen 0 und 100 liegen';
    }

    // Validate IBAN format (basic)
    if (formData.iban && !formData.iban.match(/^CH\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d$/)) {
      newErrors.iban = 'Ungültiges IBAN-Format (CH.. erforderlich)';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Prepare data for submission
    const submitData = {
      ...formData,
      mwstSatz: parseFloat(formData.mwstSatz)
    };
    
    onSave(submitData);
  };

  const handleCancel = () => {
    onClose();
  };

  const isEditing = !!rechnung;
  const title = isEditing ? `Rechnung bearbeiten: ${rechnung?.nummer}` : 'Neue Rechnung';

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      closeOnOverlay={!loading}
    >
      <Form onSubmit={handleSubmit}>
        <FormSection>
          <FormSectionTitle>Rechnungs-Grunddaten</FormSectionTitle>
          
          <FormGroup>
            <Label required>Titel</Label>
            <Input
              type="text"
              value={formData.titel}
              onChange={(e) => handleInputChange('titel', e.target.value)}
              onBlur={() => handleBlur('titel')}
              disabled={loading}
              placeholder="WordPress Website mit Shop"
            />
            {errors.titel && touched.titel && (
              <ErrorMessage>{errors.titel}</ErrorMessage>
            )}
          </FormGroup>
          
          <FormRow>
            <FormGroup>
              <Label required>Kunde</Label>
              <Select
                value={formData.kundeId}
                onChange={(e) => handleInputChange('kundeId', e.target.value)}
                onBlur={() => handleBlur('kundeId')}
                disabled={loading}
              >
                <option value="">-- Kunde auswählen --</option>
                {kunden && kunden.map(kunde => (
                  <option key={kunde.id} value={kunde.id}>
                    {kunde.firma || kunde.name}
                  </option>
                ))}
              </Select>
              {errors.kundeId && touched.kundeId && (
                <ErrorMessage>{errors.kundeId}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label required>Rechnungsdatum</Label>
              <Input
                type="date"
                value={formData.datum}
                onChange={(e) => handleInputChange('datum', e.target.value)}
                onBlur={() => handleBlur('datum')}
                disabled={loading}
              />
              {errors.datum && touched.datum && (
                <ErrorMessage>{errors.datum}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup>
              <Label required>Fälligkeitsdatum</Label>
              <Input
                type="date"
                value={formData.faelligkeitsdatum}
                onChange={(e) => handleInputChange('faelligkeitsdatum', e.target.value)}
                onBlur={() => handleBlur('faelligkeitsdatum')}
                disabled={loading}
              />
              {errors.faelligkeitsdatum && touched.faelligkeitsdatum && (
                <ErrorMessage>{errors.faelligkeitsdatum}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup>
              <Label>Status</Label>
              <Select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                disabled={loading}
              >
                <option value="entwurf">Entwurf</option>
                <option value="fertig">Fertig</option>
                <option value="gesendet">Gesendet</option>
                <option value="bezahlt">Bezahlt</option>
              </Select>
            </FormGroup>
          </FormRow>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Zahlungsinformationen</FormSectionTitle>
          
          <FormGroup>
            <Label required>IBAN</Label>
            <Input
              type="text"
              value={formData.iban}
              onChange={(e) => handleInputChange('iban', e.target.value)}
              onBlur={() => handleBlur('iban')}
              disabled={loading}
              placeholder="CH93 0076 2011 6238 5295 7"
            />
            {errors.iban && touched.iban && (
              <ErrorMessage>{errors.iban}</ErrorMessage>
            )}
          </FormGroup>

          {isEditing && formData.qrReferenz && (
            <FormGroup>
              <Label>QR-Referenz</Label>
              <Input
                type="text"
                value={formData.qrReferenz}
                disabled
                readOnly
              />
            </FormGroup>
          )}
          
          <FormRow>
            <FormGroup flex={2}>
              <Label>Zahlungsbedingungen</Label>
              <Input
                type="text"
                value={formData.zahlungsbedingungen}
                onChange={(e) => handleInputChange('zahlungsbedingungen', e.target.value)}
                disabled={loading}
                placeholder="30 Tage netto"
              />
            </FormGroup>
            
            <FormGroup>
              <Label>MwSt-Satz (%)</Label>
              <Input
                type="number"
                step="0.1"
                min="0"
                max="100"
                value={formData.mwstSatz}
                onChange={(e) => handleInputChange('mwstSatz', parseFloat(e.target.value) || 0)}
                onBlur={() => handleBlur('mwstSatz')}
                disabled={loading}
              />
              {errors.mwstSatz && touched.mwstSatz && (
                <ErrorMessage>{errors.mwstSatz}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Beschreibung & Notizen</FormSectionTitle>
          
          <FormGroup>
            <Label>Beschreibung</Label>
            <TextArea
              value={formData.beschreibung}
              onChange={(e) => handleInputChange('beschreibung', e.target.value)}
              disabled={loading}
              placeholder="Kurze Beschreibung der Leistungen..."
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Interne Notizen</Label>
            <TextArea
              value={formData.notizen}
              onChange={(e) => handleInputChange('notizen', e.target.value)}
              disabled={loading}
              placeholder="Interne Notizen (nicht sichtbar für Kunde)..."
            />
          </FormGroup>
        </FormSection>

        {isEditing && (
          <FormSection>
            <FormSectionTitle>Statistiken & Aktionen</FormSectionTitle>
            <FormRow>
              <FormGroup>
                <Label>Gesamtbetrag</Label>
                <Input
                  type="text"
                  value={`CHF ${rechnung.gesamtBrutto?.toFixed(2) || '0.00'}`}
                  disabled
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label>Erstellt am</Label>
                <Input
                  type="text"
                  value={rechnung.datum ? new Date(rechnung.datum).toLocaleDateString('de-CH') : ''}
                  disabled
                  readOnly
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label>Positionen verwalten</Label>
                <Button
                  type="button"
                  onClick={() => onPositionenEdit && onPositionenEdit(rechnung)}
                  disabled={loading}
                  variant="secondary"
                  style={{ width: '100%' }}
                >
                  📋 Positionen bearbeiten
                </Button>
              </FormGroup>
            </FormRow>
          </FormSection>
        )}

        <ButtonGroup>
          <Button 
            type="button" 
            onClick={handleCancel}
            disabled={loading}
          >
            Abbrechen
          </Button>
          <Button 
            type="submit" 
            variant="primary"
            disabled={loading}
          >
            {loading ? 'Speichern...' : (isEditing ? 'Aktualisieren' : 'Erstellen')}
          </Button>
        </ButtonGroup>
      </Form>
    </BaseModal>
  );
};

export default RechnungenModal;
