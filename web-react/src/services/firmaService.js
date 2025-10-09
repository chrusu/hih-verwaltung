import api from './api';

export const firmaService = {
  // Firmendaten laden (mit Logo & Unterschrift URLs)
  async getFirma() {
    try {
      const response = await api.get('/firma');
      return response.data;
    } catch (error) {
      console.error('Fehler beim Laden der Firmendaten:', error);
      throw error;
    }
  },

  // Firmendaten aktualisieren (mit File-Upload Support)
  async updateFirma(formData) {
    try {
      // Wenn FormData, direkt senden, sonst JSON
      const isFormData = formData instanceof FormData;
      
      const response = await api.put('/firma', formData, {
        headers: isFormData ? {
          'Content-Type': 'multipart/form-data'
        } : undefined
      });
      
      return response.data;
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Firmendaten:', error);
      throw error;
    }
  },

  // Deprecated - für Kompatibilität
  async get() {
    return this.getFirma();
  },

  async update(firmaData) {
    return this.updateFirma(firmaData);
  }
};

export default firmaService;
