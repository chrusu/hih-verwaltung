import { useState, useEffect } from 'react';
import offertenService from '../services/offertenService';

export const useOfferten = () => {
  const [offerten, setOfferten] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadOfferten = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await offertenService.getAll();
      setOfferten(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
      console.error('Fehler beim Laden der Offerten:', err);
      setOfferten([]); // Fallback auf leeres Array
    } finally {
      setLoading(false);
    }
  };

  const createOfferte = async (offertenData) => {
    setLoading(true);
    setError(null);
    
    try {
      const neueOfferte = await offertenService.create(offertenData);
      setOfferten(prev => [...prev, neueOfferte]);
      return neueOfferte;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateOfferte = async (id, offertenData) => {
    setLoading(true);
    setError(null);
    
    try {
      const aktualisierteOfferte = await offertenService.update(id, offertenData);
      setOfferten(prev => 
        prev.map(offerte => 
          offerte.id === id ? aktualisierteOfferte : offerte
        )
      );
      return aktualisierteOfferte;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteOfferte = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      await offertenService.delete(id);
      setOfferten(prev => prev.filter(offerte => offerte.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const exportOfferteToPdf = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      await offertenService.exportToPdf(id);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Initial laden beim Mount
  useEffect(() => {
    loadOfferten();
  }, []);

  return {
    offerten: Array.isArray(offerten) ? offerten : [],
    loading,
    error,
    loadOfferten,
    refreshOfferten: loadOfferten, // Alias für Kompatibilität
    createOfferte,
    updateOfferte,
    deleteOfferte,
  };
};

export default useOfferten;