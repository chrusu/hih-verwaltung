import api from './api';

export const firmaService = {
  // Firmendaten laden
  async get() {
    try {
      const response = await api.get('/firma');
      return response.data.success ? response.data.data : null;
    } catch (error) {
      console.error('Fehler beim Laden der Firmendaten:', error);
      throw error;
    }
  },

  // Firmendaten aktualisieren
  async update(firmaData) {
    try {
      const response = await api.put('/firma', firmaData);
      return response.data.success ? response.data.data : null;
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Firmendaten:', error);
      throw error;
    }
  }
};

export default firmaService;
