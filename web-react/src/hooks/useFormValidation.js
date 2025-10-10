/**
 * Custom Hook: useFormValidation
 * Generischer Hook für Form-State-Management mit Validation
 * Eliminiert Duplikation in allen Modal-Komponenten
 */

import { useState, useCallback } from 'react';

/**
 * @param {Object} initialValues - Initial form values
 * @param {Function} validationSchema - Validation function (formData) => { fieldName: errorMessage }
 * @returns {Object} Form state and handlers
 */
export const useFormValidation = (initialValues = {}, validationSchema = null) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Einzelnes Feld ändern (unterstützt verschachtelte Pfade wie "adresse.strasse")
   */
  const handleChange = useCallback((field, value) => {
    setFormData(prev => {
      // Wenn Feld einen Punkt enthält, verschachtelte Struktur aktualisieren
      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        return {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: value
          }
        };
      }
      
      // Einfaches Feld
      return {
        ...prev,
        [field]: value
      };
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  /**
   * Mehrere Felder gleichzeitig ändern
   */
  const setValues = useCallback((values) => {
    setFormData(prev => ({
      ...prev,
      ...values
    }));
  }, []);

  /**
   * Feld als "berührt" markieren (für Blur-Events)
   */
  const handleBlur = useCallback((field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
    
    // Validate single field on blur if validation schema exists
    if (validationSchema) {
      const fieldErrors = validationSchema(formData);
      if (fieldErrors[field]) {
        setErrors(prev => ({
          ...prev,
          [field]: fieldErrors[field]
        }));
      }
    }
  }, [formData, validationSchema]);

  /**
   * Validiert alle Felder
   * @returns {boolean} true wenn valide, false wenn Fehler
   */
  const validate = useCallback(() => {
    if (!validationSchema) return true;
    
    const validationErrors = validationSchema(formData);
    setErrors(validationErrors);
    
    return Object.keys(validationErrors).length === 0;
  }, [formData, validationSchema]);

  /**
   * Form zurücksetzen
   */
  const resetForm = useCallback((newValues = initialValues) => {
    setFormData(newValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  /**
   * Setzt Form-Daten (z.B. beim Editieren)
   */
  const setFormData_direct = useCallback((data) => {
    setFormData(data);
    setErrors({});
    setTouched({});
  }, []);

  /**
   * Submit-Handler mit Validation
   * @param {Function} onSubmit - Callback der ausgeführt wird wenn Form valide
   */
  const handleSubmit = useCallback(async (onSubmit) => {
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate
    if (!validate()) {
      return false;
    }

    // Submit
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validate]);

  /**
   * Setzt einen spezifischen Fehler (z.B. von Server)
   */
  const setError = useCallback((field, message) => {
    setErrors(prev => ({
      ...prev,
      [field]: message
    }));
  }, []);

  /**
   * Prüft ob ein Feld einen Fehler hat UND berührt wurde
   */
  const hasError = useCallback((field) => {
    return touched[field] && errors[field];
  }, [touched, errors]);

  return {
    // State
    formData,
    errors,
    touched,
    isSubmitting,
    
    // Handlers
    handleChange,
    handleBlur,
    handleSubmit,
    
    // Utilities
    validate,
    resetForm,
    setFormData: setFormData_direct,
    setValues,
    setError,
    hasError,
    
    // Computed
    isValid: Object.keys(errors).length === 0,
    isDirty: Object.keys(touched).length > 0
  };
};

export default useFormValidation;
