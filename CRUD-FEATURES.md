# HIH-Verwaltung - Vollständige CRUD-Funktionen

## 🎯 Neue Funktionen

Das interaktive CLI unterstützt jetzt vollständige **CRUD-Operationen** (Create, Read, Update, Delete) für Kunden, Offerten und Positionen.

## 👥 Kundenverwaltung

### ➕ Neue Kunden erstellen
- **Zugang**: Kundenliste → `+ Neuen Kunden hinzufügen`
- **Erfasst**: Name, Email, Telefon, vollständige Adresse
- **Validierung**: Email-Format, Pflichtfelder
- **Nach Erstellung**: Direkter Übergang zu Kunden-Aktionen

### ✏️ Kunden bearbeiten
- **Zugang**: Kunde auswählen → `✏️ Kundendaten bearbeiten`
- **Optionen**: 
  - Einzelne Felder bearbeiten (Name, Email, Telefon, Adresse)
  - Alle Felder auf einmal bearbeiten
- **Vorausgefüllt**: Aktuelle Werte als Standard
- **Validierung**: Gleiche Regeln wie bei Neuerstellung

### 🗑️ Kunden löschen
- **Zugang**: Kunde auswählen → `🗑️ Kunde löschen`
- **Sicherheit**: 
  - Warnung bei vorhandenen Offerten
  - Doppelte Bestätigung erforderlich
  - Name muss exakt eingegeben werden
- **Effekt**: Komplettes Kundenverzeichnis wird gelöscht

## 📄 Offertenverwaltung

### ➕ Neue Offerten erstellen
- **Zugang**: 
  - Offertenliste → `+ Neue Offerte erstellen`
  - Kunde auswählen → `📝 Neue Offerte für diesen Kunden erstellen`
- **Erfasst**: Titel, Gültigkeitsdatum, Zahlungsbedingungen, MwSt-Satz
- **Automatisch**: Datum, Nummer, Status
- **Nach Erstellung**: Direkter Übergang zu Offerten-Aktionen

### ✏️ Offerten bearbeiten
- **Zugang**: Offerte auswählen → `✏️ Offerte bearbeiten`
- **Felder**: Titel, Gültigkeitsdatum, Status, Zahlungsbedingungen, MwSt-Satz
- **Status-Optionen**: Entwurf, Versendet, Angenommen, Abgelehnt, Abgelaufen
- **Neuberechnung**: Gesamtsummen werden automatisch aktualisiert

### 🗑️ Offerten löschen
- **Zugang**: Offerte auswählen → `🗑️ Offerte löschen`
- **Sicherheit**: Bestätigung erforderlich
- **Effekt**: Komplettes Offertenverzeichnis wird gelöscht

## 📝 Positionenverwaltung

### 📋 Positionen verwalten
- **Zugang**: Offerte auswählen → `📝 Positionen verwalten`
- **Übersicht**: Nummerierte Liste aller Positionen mit Preisen
- **Live-Update**: Gesamtsumme wird sofort aktualisiert

### ➕ Positionen hinzufügen
- **Erfasst**: Beschreibung, Menge, Einheit, Einzelpreis, Rabatt, Kategorie
- **Validierung**: Positive Mengen, gültige Rabatte (0-100%)
- **Standard**: Menge=1, Einheit="Stk", Rabatt=0%

### ✏️ Positionen bearbeiten
- **Auswahl**: Aus Liste der vorhandenen Positionen
- **Vorausgefüllt**: Alle aktuellen Werte
- **Neuberechnung**: Gesamtsummen werden automatisch angepasst

### 🗑️ Positionen löschen
- **Auswahl**: Aus Liste der vorhandenen Positionen
- **Bestätigung**: Einfache Ja/Nein-Abfrage
- **Neuberechnung**: Gesamtsummen werden automatisch angepasst

## 🛡️ Sicherheitsfeatures

### Eingabevalidierung
- **Email-Format**: Regex-Validierung
- **Datumsformat**: YYYY-MM-DD Format erzwungen
- **Positive Werte**: Mengen und Preise müssen >= 0 sein
- **Pflichtfelder**: Verhindern leere Eingaben bei kritischen Feldern

### Lösch-Sicherungen
- **Doppelte Bestätigung**: Bei kritischen Löschvorgängen
- **Namens-Bestätigung**: Bei Kunden muss Name exakt eingegeben werden
- **Warnungen**: Bei abhängigen Datensätzen (Kunde mit Offerten)

### Fehlerbehandlung
- **Detaillierte Fehlermeldungen**: Klare Beschreibung was schiefging
- **Graceful Fallback**: Bei Fehlern wird zur vorherigen Ansicht zurückgekehrt
- **Validierung vor Speicherung**: Verhindert ungültige Daten

## 🚀 Workflow-Beispiele

### Neuen Kunden mit Offerte erstellen:
1. `node hih.js` starten
2. **"Kunden verwalten"** → **"+ Neuen Kunden hinzufügen"**
3. Kundendaten eingeben → Kunde wird erstellt
4. **"Neue Offerte für diesen Kunden erstellen"** wählen
5. Offertendaten eingeben → Offerte wird erstellt
6. **"Positionen verwalten"** → **"+ Neue Position hinzufügen"**
7. Positionsdaten eingeben → Position wird hinzugefügt
8. **"PDF generieren"** → Fertige Offerte als PDF

### Bestehende Offerte bearbeiten:
1. **"Offerten verwalten"** → Gewünschte Offerte auswählen
2. **"Positionen verwalten"** → Position bearbeiten/hinzufügen/löschen
3. **"Offerte bearbeiten"** → Status auf "versendet" ändern
4. **"PDF generieren"** → Aktualisierte Version exportieren

## 🎨 UI/UX Features

- **Farbcodierung**: Grün für Erfolg, Rot für Gefahr, Gelb für Warnungen
- **Emojis**: Intuitive Symbole für alle Aktionen
- **Vorausgefüllte Werte**: Bei Bearbeitung sind aktuelle Werte bereits eingetragen
- **Intelligente Standardwerte**: Sinnvolle Defaults (z.B. Gültigkeitsdatum +30 Tage)
- **Kontextuelle Menüs**: Nur relevante Aktionen werden angezeigt
- **Breadcrumb-Navigation**: Einfache Rückkehr zu vorherigen Ansichten