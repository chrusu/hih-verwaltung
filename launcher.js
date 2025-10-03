#!/usr/bin/env node

/**
 * HIH-Verwaltung Launcher
 * Wählt zwischen klassischem CLI und DOS-TUI
 */

import { program } from 'commander';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(chalk.cyan.bold(`
╔══════════════════════════════════════════════════════════════════════════════╗
║                     HIH-VERWALTUNG v1.0 - LAUNCHER                         ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Wählen Sie Ihre bevorzugte Benutzeroberfläche:                             ║
║                                                                              ║
║  📱 MODERN:  Interaktives CLI mit Menüs und Prompts                         ║
║  🖥️  RETRO:   DOS-style TUI mit F-Tasten (vollbild)                        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
`));

program
  .name('hih-launcher')
  .description('HIH-Verwaltung Interface Launcher')
  .version('1.0.0');

program
  .command('modern')
  .alias('cli')
  .description('🎯 Modernes interaktives CLI starten')
  .action(() => {
    console.log(chalk.green('🚀 Starte modernes CLI...'));
    const child = spawn('node', [join(__dirname, 'hih.js')], {
      stdio: 'inherit',
      shell: true
    });
    
    child.on('exit', (code) => {
      process.exit(code);
    });
  });

program
  .command('dos')
  .alias('tui')
  .description('🖥️  DOS-style TUI starten (Vollbild)')
  .action(() => {
    console.log(chalk.cyan('🎮 Starte DOS-TUI...'));
    console.log(chalk.yellow('💡 Tipp: F1=Hilfe, F10=Ende, ESC=Zurück'));
    
    const child = spawn('node', [join(__dirname, 'dos-tui.js')], {
      stdio: 'inherit',
      shell: true
    });
    
    child.on('exit', (code) => {
      console.log(chalk.gray('\n👋 DOS-TUI beendet.'));
      process.exit(code);
    });
  });

program
  .command('demo')
  .description('🎬 Demo-Modus: Beide Interfaces zeigen')
  .action(() => {
    console.log(chalk.magenta(`
🎬 DEMO-MODUS:
──────────────
1. Zuerst startet das moderne CLI für 30 Sekunden
2. Dann automatisch das DOS-TUI
3. Jederzeit mit Ctrl+C beenden

Startet in 3 Sekunden...
    `));
    
    setTimeout(() => {
      console.log(chalk.green('📱 Phase 1: Modernes CLI'));
      // Demo würde hier starten
    }, 3000);
  });

// Interaktiver Modus wenn keine Parameter
if (process.argv.length === 2) {
  console.log(chalk.yellow(`
Verwendung:
──────────
${chalk.green('node launcher.js modern')}  - Modernes CLI starten
${chalk.cyan('node launcher.js dos')}     - DOS-TUI starten  
${chalk.magenta('node launcher.js --help')}   - Alle Optionen anzeigen

Oder direkt:
${chalk.dim('node hih.js')}        - Modernes CLI
${chalk.dim('node dos-tui.js')}    - DOS-TUI
  `));
  
  process.exit(0);
}

program.parse();