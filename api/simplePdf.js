/**
 * Vereinfachte PDF-Generierung für Vercel
 * Verwendet HTML-to-PDF statt LaTeX
 */

export function generateSimplePdfHtml(offerte, kunde, firmendaten) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Offerte ${offerte.nummer}</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 40px;
            color: #333;
        }
        .header { 
            display: flex; 
            justify-content: space-between; 
            margin-bottom: 40px;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 20px;
        }
        .company-info { flex: 1; }
        .customer-info { flex: 1; text-align: right; }
        .offerte-title { 
            font-size: 24px; 
            font-weight: bold; 
            margin: 30px 0; 
            color: #2c3e50;
        }
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin: 20px 0;
        }
        th, td { 
            border: 1px solid #ddd; 
            padding: 12px; 
            text-align: left;
        }
        th { 
            background-color: #f8f9fa; 
            font-weight: bold;
        }
        .text-right { text-align: right; }
        .totals { 
            margin-top: 30px; 
            text-align: right;
        }
        .totals table { 
            width: 300px; 
            margin-left: auto;
        }
        .total-row { 
            font-weight: bold; 
            background-color: #f8f9fa;
        }
        .footer { 
            margin-top: 40px; 
            padding-top: 20px; 
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="company-info">
            <h2>${firmendaten?.name || 'Hinderling Internet Handwerk'}</h2>
            <p>
                ${firmendaten?.adresse?.strasse || 'Musterstrasse 123'}<br>
                ${firmendaten?.adresse?.plz || '8000'} ${firmendaten?.adresse?.ort || 'Zürich'}<br>
                Tel: ${firmendaten?.telefon || '+41 44 123 45 67'}<br>
                Email: ${firmendaten?.email || 'info@hih.ch'}
            </p>
        </div>
        <div class="customer-info">
            <h3>Kunde:</h3>
            <p>
                ${kunde.name}<br>
                ${kunde.adresse?.strasse || ''}<br>
                ${kunde.adresse?.plz || ''} ${kunde.adresse?.ort || ''}<br>
                ${kunde.adresse?.land && kunde.adresse.land !== 'Schweiz' ? kunde.adresse.land : ''}
            </p>
        </div>
    </div>

    <div class="offerte-title">
        Offerte ${offerte.nummer}
    </div>

    <div class="offerte-details">
        <p><strong>Titel:</strong> ${offerte.titel}</p>
        <p><strong>Datum:</strong> ${offerte.datum}</p>
        <p><strong>Gültig bis:</strong> ${offerte.gueltigBis}</p>
        <p><strong>Status:</strong> ${offerte.status}</p>
    </div>

    ${offerte.beschreibung ? `<p><strong>Beschreibung:</strong><br>${offerte.beschreibung}</p>` : ''}

    <h3>Positionen</h3>
    <table>
        <thead>
            <tr>
                <th style="width: 60px;">Pos.</th>
                <th>Beschreibung</th>
                <th style="width: 80px;">Menge</th>
                <th style="width: 100px;">Preis</th>
                <th style="width: 100px;">Total</th>
            </tr>
        </thead>
        <tbody>
            ${offerte.positionen && offerte.positionen.length > 0 
                ? offerte.positionen.map(pos => `
                    <tr>
                        <td class="text-right">${pos.position}</td>
                        <td>${pos.beschreibung}</td>
                        <td class="text-right">${pos.menge} ${pos.einheit}</td>
                        <td class="text-right">CHF ${pos.einzelpreis.toFixed(2)}</td>
                        <td class="text-right">CHF ${pos.gesamtpreis.toFixed(2)}</td>
                    </tr>
                `).join('')
                : '<tr><td colspan="5">Keine Positionen vorhanden</td></tr>'
            }
        </tbody>
    </table>

    <div class="totals">
        <table>
            <tr>
                <td><strong>Subtotal:</strong></td>
                <td class="text-right"><strong>CHF ${offerte.gesamtsumme.toFixed(2)}</strong></td>
            </tr>
            <tr>
                <td>MwSt ${offerte.mwstSatz}%:</td>
                <td class="text-right">CHF ${offerte.mwstBetrag.toFixed(2)}</td>
            </tr>
            <tr class="total-row">
                <td><strong>Total:</strong></td>
                <td class="text-right"><strong>CHF ${offerte.gesamtBrutto.toFixed(2)}</strong></td>
            </tr>
        </table>
    </div>

    <div class="footer">
        <p><strong>Zahlungskonditionen:</strong> ${offerte.zahlungskonditionen}</p>
        <p>
            Vielen Dank für Ihr Vertrauen!<br>
            Bei Fragen stehen wir Ihnen gerne zur Verfügung.
        </p>
    </div>
</body>
</html>
    `;
}

// Für später: Vercel unterstützt puppeteer für HTML-to-PDF
export async function generatePdfFromHtml(html) {
    // Für den ersten Test geben wir nur HTML zurück
    // In Zukunft kann hier puppeteer oder ähnliches verwendet werden
    return {
        success: false,
        error: 'PDF-Generierung in Entwicklung - HTML-Vorschau verfügbar',
        html: html
    };
}