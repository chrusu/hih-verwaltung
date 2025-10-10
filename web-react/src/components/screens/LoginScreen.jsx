/**
 * LoginScreen Component
 * Terminal-styled Login Interface
 */

import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import TerminalWindow from '../layout/TerminalWindow';
import './AuthScreens.css';

const LoginScreen = ({ onSwitchToRegister }) => {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    // Validierung
    if (!email.trim()) {
      setLocalError('Bitte E-Mail eingeben');
      return;
    }
    if (!password.trim()) {
      setLocalError('Bitte Passwort eingeben');
      return;
    }

    try {
      await login(email, password);
      // Erfolg - AuthContext kümmert sich um Navigation
    } catch (err) {
      setLocalError(err.message || 'Login fehlgeschlagen');
    }
  };

  const displayError = localError || error;

  return (
    <div className="auth-screen-container">
      <TerminalWindow title="HIH-Verwaltung › Login">
        <div className="auth-screen-content">
          {/* ASCII Logo */}
          <div className="auth-logo">
            <pre className="terminal-ascii-art">
{`
╦ ╦╦╦ ╦   ╦  ╔═╗╔═╗╦╔╗╔
╠═╣║╠═╣───║  ║ ║║ ╦║║║║
╩ ╩╩╩ ╩   ╩═╝╚═╝╚═╝╩╝╚╝
`}
            </pre>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="terminal-input-group">
              <label className="terminal-label">
                <span className="terminal-prompt">$</span> E-Mail:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="terminal-input"
                placeholder="deine@email.com"
                disabled={loading}
                autoComplete="email"
                autoFocus
              />
            </div>

            <div className="terminal-input-group">
              <label className="terminal-label">
                <span className="terminal-prompt">$</span> Passwort:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="terminal-input"
                placeholder="••••••••"
                disabled={loading}
                autoComplete="current-password"
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
                  <span>Login läuft...</span>
                </>
              ) : (
                <>
                  <span className="terminal-button-icon">→</span>
                  <span>Login</span>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="auth-divider">
              <span className="auth-divider-text">───────────────────</span>
            </div>

            {/* Register Link */}
            <div className="auth-link-container">
              <span className="terminal-text-muted">Noch kein Account?</span>
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="terminal-link"
                disabled={loading}
              >
                Jetzt registrieren →
              </button>
            </div>
          </form>

          {/* Footer Info */}
          <div className="auth-footer">
            <p className="terminal-text-muted terminal-text-small">
              <span className="terminal-prompt">ℹ</span> Sichere Authentifizierung mit JWT-Token
            </p>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default LoginScreen;
