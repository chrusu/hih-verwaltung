#!/usr/bin/env node
import { PdfExportService } from './src/services/pdfExportService.js';

async function generateFreshPDFs() {
  const pdfService = new PdfExportService();
  
  try {
    console.log('Generiere frische PDFs mit aktualisiertem Code...\n');
    
    // Generiere Rechnung
    console.log('1. Generiere Rechnung REC-2025-001...');
    const rechnungResult = await pdfService.exportRechnungPdf('REC-2025-001');
    console.log('✓ Rechnung generiert:', rechnungResult.pdfPath);
    
    // Generiere Offerte
    console.log('\n2. Generiere Offerte OFF-2025-003...');
    const offerteResult = await pdfService.exportToPdf('OFF-2025-003');
    console.log('✓ Offerte generiert:', offerteResult.pdfPath);
    
    console.log('\n✅ Beide PDFs erfolgreich generiert!');
    console.log('\nBitte öffnen Sie die PDFs und vergleichen Sie die Tabellenformatierung:');
    console.log('  -', rechnungResult.pdfPath);
    console.log('  -', offerteResult.pdfPath);
    
  } catch (error) {
    console.error('❌ Fehler:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

generateFreshPDFs();
