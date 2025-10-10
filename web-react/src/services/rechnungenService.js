import api from '../utils/api';

export const rechnungenService = {
  // Alle Rechnungen laden
  async getAll() {
    try {
      const response = await api.get('/rechnungen');
      return response.data.success ? response.data.data : [];
    } catch (error) {
      console.error('Fehler beim Laden der Rechnungen:', error);
      throw error;
    }
  },

  // Einzelne Rechnung laden
  async getById(id) {
    try {
      const response = await api.get(`/rechnungen/${id}`);
      return response.data.success ? response.data.data : null;
    } catch (error) {
      console.error(`Fehler beim Laden der Rechnung ${id}:`, error);
      throw error;
    }
  },

  // Neue Rechnung erstellen
  async create(rechnungData) {
    try {
      const response = await api.post('/rechnungen', rechnungData);
      return response.data.success ? response.data.data : null;
    } catch (error) {
      console.error('Fehler beim Erstellen der Rechnung:', error);
      throw error;
    }
  },

  // Rechnung aus Offerte erstellen
  async createFromOfferte(offerteId) {
    try {
      const response = await api.post(`/rechnungen/from-offerte/${offerteId}`);
      return response.data.success ? response.data.data : null;
    } catch (error) {
      console.error('Fehler beim Erstellen der Rechnung aus Offerte:', error);
      throw error;
    }
  },

  // Rechnung aktualisieren
  async update(id, rechnungData) {
    try {
      const response = await api.put(`/rechnungen/${id}`, rechnungData);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Aktualisieren der Rechnung ${id}:`, error);
      throw error;
    }
  },

  // Rechnung löschen
  async delete(id) {
    try {
      const response = await api.delete(`/rechnungen/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Löschen der Rechnung ${id}:`, error);
      throw error;
    }
  },

  // Positionen einer Rechnung laden
  async getPositionen(rechnungId) {
    try {
      const response = await api.get(`/rechnungen/${rechnungId}/positionen`);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Laden der Positionen für Rechnung ${rechnungId}:`, error);
      throw error;
    }
  },

  // Position hinzufügen
  async addPosition(rechnungId, positionData) {
    try {
      const response = await api.post(`/rechnungen/${rechnungId}/positionen`, positionData);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Hinzufügen der Position zur Rechnung ${rechnungId}:`, error);
      throw error;
    }
  },

  // Position aktualisieren
  async updatePosition(rechnungId, positionId, positionData) {
    try {
      const response = await api.put(`/rechnungen/${rechnungId}/positionen/${positionId}`, positionData);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Aktualisieren der Position ${positionId}:`, error);
      throw error;
    }
  },

  // Position löschen
  async deletePosition(rechnungId, positionId) {
    try {
      const response = await api.delete(`/rechnungen/${rechnungId}/positionen/${positionId}`);
      return response.data;
    } catch (error) {
      console.error(`Fehler beim Löschen der Position ${positionId}:`, error);
      throw error;
    }
  },

  // PDF Export
  async exportToPdf(rechnungId) {
    try {
      const response = await api.get(`/rechnungen/${rechnungId}/pdf`, {
        responseType: 'blob'
      });
      
      // Dateiname aus Content-Disposition Header extrahieren
      const contentDisposition = response.headers['content-disposition'];
      let filename = `rechnung_${rechnungId}.pdf`;
      
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="?(.+)"?/);
        if (filenameMatch) {
          filename = filenameMatch[1];
        }
      }
      
      // Blob als Download anbieten
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      return { success: true, filename };
    } catch (error) {
      console.error(`Fehler beim PDF-Export der Rechnung ${rechnungId}:`, error);
      throw error;
    }
  }
};

export default rechnungenService;
