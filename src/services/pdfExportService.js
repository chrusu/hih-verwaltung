/**
 * PDF-Export-Service für Offerten
 * Verwendet LaTeX-Template mit Firmendaten für PDF-Generierung
 */

import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';
import { FileManager } from '../fileManager.js';
import { OffertenService } from './offertenService.js';
import { KundenService } from './kundenService.js';

export class PdfExportService {
  constructor(basePath = './data') {
    this.basePath = basePath;
    this.fileManager = new FileManager(basePath);
    this.offertenService = new OffertenService(basePath);
    this.kundenService = new KundenService(basePath);
    this.templateDir = path.join(basePath, 'eigene_firma', 'briefvorlage');
    this.outputDir = path.join(basePath, 'exports');
  }

  /**
   * Lädt Firmendaten aus der Vorlage
   */
  async loadFirmenDaten() {
    const firmenDatenPath = path.join(this.templateDir, 'hinderling_internet_handwerk.md');
    const metaPath = path.join(this.templateDir, 'meta.md');
    
    const firmenDaten = await this.fileManager.readMarkdownFile(firmenDatenPath);
    const metaDaten = await this.fileManager.readMarkdownFile(metaPath);
    
    if (!firmenDaten || !metaDaten) {
      throw new Error('Firmendaten oder Meta-Informationen nicht gefunden');
    }

    // Parse Firmendaten aus Markdown
    const content = firmenDaten.content;
    const adresseMatch = content.match(/## Adresse\n(.*?)\n(.*?)\n/s);
    const telefonMatch = content.match(/## Telefonnummer\n(.*?)\n/);
    const emailMatch = content.match(/## Email\n(.*?)\n/);
    
    // Parse Meta-Daten
    const metaContent = metaDaten.content;
    const colorMatch = metaContent.match(/## Color\n(.*?)\n/);
    const fontMatch = metaContent.match(/## Font\n(.*?)\n/);

    return {
      name: 'Internet Handwerk',
      inhaber: 'Tobias Hinderling',
      adresse: {
        strasse: adresseMatch ? adresseMatch[1].trim() : 'Werkhofstrasse 11',
        plzOrt: adresseMatch ? adresseMatch[2].trim() : '2503 Biel'
      },
      telefon: telefonMatch ? telefonMatch[1].trim() : "079/483'99'94",
      email: emailMatch ? emailMatch[1].trim() : 'hallo@hinderling-internet-handwerk.ch',
      brandColor: colorMatch ? colorMatch[1].trim().replace('#', '') : 'bd00ff',
      font: fontMatch ? fontMatch[1].trim() : 'Lexend Exa'
    };
  }

  /**
   * Generiert LaTeX-Content für Offerte
   */
  async generateOfferteLatex(offerteNummer) {
    // Offerte laden
    const offerteDetails = await this.offertenService.getOfferte(offerteNummer);
    if (!offerteDetails) {
      throw new Error(`Offerte '${offerteNummer}' nicht gefunden`);
    }

    // Kunde laden
    const kunde = await this.kundenService.getKunde(offerteDetails.kundeId);
    if (!kunde) {
      throw new Error(`Kunde für Offerte '${offerteNummer}' nicht gefunden`);
    }

    // Firmendaten laden
    const firmendaten = await this.loadFirmenDaten();

    // Kundendadresse formatieren
    const kundenAdresse = this.formatKundenAdresse(kunde);

    // Positionen formatieren
    const positionenLatex = this.formatPositionen(offerteDetails.positionen, offerteDetails);

    // LaTeX-Template generieren
    const latexContent = this.generateLatexTemplate({
      offerte: offerteDetails,
      kunde: kunde,
      firmendaten: firmendaten,
      kundenAdresse: kundenAdresse,
      positionenLatex: positionenLatex
    });

    return latexContent;
  }

  /**
   * Formatiert Kundenadresse für LaTeX
   */
  formatKundenAdresse(kunde) {
    let adresse = kunde.name + '\\\\';
    
    if (kunde.adresse?.strasse) {
      adresse += kunde.adresse.strasse + '\\\\';
    }
    
    if (kunde.adresse?.plz && kunde.adresse?.ort) {
      adresse += kunde.adresse.plz + ' ' + kunde.adresse.ort;
    }
    
    if (kunde.adresse?.land && kunde.adresse.land !== 'Schweiz') {
      adresse += '\\\\' + kunde.adresse.land;
    }

    return adresse;
  }

  /**
   * Formatiert Offertpositionen für LaTeX
   */
  formatPositionen(positionen, offerteDetails) {
    if (!positionen || positionen.length === 0) {
      return 'Keine Positionen vorhanden.';
    }

    let latex = '\\begin{longtable}{|l|p{6cm}|r|r|r|}\n';
    latex += '\\hline\n';
    latex += '\\textbf{Pos.} & \\textbf{Beschreibung} & \\textbf{Menge} & \\textbf{Preis} & \\textbf{Total} \\\\\n';
    latex += '\\hline\n';
    latex += '\\endhead\n';

    positionen.forEach(pos => {
      const beschreibung = this.escapeLatex(pos.beschreibung);
      const menge = `${pos.menge} ${pos.einheit}`;
      const preis = `CHF ${pos.einzelpreis.toFixed(2)}`;
      const total = `CHF ${pos.gesamtpreis.toFixed(2)}`;
      
      latex += `${pos.position} & ${beschreibung} & ${menge} & ${preis} & ${total} \\\\\n`;
      latex += '\\hline\n';
    });

    latex += '\\end{longtable}\n';

    // Totalsummen
    latex += '\\vspace{1em}\n';
    latex += '\\begin{flushright}\n';
    latex += '\\begin{tabular}{lr}\n';
    latex += `\\textbf{Subtotal:} & \\textbf{CHF ${offerteDetails.gesamtsumme.toFixed(2)}} \\\\\n`;
    latex += `MwSt ${offerteDetails.mwstSatz}\\%: & CHF ${offerteDetails.mwstBetrag.toFixed(2)} \\\\\n`;
    latex += '\\hline\n';
    latex += `\\textbf{Total:} & \\textbf{CHF ${offerteDetails.gesamtBrutto.toFixed(2)}} \\\\\n`;
    latex += '\\end{tabular}\n';
    latex += '\\end{flushright}\n';

    return latex;
  }

  /**
   * Escapet LaTeX-Sonderzeichen
   */
  escapeLatex(text) {
    if (!text) return '';
    return text
      .replace(/\\/g, '\\textbackslash{}')
      .replace(/[{}]/g, '\\$&')
      .replace(/[#$%&_]/g, '\\$&')
      .replace(/\^/g, '\\textasciicircum{}')
      .replace(/~/g, '\\textasciitilde{}');
  }

  /**
   * Generiert vollständiges LaTeX-Template
   */
  generateLatexTemplate({ offerte, kunde, firmendaten, kundenAdresse, positionenLatex }) {
    // Gültigkeitsdatum formatieren
    const gueltigBis = new Date(offerte.gültigBis);
    const gueltigBisFormatted = gueltigBis.toLocaleDateString('de-CH');
    
    // Offertdatum formatieren
    const datum = new Date(offerte.datum);
    const datumFormatted = datum.toLocaleDateString('de-CH');

    return `% LaTeX-Template für Offerte ${offerte.nummer}
\\documentclass[11pt]{article}
\\usepackage[margin=2.2cm]{geometry}
\\usepackage{graphicx}
\\usepackage{longtable}
\\usepackage{array}
\\usepackage{setspace}
\\usepackage{parskip}
\\usepackage{xcolor}
\\usepackage{fontspec}
\\usepackage[hidelinks]{hyperref}

% Fonts
\\defaultfontfeatures{Ligatures=TeX,Scale=MatchLowercase}
\\setmainfont{${firmendaten.font}}

% Colors
\\definecolor{brand}{HTML}{${firmendaten.brandColor}}
\\hypersetup{colorlinks=true,linkcolor=brand,urlcolor=brand,citecolor=brand}
\\urlstyle{same}

% Header mit Logo und Firmendaten
\\usepackage{fancyhdr}
\\pagestyle{fancy}
\\setlength{\\headheight}{50pt}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\fancyhead[R]{\\begin{minipage}{8cm}\\raggedleft\\small
\\textbf{${firmendaten.name}}\\\\
${firmendaten.inhaber}\\\\
${firmendaten.adresse.strasse}\\\\
${firmendaten.adresse.plzOrt}\\\\
\\href{tel:${firmendaten.telefon}}{\\textcolor{brand}{${firmendaten.telefon}}}\\\\
\\href{mailto:${firmendaten.email}}{\\textcolor{brand}{${firmendaten.email}}}
\\end{minipage}}
\\fancyfoot[C]{\\thepage}

\\begin{document}

% Kundenadresse
\\vspace*{8mm}
\\noindent\\begin{flushright}
\\begin{minipage}{8cm}
\\small ${kundenAdresse}
\\end{minipage}
\\end{flushright}
\\par\\vspace{10mm}

% Titel
\\noindent{\\LARGE\\bfseries Offerte ${offerte.nummer}}\\\\[0.25em]
\\noindent{\\large ${this.escapeLatex(offerte.titel)}}\\\\[0.5em]
\\noindent{\\small Datum: ${datumFormatted} | Gültig bis: ${gueltigBisFormatted}}

\\vspace{1.0em}

% Beschreibung
${offerte.beschreibung ? '\\section*{Beschreibung}\n' + this.escapeLatex(offerte.beschreibung) + '\n\n' : ''}

% Positionen
\\section*{Offertpositionen}

${positionenLatex}

% Zahlungsbedingungen
\\section*{Zahlungsbedingungen}
${this.escapeLatex(offerte.zahlungsbedingungen)}

% Notizen (falls vorhanden)
${offerte.notizen ? '\\section*{Bemerkungen}\n' + this.escapeLatex(offerte.notizen) + '\n\n' : ''}

\\vspace{2em}

Wir freuen uns auf Ihre Rückmeldung und danken Ihnen für Ihr Vertrauen.

\\vspace{1.5cm}

% Signatur
\\noindent
\\vspace{0.4cm}
\\\\
${firmendaten.inhaber}\\\\
\\small ${firmendaten.name}

\\end{document}`;
  }

  /**
   * Exportiert Offerte als PDF
   */
  async exportToPdf(offerteNummer) {
    try {
      // Ausgabeverzeichnis erstellen
      await this.fileManager.ensureDirectory(this.outputDir);

      // LaTeX-Content generieren
      const latexContent = await this.generateOfferteLatex(offerteNummer);

      // Temporäre .tex-Datei schreiben
      const texFilename = `offerte_${offerteNummer}.tex`;
      const texPath = path.join(this.outputDir, texFilename);
      
      await fs.writeFile(texPath, latexContent, 'utf8');

      // PDF mit XeLaTeX generieren
      const pdfFilename = `offerte_${offerteNummer}.pdf`;
      
      // XeLaTeX im Output-Verzeichnis ausführen
      execSync(`cd "${this.outputDir}" && xelatex "${texFilename}"`, {
        stdio: 'pipe'
      });

      // Aufräumen - temporäre Dateien löschen
      const tempFiles = ['.aux', '.log', '.out'].map(ext => 
        path.join(this.outputDir, `offerte_${offerteNummer}${ext}`)
      );
      
      for (const tempFile of tempFiles) {
        try {
          await fs.unlink(tempFile);
        } catch (error) {
          // Ignoriere Fehler beim Aufräumen
        }
      }

      // LaTeX-Datei ebenfalls löschen (optional)
      try {
        await fs.unlink(texPath);
      } catch (error) {
        // Ignoriere Fehler
      }

      const pdfPath = path.join(this.outputDir, pdfFilename);
      
      // Prüfen ob PDF erstellt wurde
      try {
        await fs.access(pdfPath);
        return {
          success: true,
          pdfPath: pdfPath,
          filename: pdfFilename
        };
      } catch (error) {
        throw new Error('PDF-Datei wurde nicht erstellt');
      }

    } catch (error) {
      throw new Error(`PDF-Export fehlgeschlagen: ${error.message}`);
    }
  }

  /**
   * Überprüft ob XeLaTeX verfügbar ist
   */
  async checkLatexInstallation() {
    try {
      execSync('xelatex --version', { stdio: 'pipe' });
      return true;
    } catch (error) {
      return false;
    }
  }
}