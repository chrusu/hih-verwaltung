/**
 * Authentication Middleware
 * Schützt Routes und extrahiert User aus Token
 */

const { verifyToken, extractToken } = require('../auth/jwt');
const userService = require('../services/userService');

/**
 * Middleware: User muss authentifiziert sein
 */
async function requireAuth(req, res, next) {
  try {
    const token = extractToken(req);
    
    if (!token) {
      return res.status(401).json({
        error: 'Nicht authentifiziert',
        message: 'Bitte einloggen'
      });
    }

    const decoded = verifyToken(token);
    
    if (!decoded) {
      return res.status(401).json({
        error: 'Ungültiger Token',
        message: 'Token ist abgelaufen oder ungültig'
      });
    }

    // User aus DB laden
    const user = await userService.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({
        error: 'User nicht gefunden',
        message: 'Bitte erneut einloggen'
      });
    }

    // User an Request anhängen
    req.user = user;
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    return res.status(500).json({
      error: 'Server-Fehler',
      message: 'Authentifizierung fehlgeschlagen'
    });
  }
}

/**
 * Middleware: User optional authentifiziert
 * (setzt req.user falls vorhanden, aber kein Error falls nicht)
 */
async function optionalAuth(req, res, next) {
  try {
    const token = extractToken(req);
    
    if (token) {
      const decoded = verifyToken(token);
      
      if (decoded) {
        const user = await userService.findById(decoded.id);
        if (user) {
          req.user = user;
        }
      }
    }
    
    next();
  } catch (error) {
    // Bei Fehler trotzdem weiter (optionalAuth)
    next();
  }
}

module.exports = {
  requireAuth,
  optionalAuth
};
