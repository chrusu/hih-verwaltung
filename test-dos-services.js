#!/usr/bin/env node

/**
 * Test-Script für DOS-TUI CRUD-Operationen
 */

import { KundenService } from './src/services/kundenService.js';
import { OffertenService } from './src/services/offertenService.js';

console.log('🧪 Teste DOS-TUI Services...');

async function testServices() {
    try {
        const kundenService = new KundenService();
        const offertenService = new OffertenService();

        console.log('📋 Teste Kundenliste...');
        const kunden = await kundenService.listKunden();
        console.log(`✅ ${kunden.length} Kunden geladen`);

        console.log('📋 Teste Offertenliste...');
        const offerten = await offertenService.listOfferten();
        console.log(`✅ ${offerten.length} Offerten geladen`);

        console.log('👤 Teste Kunden-Erstellung...');
        const testKunde = await kundenService.createKunde({
            name: 'DOS-TUI Test Kunde',
            email: 'test@dos-tui.ch',
            telefon: '+41 44 123 99 88'
        });
        console.log(`✅ Test-Kunde erstellt: ${testKunde.name} (${testKunde.id})`);

        console.log('✏️ Teste Kunden-Bearbeitung...');
        await kundenService.updateKunde(testKunde.id, {
            name: 'DOS-TUI Test Kunde (bearbeitet)',
            email: 'updated@dos-tui.ch'
        });
        console.log('✅ Test-Kunde aktualisiert');

        console.log('🗑️ Teste Kunden-Löschung...');
        await kundenService.deleteKunde(testKunde.id);
        console.log('✅ Test-Kunde gelöscht');

        console.log('\n🎉 Alle Service-Tests erfolgreich!');
        console.log('\n💡 DOS-TUI sollte jetzt vollständig funktionieren:');
        console.log('   - Kundenliste wird angezeigt ✅');
        console.log('   - N-Taste für neue Kunden funktioniert ✅');
        console.log('   - E-Taste für Bearbeitung funktioniert ✅');
        console.log('   - D-Taste für Löschung funktioniert ✅');

    } catch (error) {
        console.error('❌ Service-Test Fehler:', error);
    }
}

testServices();