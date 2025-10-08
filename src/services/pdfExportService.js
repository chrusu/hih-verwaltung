/**
 * PDF-Export-Service für Offerten
 * Verwendet LaTeX-Template mit Firmendaten für PDF-Generierung
 */

import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';
import QRCode from 'qrcode';
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

  /**
   * Generiert QR-Code für Swiss QR-Bill
   * @param {Object} rechnungData - Rechnung mit IBAN, Betrag, Referenz, Firma, Kunde
   * @returns {Promise<string>} Base64-encodierter QR-Code
   */
  async generateSwissQRCode(rechnungData) {
    const { iban, betrag, referenz, firmendaten, kunde } = rechnungData;
    
    // Swiss QR-Bill Payload nach ISO 20022 Standard
    const qrPayload = [
      'SPC',                          // QRType
      '0200',                         // Version
      '1',                            // Coding Type (UTF-8)
      iban.replace(/\s/g, ''),        // IBAN ohne Leerzeichen
      'K',                            // Creditor Address Type (K=structured, S=combined)
      firmendaten.name || '',         // Creditor Name
      firmendaten.adresse?.strasse || '', // Creditor Street
      '',                             // Creditor Building Number (optional)
      firmendaten.adresse?.plz || '', // Creditor Postal Code
      firmendaten.adresse?.ort || '', // Creditor Town
      'CH',                           // Creditor Country
      '',                             // Ultimate Creditor Address Type (optional)
      '',                             // Ultimate Creditor Name
      '',                             // Ultimate Creditor Street
      '',                             // Ultimate Creditor Building Number
      '',                             // Ultimate Creditor Postal Code
      '',                             // Ultimate Creditor Town
      '',                             // Ultimate Creditor Country
      betrag.toFixed(2),              // Amount (2 decimals)
      'CHF',                          // Currency
      'K',                            // Debtor Address Type
      kunde.name || '',               // Debtor Name
      kunde.adresse?.strasse || '',   // Debtor Street
      '',                             // Debtor Building Number
      kunde.adresse?.plz || '',       // Debtor Postal Code
      kunde.adresse?.ort || '',       // Debtor Town
      kunde.adresse?.land || 'CH',    // Debtor Country
      'QRR',                          // Reference Type (QRR=QR-Reference)
      referenz,                       // Reference
      '',                             // Unstructured Message
      'EPD',                          // Billing Information
      ''                              // Alternative Scheme Parameters
    ].join('\r\n');
    
    // QR-Code mit Error Correction Level M (15%)
    const qrCodeDataUrl = await QRCode.toDataURL(qrPayload, {
      errorCorrectionLevel: 'M',
      type: 'image/png',
      width: 200,
      margin: 0
    });
    
    return qrCodeDataUrl;
  }

  /**
   * Generiert LaTeX-Content für Rechnung mit Swiss QR-Bill
   */
  async generateRechnungLatex(rechnungNummer) {
    // Rechnung laden (importieren wir bei Bedarf)
    const { RechnungenService } = await import('./rechnungenService.js');
    const rechnungenService = new RechnungenService(this.basePath);
    
    const rechnungDetails = await rechnungenService.getRechnung(rechnungNummer);
    if (!rechnungDetails) {
      throw new Error(`Rechnung '${rechnungNummer}' nicht gefunden`);
    }

    // Kunde laden
    const kunde = await this.kundenService.getKunde(rechnungDetails.kundeId);
    if (!kunde) {
      throw new Error(`Kunde für Rechnung '${rechnungNummer}' nicht gefunden`);
    }

    // Positionen laden
    const positionen = await rechnungenService.getPositionen(rechnungNummer);

    // Firmendaten laden
    const firmendaten = await this.loadFirmenDaten();

    // QR-Code generieren
    const qrCodeDataUrl = await this.generateSwissQRCode({
      iban: rechnungDetails.iban,
      betrag: rechnungDetails.gesamtBrutto,
      referenz: rechnungDetails.qrReferenz,
      firmendaten: firmendaten,
      kunde: kunde
    });

    // QR-Code als Datei speichern
    const qrCodePath = path.join(this.outputDir, `qr_${rechnungDetails.nummer}.png`);
    const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, '');
    await fs.writeFile(qrCodePath, base64Data, 'base64');

    // Kundenadresse formatieren
    const kundenAdresse = this.formatKundenAdresse(kunde);

    // Positionen formatieren (gleich wie bei Offerten)
    const positionenLatex = this.formatPositionenRechnung(positionen, rechnungDetails);

    // LaTeX-Template generieren
    const latexContent = this.generateRechnungLatexTemplate({
      rechnung: rechnungDetails,
      kunde: kunde,
      firmendaten: firmendaten,
      kundenAdresse: kundenAdresse,
      positionenLatex: positionenLatex,
      qrCodePath: path.relative(this.outputDir, qrCodePath)
    });

    return latexContent;
  }

  /**
   * Formatiert Rechnungspositionen für LaTeX
   */
  formatPositionenRechnung(positionen, rechnungDetails) {
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

    positionen.forEach((pos, index) => {
      const beschreibung = this.escapeLatex(pos.beschreibung || '');
      const positionNr = pos.position || (index + 1);
      const menge = `${pos.menge || 0} ${pos.einheit || ''}`;
      const preis = `CHF ${(pos.einzelpreis || 0).toFixed(2)}`;
      const total = `CHF ${(pos.gesamtpreis || 0).toFixed(2)}`;
      
      latex += `${positionNr} & ${beschreibung} & ${menge} & ${preis} & ${total} \\\\\n`;
      latex += '\\hline\n';
    });

    latex += '\\end{longtable}\n';

    // Totalsummen
    const subtotal = positionen.reduce((sum, pos) => sum + (pos.gesamtpreis || 0), 0);
    const mwstSatz = rechnungDetails.mwstSatz || 7.7;
    const mwstBetrag = subtotal * (mwstSatz / 100);
    const gesamtBrutto = subtotal + mwstBetrag;

    latex += '\\vspace{1em}\n';
    latex += '\\begin{flushright}\n';
    latex += '\\begin{tabular}{lr}\n';
    latex += `\\textbf{Subtotal:} & \\textbf{CHF ${subtotal.toFixed(2)}} \\\\\n`;
    latex += `MwSt ${mwstSatz}\\%: & CHF ${mwstBetrag.toFixed(2)} \\\\\n`;
    latex += '\\hline\n';
    latex += `\\textbf{Total:} & \\textbf{CHF ${gesamtBrutto.toFixed(2)}} \\\\\n`;
    latex += '\\end{tabular}\n';
    latex += '\\end{flushright}\n';

    return latex;
  }

  /**
   * Generiert LaTeX-Template für Rechnung
   */
  generateRechnungLatexTemplate({ rechnung, kunde, firmendaten, kundenAdresse, positionenLatex, qrCodePath }) {
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
    
    const datumFormatted = formatDate(rechnung.datum);
    const faelligkeitsdatumFormatted = formatDate(rechnung.faelligkeitsdatum);

    const logoPath = path.relative(this.outputDir, path.join(this.templateDir, 'Logo_Print.png'));

    return `% LaTeX-Template für Rechnung ${rechnung.nummer}
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
\\noindent{\\LARGE\\bfseries Rechnung ${rechnung.nummer}}\\\\[0.25em]
\\noindent{\\large ${this.escapeLatex(rechnung.titel)}}\\\\[0.5em]
\\noindent{\\small Rechnungsdatum: ${datumFormatted} | Fällig: ${faelligkeitsdatumFormatted}}

\\vspace{1.0em}

% Beschreibung (falls vorhanden)
${rechnung.beschreibung ? '\\section*{Beschreibung}\n' + this.escapeLatex(rechnung.beschreibung) + '\n\n' : ''}

% Positionen
\\section*{Rechnungspositionen}

${positionenLatex}

% Swiss QR-Bill (Schweizer Einzahlungsschein)
\\newpage
\\section*{Zahlung}

\\subsection*{Zahlungsbedingungen}
${this.escapeLatex(rechnung.zahlungsbedingungen)}

\\vspace{1cm}

\\subsection*{Swiss QR-Bill}
\\noindent\\fbox{\\begin{minipage}{0.95\\textwidth}
\\vspace{0.5cm}

\\noindent\\textbf{Zahlungsinformationen}\\\\[0.5em]
\\begin{tabular}{ll}
IBAN: & ${rechnung.iban} \\\\
Referenz: & ${rechnung.qrReferenz} \\\\
Betrag: & CHF ${rechnung.gesamtBrutto?.toFixed(2) || '0.00'} \\\\
Fällig: & ${faelligkeitsdatumFormatted} \\\\
\\end{tabular}

\\vspace{1cm}

\\noindent\\includegraphics[width=5cm]{${qrCodePath}}\\\\[0.5em]
\\textit{Scannen Sie den QR-Code mit Ihrer Banking-App}

\\vspace{0.5cm}
\\end{minipage}}

% Notizen (falls vorhanden)
${rechnung.notizen ? '\\vspace{2em}\n\\section*{Bemerkungen}\n' + this.escapeLatex(rechnung.notizen) + '\n\n' : ''}

\\vspace{2em}

Vielen Dank für Ihr Vertrauen und die angenehme Zusammenarbeit.

\\vspace{2cm}

% Signatur
\\noindent
\\begin{minipage}{10cm}
\\includegraphics[height=1.5cm]{${path.relative(this.outputDir, path.join(this.templateDir, 'Unterschrift2.png'))}}\\\\[0.5em]
\\textbf{${firmendaten.emailSignatur.name}}\\\\
${firmendaten.emailSignatur.firma}\\\\[0.5em]
${firmendaten.emailSignatur.slogan1}\\\\[0.3em]
${firmendaten.emailSignatur.slogan2}\\\\[0.5em]
\\href{${firmendaten.emailSignatur.website}}{\\textcolor{brand}{${firmendaten.emailSignatur.linkText}}}
\\end{minipage}

\\end{document}`;
  }

  /**
   * Exportiert Rechnung als PDF
   */
  async exportRechnungPdf(rechnungNummer) {
    try {
      // LaTeX-Content generieren
      const latexContent = await this.generateRechnungLatex(rechnungNummer);

      // Ausgabeverzeichnis sicherstellen
      await this.fileManager.ensureDirectory(this.outputDir);

      // LaTeX-Datei schreiben
      const texFilename = `rechnung_${rechnungNummer}.tex`;
      const texPath = path.join(this.outputDir, texFilename);
      await fs.writeFile(texPath, latexContent, 'utf8');

      // XeLaTeX ausführen (2x für Referenzen)
      console.log(`Generiere PDF für Rechnung ${rechnungNummer}...`);
      try {
        execSync(`xelatex -interaction=nonstopmode -output-directory="${this.outputDir}" "${texPath}"`, {
          cwd: this.outputDir,
          stdio: 'pipe'
        });
        
        // Zweiter Durchlauf für korrekte Seitenzahlen
        execSync(`xelatex -interaction=nonstopmode -output-directory="${this.outputDir}" "${texPath}"`, {
          cwd: this.outputDir,
          stdio: 'pipe'
        });
      } catch (execError) {
        // XeLaTeX kann auch bei erfolgreicher PDF-Erstellung Warnungen als Fehler werfen
        // Wir prüfen einfach ob das PDF existiert
        console.warn('XeLaTeX Warnung (kann ignoriert werden):', execError.message);
      }

      // PDF-Pfad
      const pdfFilename = `rechnung_${rechnungNummer}.pdf`;
      const pdfPath = path.join(this.outputDir, pdfFilename);

      // Aufräumen: Temporäre LaTeX-Dateien löschen
      const extensions = ['.tex', '.aux', '.log', '.out'];
      for (const ext of extensions) {
        try {
          await fs.unlink(path.join(this.outputDir, `rechnung_${rechnungNummer}${ext}`));
        } catch (error) {
          // Ignorieren wenn Datei nicht existiert
        }
      }

      // QR-Code PNG löschen
      try {
        await fs.unlink(path.join(this.outputDir, `qr_${rechnungNummer}.png`));
      } catch (error) {
        // Ignorieren
      }

      // Prüfen ob PDF existiert
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
}