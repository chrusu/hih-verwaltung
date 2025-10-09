import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Service für Firmendaten
 */
export class FirmaService {
  constructor(basePath = './data') {
    // Absoluten Pfad sicherstellen
    this.basePath = path.isAbsolute(basePath) ? basePath : path.join(__dirname, '../../', basePath);
    this.firmaPath = path.join(this.basePath, 'eigene_firma', 'firma.md');
    this.firmaDir = path.join(this.basePath, 'eigene_firma');
    this.briefvorlageDir = path.join(this.firmaDir, 'briefvorlage');
    this.logoDir = path.join(this.briefvorlageDir);
    this.signatureDir = path.join(this.briefvorlageDir);
  }

  /**
   * Lädt die Firmendaten
   */
  async getFirma() {
    try {
      const content = await fs.readFile(this.firmaPath, 'utf8');
      return this.parseFirmaMarkdown(content);
    } catch (error) {
      console.error('Fehler beim Laden der Firmendaten:', error);
      // Fallback mit Standardwerten
      return {
        name: 'Hinderling Internet Handwerk',
        strasse: '',
        plz: '',
        ort: '',
        land: 'Schweiz',
        email: '',
        telefon: '',
        website: '',
        uid: '',
        iban: 'CH93 0076 2011 6238 5295 7',
        mwstSatz: 0,
        mwstPflichtig: false
      };
    }
  }

  /**
   * Aktualisiert die Firmendaten
   */
  async updateFirma(data) {
    const firma = await this.getFirma();
    const updatedFirma = { ...firma, ...data };
    
    const content = this.generateFirmaMarkdown(updatedFirma);
    await fs.writeFile(this.firmaPath, content, 'utf8');
    
    return updatedFirma;
  }

  /**
   * Parst Firma Markdown
   */
  parseFirmaMarkdown(content) {
    const firma = {};
    
    // YAML Front Matter extrahieren
    const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (yamlMatch) {
      const yamlContent = yamlMatch[1];
      yamlContent.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          const value = valueParts.join(':').trim();
          firma[key.trim()] = value;
        }
      });
    }

    // Numerische Werte konvertieren
    if (firma.mwstSatz) firma.mwstSatz = parseFloat(firma.mwstSatz);
    if (firma.mwstPflichtig !== undefined) {
      firma.mwstPflichtig = firma.mwstPflichtig === 'true' || firma.mwstPflichtig === true;
    }

    return firma;
  }

  /**
   * Generiert Firma Markdown
   */
  generateFirmaMarkdown(firma) {
    const yaml = [
      `name: ${firma.name || ''}`,
      `strasse: ${firma.strasse || ''}`,
      `plz: ${firma.plz || ''}`,
      `ort: ${firma.ort || ''}`,
      `land: ${firma.land || 'Schweiz'}`,
      `email: ${firma.email || ''}`,
      `telefon: ${firma.telefon || ''}`,
      `website: ${firma.website || ''}`,
      `uid: ${firma.uid || ''}`,
      `iban: ${firma.iban || ''}`,
      `mwstSatz: ${firma.mwstSatz || 0}`,
      `mwstPflichtig: ${firma.mwstPflichtig || false}`,
      `accent-color: ${firma['accent-color'] || firma.accentColor || '#bd00ff'}`,
      `main-font: ${firma['main-font'] || firma.mainFont || 'Lexend Exa'}`
    ];

    // Slogan aus bestehendem Content extrahieren oder Default verwenden
    const slogan = firma.slogan || 'Ihre Firma für professionelle Dienstleistungen.';

    return `---
${yaml.join('\n')}
---

**Slogan:**  
${slogan}

`;
  }

  /**
   * Speichert Logo-Datei
   */
  async uploadLogo(fileBuffer, filename) {
    try {
      // Verzeichnis sicherstellen
      await fs.mkdir(this.logoDir, { recursive: true });
      
      // Alte Logos löschen (nur Logo_Print.* Dateien)
      try {
        const files = await fs.readdir(this.logoDir);
        for (const file of files) {
          if (file.startsWith('Logo_Print.')) {
            await fs.unlink(path.join(this.logoDir, file));
          }
        }
      } catch (err) {
        // Ignorieren wenn Verzeichnis nicht existiert
      }
      
      // Neues Logo speichern
      const ext = path.extname(filename);
      const logoPath = path.join(this.logoDir, `Logo_Print${ext}`);
      await fs.writeFile(logoPath, fileBuffer);
      
      return {
        path: logoPath,
        filename: `Logo_Print${ext}`,
        relativePath: `briefvorlage/Logo_Print${ext}`
      };
    } catch (error) {
      console.error('Fehler beim Logo-Upload:', error);
      throw error;
    }
  }

  /**
   * Speichert Unterschrift-Datei
   */
  async uploadSignature(fileBuffer, filename) {
    try {
      // Verzeichnis sicherstellen
      await fs.mkdir(this.signatureDir, { recursive: true });
      
      // Alte Unterschriften löschen (nur Unterschrift*.* Dateien)
      try {
        const files = await fs.readdir(this.signatureDir);
        for (const file of files) {
          if (file.startsWith('Unterschrift')) {
            await fs.unlink(path.join(this.signatureDir, file));
          }
        }
      } catch (err) {
        // Ignorieren wenn Verzeichnis nicht existiert
      }
      
      // Neue Unterschrift speichern
      const ext = path.extname(filename);
      const signaturePath = path.join(this.signatureDir, `Unterschrift2${ext}`);
      await fs.writeFile(signaturePath, fileBuffer);
      
      return {
        path: signaturePath,
        filename: `Unterschrift2${ext}`,
        relativePath: `briefvorlage/Unterschrift2${ext}`
      };
    } catch (error) {
      console.error('Fehler beim Unterschrift-Upload:', error);
      throw error;
    }
  }

  /**
   * Gibt Logo-Pfad zurück (falls vorhanden)
   */
  async getLogoPath() {
    try {
      const files = await fs.readdir(this.logoDir);
      const logoFile = files.find(f => f.startsWith('Logo_Print.'));
      return logoFile ? path.join(this.logoDir, logoFile) : null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Gibt Unterschrift-Pfad zurück (falls vorhanden)
   */
  async getSignaturePath() {
    try {
      const files = await fs.readdir(this.signatureDir);
      const signatureFile = files.find(f => f.startsWith('Unterschrift'));
      return signatureFile ? path.join(this.signatureDir, signatureFile) : null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Gibt Logo-URL für Frontend zurück
   */
  async getLogoUrl() {
    try {
      const files = await fs.readdir(this.logoDir);
      const logoFile = files.find(f => f.startsWith('Logo_Print.'));
      return logoFile ? `/api/firma/logo/${logoFile}` : null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Gibt Unterschrift-URL für Frontend zurück
   */
  async getSignatureUrl() {
    try {
      const files = await fs.readdir(this.signatureDir);
      const signatureFile = files.find(f => f.startsWith('Unterschrift'));
      return signatureFile ? `/api/firma/signature/${signatureFile}` : null;
    } catch (error) {
      return null;
    }
  }
}

export default new FirmaService('./data');
