# HIH-Verwaltung - Interaktives CLI

## 🚀 Schnellstart

### Interaktives Menü starten
```bash
node hih.js
# oder
npm run menu
# oder  
npm run interactive
```

### Klassisches CLI verwenden
```bash
node src/cli.js --help
```

## 📋 Funktionen des interaktiven Menüs

### Hauptmenü
- **👥 Kunden verwalten**: Kunden auswählen und verwalten
- **📄 Offerten verwalten**: Offerten auswählen und verwalten  
- **❌ Beenden**: Programm verlassen

### Kundenverwaltung
1. **Kundenliste**: Nummerierte Liste aller Kunden mit Name, Email und Ort
2. **Kundendetails**: Vollständige Kundendaten anzeigen
3. **Kundenofferten**: Alle Offerten eines Kunden anzeigen
4. **Neue Offerte**: Neue Offerte für Kunden erstellen (in Entwicklung)

### Offertenverwaltung  
1. **Offertenliste**: Nummerierte Liste aller Offerten mit Titel, Nummer, Status und Betrag
2. **Offertendetails**: Vollständige Offertendaten und Positionen anzeigen
3. **PDF generieren**: Offerte als PDF exportieren
4. **Kunde anzeigen**: Zugehörigen Kunden der Offerte anzeigen

## 🎨 Features

- **🎯 Intuitive Navigation**: Einfache Auswahl über Pfeiltasten
- **🔢 Nummerierte Listen**: Klare Übersicht aller verfügbaren Optionen
- **🎨 Farbige Ausgabe**: Übersichtliche Darstellung mit Farben und Symbolen
- **📄 PDF-Export**: Direkter Export mit Vorschau-Option
- **🔄 Nahtlose Navigation**: Einfache Rückkehr zu vorherigen Menüs
- **📊 Datenübersicht**: Schneller Überblick über wichtige Informationen

## 🛠 Technische Details

- **Framework**: Node.js mit ES-Modulen
- **CLI-Framework**: inquirer für interaktive Menüs
- **Styling**: chalk für farbige Ausgaben  
- **Datenformat**: Markdown mit YAML-Frontmatter + CSV
- **PDF-Export**: LaTeX mit XeLaTeX

## 📁 Verzeichnisstruktur

```
data/
├── kunden/           # Kundendaten (Markdown)
├── offerten/         # Offerten-Ordner
│   └── OFF-YYYY-XXX/ # Einzelne Offerten
└── exports/          # Generierte PDFs

src/
├── interactive-cli.js # Interaktives Hauptmenü
├── cli.js            # Klassisches CLI
├── services/         # Business-Services
└── models.js         # Datenmodelle
```

## 🎯 Verwendung

### Typischer Workflow:
1. `node hih.js` starten
2. **"Offerten verwalten"** wählen  
3. Gewünschte Offerte aus der nummerierten Liste auswählen
4. **"PDF generieren"** wählen
5. PDF wird erstellt und kann direkt geöffnet werden

### Kundenansicht:
1. **"Kunden verwalten"** wählen
2. Kunde aus der Liste auswählen  
3. **"Offerten dieses Kunden anzeigen"** wählen
4. Überblick über alle Kundenofferten

## 🆕 Neue Features gegenüber dem klassischen CLI

- ✅ **Keine Kommandos merken**: Alles über Menüs
- ✅ **Visuelle Auswahl**: Pfeiltasten statt Tippen
- ✅ **Kontextuelle Aktionen**: Nur relevante Optionen werden angezeigt
- ✅ **Sofortige Vorschau**: Daten werden direkt angezeigt
- ✅ **Fehlerresistent**: Keine Tippfehler bei IDs möglich