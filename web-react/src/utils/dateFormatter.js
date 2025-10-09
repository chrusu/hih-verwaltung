/**
 * Date Formatting Utilities
 * Zentrale Funktionen für Datum-Konvertierung in der App
 */

/**
 * Formatiert ein Date-Objekt oder ISO-String zu YYYY-MM-DD für HTML Input[type="date"]
 * @param {Date|string|null|undefined} dateInput - Datum zum Formatieren
 * @returns {string} Formatiertes Datum im Format YYYY-MM-DD oder leerer String
 */
export const formatDateForInput = (dateInput) => {
  if (!dateInput) return '';
  
  try {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    
    // Prüfe ob valides Datum
    if (isNaN(date.getTime())) return '';
    
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  } catch (error) {
    console.error('Fehler beim Formatieren des Datums:', error);
    return '';
  }
};

/**
 * Formatiert ein Datum für Anzeige (DD.MM.YYYY - Schweizer Format)
 * @param {Date|string|null|undefined} dateInput - Datum zum Formatieren
 * @returns {string} Formatiertes Datum im Format DD.MM.YYYY oder leerer String
 */
export const formatDateForDisplay = (dateInput) => {
  if (!dateInput) return '';
  
  try {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    
    // Prüfe ob valides Datum
    if (isNaN(date.getTime())) return '';
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}.${month}.${year}`;
  } catch (error) {
    console.error('Fehler beim Formatieren des Datums:', error);
    return '';
  }
};

/**
 * Parst einen String zu einem Date-Objekt
 * @param {string} dateString - Datum-String (verschiedene Formate unterstützt)
 * @returns {Date|null} Date-Objekt oder null bei Fehler
 */
export const parseDate = (dateString) => {
  if (!dateString) return null;
  
  try {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
  } catch (error) {
    console.error('Fehler beim Parsen des Datums:', error);
    return null;
  }
};

/**
 * Gibt das heutige Datum als YYYY-MM-DD String zurück
 * @returns {string} Heutiges Datum im Format YYYY-MM-DD
 */
export const getTodayFormatted = () => {
  return formatDateForInput(new Date());
};

/**
 * Berechnet ein Datum X Tage in der Zukunft
 * @param {number} days - Anzahl Tage in der Zukunft
 * @param {Date} fromDate - Start-Datum (default: heute)
 * @returns {string} Berechnetes Datum im Format YYYY-MM-DD
 */
export const getFutureDateFormatted = (days, fromDate = new Date()) => {
  const futureDate = new Date(fromDate);
  futureDate.setDate(futureDate.getDate() + days);
  return formatDateForInput(futureDate);
};

/**
 * Berechnet ein Datum X Monate in der Zukunft
 * @param {number} months - Anzahl Monate in der Zukunft
 * @param {Date} fromDate - Start-Datum (default: heute)
 * @returns {string} Berechnetes Datum im Format YYYY-MM-DD
 */
export const getDatePlusMonths = (months, fromDate = new Date()) => {
  const futureDate = new Date(fromDate);
  futureDate.setMonth(futureDate.getMonth() + months);
  return formatDateForInput(futureDate);
};

/**
 * Prüft ob ein Datum in der Vergangenheit liegt
 * @param {Date|string} dateInput - Zu prüfendes Datum
 * @returns {boolean} true wenn Datum in Vergangenheit
 */
export const isPastDate = (dateInput) => {
  if (!dateInput) return false;
  
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return date < today;
};

/**
 * Prüft ob ein Datum valide ist
 * @param {any} dateInput - Zu prüfendes Datum
 * @returns {boolean} true wenn valides Datum
 */
export const isValidDate = (dateInput) => {
  if (!dateInput) return false;
  
  try {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return !isNaN(date.getTime());
  } catch {
    return false;
  }
};
