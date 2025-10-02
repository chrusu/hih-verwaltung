#!/usr/bin/env node

/**
 * Interaktives CLI für HIH-Verwaltung
 */

import inquirer from 'inquirer';
import { KundenService } from './services/kundenService.js';
import { OffertenService } from './services/offertenService.js';
import { PdfExportService } from './services/pdfExportService.js';
import chalk from 'chalk';

class InteractiveCLI {
  constructor() {
    this.kundenService = new KundenService();
    this.offertenService = new OffertenService();
    this.pdfExportService = new PdfExportService();
  }

  /**
   * Startet das interaktive CLI
   */
  async start() {
    console.log(chalk.blue.bold('\n🏢 HIH Verwaltung - Interaktives Menü\n'));
    
    while (true) {
      const { action } = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Was möchten Sie verwalten?',
          choices: [
            { name: '👥 Kunden verwalten', value: 'kunden' },
            { name: '📄 Offerten verwalten', value: 'offerten' },
            { name: '❌ Beenden', value: 'exit' }
          ]
        }
      ]);

      if (action === 'exit') {
        console.log(chalk.green('\nAuf Wiedersehen! 👋\n'));
        break;
      }

      if (action === 'kunden') {
        await this.kundenMenu();
      } else if (action === 'offerten') {
        await this.offertenMenu();
      }
    }
  }

  /**
   * Kunden-Verwaltungsmenü
   */
  async kundenMenu() {
    console.log(chalk.yellow.bold('\n👥 Kundenverwaltung\n'));

    // Alle Kunden laden
    const kunden = await this.kundenService.listKunden();
    
    if (kunden.length === 0) {
      console.log(chalk.red('Keine Kunden gefunden.'));
      return;
    }

    // Kunden-Auswahl erstellen
    const kundenChoices = kunden.map((kunde, index) => ({
      name: `${index + 1}. ${kunde.name} (${kunde.email || 'Keine Email'}) - ${kunde.adresse?.ort || 'Kein Ort'}`,
      value: kunde
    }));

    kundenChoices.push(
      { name: chalk.green('+ Neuen Kunden hinzufügen'), value: 'new' },
      { name: chalk.gray('← Zurück zum Hauptmenü'), value: 'back' }
    );

    const { selectedKunde } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedKunde',
        message: 'Welchen Kunden möchten Sie auswählen?',
        choices: kundenChoices,
        pageSize: 10
      }
    ]);

    if (selectedKunde === 'back') {
      return;
    }

    if (selectedKunde === 'new') {
      const neuerKunde = await this.neuerKunde();
      if (neuerKunde) {
        await this.kundenAktionen(neuerKunde);
      }
      return;
    }

    await this.kundenAktionen(selectedKunde);
  }

  /**
   * Aktionen für einen ausgewählten Kunden
   */
  async kundenAktionen(initialKunde) {
    let kunde = initialKunde;

    while (true) {
      // Kundendaten aktuell laden
      const aktuellerKunde = await this.kundenService.getKunde(kunde.id);
      if (!aktuellerKunde) {
        console.log(chalk.red('Kunde nicht gefunden.'));
        return;
      }
      kunde = aktuellerKunde;

      console.log(chalk.cyan.bold(`\n👤 Kunde: ${kunde.name}\n`));
      
      console.log(chalk.white('Kundendaten:'));
      console.log(`  Name: ${kunde.name}`);
      console.log(`  Email: ${kunde.email || 'Nicht angegeben'}`);
      console.log(`  Telefon: ${kunde.telefon || 'Nicht angegeben'}`);
      if (kunde.adresse) {
        console.log(`  Adresse: ${kunde.adresse.strasse}, ${kunde.adresse.plz} ${kunde.adresse.ort}`);
      }
      console.log('');

      const { action } = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Was möchten Sie tun?',
          choices: [
            { name: '📄 Offerten dieses Kunden anzeigen', value: 'offerten' },
            { name: '📝 Neue Offerte für diesen Kunden erstellen', value: 'neue_offerte' },
            { name: '✏️  Kundendaten bearbeiten', value: 'edit' },
            { name: chalk.red('🗑️  Kunde löschen'), value: 'delete' },
            { name: '← Zurück zur Kundenliste', value: 'back' }
          ]
        }
      ]);

      if (action === 'back') {
        return;
      }

      if (action === 'offerten') {
        await this.kundenOfferten(kunde);
        // Nach Offerten-Anzeige wieder zur Kundenschleife
      } else if (action === 'neue_offerte') {
        await this.neueOfferte(kunde);
        // Nach Offerten-Erstellung wieder zur Kundenschleife
      } else if (action === 'edit') {
        await this.kundeBearbeiten(kunde);
        // Nach Bearbeitung wird Schleife automatisch fortgesetzt mit aktualisierten Daten
      } else if (action === 'delete') {
        const deleted = await this.kundeLöschen(kunde);
        if (deleted) {
          return; // Kunde gelöscht, zurück zur Kundenliste
        }
        // Falls Löschen abgebrochen wurde, Schleife fortsetzt
      }
    }
  }

  /**
   * Zeigt Offerten eines Kunden
   */
  async kundenOfferten(kunde) {
    const offerten = await this.offertenService.listOfferten();
    const kundenOfferten = offerten.filter(o => o.kundeId === kunde.id);

    if (kundenOfferten.length === 0) {
      console.log(chalk.red(`\nKeine Offerten für ${kunde.name} gefunden.\n`));
      await this.waitForEnter();
      return;
    }

    console.log(chalk.cyan.bold(`\n📄 Offerten für ${kunde.name}:\n`));
    
    const offertenChoices = kundenOfferten.map((offerte, index) => ({
      name: `${index + 1}. ${offerte.titel} (${offerte.nummer}) - ${offerte.status}`,
      value: offerte
    }));
    
    offertenChoices.push({ name: '← Zurück', value: 'back' });

    const { selectedOfferte } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedOfferte',
        message: 'Welche Offerte möchten Sie auswählen?',
        choices: offertenChoices
      }
    ]);

    if (selectedOfferte !== 'back') {
      await this.offertenAktionen(selectedOfferte);
    }
  }

  /**
   * Offerten-Verwaltungsmenü
   */
  async offertenMenu() {
    console.log(chalk.yellow.bold('\n📄 Offertenverwaltung\n'));

    // Alle Offerten laden
    const offerten = await this.offertenService.listOfferten();
    
    if (offerten.length === 0) {
      console.log(chalk.red('Keine Offerten gefunden.'));
      return;
    }

    // Offerten-Auswahl erstellen
    const offertenChoices = offerten.map((offerte, index) => ({
      name: `${index + 1}. ${offerte.titel} (${offerte.nummer}) - ${offerte.status} - CHF ${offerte.gesamtBrutto || 0}`,
      value: offerte
    }));

    offertenChoices.push(
      { name: chalk.green('+ Neue Offerte erstellen'), value: 'new' },
      { name: chalk.gray('← Zurück zum Hauptmenü'), value: 'back' }
    );

    const { selectedOfferte } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedOfferte',
        message: 'Welche Offerte möchten Sie auswählen?',
        choices: offertenChoices,
        pageSize: 10
      }
    ]);

    if (selectedOfferte === 'back') {
      return;
    }

    if (selectedOfferte === 'new') {
      const neueOfferte = await this.neueOfferte();
      if (neueOfferte) {
        await this.offertenAktionen(neueOfferte);
      }
      return;
    }

    await this.offertenAktionen(selectedOfferte);
  }

  /**
   * Aktionen für eine ausgewählte Offerte
   */
  async offertenAktionen(offerte) {
    console.log(chalk.cyan.bold(`\n📄 Offerte: ${offerte.titel}\n`));
    
    // Vollständige Offerte laden
    const vollOfferte = await this.offertenService.getOfferte(offerte.id);
    
    console.log(chalk.white('Offertendaten:'));
    console.log(`  Nummer: ${vollOfferte.nummer}`);
    console.log(`  Titel: ${vollOfferte.titel}`);
    console.log(`  Datum: ${vollOfferte.datum}`);
    console.log(`  Gültig bis: ${vollOfferte.gültigBis || 'Nicht angegeben'}`);
    console.log(`  Status: ${vollOfferte.status}`);
    console.log(`  Gesamtsumme: CHF ${vollOfferte.gesamtBrutto || 0}`);
    console.log('');

    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Was möchten Sie tun?',
        choices: [
          { name: '📄 PDF generieren', value: 'pdf' },
          { name: '📋 Details anzeigen', value: 'details' },
          { name: '👤 Kunde anzeigen', value: 'kunde' },
          { name: '✏️  Offerte bearbeiten', value: 'edit' },
          { name: '📝 Positionen verwalten', value: 'positionen' },
          { name: chalk.red('🗑️  Offerte löschen'), value: 'delete' },
          { name: '← Zurück zur Offertenliste', value: 'back' }
        ]
      }
    ]);

    if (action === 'back') {
      return;
    }

    if (action === 'pdf') {
      await this.generatePdf(vollOfferte);
    } else if (action === 'details') {
      await this.showOffertenDetails(vollOfferte);
    } else if (action === 'kunde') {
      const kunde = await this.kundenService.getKunde(vollOfferte.kundeId);
      if (kunde) {
        await this.kundenAktionen(kunde);
      } else {
        console.log(chalk.red('Kunde nicht gefunden.'));
        await this.waitForEnter();
      }
    } else if (action === 'edit') {
      await this.offerteBearbeiten(vollOfferte);
      // Nach Bearbeitung zurück zu Offerten-Aktionen
      const updatedOfferte = await this.offertenService.getOfferte(vollOfferte.id);
      if (updatedOfferte) {
        await this.offertenAktionen(updatedOfferte);
      }
    } else if (action === 'positionen') {
      await this.positionenVerwalten(vollOfferte);
      // Nach Positionsverwaltung zurück zu Offerten-Aktionen  
      const updatedOfferte = await this.offertenService.getOfferte(vollOfferte.id);
      if (updatedOfferte) {
        await this.offertenAktionen(updatedOfferte);
      }
    } else if (action === 'delete') {
      await this.offerteLöschen(vollOfferte);
      // Nach Löschen zurück zur Offertenliste
      return;
    }
  }

  /**
   * PDF generieren
   */
  async generatePdf(offerte) {
    try {
      console.log(chalk.blue('\n🔄 Generiere PDF...'));
      
      const pdfResult = await this.pdfExportService.exportToPdf(offerte.id);
      
      // PDF-Pfad korrekt extrahieren 
      const pdfFilename = typeof pdfResult === 'string' ? pdfResult : pdfResult.pdfPath || pdfResult.filename;
      
      console.log(chalk.green(`\n✅ PDF erfolgreich erstellt!`));
      console.log(chalk.gray(`Pfad: ${pdfFilename}`));
      
      const { openPdf } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'openPdf',
          message: 'Möchten Sie das PDF öffnen?',
          default: true
        }
      ]);

      if (openPdf) {
        try {
          const { exec } = await import('child_process');
          const { promisify } = await import('util');
          const execAsync = promisify(exec);
          
          // pdfFilename ist bereits ein String-Pfad
          const pdfPath = pdfFilename;
          
          await execAsync(`open "${pdfPath}"`);
          console.log(chalk.green('PDF wurde geöffnet.'));
        } catch (error) {
          console.log(chalk.yellow(`PDF konnte nicht automatisch geöffnet werden: ${error.message}`));
          console.log(chalk.gray(`Sie können die Datei manuell öffnen: ${pdfFilename}`));
        }
      }
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Fehler beim Generieren des PDFs: ${error.message}`));
    }
    
    await this.waitForEnter();
  }

  /**
   * Zeigt detaillierte Offerten-Informationen
   */
  async showOffertenDetails(offerte) {
    console.log(chalk.cyan.bold(`\n📋 Details für Offerte ${offerte.nummer}\n`));
    
    console.log(chalk.white('Positionen:'));
    if (offerte.positionen && offerte.positionen.length > 0) {
      offerte.positionen.forEach((pos, index) => {
        if (pos.beschreibung) { // Nur gefüllte Positionen anzeigen
          console.log(`  ${index + 1}. ${pos.beschreibung}`);
          console.log(`     Menge: ${pos.menge} ${pos.einheit} à CHF ${pos.einzelpreis}`);
          console.log(`     Total: CHF ${(pos.menge * pos.einzelpreis * (1 - pos.rabatt / 100)).toFixed(2)}`);
        }
      });
    } else {
      console.log('  Keine Positionen gefunden.');
    }
    
    console.log(`\nGesamtsumme netto: CHF ${offerte.gesamtsumme || 0}`);
    console.log(`MwSt (${offerte.mwstSatz}%): CHF ${offerte.mwstBetrag || 0}`);
    console.log(`Gesamtsumme brutto: CHF ${offerte.gesamtBrutto || 0}`);
    
    await this.waitForEnter();
  }

  /**
   * Wartet auf Enter-Taste
   */
  async waitForEnter() {
    await inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Drücken Sie Enter um fortzufahren...'
      }
    ]);
  }

  /**
   * Hilfsfunktion für Prompts mit Abbrechen-Option
   */
  async promptWithCancel(questions, cancelMessage = 'Möchten Sie wirklich abbrechen?') {
    try {
      const answers = await inquirer.prompt(questions);
      return { cancelled: false, answers };
    } catch (error) {
      if (error.name === 'ExitPromptError' || error.isTTYError) {
        // Benutzer hat Ctrl+C gedrückt - fragen ob wirklich abbrechen
        try {
          const { confirmCancel } = await inquirer.prompt([
            {
              type: 'confirm',
              name: 'confirmCancel',
              message: cancelMessage,
              default: false
            }
          ]);
          
          if (confirmCancel) {
            return { cancelled: true, answers: null };
          } else {
            // Nochmal versuchen
            return await this.promptWithCancel(questions, cancelMessage);
          }
        } catch (innerError) {
          // Wenn auch die Bestätigung abgebrochen wird
          return { cancelled: true, answers: null };
        }
      }
      throw error;
    }
  }

  /**
   * Zeigt Abbruch-Bestätigung an
   */
  async confirmCancel(action = 'diesen Vorgang') {
    const { confirmCancel } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmCancel',
        message: `Möchten Sie ${action} wirklich abbrechen?`,
        default: false
      }
    ]);
    return confirmCancel;
  }

  // ================================
  // KUNDEN CRUD FUNKTIONEN
  // ================================

  /**
   * Neuen Kunden erstellen
   */
  async neuerKunde() {
    console.log(chalk.cyan.bold('\n👤 Neuen Kunden hinzufügen\n'));

    // Zuerst fragen ob fortfahren oder abbrechen
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Möchten Sie einen neuen Kunden erstellen?',
        choices: [
          { name: '✓ Ja, neuen Kunden erstellen', value: 'continue' },
          { name: '← Abbrechen und zurück', value: 'cancel' }
        ]
      }
    ]);

    if (action === 'cancel') {
      console.log(chalk.gray('Erstellung abgebrochen.'));
      return null;
    }

    const kundenDaten = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Firmenname/Name:',
        validate: input => input.trim() ? true : 'Name ist erforderlich'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email:',
        validate: input => {
          if (!input.trim()) return 'Email ist erforderlich';
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(input) ? true : 'Ungültige Email-Adresse';
        }
      },
      {
        type: 'input',
        name: 'telefon',
        message: 'Telefon (optional):'
      },
      {
        type: 'input',
        name: 'strasse',
        message: 'Strasse und Hausnummer:',
        validate: input => input.trim() ? true : 'Strasse ist erforderlich'
      },
      {
        type: 'input',
        name: 'plz',
        message: 'PLZ:',
        validate: input => input.trim() ? true : 'PLZ ist erforderlich'
      },
      {
        type: 'input',
        name: 'ort',
        message: 'Ort:',
        validate: input => input.trim() ? true : 'Ort ist erforderlich'
      },
      {
        type: 'input',
        name: 'land',
        message: 'Land:',
        default: 'Schweiz'
      }
    ]);

    try {
      const neuerKunde = await this.kundenService.createKunde({
        name: kundenDaten.name,
        email: kundenDaten.email,
        telefon: kundenDaten.telefon || undefined,
        adresse: {
          strasse: kundenDaten.strasse,
          plz: kundenDaten.plz,
          ort: kundenDaten.ort,
          land: kundenDaten.land
        }
      });

      console.log(chalk.green(`\n✅ Kunde "${neuerKunde.name}" wurde erfolgreich erstellt!`));
      console.log(chalk.gray(`ID: ${neuerKunde.id}`));
      
      await this.waitForEnter();
      return neuerKunde;
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Fehler beim Erstellen des Kunden: ${error.message}`));
      await this.waitForEnter();
      return null;
    }
  }

  /**
   * Kunden bearbeiten
   */
  async kundeBearbeiten(kunde) {
    console.log(chalk.cyan.bold(`\n✏️ Kunde "${kunde.name}" bearbeiten\n`));

    const { field } = await inquirer.prompt([
      {
        type: 'list',
        name: 'field',
        message: 'Was möchten Sie bearbeiten?',
        choices: [
          { name: 'Name/Firmenname', value: 'name' },
          { name: 'Email', value: 'email' },
          { name: 'Telefon', value: 'telefon' },
          { name: 'Adresse', value: 'adresse' },
          { name: 'Alle Felder', value: 'all' },
          { name: '← Zurück', value: 'back' }
        ]
      }
    ]);

    if (field === 'back') return;

    let updates = {};

    if (field === 'name' || field === 'all') {
      const { name } = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Name/Firmenname:',
          default: kunde.name,
          validate: input => input.trim() ? true : 'Name ist erforderlich'
        }
      ]);
      updates.name = name;
    }

    if (field === 'email' || field === 'all') {
      const { email } = await inquirer.prompt([
        {
          type: 'input',
          name: 'email',
          message: 'Email:',
          default: kunde.email,
          validate: input => {
            if (!input.trim()) return 'Email ist erforderlich';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(input) ? true : 'Ungültige Email-Adresse';
          }
        }
      ]);
      updates.email = email;
    }

    if (field === 'telefon' || field === 'all') {
      const { telefon } = await inquirer.prompt([
        {
          type: 'input',
          name: 'telefon',
          message: 'Telefon:',
          default: kunde.telefon || ''
        }
      ]);
      updates.telefon = telefon || undefined;
    }

    if (field === 'adresse' || field === 'all') {
      const adresseData = await inquirer.prompt([
        {
          type: 'input',
          name: 'strasse',
          message: 'Strasse und Hausnummer:',
          default: kunde.adresse?.strasse || '',
          validate: input => input.trim() ? true : 'Strasse ist erforderlich'
        },
        {
          type: 'input',
          name: 'plz',
          message: 'PLZ:',
          default: kunde.adresse?.plz || '',
          validate: input => input.trim() ? true : 'PLZ ist erforderlich'
        },
        {
          type: 'input',
          name: 'ort',
          message: 'Ort:',
          default: kunde.adresse?.ort || '',
          validate: input => input.trim() ? true : 'Ort ist erforderlich'
        },
        {
          type: 'input',
          name: 'land',
          message: 'Land:',
          default: kunde.adresse?.land || 'Schweiz'
        }
      ]);
      updates.adresse = adresseData;
    }

    try {
      const updatedKunde = await this.kundenService.updateKunde(kunde.id, updates);
      console.log(chalk.green(`\n✅ Kunde "${updatedKunde.name}" wurde erfolgreich aktualisiert!`));
      await this.waitForEnter();
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Fehler beim Aktualisieren des Kunden: ${error.message}`));
      await this.waitForEnter();
    }
  }

  /**
   * Kunden löschen
   */
  async kundeLöschen(kunde) {
    console.log(chalk.red.bold(`\n🗑️ Kunde "${kunde.name}" löschen\n`));
    
    // Zuerst prüfen, ob der Kunde Offerten hat
    const offerten = await this.offertenService.listOfferten();
    const kundenOfferten = offerten.filter(o => o.kundeId === kunde.id);
    
    if (kundenOfferten.length > 0) {
      console.log(chalk.yellow(`⚠️  Achtung: Dieser Kunde hat ${kundenOfferten.length} Offerte(n):`));
      kundenOfferten.forEach(o => console.log(`  - ${o.titel} (${o.nummer})`));
      console.log('');
    }

    const { confirmDelete } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmDelete',
        message: `Sind Sie sicher, dass Sie den Kunden "${kunde.name}" unwiderruflich löschen möchten?`,
        default: false
      }
    ]);

    if (!confirmDelete) {
      console.log(chalk.gray('Löschen abgebrochen.'));
      await this.waitForEnter();
      return false;
    }

    const { finalConfirm } = await inquirer.prompt([
      {
        type: 'input',
        name: 'finalConfirm',
        message: `Geben Sie "${kunde.name}" ein, um das Löschen zu bestätigen:`,
        validate: input => input === kunde.name ? true : 'Name stimmt nicht überein'
      }
    ]);

    try {
      await this.kundenService.deleteKunde(kunde.id);
      console.log(chalk.green(`\n✅ Kunde "${kunde.name}" wurde erfolgreich gelöscht.`));
      await this.waitForEnter();
      return true;
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Fehler beim Löschen des Kunden: ${error.message}`));
      await this.waitForEnter();
      return false;
    }
  }

  // ================================
  // OFFERTEN CRUD FUNKTIONEN  
  // ================================

  /**
   * Neue Offerte erstellen
   */
  async neueOfferte(vorgewählterKunde = null) {
    console.log(chalk.cyan.bold('\n📄 Neue Offerte erstellen\n'));

    // Zuerst fragen ob fortfahren oder abbrechen
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Möchten Sie eine neue Offerte erstellen?',
        choices: [
          { name: '✓ Ja, neue Offerte erstellen', value: 'continue' },
          { name: '← Abbrechen und zurück', value: 'cancel' }
        ]
      }
    ]);

    if (action === 'cancel') {
      console.log(chalk.gray('Erstellung abgebrochen.'));
      return null;
    }

    let selectedKunde = vorgewählterKunde;
    
    // Kunde auswählen, falls nicht vorgegeben
    if (!selectedKunde) {
      const kunden = await this.kundenService.listKunden();
      
      if (kunden.length === 0) {
        console.log(chalk.red('Keine Kunden gefunden. Erstellen Sie zuerst einen Kunden.'));
        await this.waitForEnter();
        return null;
      }

      const kundenChoices = kunden.map(kunde => ({
        name: `${kunde.name} (${kunde.email || 'Keine Email'})`,
        value: kunde
      }));
      
      kundenChoices.push({ name: chalk.gray('← Abbrechen'), value: 'cancel' });

      const { kunde } = await inquirer.prompt([
        {
          type: 'list',
          name: 'kunde',
          message: 'Für welchen Kunden soll die Offerte erstellt werden?',
          choices: kundenChoices
        }
      ]);
      
      if (kunde === 'cancel') {
        console.log(chalk.gray('Erstellung abgebrochen.'));
        return null;
      }
      
      selectedKunde = kunde;
    }

    // Offerten-Daten erfassen
    const offertenDaten = await inquirer.prompt([
      {
        type: 'input',
        name: 'titel',
        message: 'Offerten-Titel:',
        validate: input => input.trim() ? true : 'Titel ist erforderlich'
      },
      {
        type: 'input',
        name: 'gültigBis',
        message: 'Gültig bis (YYYY-MM-DD):',
        default: () => {
          const date = new Date();
          date.setDate(date.getDate() + 30);
          return date.toISOString().split('T')[0];
        },
        validate: input => {
          if (!input.match(/^\d{4}-\d{2}-\d{2}$/)) return 'Format: YYYY-MM-DD';
          const date = new Date(input);
          return date > new Date() ? true : 'Datum muss in der Zukunft liegen';
        }
      },
      {
        type: 'input',
        name: 'zahlungsbedingungen',
        message: 'Zahlungsbedingungen:',
        default: '30 Tage netto'
      },
      {
        type: 'number',
        name: 'mwstSatz',
        message: 'MwSt-Satz (%):',
        default: 7.7,
        validate: input => input >= 0 && input <= 100 ? true : 'MwSt-Satz zwischen 0 und 100'
      }
    ]);

    try {
      const neueOfferte = await this.offertenService.createOfferte({
        kundeId: selectedKunde.id,
        titel: offertenDaten.titel,
        gültigBis: offertenDaten.gültigBis,
        zahlungsbedingungen: offertenDaten.zahlungsbedingungen,
        mwstSatz: offertenDaten.mwstSatz
      });

      console.log(chalk.green(`\n✅ Offerte "${neueOfferte.titel}" wurde erfolgreich erstellt!`));
      console.log(chalk.gray(`Nummer: ${neueOfferte.nummer}`));
      console.log(chalk.gray(`ID: ${neueOfferte.id}`));
      
      await this.waitForEnter();
      return neueOfferte;
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Fehler beim Erstellen der Offerte: ${error.message}`));
      await this.waitForEnter();
      return null;
    }
  }

  /**
   * Offerte bearbeiten
   */
  async offerteBearbeiten(offerte) {
    console.log(chalk.cyan.bold(`\n✏️ Offerte "${offerte.titel}" bearbeiten\n`));

    const { field } = await inquirer.prompt([
      {
        type: 'list',
        name: 'field',
        message: 'Was möchten Sie bearbeiten?',
        choices: [
          { name: 'Titel', value: 'titel' },
          { name: 'Gültig bis', value: 'gültigBis' },
          { name: 'Status', value: 'status' },
          { name: 'Zahlungsbedingungen', value: 'zahlungsbedingungen' },
          { name: 'MwSt-Satz', value: 'mwstSatz' },
          { name: '← Zurück', value: 'back' }
        ]
      }
    ]);

    if (field === 'back') return;

    let updates = {};

    if (field === 'titel') {
      const { titel } = await inquirer.prompt([
        {
          type: 'input',
          name: 'titel',
          message: 'Titel:',
          default: offerte.titel,
          validate: input => input.trim() ? true : 'Titel ist erforderlich'
        }
      ]);
      updates.titel = titel;
    }

    if (field === 'gültigBis') {
      const { gültigBis } = await inquirer.prompt([
        {
          type: 'input',
          name: 'gültigBis',
          message: 'Gültig bis (YYYY-MM-DD):',
          default: offerte.gültigBis || '',
          validate: input => {
            if (!input.match(/^\d{4}-\d{2}-\d{2}$/)) return 'Format: YYYY-MM-DD';
            return new Date(input) > new Date() ? true : 'Datum muss in der Zukunft liegen';
          }
        }
      ]);
      updates.gültigBis = gültigBis;
    }

    if (field === 'status') {
      const { status } = await inquirer.prompt([
        {
          type: 'list',
          name: 'status',
          message: 'Status:',
          default: offerte.status,
          choices: [
            { name: 'Entwurf', value: 'entwurf' },
            { name: 'Versendet', value: 'versendet' },
            { name: 'Angenommen', value: 'angenommen' },  
            { name: 'Abgelehnt', value: 'abgelehnt' },
            { name: 'Abgelaufen', value: 'abgelaufen' }
          ]
        }
      ]);
      updates.status = status;
    }

    if (field === 'zahlungsbedingungen') {
      const { zahlungsbedingungen } = await inquirer.prompt([
        {
          type: 'input',
          name: 'zahlungsbedingungen',
          message: 'Zahlungsbedingungen:',
          default: offerte.zahlungsbedingungen
        }
      ]);
      updates.zahlungsbedingungen = zahlungsbedingungen;
    }

    if (field === 'mwstSatz') {
      const { mwstSatz } = await inquirer.prompt([
        {
          type: 'number',
          name: 'mwstSatz',
          message: 'MwSt-Satz (%):',
          default: offerte.mwstSatz,
          validate: input => input >= 0 && input <= 100 ? true : 'MwSt-Satz zwischen 0 und 100'
        }
      ]);
      updates.mwstSatz = mwstSatz;
    }

    try {
      await this.offertenService.updateOfferte(offerte.id, updates);
      console.log(chalk.green(`\n✅ Offerte wurde erfolgreich aktualisiert!`));
      await this.waitForEnter();
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Fehler beim Aktualisieren der Offerte: ${error.message}`));
      await this.waitForEnter();
    }
  }

  /**
   * Offerte löschen
   */
  async offerteLöschen(offerte) {
    console.log(chalk.red.bold(`\n🗑️ Offerte "${offerte.titel}" löschen\n`));
    
    console.log(`Nummer: ${offerte.nummer}`);
    console.log(`Datum: ${offerte.datum}`);
    console.log(`Status: ${offerte.status}`);
    console.log(`Gesamtsumme: CHF ${offerte.gesamtBrutto || 0}`);
    console.log('');

    const { confirmDelete } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmDelete',
        message: `Sind Sie sicher, dass Sie die Offerte "${offerte.titel}" unwiderruflich löschen möchten?`,
        default: false
      }
    ]);

    if (!confirmDelete) {
      console.log(chalk.gray('Löschen abgebrochen.'));
      await this.waitForEnter();
      return;
    }

    try {
      await this.offertenService.deleteOfferte(offerte.id);
      console.log(chalk.green(`\n✅ Offerte "${offerte.titel}" wurde erfolgreich gelöscht.`));
      await this.waitForEnter();
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Fehler beim Löschen der Offerte: ${error.message}`));
      await this.waitForEnter();
    }
  }

  /**
   * Positionen einer Offerte verwalten
   */
  async positionenVerwalten(offerte) {
    console.log(chalk.cyan.bold(`\n📝 Positionen für "${offerte.titel}" verwalten\n`));

    while (true) {
      // Aktuelle Positionen anzeigen
      const vollOfferte = await this.offertenService.getOfferte(offerte.id);
      const positionen = vollOfferte.positionen?.filter(p => p.beschreibung) || [];

      console.log(chalk.white('Aktuelle Positionen:'));
      if (positionen.length === 0) {
        console.log(chalk.gray('  Keine Positionen vorhanden.'));
      } else {
        positionen.forEach((pos, index) => {
          const total = (pos.menge * pos.einzelpreis * (1 - pos.rabatt / 100)).toFixed(2);
          console.log(`  ${index + 1}. ${pos.beschreibung}`);
          console.log(`     ${pos.menge} ${pos.einheit} à CHF ${pos.einzelpreis} = CHF ${total}`);
        });
        console.log(`\nGesamtsumme: CHF ${vollOfferte.gesamtBrutto || 0}`);
      }
      console.log('');

      const choices = [
        { name: '➕ Neue Position hinzufügen', value: 'add' }
      ];

      if (positionen.length > 0) {
        choices.push(
          { name: '✏️ Position bearbeiten', value: 'edit' },
          { name: '🗑️ Position löschen', value: 'delete' }
        );
      }

      choices.push({ name: '← Zurück zur Offerte', value: 'back' });

      const { action } = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Was möchten Sie tun?',
          choices
        }
      ]);

      if (action === 'back') break;

      if (action === 'add') {
        await this.positionHinzufügen(offerte);
      } else if (action === 'edit') {
        await this.positionBearbeiten(offerte, positionen);
      } else if (action === 'delete') {
        await this.positionLöschen(offerte, positionen);
      }
    }
  }

  /**
   * Neue Position hinzufügen
   */
  async positionHinzufügen(offerte) {
    console.log(chalk.cyan('\n➕ Neue Position hinzufügen\n'));

    // Zuerst fragen ob fortfahren oder abbrechen
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Möchten Sie eine neue Position hinzufügen?',
        choices: [
          { name: '✓ Ja, neue Position hinzufügen', value: 'continue' },
          { name: '← Abbrechen und zurück', value: 'cancel' }
        ]
      }
    ]);

    if (action === 'cancel') {
      console.log(chalk.gray('Hinzufügen abgebrochen.'));
      return;
    }

    const positionsDaten = await inquirer.prompt([
      {
        type: 'input',
        name: 'beschreibung',
        message: 'Beschreibung:',
        validate: input => input.trim() ? true : 'Beschreibung ist erforderlich'
      },
      {
        type: 'number',
        name: 'menge',
        message: 'Menge:',
        default: 1,
        validate: input => input > 0 ? true : 'Menge muss größer als 0 sein'
      },
      {
        type: 'input',
        name: 'einheit',
        message: 'Einheit:',
        default: 'Stk'
      },
      {
        type: 'number',
        name: 'einzelpreis',
        message: 'Einzelpreis (CHF):',
        validate: input => input >= 0 ? true : 'Preis darf nicht negativ sein'
      },
      {
        type: 'number',
        name: 'rabatt',
        message: 'Rabatt (%):',
        default: 0,
        validate: input => input >= 0 && input <= 100 ? true : 'Rabatt zwischen 0 und 100'
      },
      {
        type: 'input',
        name: 'kategorie',
        message: 'Kategorie (optional):'
      }
    ]);

    try {
      await this.offertenService.addPosition(offerte.id, {
        beschreibung: positionsDaten.beschreibung,
        menge: positionsDaten.menge,
        einheit: positionsDaten.einheit,
        einzelpreis: positionsDaten.einzelpreis,
        rabatt: positionsDaten.rabatt,
        kategorie: positionsDaten.kategorie || ''
      });

      console.log(chalk.green('\n✅ Position wurde erfolgreich hinzugefügt!'));
      await this.waitForEnter();
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Fehler beim Hinzufügen der Position: ${error.message}`));
      await this.waitForEnter();
    }
  }

  /**
   * Position bearbeiten
   */
  async positionBearbeiten(offerte, positionen) {
    const positionChoices = positionen.map((pos, index) => ({
      name: `${index + 1}. ${pos.beschreibung} (CHF ${pos.einzelpreis})`,
      value: pos
    }));

    const { selectedPosition } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedPosition',
        message: 'Welche Position möchten Sie bearbeiten?',
        choices: positionChoices
      }
    ]);

    const positionsDaten = await inquirer.prompt([
      {
        type: 'input',
        name: 'beschreibung',
        message: 'Beschreibung:',
        default: selectedPosition.beschreibung,
        validate: input => input.trim() ? true : 'Beschreibung ist erforderlich'
      },
      {
        type: 'number',
        name: 'menge',
        message: 'Menge:',
        default: selectedPosition.menge,
        validate: input => input > 0 ? true : 'Menge muss größer als 0 sein'
      },
      {
        type: 'input',
        name: 'einheit',
        message: 'Einheit:',
        default: selectedPosition.einheit
      },
      {
        type: 'number',
        name: 'einzelpreis',
        message: 'Einzelpreis (CHF):',
        default: selectedPosition.einzelpreis,
        validate: input => input >= 0 ? true : 'Preis darf nicht negativ sein'
      },
      {
        type: 'number',
        name: 'rabatt',
        message: 'Rabatt (%):',
        default: selectedPosition.rabatt,
        validate: input => input >= 0 && input <= 100 ? true : 'Rabatt zwischen 0 und 100'
      },
      {
        type: 'input',
        name: 'kategorie',
        message: 'Kategorie:',
        default: selectedPosition.kategorie || ''
      }
    ]);

    try {
      await this.offertenService.updatePosition(offerte.id, selectedPosition.id, positionsDaten);
      console.log(chalk.green('\n✅ Position wurde erfolgreich aktualisiert!'));
      await this.waitForEnter();
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Fehler beim Aktualisieren der Position: ${error.message}`));
      await this.waitForEnter();
    }
  }

  /**
   * Position löschen
   */
  async positionLöschen(offerte, positionen) {
    const positionChoices = positionen.map((pos, index) => ({
      name: `${index + 1}. ${pos.beschreibung} (CHF ${pos.einzelpreis})`,
      value: pos
    }));

    const { selectedPosition } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedPosition',
        message: 'Welche Position möchten Sie löschen?',
        choices: positionChoices
      }
    ]);

    const { confirmDelete } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmDelete',
        message: `Position "${selectedPosition.beschreibung}" wirklich löschen?`,
        default: false
      }
    ]);

    if (!confirmDelete) {
      console.log(chalk.gray('Löschen abgebrochen.'));
      await this.waitForEnter();
      return;
    }

    try {
      await this.offertenService.deletePosition(offerte.id, selectedPosition.id);
      console.log(chalk.green('\n✅ Position wurde erfolgreich gelöscht!'));
      await this.waitForEnter();
      
    } catch (error) {
      console.log(chalk.red(`\n❌ Fehler beim Löschen der Position: ${error.message}`));
      await this.waitForEnter();
    }
  }
}

// CLI starten wenn direkt ausgeführt
if (import.meta.url === `file://${process.argv[1]}`) {
  const cli = new InteractiveCLI();
  cli.start().catch(console.error);
}

export { InteractiveCLI };