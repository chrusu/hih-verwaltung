/**
 * Custom Hook: useFirmaSettings
 * Lädt Firma-Einstellungen (MwSt-Satz, IBAN, etc.) zentral
 * Vermeidet Duplikation in OffertenModal und RechnungenModal
 */

import { useState, useEffect } from 'react';
import firmaService from '../services/firmaService';

export const useFirmaSettings = () => {
  const [settings, setSettings] = useState({
    mwstSatz: 0,
    iban: '',
    name: '',
    adresse: '',
    telefon: '',
    email: '',
    website: ''
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFirmaSettings = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const firma = await firmaService.get();
        
        if (firma) {
          setSettings({
            mwstSatz: firma.mwstSatz !== undefined ? firma.mwstSatz : 0,
            iban: firma.iban || '',
            name: firma.name || '',
            adresse: firma.adresse || '',
            telefon: firma.telefon || '',
            email: firma.email || '',
            website: firma.website || ''
          });
        }
      } catch (err) {
        console.error('Fehler beim Laden der Firmeneinstellungen:', err);
        setError(err.message || 'Fehler beim Laden der Firmeneinstellungen');
      } finally {
        setLoading(false);
      }
    };

    loadFirmaSettings();
  }, []);

  return {
    settings,
    loading,
    error,
    mwstSatz: settings.mwstSatz,
    iban: settings.iban,
    firmaName: settings.name,
    firmaAdresse: settings.adresse,
    firmaTelefon: settings.telefon,
    firmaEmail: settings.email,
    firmaWebsite: settings.website
  };
};

export default useFirmaSettings;
