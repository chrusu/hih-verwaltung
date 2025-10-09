/**
 * Datenmodelle für die HIH-Verwaltung
 */

/**
 * Kunde
 */
export class Kunde {
  constructor(data = {}) {
    this.id = data.id || '';
    this.nummer = data.nummer || '';
    this.name = data.name || '';
    this.email = data.email || '';
    this.telefon = data.telefon || '';
    this.typ = data.typ || 'privat'; // privat, geschäft
    this.adresse = {
      strasse: data.adresse?.strasse || '',
      plz: data.adresse?.plz || '',
      ort: data.adresse?.ort || '',
      land: data.adresse?.land || 'Schweiz'
    };
    this.notizen = data.notizen || '';
    this.erstellt = data.erstellt || new Date().toISOString();
    this.aktiv = data.aktiv !== undefined ? data.aktiv : true;
  }

  toMarkdown() {
    const yamlParts = [
      `id: ${this.id}`,
      `nummer: ${this.nummer}`,
      `name: "${this.name}"`
    ];
    
    if (this.email) yamlParts.push(`email: "${this.email}"`);
    if (this.telefon) yamlParts.push(`telefon: "${this.telefon}"`);
    
    yamlParts.push(
      `typ: ${this.typ}`,
      `adresse:`,
      `  strasse: "${this.adresse.strasse}"`,
      `  plz: "${this.adresse.plz}"`,
      `  ort: "${this.adresse.ort}"`,
      `  land: "${this.adresse.land}"`,
      `erstellt: ${this.erstellt}`,
      `aktiv: ${this.aktiv}`
    );

    const kontaktInfo = [];
    if (this.email) kontaktInfo.push(`**Email:** ${this.email}`);
    if (this.telefon) kontaktInfo.push(`**Telefon:** ${this.telefon}`);
    
    return `---
${yamlParts.join('\n')}
---

# ${this.name}

**Kundennummer:** ${this.nummer}  
**Typ:** ${this.typ}

${kontaktInfo.length > 0 ? `## Kontakt\n\n${kontaktInfo.join('  \n')}\n\n` : ''}## Adresse

${this.adresse.strasse}  
${this.adresse.plz} ${this.adresse.ort}  
${this.adresse.land}

## Notizen

${this.notizen}
`;
  }
}

/**
 * Kontakt
 */
export class Kontakt {
  constructor(data = {}) {
    this.id = data.id || '';
    this.kundeId = data.kundeId || '';
    this.typ = data.typ || 'person'; // person, unternehmen
    this.anrede = data.anrede || '';
    this.vorname = data.vorname || '';
    this.nachname = data.nachname || '';
    this.position = data.position || '';
    this.email = data.email || '';
    this.telefon = data.telefon || '';
    this.mobil = data.mobil || '';
    this.notizen = data.notizen || '';
    this.erstellt = data.erstellt || new Date().toISOString();
    this.aktiv = data.aktiv !== undefined ? data.aktiv : true;
  }

  get vollständigerName() {
    return `${this.anrede} ${this.vorname} ${this.nachname}`.trim();
  }

  toCsvRow() {
    return {
      id: this.id,
      kundeId: this.kundeId,
      typ: this.typ,
      anrede: this.anrede,
      vorname: this.vorname,
      nachname: this.nachname,
      position: this.position,
      email: this.email,
      telefon: this.telefon,
      mobil: this.mobil,
      notizen: this.notizen,
      erstellt: this.erstellt,
      aktiv: this.aktiv
    };
  }
}

/**
 * Offerte
 */
export class Offerte {
  constructor(data = {}) {
    this.id = data.id || '';
    this.nummer = data.nummer || '';
    this.kundeId = data.kundeId || '';
    this.kontaktId = data.kontaktId || '';
    this.titel = data.titel || '';
    this.beschreibung = data.beschreibung || '';
    this.datum = data.datum || new Date().toISOString().split('T')[0];
    this.gültigBis = data.gültigBis || '';
    this.status = data.status || 'entwurf'; // entwurf, gesendet, angenommen, abgelehnt
    this.zahlungsbedingungen = data.zahlungsbedingungen || '30 Tage netto';
    this.mwstSatz = data.mwstSatz !== undefined ? data.mwstSatz : 7.7;
    this.notizen = data.notizen || '';
    this.erstellt = data.erstellt || new Date().toISOString();
  }

  toMarkdown() {
    return `---
id: ${this.id}
nummer: ${this.nummer}
kundeId: ${this.kundeId}
kontaktId: ${this.kontaktId}
titel: "${this.titel}"
datum: ${this.datum}
gültigBis: ${this.gültigBis}
status: ${this.status}
zahlungsbedingungen: "${this.zahlungsbedingungen}"
mwstSatz: ${this.mwstSatz}
erstellt: ${this.erstellt}
---

# Offerte ${this.nummer}

**Titel:** ${this.titel}  
**Datum:** ${this.datum}  
**Gültig bis:** ${this.gültigBis}  
**Status:** ${this.status}

## Beschreibung

${this.beschreibung}

## Zahlungsbedingungen

${this.zahlungsbedingungen}

## Notizen

${this.notizen}
`;
  }
}

/**
 * Offertposition
 */
export class Offertposition {
  constructor(data = {}) {
    this.id = data.id || '';
    this.offerteId = data.offerteId || '';
    this.position = data.position || 1;
    this.beschreibung = data.beschreibung || '';
    this.menge = data.menge || 1;
    this.einheit = data.einheit || 'Stk';
    this.einzelpreis = data.einzelpreis || 0;
    this.rabatt = data.rabatt || 0;
    this.kategorie = data.kategorie || '';
  }

  get gesamtpreis() {
    const bruttoPreis = this.menge * this.einzelpreis;
    return bruttoPreis - (bruttoPreis * this.rabatt / 100);
  }

  toJSON() {
    return {
      id: this.id,
      offerteId: this.offerteId,
      position: this.position,
      beschreibung: this.beschreibung,
      menge: this.menge,
      einheit: this.einheit,
      einzelpreis: this.einzelpreis,
      rabatt: this.rabatt,
      gesamtpreis: this.gesamtpreis, // Getter wird hier ausgewertet
      kategorie: this.kategorie
    };
  }

  toCsvRow() {
    return {
      id: this.id,
      offerteId: this.offerteId,
      position: this.position,
      beschreibung: this.beschreibung,
      menge: this.menge,
      einheit: this.einheit,
      einzelpreis: this.einzelpreis,
      rabatt: this.rabatt,
      gesamtpreis: this.gesamtpreis,
      kategorie: this.kategorie
    };
  }
}

/**
 * Ausgabe
 */
export class Ausgabe {
  constructor(data = {}) {
    this.id = data.id || '';
    this.datum = data.datum || new Date().toISOString().split('T')[0];
    this.beschreibung = data.beschreibung || '';
    this.betrag = data.betrag || 0;
    this.kategorie = data.kategorie || '';
    this.typ = data.typ || 'einmalig'; // einmalig, monatlich, jährlich
    this.mwst = data.mwst || 0;
    this.beleg = data.beleg || '';
    this.notizen = data.notizen || '';
    this.erstellt = data.erstellt || new Date().toISOString();
  }

  toCsvRow() {
    return {
      id: this.id,
      datum: this.datum,
      beschreibung: this.beschreibung,
      betrag: this.betrag,
      kategorie: this.kategorie,
      typ: this.typ,
      mwst: this.mwst,
      beleg: this.beleg,
      notizen: this.notizen,
      erstellt: this.erstellt
    };
  }
}