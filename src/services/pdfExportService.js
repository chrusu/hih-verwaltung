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
    const signaturMatch = content.match(/## Email-Signatur\n([\s\S]*?)(?=\n##|$)/);
    
    // Parse Meta-Daten
    const metaContent = metaDaten.content;
    const colorMatch = metaContent.match(/## Color\n(.*?)\n/);
    const fontMatch = metaContent.match(/## Font\n(.*?)\n/);

    // Parse E-Mail-Signatur dynamisch
    let emailSignatur = {
      name: 'Tobias Hinderling',
      firma: 'Internet Handwerk',
      slogan1: 'Bruchsch ä nöii Website?',
      slogan2: 'pragmatisch, modern, unkompliziert',
      website: 'https://www.hinderling-internet-handwerk.ch',
      linkText: 'Di Internet-Handwärker "de Bieu"'
    };
    
    if (signaturMatch) {
      const sig = signaturMatch[1].trim();
      const lines = sig.split('\n').filter(line => line.trim());
      if (lines.length >= 4) {
        emailSignatur.name = lines[0].trim();
        emailSignatur.firma = lines[1].trim();
        emailSignatur.slogan1 = lines[2].trim();
        emailSignatur.slogan2 = lines[3].trim();
        
        // Parse Link aus letzter Zeile
        const linkMatch = sig.match(/\[(.*?)\]\((.*?)\)/);
        if (linkMatch) {
          emailSignatur.linkText = linkMatch[1];
          emailSignatur.website = linkMatch[2];
        }
      }
    }

    return {
      name: emailSignatur.firma,
      inhaber: emailSignatur.name,
      adresse: {
        strasse: adresseMatch ? adresseMatch[1].trim() : 'Werkhofstrasse 11',
        plzOrt: adresseMatch ? adresseMatch[2].trim() : '2503 Biel'
      },
      telefon: telefonMatch ? telefonMatch[1].trim() : "079/483'99'94",
      email: emailMatch ? emailMatch[1].trim() : 'hallo@hinderling-internet-handwerk.ch',
      brandColor: colorMatch ? colorMatch[1].trim().replace('#', '') : 'bd00ff',
      font: fontMatch ? fontMatch[1].trim() : 'Lexend Exa',
      emailSignatur: emailSignatur
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
    
    // PLZ und Ort immer anzeigen, auch wenn nur eines vorhanden ist
    const plz = kunde.adresse?.plz || '';
    const ort = kunde.adresse?.ort || '';
    if (plz || ort) {
      adresse += `${plz} ${ort}`.trim() + '\\\\';
    }
    
    // Land nur anzeigen wenn vorhanden und nicht Schweiz
    if (kunde.adresse?.land && kunde.adresse.land !== 'Schweiz') {
      adresse += kunde.adresse.land;
    } else {
      // Entferne letzten Zeilenumbruch wenn kein Land
      adresse = adresse.replace(/\\\\$/, '');
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

    let latex = '\\begin{longtable}{|>{\\centering}p{1cm}|p{7cm}|>{\\centering}p{2cm}|>{\\centering}p{2cm}|>{\\centering\\arraybackslash}p{2cm}|}\n';
    latex += '\\hline\n';
    latex += '\\textbf{Pos.} & \\textbf{Beschreibung} & \\textbf{Menge} & \\textbf{Preis} & \\textbf{Total} \\\\\n';
    latex += '\\hline\n';
    latex += '\\endfirsthead\n';
    latex += '\\hline\n';
    latex += '\\textbf{Pos.} & \\textbf{Beschreibung} & \\textbf{Menge} & \\textbf{Preis} & \\textbf{Total} \\\\\n';
    latex += '\\hline\n';
    latex += '\\endhead\n';
    latex += '\\hline\n';
    latex += '\\endfoot\n';
    latex += '\\hline\n';
    latex += '\\endlastfoot\n';

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
    // Sicheres Datum-Parsing und Formatierung
    const formatDate = (dateString) => {
      if (!dateString) return 'Nicht definiert';
      try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Ungültiges Datum';
        return date.toLocaleDateString('de-CH');
      } catch (error) {
        return 'Datum-Fehler';
      }
    };
    
    const gueltigBisFormatted = formatDate(offerte.gültigBis);
    const datumFormatted = formatDate(offerte.datum);

    // Logo-Pfad (relativ zum Ausgabeverzeichnis)
    const logoPath = path.relative(this.outputDir, path.join(this.templateDir, 'Logo_Print.png'));

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

% Header mit Logo links und Firmendaten rechts
\\usepackage{fancyhdr}
\\pagestyle{fancy}
\\setlength{\\headheight}{60pt}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\fancyhead[L]{\\includegraphics[height=2cm]{${logoPath}}}
\\fancyhead[R]{\\begin{minipage}{7cm}\\raggedleft\\small
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

\\vspace{2cm}

% Signatur mit Unterschrift und E-Mail-Signatur
\\noindent
\\begin{minipage}{10cm}
% Unterschrift-Bild
\\includegraphics[height=1.5cm]{${path.relative(this.outputDir, path.join(this.templateDir, 'Unterschrift2.png'))}}\\\\[0.5em]
% E-Mail-Signatur (dynamisch aus Firmendaten)
\\textbf{${firmendaten.emailSignatur.name}}\\\\
${firmendaten.emailSignatur.firma}\\\\[0.5em]
${firmendaten.emailSignatur.slogan1}\\\\[0.3em]
${firmendaten.emailSignatur.slogan2}\\\\[0.5em]
\\href{${firmendaten.emailSignatur.website}}{\\textcolor{brand}{${firmendaten.emailSignatur.linkText}}}
\\end{minipage}

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