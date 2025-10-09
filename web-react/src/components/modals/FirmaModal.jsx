import React, { useEffect, useState } from 'react';
import BaseModal from './BaseModal';
import * as FormComponents from '../common/FormComponents';
import { useFormValidation } from '../../hooks/useFormValidation';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

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

const ColorPickerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const ColorPreview = styled.div`
  width: 60px;
  height: 40px;
  border: 2px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.sm};
  background: ${props => props.color || '#bd00ff'};
  cursor: pointer;
`;

const ColorInput = styled(Input)`
  flex: 1;
`;

const validateFirma = (data) => {
  const errors = {};
  
  if (!data.name?.trim()) {
    errors.name = 'Firmenname ist erforderlich';
  }
  
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Ungültige E-Mail-Adresse';
  }
  
  if (data.mwstSatz !== undefined && (isNaN(data.mwstSatz) || data.mwstSatz < 0 || data.mwstSatz > 100)) {
    errors.mwstSatz = 'MwSt-Satz muss zwischen 0 und 100 liegen';
  }
  
  return errors;
};

const FirmaModal = ({ 
  isOpen, 
  onClose, 
  firma = null, 
  onSave,
  loading = false 
}) => {
  // Initial Values (ohne Logo/Unterschrift)
  const getInitialValues = () => {
    if (firma) {
      return {
        name: firma.name || '',
        strasse: firma.strasse || '',
        plz: firma.plz || '',
        ort: firma.ort || '',
        land: firma.land || 'Schweiz',
        email: firma.email || '',
        telefon: firma.telefon || '',
        website: firma.website || '',
        uid: firma.uid || '',
        iban: firma.iban || '',
        mwstSatz: firma.mwstSatz !== undefined ? firma.mwstSatz : 0,
        mwstPflichtig: firma.mwstPflichtig || false,
        accentColor: firma['accent-color'] || firma.accentColor || '#bd00ff',
        mainFont: firma['main-font'] || firma.mainFont || 'Lexend Exa',
        slogan: firma.slogan || ''
      };
    }
    
    return {
      name: '',
      strasse: '',
      plz: '',
      ort: '',
      land: 'Schweiz',
      email: '',
      telefon: '',
      website: '',
      uid: '',
      iban: '',
      mwstSatz: 0,
      mwstPflichtig: false,
      accentColor: '#bd00ff',
      mainFont: 'Lexend Exa',
      slogan: ''
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
  } = useFormValidation(getInitialValues(), validateFirma);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData(getInitialValues());
    } else {
      resetForm();
    }
  }, [firma, isOpen]);

  const onSubmit = () => {
    // Übergebe nur formData (ohne Files)
    onSave(formData);
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  const isEditing = !!firma;
  const title = isEditing ? `Firmenprofil bearbeiten: ${firma?.name}` : 'Neues Firmenprofil';

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleCancel}
      title={title}
      closeOnOverlay={!loading}
      wide={true}
    >
      <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit); }}>
        <FormSection>
          <FormSectionTitle>Grunddaten</FormSectionTitle>
          
          <FormGroup>
            <Label required>Firmenname</Label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              disabled={loading}
              placeholder="Hinderling Internet Handwerk"
            />
            {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </FormGroup>

          <FormRow>
            <FormGroup flex={2}>
              <Label>Strasse & Hausnummer</Label>
              <Input
                type="text"
                value={formData.strasse}
                onChange={(e) => handleChange('strasse', e.target.value)}
                disabled={loading}
                placeholder="Werkhofstrasse 11"
              />
            </FormGroup>
            
            <FormGroup flex={1}>
              <Label>PLZ</Label>
              <Input
                type="text"
                value={formData.plz}
                onChange={(e) => handleChange('plz', e.target.value)}
                disabled={loading}
                placeholder="2503"
              />
            </FormGroup>
            
            <FormGroup flex={2}>
              <Label>Ort</Label>
              <Input
                type="text"
                value={formData.ort}
                onChange={(e) => handleChange('ort', e.target.value)}
                disabled={loading}
                placeholder="Biel"
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label>Land</Label>
              <Input
                type="text"
                value={formData.land}
                onChange={(e) => handleChange('land', e.target.value)}
                disabled={loading}
                placeholder="Schweiz"
              />
            </FormGroup>
          </FormRow>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Kontaktdaten</FormSectionTitle>
          
          <FormRow>
            <FormGroup>
              <Label>E-Mail</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                disabled={loading}
                placeholder="hallo@beispiel.ch"
              />
              {errors.email && touched.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup>
              <Label>Telefon</Label>
              <Input
                type="tel"
                value={formData.telefon}
                onChange={(e) => handleChange('telefon', e.target.value)}
                disabled={loading}
                placeholder="079/123'45'67"
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label>Website</Label>
            <Input
              type="url"
              value={formData.website}
              onChange={(e) => handleChange('website', e.target.value)}
              disabled={loading}
              placeholder="https://www.beispiel.ch"
            />
          </FormGroup>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Steuer & Finanzen</FormSectionTitle>
          
          <FormRow>
            <FormGroup>
              <Label>UID-Nummer</Label>
              <Input
                type="text"
                value={formData.uid}
                onChange={(e) => handleChange('uid', e.target.value)}
                disabled={loading}
                placeholder="CHE-123.456.789"
              />
            </FormGroup>
            
            <FormGroup>
              <Label>IBAN</Label>
              <Input
                type="text"
                value={formData.iban}
                onChange={(e) => handleChange('iban', e.target.value)}
                disabled={loading}
                placeholder="CH93 0076 2011 6238 5295 7"
              />
            </FormGroup>
          </FormRow>

          <FormRow>
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
            
            <FormGroup>
              <Label>MwSt-pflichtig</Label>
              <Select
                value={formData.mwstPflichtig ? 'true' : 'false'}
                onChange={(e) => handleChange('mwstPflichtig', e.target.value === 'true')}
                disabled={loading}
              >
                <option value="false">Nein</option>
                <option value="true">Ja</option>
              </Select>
            </FormGroup>
          </FormRow>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Design & Branding</FormSectionTitle>
          
          <FormGroup>
            <Label>Akzentfarbe</Label>
            <ColorPickerWrapper>
              <ColorPreview 
                color={formData.accentColor}
                onClick={() => document.getElementById('colorPicker').click()}
              />
              <ColorInput
                id="colorPicker"
                type="color"
                value={formData.accentColor}
                onChange={(e) => handleChange('accentColor', e.target.value)}
                disabled={loading}
              />
              <Input
                type="text"
                value={formData.accentColor}
                onChange={(e) => handleChange('accentColor', e.target.value)}
                disabled={loading}
                placeholder="#bd00ff"
                style={{ flex: 1 }}
              />
            </ColorPickerWrapper>
          </FormGroup>

          <FormGroup>
            <Label>Hauptschriftart</Label>
            <Select
              value={formData.mainFont}
              onChange={(e) => handleChange('mainFont', e.target.value)}
              disabled={loading}
            >
              <option value="Lexend Exa">Lexend Exa</option>
              <option value="Urbanist">Urbanist</option>
              <option value="Arial">Arial</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times New Roman">Times New Roman</option>
            </Select>
          </FormGroup>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Zusätzliche Informationen</FormSectionTitle>
          
          <FormGroup>
            <Label>Slogan / Beschreibung</Label>
            <TextArea
              value={formData.slogan}
              onChange={(e) => handleChange('slogan', e.target.value)}
              disabled={loading}
              placeholder="Bruchsch ä nöii Website? - chum ufnes Kafi vrbi!"
              rows={3}
            />
          </FormGroup>
        </FormSection>

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

export default FirmaModal;
