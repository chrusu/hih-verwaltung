#!/usr/bin/env node

/**
 * CLI-Interface für HIH-Verwaltung
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { KundenService } from './services/kundenService.js';
import { OffertenService } from './services/offertenService.js';

const program = new Command();

// Services initialisieren
const kundenService = new KundenService();
const offertenService = new OffertenService();

/**
 * Hilfsfunktionen
 */
function logSuccess(message) {
  console.log(chalk.green('✓'), message);
}

function logError(message) {
  console.log(chalk.red('✗'), message);
}

function logInfo(message) {
  console.log(chalk.blue('ℹ'), message);
}

/**
 * Hauptprogramm
 */
program
  .name('hih')
  .description('HIH Verwaltung - Dateibasierte Verwaltungssoftware für Einzelfirma')
  .version('1.0.0');

/**
 * Kunden-Befehle
 */
const kundenCmd = program
  .command('kunde')
  .description('Kundenverwaltung');

kundenCmd
  .command('create')
  .description('Neuen Kunden erstellen')
  .option('-n, --name <name>', 'Kundenname')
  .option('-t, --typ <typ>', 'Kundentyp (privat/geschäft)', 'privat')
  .option('-s, --strasse <strasse>', 'Strasse')
  .option('-p, --plz <plz>', 'PLZ')
  .option('-o, --ort <ort>', 'Ort')
  .option('-l, --land <land>', 'Land', 'Schweiz')
  .action(async (options) => {
    try {
      // Interaktive Eingabe falls Parameter fehlen
      if (!options.name) {
        logError('Kundenname ist erforderlich. Verwende --name oder -n');
        return;
      }

      const kunde = await kundenService.createKunde({
        name: options.name,
        typ: options.typ,
        adresse: {
          strasse: options.strasse || '',
          plz: options.plz || '',
          ort: options.ort || '',
          land: options.land
        }
      });

      logSuccess(`Kunde erstellt: ${kunde.nummer} - ${kunde.name}`);
      logInfo(`Verzeichnis: data/kunden/${kunde.nummer}/`);
    } catch (error) {
      logError(`Fehler beim Erstellen des Kunden: ${error.message}`);
    }
  });

kundenCmd
  .command('list')
  .description('Alle Kunden auflisten')
  .action(async () => {
    try {
      const kunden = await kundenService.listKunden();
      
      if (kunden.length === 0) {
        logInfo('Keine Kunden gefunden.');
        return;
      }

      console.log('\n' + chalk.bold('Kunden:'));
      console.log('─'.repeat(60));
      
      kunden.forEach(kunde => {
        const status = kunde.aktiv ? chalk.green('●') : chalk.red('●');
        console.log(`${status} ${chalk.bold(kunde.nummer)} - ${kunde.name} (${kunde.typ})`);
        if (kunde.adresse?.ort) {
          console.log(`   ${kunde.adresse.ort}`);
        }
      });
      
      console.log('─'.repeat(60));
      console.log(`Total: ${kunden.length} Kunden`);
    } catch (error) {
      logError(`Fehler beim Auflisten der Kunden: ${error.message}`);
    }
  });

kundenCmd
  .command('kontakt')
  .description('Kontakt zu Kunde hinzufügen')
  .requiredOption('-k, --kunde <kunde>', 'Kundennummer oder ID')
  .option('-a, --anrede <anrede>', 'Anrede')
  .option('-v, --vorname <vorname>', 'Vorname')
  .option('-n, --nachname <nachname>', 'Nachname')
  .option('-p, --position <position>', 'Position')
  .option('-e, --email <email>', 'E-Mail')
  .option('-t, --telefon <telefon>', 'Telefon')
  .option('-m, --mobil <mobil>', 'Mobil')
  .action(async (options) => {
    try {
      if (!options.nachname && !options.email) {
        logError('Mindestens Nachname oder E-Mail sind erforderlich.');
        return;
      }

      const kontakt = await kundenService.addKontakt(options.kunde, {
        anrede: options.anrede || '',
        vorname: options.vorname || '',
        nachname: options.nachname || '',
        position: options.position || '',
        email: options.email || '',
        telefon: options.telefon || '',
        mobil: options.mobil || ''
      });

      logSuccess(`Kontakt hinzugefügt: ${kontakt.vollständigerName}`);
      if (kontakt.email) {
        logInfo(`E-Mail: ${kontakt.email}`);
      }
    } catch (error) {
      logError(`Fehler beim Hinzufügen des Kontakts: ${error.message}`);
    }
  });

/**
 * Offerten-Befehle
 */
const offertenCmd = program
  .command('offerte')
  .description('Offertenverwaltung');

offertenCmd
  .command('create')
  .description('Neue Offerte erstellen')
  .requiredOption('-k, --kunde <kunde>', 'Kundennummer oder ID')
  .option('-c, --kontakt <kontakt>', 'Kontakt-ID')
  .option('-t, --titel <titel>', 'Offertentitel')
  .option('-b, --beschreibung <beschreibung>', 'Beschreibung')
  .option('-g, --gueltig <tage>', 'Gültig für X Tage', '30')
  .option('-z, --zahlungsbedingungen <bedingungen>', 'Zahlungsbedingungen', '30 Tage netto')
  .option('-m, --mwst <satz>', 'MwSt-Satz', '7.7')
  .action(async (options) => {
    try {
      if (!options.titel) {
        logError('Offertentitel ist erforderlich. Verwende --titel oder -t');
        return;
      }

      const gültigBis = new Date();
      gültigBis.setDate(gültigBis.getDate() + parseInt(options.gueltig));

      const offerte = await offertenService.createOfferte({
        kundeId: options.kunde,
        kontaktId: options.kontakt || '',
        titel: options.titel,
        beschreibung: options.beschreibung || '',
        gültigBis: gültigBis.toISOString().split('T')[0],
        zahlungsbedingungen: options.zahlungsbedingungen,
        mwstSatz: parseFloat(options.mwst)
      });

      logSuccess(`Offerte erstellt: ${offerte.nummer} - ${offerte.titel}`);
      logInfo(`Verzeichnis: data/offerten/${offerte.nummer}/`);
    } catch (error) {
      logError(`Fehler beim Erstellen der Offerte: ${error.message}`);
    }
  });

offertenCmd
  .command('list')
  .description('Alle Offerten auflisten')
  .option('-k, --kunde <kunde>', 'Filter nach Kundennummer')
  .action(async (options) => {
    try {
      let offerten = await offertenService.listOfferten();
      
      if (options.kunde) {
        offerten = offerten.filter(o => o.kundeId === options.kunde);
      }
      
      if (offerten.length === 0) {
        logInfo('Keine Offerten gefunden.');
        return;
      }

      console.log('\n' + chalk.bold('Offerten:'));
      console.log('─'.repeat(80));
      
      offerten.forEach(offerte => {
        const statusColor = {
          'entwurf': chalk.yellow,
          'gesendet': chalk.blue,
          'angenommen': chalk.green,
          'abgelehnt': chalk.red
        }[offerte.status] || chalk.gray;
        
        console.log(`${statusColor('●')} ${chalk.bold(offerte.nummer)} - ${offerte.titel}`);
        console.log(`   Kunde: ${offerte.kundeId} | Datum: ${offerte.datum} | Status: ${statusColor(offerte.status)}`);
      });
      
      console.log('─'.repeat(80));
      console.log(`Total: ${offerten.length} Offerten`);
    } catch (error) {
      logError(`Fehler beim Auflisten der Offerten: ${error.message}`);
    }
  });

offertenCmd
  .command('position')
  .description('Position zu Offerte hinzufügen')
  .requiredOption('-o, --offerte <offerte>', 'Offertennummer oder ID')
  .requiredOption('-b, --beschreibung <beschreibung>', 'Positionsbeschreibung')
  .option('-m, --menge <menge>', 'Menge', '1')
  .option('-e, --einheit <einheit>', 'Einheit', 'Stk')
  .option('-p, --preis <preis>', 'Einzelpreis', '0')
  .option('-r, --rabatt <rabatt>', 'Rabatt in %', '0')
  .option('-k, --kategorie <kategorie>', 'Kategorie')
  .action(async (options) => {
    try {
      const position = await offertenService.addPosition(options.offerte, {
        beschreibung: options.beschreibung,
        menge: parseFloat(options.menge),
        einheit: options.einheit,
        einzelpreis: parseFloat(options.preis),
        rabatt: parseFloat(options.rabatt),
        kategorie: options.kategorie || ''
      });

      logSuccess(`Position hinzugefügt: ${position.beschreibung}`);
      logInfo(`Menge: ${position.menge} ${position.einheit} à CHF ${position.einzelpreis}`);
      logInfo(`Gesamtpreis: CHF ${position.gesamtpreis.toFixed(2)}`);
    } catch (error) {
      logError(`Fehler beim Hinzufügen der Position: ${error.message}`);
    }
  });

/**
 * Programm starten
 */
program.parse();