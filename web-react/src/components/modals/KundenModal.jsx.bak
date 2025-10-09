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

const KundenModal = ({ 
  isOpen, 
  onClose, 
  kunde = null, 
  onSave,
  loading = false 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    typ: 'privat',
    adresse: {
      strasse: '',
      plz: '',
      ort: '',
      land: 'Schweiz'
    },
    notizen: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Initialize form data when kunde changes
  useEffect(() => {
    if (kunde) {
      setFormData({
        name: kunde.name || '',
        email: kunde.email || '',
        telefon: kunde.telefon || '',
        typ: kunde.typ || 'privat',
        adresse: {
          strasse: kunde.adresse?.strasse || '',
          plz: kunde.adresse?.plz || '',
          ort: kunde.adresse?.ort || '',
          land: kunde.adresse?.land || 'Schweiz'
        },
        notizen: kunde.notizen || ''
      });
    } else {
      // Reset for new kunde
      setFormData({
        name: '',
        email: '',
        telefon: '',
        typ: 'privat',
        adresse: {
          strasse: '',
          plz: '',
          ort: '',
          land: 'Schweiz'
        },
        notizen: ''
      });
    }
    setErrors({});
    setTouched({});
  }, [kunde, isOpen]);

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
    
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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    
    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefon ist erforderlich';
    }
    
    if (!formData.adresse.plz.trim()) {
      newErrors['adresse.plz'] = 'PLZ ist erforderlich';
    }
    
    if (!formData.adresse.ort.trim()) {
      newErrors['adresse.ort'] = 'Ort ist erforderlich';
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

  const isEditing = !!kunde;
  const title = isEditing ? `Kunde bearbeiten: ${kunde?.name}` : 'Neuer Kunde';

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      closeOnOverlay={!loading}
    >
      <Form onSubmit={handleSubmit}>
        <FormSection>
          <FormSectionTitle>Grunddaten</FormSectionTitle>
          
          <FormRow>
            <FormGroup flex={2}>
              <Label required>Name</Label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                disabled={loading}
                placeholder="Vollständiger Name"
              />
              {errors.name && touched.name && (
                <ErrorMessage>{errors.name}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup>
              <Label>Typ</Label>
              <Select
                value={formData.typ}
                onChange={(e) => handleInputChange('typ', e.target.value)}
                disabled={loading}
              >
                <option value="privat">Privat</option>
                <option value="firma">Firma</option>
              </Select>
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <Label required>E-Mail</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                disabled={loading}
                placeholder="name@example.com"
              />
              {errors.email && touched.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup>
              <Label required>Telefon</Label>
              <Input
                type="tel"
                value={formData.telefon}
                onChange={(e) => handleInputChange('telefon', e.target.value)}
                onBlur={() => handleBlur('telefon')}
                disabled={loading}
                placeholder="012 345 67 89"
              />
              {errors.telefon && touched.telefon && (
                <ErrorMessage>{errors.telefon}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Adresse</FormSectionTitle>
          
          <FormGroup>
            <Label>Strasse & Hausnummer</Label>
            <Input
              type="text"
              value={formData.adresse.strasse}
              onChange={(e) => handleInputChange('adresse.strasse', e.target.value)}
              disabled={loading}
              placeholder="Musterstrasse 123"
            />
          </FormGroup>
          
          <FormRow>
            <FormGroup flex={1}>
              <Label required>PLZ</Label>
              <Input
                type="text"
                value={formData.adresse.plz}
                onChange={(e) => handleInputChange('adresse.plz', e.target.value)}
                onBlur={() => handleBlur('adresse.plz')}
                disabled={loading}
                placeholder="8000"
              />
              {errors['adresse.plz'] && touched['adresse.plz'] && (
                <ErrorMessage>{errors['adresse.plz']}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup flex={2}>
              <Label required>Ort</Label>
              <Input
                type="text"
                value={formData.adresse.ort}
                onChange={(e) => handleInputChange('adresse.ort', e.target.value)}
                onBlur={() => handleBlur('adresse.ort')}
                disabled={loading}
                placeholder="Zürich"
              />
              {errors['adresse.ort'] && touched['adresse.ort'] && (
                <ErrorMessage>{errors['adresse.ort']}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup flex={1}>
              <Label>Land</Label>
              <Input
                type="text"
                value={formData.adresse.land}
                onChange={(e) => handleInputChange('adresse.land', e.target.value)}
                disabled={loading}
                placeholder="Schweiz"
              />
            </FormGroup>
          </FormRow>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Zusätzliche Informationen</FormSectionTitle>
          
          <FormGroup>
            <Label>Notizen</Label>
            <TextArea
              value={formData.notizen}
              onChange={(e) => handleInputChange('notizen', e.target.value)}
              disabled={loading}
              placeholder="Zusätzliche Notizen zum Kunden..."
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

export default KundenModal;