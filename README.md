# HIH Verwaltung

Dateibasierte Verwaltungssoftware für Einzelfirma mit Git-Integration.

## Features

- **Kundenverwaltung**: Kunden und Kontakte verwalten
- **Offertenverwaltung**: Offerten mit Positionen erstellen
- **Rechnungsverwaltung**: Rechnungen basierend auf Offerten
- **Ausgabenverwaltung**: Einmalige, monatliche und jährliche Ausgaben
- **Git-kompatibel**: Alle Daten als Dateien (Markdown + CSV)
- **CLI-Interface**: Einfache Bedienung über Kommandozeile

## Installation

```bash
npm install
```

## Verwendung

```bash
# CLI starten
npm start

# Oder direkt:
node src/cli.js

# Entwicklungsmodus mit Auto-Reload
npm run dev
```

## Struktur

```
data/
├── kunden/          # Kundenverzeichnis
├── offerten/        # Offertenverzeichnis  
├── rechnungen/      # Rechnungsverzeichnis
└── ausgaben/        # Ausgabenverzeichnis
```

## CLI-Befehle

- `kunde create` - Neuen Kunden erstellen
- `kunde kontakt add` - Kontakt zu Kunde hinzufügen
- `offerte create` - Neue Offerte erstellen
- `offerte position add` - Position zu Offerte hinzufügen

## Datenformat

### Kunden
Jeder Kunde wird als Markdown-Datei mit YAML-Frontmatter gespeichert:
```
kunden/KUNDE-001/kunde.md
kunden/KUNDE-001/kontakte.csv
```

### Offerten
Offerten werden als Markdown mit CSV-Positionen gespeichert:
```
offerten/OFF-2024-001/offerte.md
offerten/OFF-2024-001/positionen.csv
```

## Lizenz

MIT