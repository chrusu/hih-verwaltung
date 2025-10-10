/**
 * Authentication Routes
 * Login, Register, OAuth, Logout
 */

const express = require('express');
const router = express.Router();
const passport = require('../auth/passport');
const { generateToken } = require('../auth/jwt');
const { requireAuth } = require('../middleware/auth');
const userService = require('../services/userService');

/**
 * POST /api/auth/register
 * Registrierung mit Email/Passwort
 */
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Validierung
    if (!email || !password) {
      return res.status(400).json({
        error: 'Validierung fehlgeschlagen',
        message: 'Email und Passwort sind erforderlich'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: 'Validierung fehlgeschlagen',
        message: 'Passwort muss mindestens 6 Zeichen lang sein'
      });
    }

    // User erstellen
    const user = await userService.create({
      email,
      password,
      name: name || email.split('@')[0]
    });

    // Token generieren
    const token = generateToken(user);

    res.json({
      success: true,
      user,
      token
    });
  } catch (error) {
    console.error('Register Error:', error);
    
    if (error.message === 'Email bereits registriert') {
      return res.status(400).json({
        error: 'Email bereits registriert',
        message: 'Diese Email-Adresse ist bereits registriert'
      });
    }

    res.status(500).json({
      error: 'Registrierung fehlgeschlagen',
      message: error.message
    });
  }
});

/**
 * POST /api/auth/login
 * Login mit Email/Passwort
 */
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({
        error: 'Login fehlgeschlagen',
        message: err.message
      });
    }

    if (!user) {
      return res.status(401).json({
        error: 'Login fehlgeschlagen',
        message: info.message || 'Email oder Passwort falsch'
      });
    }

    // Token generieren
    const token = generateToken(user);

    res.json({
      success: true,
      user,
      token
    });
  })(req, res, next);
});

/**
 * GET /api/auth/google
 * Google OAuth initiieren
 */
router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

/**
 * GET /api/auth/google/callback
 * Google OAuth Callback
 */
router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login?error=google' }),
  (req, res) => {
    // Token generieren
    const token = generateToken(req.user);
    
    // Redirect zum Frontend mit Token
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    res.redirect(`${frontendUrl}/auth/callback?token=${token}`);
  }
);

/**
 * GET /api/auth/github
 * GitHub OAuth initiieren
 */
router.get('/github',
  passport.authenticate('github', {
    scope: ['user:email']
  })
);

/**
 * GET /api/auth/github/callback
 * GitHub OAuth Callback
 */
router.get('/github/callback',
  passport.authenticate('github', { session: false, failureRedirect: '/login?error=github' }),
  (req, res) => {
    // Token generieren
    const token = generateToken(req.user);
    
    // Redirect zum Frontend mit Token
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    res.redirect(`${frontendUrl}/auth/callback?token=${token}`);
  }
);

/**
 * GET /api/auth/me
 * Aktuellen User abrufen
 */
router.get('/me', requireAuth, (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

/**
 * POST /api/auth/logout
 * Logout (Client-seitig Token löschen)
 */
router.post('/logout', (req, res) => {
  res.json({
    success: true,
    message: 'Erfolgreich ausgeloggt'
  });
});

module.exports = router;
