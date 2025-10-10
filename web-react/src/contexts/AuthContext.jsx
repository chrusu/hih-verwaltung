/**
 * Authentication Context
 * Globaler Auth-State für die gesamte App
 */

import React, { createContext, useState, useEffect, useCallback } from 'react';
import api from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Token aus localStorage laden
   */
  const getToken = () => {
    return localStorage.getItem('jwt_token');
  };

  /**
   * Token in localStorage speichern
   */
  const setToken = (token) => {
    if (token) {
      localStorage.setItem('jwt_token', token);
    } else {
      localStorage.removeItem('jwt_token');
    }
  };

  /**
   * Aktuellen User laden (bei App-Start)
   */
  const loadUser = useCallback(async () => {
    const token = getToken();
    
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await api.get('/auth/me');

      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (err) {
      console.error('Load user error:', err);
      // Token ungültig → löschen
      setToken(null);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Login mit Email/Passwort
   */
  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    try {
      const response = await api.post('/auth/login', {
        email,
        password
      });

      if (response.data.success) {
        setToken(response.data.token);
        setUser(response.data.user);
        return { success: true };
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login fehlgeschlagen';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Registrierung
   */
  const register = async (email, password, name) => {
    setError(null);
    setLoading(true);

    try {
      const response = await api.post('/auth/register', {
        email,
        password,
        name
      });

      if (response.data.success) {
        setToken(response.data.token);
        setUser(response.data.user);
        return { success: true };
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registrierung fehlgeschlagen';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Logout
   */
  const logout = () => {
    setToken(null);
    setUser(null);
    setError(null);
    
    // Event dispatchen damit andere Contexts reagieren können
    window.dispatchEvent(new CustomEvent('auth:logout'));
  };

  /**
   * Bei App-Start: User laden falls Token vorhanden
   */
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    getToken
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
