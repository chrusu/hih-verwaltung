import React, { useState, useEffect } from 'react';
import BaseModal from './BaseModal';
import * as FormComponents from '../common/FormComponents';

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

const OffertenModal = ({ 
  isOpen, 
  onClose, 
  offerte = null, 
  kunden = [],
  onSave,
  onPositionenEdit,
  loading = false 
}) => {
  const [formData, setFormData] = useState({
    titel: '',
    kundeId: '',
    datum: '',
    gültigBis: '',
    status: 'entwurf',
    zahlungsbedingungen: '30 Tage netto',
    mwstSatz: 7.7,
    beschreibung: '',
    notizen: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Initialize form data when offerte changes
  useEffect(() => {
    if (offerte) {
      // Format dates for input fields
      const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // YYYY-MM-DD format
      };

      setFormData({
        titel: offerte.titel || '',
        kundeId: offerte.kundeId || '',
        datum: formatDate(offerte.datum),
        gültigBis: formatDate(offerte.gültigBis),
        status: offerte.status || 'entwurf',
        zahlungsbedingungen: offerte.zahlungsbedingungen || '30 Tage netto',
        mwstSatz: offerte.mwstSatz || 7.7,
        beschreibung: offerte.beschreibung || '',
        notizen: offerte.notizen || ''
      });
    } else {
      // Reset for new offerte
      const today = new Date();
      const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
      
      setFormData({
        titel: '',
        kundeId: '',
        datum: today.toISOString().split('T')[0],
        gültigBis: nextMonth.toISOString().split('T')[0],
        status: 'entwurf',
        zahlungsbedingungen: '30 Tage netto',
        mwstSatz: 7.7,
        beschreibung: '',
        notizen: ''
      });
    }
    setErrors({});
    setTouched({});
  }, [offerte, isOpen]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.titel.trim()) {
      newErrors.titel = 'Titel ist erforderlich';
    }
    
    if (!formData.kundeId) {
      newErrors.kundeId = 'Kunde muss ausgewählt werden';
    }
    
    if (!formData.datum) {
      newErrors.datum = 'Datum ist erforderlich';
    }
    
    if (!formData.gültigBis) {
      newErrors.gültigBis = 'Gültigkeitsdatum ist erforderlich';
    } else if (new Date(formData.gültigBis) <= new Date(formData.datum)) {
      newErrors.gültigBis = 'Gültigkeitsdatum muss nach dem Offertendatum liegen';
    }
    
    if (formData.mwstSatz < 0 || formData.mwstSatz > 100) {
      newErrors.mwstSatz = 'MwSt-Satz muss zwischen 0 und 100% liegen';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      onSave(formData);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const isEditing = !!offerte;
  const title = isEditing ? `Offerte bearbeiten: ${offerte?.nummer}` : 'Neue Offerte';

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      closeOnOverlay={!loading}
    >
      <Form onSubmit={handleSubmit}>
        <FormSection>
          <FormSectionTitle>Offerten-Grunddaten</FormSectionTitle>
          
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
                <option value="">Kunde auswählen...</option>
                {kunden.map(kunde => (
                  <option key={kunde.id} value={kunde.id}>
                    {kunde.name} ({kunde.email})
                  </option>
                ))}
              </Select>
              {errors.kundeId && touched.kundeId && (
                <ErrorMessage>{errors.kundeId}</ErrorMessage>
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
                <option value="versendet">Versendet</option>
                <option value="angenommen">Angenommen</option>
                <option value="abgelehnt">Abgelehnt</option>
              </Select>
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <Label required>Offertendatum</Label>
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
              <Label required>Gültig bis</Label>
              <Input
                type="date"
                value={formData.gültigBis}
                onChange={(e) => handleInputChange('gültigBis', e.target.value)}
                onBlur={() => handleBlur('gültigBis')}
                disabled={loading}
              />
              {errors.gültigBis && touched.gültigBis && (
                <ErrorMessage>{errors.gültigBis}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Konditionen</FormSectionTitle>
          
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
                  value={`CHF ${offerte.gesamtBrutto?.toFixed(2) || '0.00'}`}
                  disabled
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label>Erstellt am</Label>
                <Input
                  type="text"
                  value={offerte.erstellt ? new Date(offerte.erstellt).toLocaleDateString('de-CH') : ''}
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
                  onClick={() => onPositionenEdit && onPositionenEdit(offerte)}
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

export default OffertenModal;