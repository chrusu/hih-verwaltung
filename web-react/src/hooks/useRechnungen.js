import { useState, useEffect, useCallback } from 'react';
import rechnungenService from '../services/rechnungenService';

const useRechnungen = () => {
  const [rechnungen, setRechnungen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadRechnungen = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await rechnungenService.getAll();
      setRechnungen(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Fehler beim Laden der Rechnungen:', err);
      setError(err.message || 'Fehler beim Laden der Rechnungen');
      setRechnungen([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRechnungen();
  }, [loadRechnungen]);

  const refreshRechnungen = useCallback(() => {
    return loadRechnungen();
  }, [loadRechnungen]);

  return {
    rechnungen,
    loading,
    error,
    refreshRechnungen
  };
};

export default useRechnungen;
