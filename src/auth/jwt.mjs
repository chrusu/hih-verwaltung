/**
 * JWT Utilities (ES Module)
 * Token-Generierung und -Verifizierung
 */

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d'; // Token gültig für 7 Tage

/**
 * JWT Token generieren
 */
export function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name
  };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
}

/**
 * JWT Token verifizieren
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

/**
 * Token aus Request extrahieren
 */
export function extractToken(req) {
  // Bearer Token aus Authorization Header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    return req.headers.authorization.substring(7);
  }
  
  // Token aus Cookie
  if (req.cookies && req.cookies.jwt) {
    return req.cookies.jwt;
  }
  
  // Token aus Query Parameter (für OAuth Callbacks)
  if (req.query && req.query.token) {
    return req.query.token;
  }
  
  return null;
}
