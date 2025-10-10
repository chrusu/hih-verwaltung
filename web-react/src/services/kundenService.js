import api from '../utils/api';

export const kundenService = {
  // Alle Kunden laden
  async getAll() {
    try {
      const response = await api.get('/kunden');
      // Backend gibt { success: true, data: [...] } zurück
      return response.data.success ? response.data.data : [];
    } catch (error) {
      console.error('Fehler beim Laden der Kunden:', error);
      throw error;
    }
  },

  // Einzelnen Kunden laden
  async getById(id) {
    try {
      const response = await api.get(`/kunden/${id}`);
      return response.data.success ? response.data.data : null;
    } catch (error) {
      console.error(`Fehler beim Laden des Kunden ${id}:`, error);
      throw error;
    }
  },

  // Neuen Kunden erstellen
  async create(kundenData) {
    try {
      const response = await api.post('/kunden', kundenData);
      return response.data.success ? response.data.data : null;
    } catch (error) {
      console.error('Fehler beim Erstellen des Kunden:', error);
      throw error;
    }
  },

  // Kunden aktualisieren
  async update(id, kundenData) {
    try {
      const response = await api.put(`/kunden/${id}`, kundenData);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Aktualisieren des Kunden ${id}:`, error);
      throw error;
    }
  },

  // Kunden löschen
  async delete(id) {
    try {
      const response = await api.delete(`/kunden/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Löschen des Kunden ${id}:`, error);
      throw error;
    }
  }
};

export default kundenService;