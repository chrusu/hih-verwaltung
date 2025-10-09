#!/usr/bin/env node
import { PdfExportService } from './src/services/pdfExportService.js';
import fs from 'fs/promises';

async function testOfferteLatex() {
  const pdfService = new PdfExportService();
  
  try {
    // Generiere LaTeX für Offerte OFF-2025-003
    const latexContent = await pdfService.generateOfferteLatex('OFF-2025-003');
    
    // Schreibe in tmp Datei
    const testPath = '/tmp/test-offerte.tex';
    await fs.writeFile(testPath, latexContent, 'utf8');
    
    console.log('LaTeX-Datei geschrieben nach:', testPath);
    console.log('\n=== LONGTABLE SECTION ===');
    
    // Extrahiere longtable Section
    const lines = latexContent.split('\n');
    let inTable = false;
    for (const line of lines) {
      if (line.includes('\\begin{longtable}')) {
        inTable = true;
      }
      if (inTable) {
        console.log(line);
      }
      if (line.includes('\\end{longtable}')) {
        break;
      }
    }
    
  } catch (error) {
    console.error('Fehler:', error.message);
    process.exit(1);
  }
}

testOfferteLatex();
