import path from 'path';
import fs from 'fs/promises';

/**
 * Service für Firmendaten
 */
export class FirmaService {
  constructor(basePath = './data') {
    this.basePath = basePath;
    this.firmaPath = path.join(basePath, 'eigene_firma', 'firma.md');
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
      `mwstPflichtig: ${firma.mwstPflichtig || false}`
    ];

    return `---
${yaml.join('\n')}
---

# ${firma.name || 'Ihre Firma'}

Ihre Firma für professionelle Dienstleistungen.
`;
  }
}

export default new FirmaService('./data');
