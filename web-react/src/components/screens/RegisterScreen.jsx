/**
 * RegisterScreen Component
 * Terminal-styled Registration Interface
 */

import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import TerminalWindow from '../layout/TerminalWindow';
import './AuthScreens.css';

const RegisterScreen = ({ onSwitchToLogin }) => {
  const { register, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [localError, setLocalError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Bitte Namen eingeben';
    }
    if (!formData.email.trim()) {
      return 'Bitte E-Mail eingeben';
    }
    if (!formData.email.includes('@')) {
      return 'Ungültige E-Mail-Adresse';
    }
    if (!formData.password) {
      return 'Bitte Passwort eingeben';
    }
    if (formData.password.length < 6) {
      return 'Passwort muss mindestens 6 Zeichen lang sein';
    }
    if (formData.password !== formData.confirmPassword) {
      return 'Passwörter stimmen nicht überein';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    // Validierung
    const validationError = validateForm();
    if (validationError) {
      setLocalError(validationError);
      return;
    }

    try {
      await register(formData.email, formData.password, formData.name);
      // Erfolg - AuthContext kümmert sich um Navigation
    } catch (err) {
      setLocalError(err.message || 'Registrierung fehlgeschlagen');
    }
  };

  const displayError = localError || error;

  return (
    <div className="auth-screen-container">
      <TerminalWindow title="HIH-Verwaltung › Registrierung">
        <div className="auth-screen-content">
          {/* ASCII Logo */}
          <div className="auth-logo">
            <pre className="terminal-ascii-art">
{`
╔╗╔╔═╗╦ ╦╔═╗╦═╗
║║║║╣ ║║║║╣ ╠╦╝
╝╚╝╚═╝╚╩╝╚═╝╩╚═
  ╔═╗╔═╗╔═╗╔═╗╦ ╦╔╗╔╔╦╗
  ╠═╣║  ║  ║ ║║ ║║║║ ║ 
  ╩ ╩╚═╝╚═╝╚═╝╚═╝╝╚╝ ╩ 
`}
            </pre>
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="terminal-input-group">
              <label className="terminal-label">
                <span className="terminal-prompt">$</span> Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="terminal-input"
                placeholder="Max Mustermann"
                disabled={loading}
                autoComplete="name"
                autoFocus
              />
            </div>

            <div className="terminal-input-group">
              <label className="terminal-label">
                <span className="terminal-prompt">$</span> E-Mail:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="terminal-input"
                placeholder="max@example.com"
                disabled={loading}
                autoComplete="email"
              />
            </div>

            <div className="terminal-input-group">
              <label className="terminal-label">
                <span className="terminal-prompt">$</span> Passwort:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="terminal-input"
                placeholder="min. 6 Zeichen"
                disabled={loading}
                autoComplete="new-password"
              />
            </div>

            <div className="terminal-input-group">
              <label className="terminal-label">
                <span className="terminal-prompt">$</span> Passwort bestätigen:
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="terminal-input"
                placeholder="••••••••"
                disabled={loading}
                autoComplete="new-password"
              />
            </div>

            {/* Error Display */}
            {displayError && (
              <div className="terminal-error">
                <span className="terminal-error-icon">✗</span>
                <span className="terminal-error-message">{displayError}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="terminal-button terminal-button-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="terminal-spinner">⣾⣽⣻⢿⡿⣟⣯⣷</span>
                  <span>Registrierung läuft...</span>
                </>
              ) : (
                <>
                  <span className="terminal-button-icon">✓</span>
                  <span>Account erstellen</span>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="auth-divider">
              <span className="auth-divider-text">───────────────────</span>
            </div>

            {/* Login Link */}
            <div className="auth-link-container">
              <span className="terminal-text-muted">Bereits registriert?</span>
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="terminal-link"
                disabled={loading}
              >
                ← Zurück zum Login
              </button>
            </div>
          </form>

          {/* Footer Info */}
          <div className="auth-footer">
            <p className="terminal-text-muted terminal-text-small">
              <span className="terminal-prompt">ℹ</span> Dein Passwort wird sicher mit bcrypt verschlüsselt
            </p>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default RegisterScreen;
