# HIH-Verwaltung v1.0

Dateibasierte Verwaltungssoftware für Einzelfirma mit **zwei verschiedenen Benutzeroberflächen**.

## 🎯 **Zwei Interface-Optionen**

### 📱 **Modernes CLI** (Standard)
- Interaktive Menüs mit inquirer
- Farbige Ausgaben und Emojis  
- Moderne Benutzerführung
- Ideal für normale Nutzung

### 🖥️ **DOS-TUI** (Retro)
- Authentisches DOS-style Vollbild-Interface
- F-Tasten Navigation (F1-F10)
- ASCII-Rahmen und klassische Farben
- Norton Commander-ähnliche Bedienung
- Perfekt für Nostalgie und Power-User

## ✨ **Features**

- **Kundenverwaltung**: Kunden und Kontakte mit CRUD-Operationen
- **Offertenverwaltung**: Offerten mit Positionen erstellen und verwalten
- **PDF-Export**: Professionelle LaTeX-basierte Offerten-PDFs
- **Rechnungsverwaltung**: Rechnungen basierend auf Offerten (geplant)
- **Ausgabenverwaltung**: Einmalige, monatliche und jährliche Ausgaben (geplant)
- **Git-kompatibel**: Alle Daten als Dateien (Markdown + CSV)
- **Dual-Interface**: Modernes CLI + Retro DOS-TUI

## 🚀 **Installation**

```bash
npm install
```

## 💻 **Verwendung**

### **🎯 Schnellstart**

```bash
# === MODERNES CLI (Standard) ===
node hih.js                     # Interaktives CLI mit Menüs

# === DOS-TUI (Vollbild Retro) ===  
node dos-tui.js                 # F-Tasten Interface

# === LAUNCHER (Auswahl) ===
node launcher.js modern         # Modernes CLI starten
node launcher.js dos            # DOS-TUI starten
node launcher.js --help         # Alle Optionen
```

### **⚡ Direkte Befehle (nur modernes CLI)**

```bash
node hih.js kunden              # Alle Kunden auflisten
node hih.js offerten            # Alle Offerten auflisten  
node hih.js neue-offerte        # Neue Offerte erstellen
```

### **🖥️ DOS-TUI Bedienung**

```
Nach Start von dos-tui.js:

F1 = Hilfe          F6 = Export
F2 = Kunden         F7 = Git  
F3 = Offerten       F8 = Info
F5 = Aktualisieren  F10 = Ende

↑↓←→ = Navigation   ENTER = Öffnen
N = Neu             E = Bearbeiten  
ESC = Zurück        D = Löschen

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