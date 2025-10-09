import React, { useEffect } from 'react';
import BaseModal from './BaseModal';
import * as FormComponents from '../common/FormComponents';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useFirmaSettings } from '../../hooks/useFirmaSettings';
import { formatDateForInput, getTodayFormatted, getDatePlusMonths } from '../../utils/dateFormatter';
import { validateOfferte } from '../../utils/validationSchemas';

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
  // Firma-Einstellungen laden
  const { mwstSatz: defaultMwstSatz } = useFirmaSettings();
  
  // Initial Values
  const getInitialValues = () => {
    if (offerte) {
      return {
        titel: offerte.titel || '',
        kundeId: offerte.kundeId || '',
        datum: formatDateForInput(offerte.datum),
        gültigBis: formatDateForInput(offerte.gültigBis),
        status: offerte.status || 'entwurf',
        zahlungsbedingungen: offerte.zahlungsbedingungen || '30 Tage netto',
        mwstSatz: offerte.mwstSatz !== undefined ? offerte.mwstSatz : defaultMwstSatz,
        beschreibung: offerte.beschreibung || '',
        notizen: offerte.notizen || ''
      };
    }
    
    return {
      titel: '',
      kundeId: '',
      datum: getTodayFormatted(),
      gültigBis: getDatePlusMonths(1),
      status: 'entwurf',
      zahlungsbedingungen: '30 Tage netto',
      mwstSatz: defaultMwstSatz,
      beschreibung: '',
      notizen: ''
    };
  };

  // Form Validation Hook
  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFormData
  } = useFormValidation(getInitialValues(), validateOfferte);

  // Reset form when modal opens/closes or offerte changes
  useEffect(() => {
    if (isOpen) {
      setFormData(getInitialValues());
    }
  }, [offerte, isOpen, defaultMwstSatz]);

  const onSubmit = () => {
    onSave(formData);
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  const isEditing = !!offerte;
  const title = isEditing ? `Offerte bearbeiten: ${offerte?.nummer}` : 'Neue Offerte';

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleCancel}
      title={title}
      closeOnOverlay={!loading}
    >
      <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit); }}>
        <FormSection>
          <FormSectionTitle>Offerten-Grunddaten</FormSectionTitle>
          
          <FormGroup>
            <Label required>Titel</Label>
            <Input
              type="text"
              value={formData.titel}
              onChange={(e) => handleChange('titel', e.target.value)}
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
                onChange={(e) => handleChange('kundeId', e.target.value)}
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
              <Label required>Offertendatum</Label>
              <Input
                type="date"
                value={formData.datum}
                onChange={(e) => handleChange('datum', e.target.value)}
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
                onChange={(e) => handleChange('gültigBis', e.target.value)}
                onBlur={() => handleBlur('gültigBis')}
                disabled={loading}
              />
              {errors.gültigBis && touched.gültigBis && (
                <ErrorMessage>{errors.gültigBis}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup>
              <Label>Status</Label>
              <Select
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value)}
                disabled={loading}
              >
                <option value="entwurf">Entwurf</option>
                <option value="versendet">Versendet</option>
                <option value="angenommen">Angenommen</option>
                <option value="abgelehnt">Abgelehnt</option>
              </Select>
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
                onChange={(e) => handleChange('zahlungsbedingungen', e.target.value)}
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
                onChange={(e) => handleChange('mwstSatz', parseFloat(e.target.value) || 0)}
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
              onChange={(e) => handleChange('beschreibung', e.target.value)}
              disabled={loading}
              placeholder="Kurze Beschreibung der Leistungen..."
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Interne Notizen</Label>
            <TextArea
              value={formData.notizen}
              onChange={(e) => handleChange('notizen', e.target.value)}
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