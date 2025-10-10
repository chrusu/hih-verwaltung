/**
 * Authentication Routes (ES Module - Simplified for testing)
 * Login, Register (ohne OAuth für ersten Test)
 */

import express from 'express';
import { generateToken } from '../auth/jwt.mjs';
import { requireAuth } from '../middleware/auth.mjs';
import userService from '../services/userService.mjs';

const router = express.Router();

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
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validierung
    if (!email || !password) {
      return res.status(400).json({
        error: 'Validierung fehlgeschlagen',
        message: 'Email und Passwort sind erforderlich'
      });
    }

    // User verifizieren
    const user = await userService.verifyPassword(email, password);

    if (!user) {
      return res.status(401).json({
        error: 'Login fehlgeschlagen',
        message: 'Email oder Passwort falsch'
      });
    }

    // Token generieren
    const token = generateToken(user);

    res.json({
      success: true,
      user,
      token
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({
      error: 'Login fehlgeschlagen',
      message: error.message
    });
  }
});

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

export default router;
