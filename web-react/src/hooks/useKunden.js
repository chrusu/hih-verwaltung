import { useState, useEffect } from 'react';
import kundenService from '../services/kundenService';

export const useKunden = () => {
  const [kunden, setKunden] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadKunden = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await kundenService.getAll();
      setKunden(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
      console.error('Fehler beim Laden der Kunden:', err);
      setKunden([]); // Fallback auf leeres Array
    } finally {
      setLoading(false);
    }
  };

  const createKunde = async (kundenData) => {
    setLoading(true);
    setError(null);
    
    try {
      const neuerKunde = await kundenService.create(kundenData);
      setKunden(prev => [...prev, neuerKunde]);
      return neuerKunde;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateKunde = async (id, kundenData) => {
    setLoading(true);
    setError(null);
    
    try {
      const aktualisierterKunde = await kundenService.update(id, kundenData);
      setKunden(prev => 
        prev.map(kunde => 
          kunde.id === id ? aktualisierterKunde : kunde
        )
      );
      return aktualisierterKunde;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteKunde = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      await kundenService.delete(id);
      setKunden(prev => prev.filter(kunde => kunde.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Initial laden beim Mount
  useEffect(() => {
    loadKunden();
  }, []);

  return {
    kunden: Array.isArray(kunden) ? kunden : [],
    loading,
    error,
    loadKunden,
    refreshKunden: loadKunden, // Alias für Kompatibilität
    createKunde,
    updateKunde,
    deleteKunde,
  };
};

export default useKunden;