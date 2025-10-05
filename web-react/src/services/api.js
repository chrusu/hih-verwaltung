import axios from 'axios';

// API Base URL - automatisch ermittelt oder aus Umgebung
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || window.location.origin;

// Axios Instanz mit Basis-Konfiguration
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 Sekunden Timeout
});

// Request Interceptor für Logging
api.interceptors.request.use(
  (config) => {
    console.log(`🌐 ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor für Error Handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Response Error:', error);
    
    // Bessere Fehlermeldungen
    if (error.response) {
      // Server antwortete mit Fehlercode
      const message = error.response.data?.message || error.response.statusText;
      throw new Error(`API Fehler (${error.response.status}): ${message}`);
    } else if (error.request) {
      // Request wurde gesendet, aber keine Antwort erhalten
      throw new Error('Keine Antwort vom Server - Bitte Verbindung prüfen');
    } else {
      // Anderer Fehler
      throw new Error(`Unbekannter Fehler: ${error.message}`);
    }
  }
);

export default api;