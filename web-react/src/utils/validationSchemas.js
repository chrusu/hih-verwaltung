/**
 * Validation Schemas
 * Zentrale Validierungs-Logik für alle Formulare
 * Deklarative Schemas statt prozeduraler Code-Duplikation
 */

/**
 * Validiert Kunden-Formular
 * @param {Object} formData - Kunden-Formulardaten
 * @returns {Object} Fehler-Objekt { fieldName: errorMessage }
 */
export const validateKunde = (formData) => {
  const errors = {};
  
  // Name validieren
  if (!formData.name?.trim()) {
    errors.name = 'Firmenname ist erforderlich';
  }
  
  // Email validieren (optional, aber wenn vorhanden dann Format prüfen)
  if (formData.email && formData.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Ungültige E-Mail-Adresse';
    }
  }
  
  // Telefon validieren (optional, aber wenn vorhanden dann Format prüfen)
  if (formData.telefon && formData.telefon.trim()) {
    const phoneRegex = /^[+\d\s()-]+$/;
    if (!phoneRegex.test(formData.telefon)) {
      errors.telefon = 'Ungültige Telefonnummer (nur Ziffern, +, -, (, ), Leerzeichen)';
    }
  }
  
  // Website validieren (optional, aber wenn vorhanden dann Format prüfen)
  if (formData.website && formData.website.trim()) {
    try {
      new URL(formData.website);
    } catch {
      errors.website = 'Ungültige URL (muss mit http:// oder https:// beginnen)';
    }
  }
  
  return errors;
};

/**
 * Validiert Offerten-Formular
 * @param {Object} formData - Offerten-Formulardaten
 * @returns {Object} Fehler-Objekt
 */
export const validateOfferte = (formData) => {
  const errors = {};
  
  // Titel
  if (!formData.titel?.trim()) {
    errors.titel = 'Titel ist erforderlich';
  }
  
  // Kunde
  if (!formData.kundeId) {
    errors.kundeId = 'Kunde muss ausgewählt werden';
  }
  
  // Datum
  if (!formData.datum) {
    errors.datum = 'Datum ist erforderlich';
  }
  
  // Gültig bis
  if (!formData.gültigBis) {
    errors.gültigBis = 'Gültigkeitsdatum ist erforderlich';
  } else if (formData.datum && new Date(formData.gültigBis) <= new Date(formData.datum)) {
    errors.gültigBis = 'Gültigkeitsdatum muss nach dem Offertendatum liegen';
  }
  
  // MwSt-Satz
  const mwstSatz = parseFloat(formData.mwstSatz);
  if (isNaN(mwstSatz) || mwstSatz < 0 || mwstSatz > 100) {
    errors.mwstSatz = 'MwSt-Satz muss zwischen 0 und 100% liegen';
  }
  
  return errors;
};

/**
 * Validiert Rechnungs-Formular
 * @param {Object} formData - Rechnungs-Formulardaten
 * @returns {Object} Fehler-Objekt
 */
export const validateRechnung = (formData) => {
  const errors = {};
  
  // Titel
  if (!formData.titel?.trim()) {
    errors.titel = 'Titel ist erforderlich';
  }
  
  // Kunde
  if (!formData.kundeId) {
    errors.kundeId = 'Kunde muss ausgewählt werden';
  }
  
  // Datum
  if (!formData.datum) {
    errors.datum = 'Datum ist erforderlich';
  }
  
  // Fälligkeitsdatum
  if (!formData.faelligkeitsdatum) {
    errors.faelligkeitsdatum = 'Fälligkeitsdatum ist erforderlich';
  } else if (formData.datum && new Date(formData.faelligkeitsdatum) < new Date(formData.datum)) {
    errors.faelligkeitsdatum = 'Fälligkeitsdatum darf nicht vor dem Rechnungsdatum liegen';
  }
  
  // MwSt-Satz
  const mwstSatz = parseFloat(formData.mwstSatz);
  if (isNaN(mwstSatz) || mwstSatz < 0 || mwstSatz > 100) {
    errors.mwstSatz = 'MwSt-Satz muss zwischen 0 und 100% liegen';
  }
  
  // IBAN (optional, aber wenn vorhanden dann Format prüfen)
  if (formData.iban && formData.iban.trim()) {
    const ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/;
    const ibanClean = formData.iban.replace(/\s/g, '').toUpperCase();
    if (!ibanRegex.test(ibanClean)) {
      errors.iban = 'Ungültige IBAN';
    }
  }
  
  return errors;
};

/**
 * Validiert Position (für Offerten/Rechnungen)
 * @param {Object} formData - Positions-Formulardaten
 * @returns {Object} Fehler-Objekt
 */
export const validatePosition = (formData) => {
  const errors = {};
  
  // Beschreibung
  if (!formData.beschreibung?.trim()) {
    errors.beschreibung = 'Beschreibung ist erforderlich';
  }
  
  // Menge
  const menge = parseFloat(formData.menge);
  if (isNaN(menge) || menge <= 0) {
    errors.menge = 'Menge muss größer als 0 sein';
  }
  
  // Einheit
  if (!formData.einheit?.trim()) {
    errors.einheit = 'Einheit ist erforderlich';
  }
  
  // Einzelpreis
  const einzelpreis = parseFloat(formData.einzelpreis);
  if (isNaN(einzelpreis) || einzelpreis < 0) {
    errors.einzelpreis = 'Einzelpreis muss 0 oder größer sein';
  }
  
  return errors;
};

/**
 * Helper: Prüft ob Email valide ist
 * @param {string} email - Email-Adresse
 * @returns {boolean} true wenn valide
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Helper: Prüft ob Telefonnummer valide ist (Swiss Format)
 * @param {string} phone - Telefonnummer
 * @returns {boolean} true wenn valide
 */
export const isValidPhone = (phone) => {
  if (!phone) return false;
  const phoneRegex = /^[+\d\s()-]+$/;
  return phoneRegex.test(phone);
};

/**
 * Helper: Prüft ob URL valide ist
 * @param {string} url - URL
 * @returns {boolean} true wenn valide
 */
export const isValidURL = (url) => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Helper: Prüft ob IBAN valide ist (Format-Check, keine Prüfsumme)
 * @param {string} iban - IBAN
 * @returns {boolean} true wenn valide
 */
export const isValidIBAN = (iban) => {
  if (!iban) return false;
  const ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/;
  const ibanClean = iban.replace(/\s/g, '').toUpperCase();
  return ibanRegex.test(ibanClean);
};

/**
 * Helper: Prüft ob Datum valide ist
 * @param {string|Date} date - Datum
 * @returns {boolean} true wenn valide
 */
export const isValidDate = (date) => {
  if (!date) return false;
  const dateObj = date instanceof Date ? date : new Date(date);
  return !isNaN(dateObj.getTime());
};

/**
 * Helper: Prüft ob Datum in Zukunft liegt
 * @param {string|Date} date - Datum
 * @returns {boolean} true wenn in Zukunft
 */
export const isFutureDate = (date) => {
  if (!isValidDate(date)) return false;
  const dateObj = date instanceof Date ? date : new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return dateObj >= today;
};

/**
 * Helper: Prüft ob date2 nach date1 liegt
 * @param {string|Date} date1 - Erstes Datum
 * @param {string|Date} date2 - Zweites Datum
 * @returns {boolean} true wenn date2 nach date1
 */
export const isDateAfter = (date1, date2) => {
  if (!isValidDate(date1) || !isValidDate(date2)) return false;
  const d1 = date1 instanceof Date ? date1 : new Date(date1);
  const d2 = date2 instanceof Date ? date2 : new Date(date2);
  return d2 > d1;
};
