/**
 * User-Mandanten Middleware
 * Vereinfachte Version: 1 User = 1 Mandant
 * Setzt req.mandantPath basierend auf User-ID aus JWT
 */

import { verifyToken, extractToken } from '../auth/jwt.mjs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Middleware: User-Mandant aus JWT laden
 * Setzt req.mandantPath = 'data/mandanten/{userId}'
 */
export const loadUserMandant = async (req, res, next) => {
  try {
    const token = extractToken(req);
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Kein Token vorhanden'
      });
    }

    const decoded = verifyToken(token);
    
    if (!decoded || !decoded.id) {
      return res.status(401).json({
        success: false,
        message: 'Ungültiges Token'
      });
    }

    // User-ID für weitere Middleware/Routes verfügbar machen
    req.userId = decoded.id;
    
    // Mandanten-Basispfad setzen
    const mandantenBasePath = path.join(__dirname, '../../data/mandanten', decoded.id);
    req.mandantPath = mandantenBasePath;
    
    // Für Services: einzelne Pfade
    req.paths = {
      kunden: path.join(mandantenBasePath, 'kunden'),
      offerten: path.join(mandantenBasePath, 'offerten'),
      rechnungen: path.join(mandantenBasePath, 'rechnungen'),
      firma: path.join(mandantenBasePath, 'eigene_firma'),
      exports: path.join(mandantenBasePath, 'exports')
    };
    
    next();
  } catch (error) {
    console.error('Fehler in loadUserMandant:', error);
    return res.status(401).json({
      success: false,
      message: 'Token-Verifikation fehlgeschlagen'
    });
  }
};

/**
 * Optional: Mandant laden (wenn nicht vorhanden, wird trotzdem fortgefahren)
 */
export const optionalUserMandant = async (req, res, next) => {
  try {
    const token = extractToken(req);
    
    if (token) {
      const decoded = verifyToken(token);
      
      if (decoded && decoded.id) {
        req.userId = decoded.id;
        
        const mandantenBasePath = path.join(__dirname, '../../data/mandanten', decoded.id);
        req.mandantPath = mandantenBasePath;
        
        req.paths = {
          kunden: path.join(mandantenBasePath, 'kunden'),
          offerten: path.join(mandantenBasePath, 'offerten'),
          rechnungen: path.join(mandantenBasePath, 'rechnungen'),
          firma: path.join(mandantenBasePath, 'eigene_firma'),
          exports: path.join(mandantenBasePath, 'exports')
        };
      }
    }
    
    next();
  } catch (error) {
    // Bei Fehler trotzdem fortfahren (optional)
    next();
  }
};

export default { loadUserMandant, optionalUserMandant };
