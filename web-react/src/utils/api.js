/**
 * Axios API Instance
 * Konfiguriert mit Auth und Mandanten Interceptors
 */

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Axios Instance erstellen
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Für Cookies/Session
});

/**
 * Request Interceptor
 * Fügt JWT-Token zu jedem Request hinzu
 * (Mandant wird automatisch aus User-ID im Backend abgeleitet)
 */
api.interceptors.request.use(
  (config) => {
    // JWT Token aus localStorage holen
    const token = localStorage.getItem('jwt_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Debug-Logging (nur in development)
    if (import.meta.env.DEV) {
      console.log(`🌐 API Request: ${config.method?.toUpperCase()} ${config.url}`, {
        token: token ? '✓' : '✗'
      });
    }

    return config;
  },
  (error) => {
    console.error('❌ Request Interceptor Error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * Behandelt Errors zentral (401, 403, etc.)
 */
api.interceptors.response.use(
  (response) => {
    // Erfolgreiche Response
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      // 401 Unauthorized - Token ungültig oder abgelaufen
      if (status === 401) {
        console.warn('⚠️ 401 Unauthorized - Token ungültig');
        
        // Token löschen
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('current_mandant_id');
        
        // User zur Login-Seite redirecten (durch AuthContext)
        window.dispatchEvent(new CustomEvent('auth:logout'));
        
        return Promise.reject(new Error('Sitzung abgelaufen. Bitte erneut anmelden.'));
      }

      // 403 Forbidden - Keine Berechtigung
      if (status === 403) {
        console.warn('⚠️ 403 Forbidden - Keine Berechtigung');
        return Promise.reject(new Error(data.message || 'Keine Berechtigung für diese Aktion'));
      }

      // 404 Not Found
      if (status === 404) {
        return Promise.reject(new Error(data.message || 'Ressource nicht gefunden'));
      }

      // 500 Server Error
      if (status >= 500) {
        console.error('❌ Server Error:', data);
        return Promise.reject(new Error('Server-Fehler. Bitte versuchen Sie es später erneut.'));
      }

      // Andere Errors
      return Promise.reject(new Error(data.message || 'Ein Fehler ist aufgetreten'));
    }

    // Network Error (keine Response)
    if (error.request) {
      console.error('❌ Network Error:', error.message);
      return Promise.reject(new Error('Netzwerkfehler. Bitte prüfen Sie Ihre Internetverbindung.'));
    }

    // Anderer Error
    return Promise.reject(error);
  }
);

export default api;
