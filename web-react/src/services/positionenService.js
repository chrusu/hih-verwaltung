import api from '../utils/api';

class PositionenService {
  // Alle Positionen einer Offerte laden
  async getPositionen(offerteId) {
    try {
      const response = await api.get(`/api/offerten/${offerteId}/positionen`);
      return response.data;
    } catch (error) {
      console.error('Fehler beim Laden der Positionen:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Laden der Positionen');
    }
  }

  // Neue Position erstellen
  async createPosition(offerteId, positionData) {
    try {
      const response = await api.post(`/api/offerten/${offerteId}/positionen`, positionData);
      return response.data;
    } catch (error) {
      console.error('Fehler beim Erstellen der Position:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Erstellen der Position');
    }
  }

  // Position aktualisieren
  async updatePosition(offerteId, positionId, positionData) {
    try {
      const response = await api.put(`/api/offerten/${offerteId}/positionen/${positionId}`, positionData);
      return response.data;
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Position:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Aktualisieren der Position');
    }
  }

  // Position löschen
  async deletePosition(offerteId, positionId) {
    try {
      await api.delete(`/api/offerten/${offerteId}/positionen/${positionId}`);
      return true;
    } catch (error) {
      console.error('Fehler beim Löschen der Position:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Löschen der Position');
    }
  }

  // Positionen-Statistiken einer Offerte
  async getPositionenStatistik(offerteId) {
    try {
      const response = await api.get(`/api/offerten/${offerteId}/positionen/statistik`);
      return response.data;
    } catch (error) {
      console.error('Fehler beim Laden der Statistiken:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Laden der Statistiken');
    }
  }

  // Alle Positionen sortieren/neu ordnen
  async reorderPositionen(offerteId, positionenOrder) {
    try {
      const response = await api.put(`/api/offerten/${offerteId}/positionen/reorder`, {
        positions: positionenOrder
      });
      return response.data;
    } catch (error) {
      console.error('Fehler beim Sortieren der Positionen:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Sortieren der Positionen');
    }
  }

  // Position duplizieren
  async duplicatePosition(offerteId, positionId) {
    try {
      const response = await api.post(`/api/offerten/${offerteId}/positionen/${positionId}/duplicate`);
      return response.data;
    } catch (error) {
      console.error('Fehler beim Duplizieren der Position:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Duplizieren der Position');
    }
  }

  // Position von einer anderen Offerte kopieren
  async copyPositionFromOfferte(targetOfferteId, sourceOfferteId, positionId) {
    try {
      const response = await api.post(`/api/offerten/${targetOfferteId}/positionen/copy`, {
        sourceOfferteId,
        positionId
      });
      return response.data;
    } catch (error) {
      console.error('Fehler beim Kopieren der Position:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Kopieren der Position');
    }
  }

  // Standard-Positionen für eine Kategorie laden
  async getStandardPositionen(kategorie) {
    try {
      const response = await api.get(`/api/positionen/standards/${kategorie}`);
      return response.data;
    } catch (error) {
      console.error('Fehler beim Laden der Standard-Positionen:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Laden der Standard-Positionen');
    }
  }

  // Positionsvorlage speichern
  async savePositionTemplate(templateData) {
    try {
      const response = await api.post('/api/positionen/templates', templateData);
      return response.data;
    } catch (error) {
      console.error('Fehler beim Speichern der Vorlage:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Speichern der Vorlage');
    }
  }

  // Alle Positionsvorlagen laden
  async getPositionTemplates() {
    try {
      const response = await api.get('/api/positionen/templates');
      return response.data;
    } catch (error) {
      console.error('Fehler beim Laden der Vorlagen:', error);
      throw new Error(error.response?.data?.message || 'Fehler beim Laden der Vorlagen');
    }
  }

  // Berechnungen für Preise
  calculateGesamtpreis(menge, einzelpreis, rabatt = 0) {
    const subtotal = menge * einzelpreis;
    const rabattBetrag = subtotal * (rabatt / 100);
    return subtotal - rabattBetrag;
  }

  calculateOffertenSumme(positionen) {
    const subtotal = positionen.reduce((sum, pos) => sum + pos.gesamtpreis, 0);
    return {
      subtotal,
      anzahlPositionen: positionen.length,
      kategorien: this.getKategorienAuswertung(positionen)
    };
  }

  getKategorienAuswertung(positionen) {
    const kategorien = {};
    positionen.forEach(pos => {
      if (!kategorien[pos.kategorie]) {
        kategorien[pos.kategorie] = {
          anzahl: 0,
          gesamtpreis: 0,
          stunden: 0
        };
      }
      kategorien[pos.kategorie].anzahl++;
      kategorien[pos.kategorie].gesamtpreis += pos.gesamtpreis;
      if (pos.einheit === 'Std') {
        kategorien[pos.kategorie].stunden += pos.menge;
      }
    });
    return kategorien;
  }
}

const positionenService = new PositionenService();
export default positionenService;