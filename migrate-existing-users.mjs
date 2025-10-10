#!/usr/bin/env node

/**
 * Migration Script: Erstellt Mandanten-Ordner für bestehende User
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const USERS_FILE = path.join(__dirname, 'data/users/users.json');
const MANDANTEN_BASE = path.join(__dirname, 'data/mandanten');

async function createUserDataStructure(userId) {
    const userMandantPath = path.join(MANDANTEN_BASE, userId);
    
    console.log(`📁 Erstelle Ordnerstruktur für User: ${userId}`);
    
    // Hauptordner erstellen
    await fs.mkdir(userMandantPath, { recursive: true });
    
    // Unterordner erstellen
    const folders = [
        'eigene_firma',
        'eigene_firma/briefvorlage',
        'eigene_firma/dokumente',
        'kunden',
        'offerten',
        'rechnungen',
        'exports'
    ];
    
    for (const folder of folders) {
        const folderPath = path.join(userMandantPath, folder);
        await fs.mkdir(folderPath, { recursive: true });
        console.log(`  ✅ ${folder}/`);
    }
    
    // Leere firma.md Datei erstellen
    const firmaPath = path.join(userMandantPath, 'eigene_firma/firma.md');
    const defaultFirmaContent = `# Firmendaten

**Name:** 
**Strasse:** 
**PLZ:** 
**Ort:** 
**Land:** Schweiz
**Email:** 
**Telefon:** 
**Website:** 
**UID:** 
**IBAN:** 
`;
    
    await fs.writeFile(firmaPath, defaultFirmaContent, 'utf8');
    console.log(`  ✅ eigene_firma/firma.md`);
    
    console.log(`✅ Ordnerstruktur für ${userId} erstellt!\n`);
}

async function migrateExistingUsers() {
    try {
        console.log('🚀 Starte Migration bestehender User...\n');
        
        // Users laden
        const usersData = JSON.parse(await fs.readFile(USERS_FILE, 'utf8'));
        const users = usersData.users || [];
        
        console.log(`📊 Gefundene User: ${users.length}\n`);
        
        // Für jeden User die Ordnerstruktur erstellen
        for (const user of users) {
            const userMandantPath = path.join(MANDANTEN_BASE, user.id);
            
            // Prüfen ob Ordner bereits existiert
            try {
                await fs.access(userMandantPath);
                console.log(`⏭️  Ordner existiert bereits für ${user.name} (${user.id})\n`);
                continue;
            } catch {
                // Ordner existiert nicht, erstellen
                await createUserDataStructure(user.id);
            }
        }
        
        console.log('✅ Migration abgeschlossen!');
        
    } catch (error) {
        console.error('❌ Fehler bei Migration:', error);
        process.exit(1);
    }
}

// Script ausführen
migrateExistingUsers();
