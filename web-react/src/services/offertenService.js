import api from './api';

export const offertenService = {
  // Alle Offerten laden
  async getAll() {
    try {
      const response = await api.get('/offerten');
      // Backend gibt { success: true, data: [...] } zurück
      return response.data.success ? response.data.data : [];
    } catch (error) {
      console.error('Fehler beim Laden der Offerten:', error);
      throw error;
    }
  },

  // Einzelne Offerte laden
  async getById(id) {
    try {
      const response = await api.get(`/offerten/${id}`);
      return response.data.success ? response.data.data : null;
    } catch (error) {
      console.error(`Fehler beim Laden der Offerte ${id}:`, error);
      throw error;
    }
  },

  // Neue Offerte erstellen
  async create(offertenData) {
    try {
      const response = await api.post('/offerten', offertenData);
      return response.data.success ? response.data.data : null;
    } catch (error) {
      console.error('Fehler beim Erstellen der Offerte:', error);
      throw error;
    }
  },

  // Offerte aktualisieren
  async update(id, offertenData) {
    try {
      const response = await api.put(`/offerten/${id}`, offertenData);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Aktualisieren der Offerte ${id}:`, error);
      throw error;
    }
  },

  // Offerte löschen
  async delete(id) {
    try {
      const response = await api.delete(`/offerten/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Löschen der Offerte ${id}:`, error);
      throw error;
    }
  },

  // Positionen einer Offerte laden
  async getPositionen(offerteId) {
    try {
      const response = await api.get(`/offerten/${offerteId}/positionen`);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Laden der Positionen für Offerte ${offerteId}:`, error);
      throw error;
    }
  },

  // Position hinzufügen
  async addPosition(offerteId, positionData) {
    try {
      const response = await api.post(`/offerten/${offerteId}/positionen`, positionData);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Hinzufügen der Position zur Offerte ${offerteId}:`, error);
      throw error;
    }
  },

  // Position aktualisieren
  async updatePosition(offerteId, positionId, positionData) {
    try {
      const response = await api.put(`/offerten/${offerteId}/positionen/${positionId}`, positionData);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Aktualisieren der Position ${positionId}:`, error);
      throw error;
    }
  },

  // Position löschen
  async deletePosition(offerteId, positionId) {
    try {
      const response = await api.delete(`/offerten/${offerteId}/positionen/${positionId}`);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Löschen der Position ${positionId}:`, error);
      throw error;
    }
  },

  // PDF Export
  async exportToPdf(id) {
    try {
      const response = await api.get(`/offerten/${id}/pdf`, {
        responseType: 'blob' // Wichtig für PDF-Download
      });
      
      // PDF-Blob in downloadbaren Link umwandeln
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(pdfBlob);
      
      // Download auslösen
      const link = document.createElement('a');
      link.href = url;
      link.download = `offerte_${id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // URL wieder freigeben
      window.URL.revokeObjectURL(url);
      
      return { success: true, message: 'PDF wurde heruntergeladen' };
    } catch (error) {
      console.error(`Fehler beim PDF-Export der Offerte ${id}:`, error);
      throw error;
    }
  }
};

export default offertenService;