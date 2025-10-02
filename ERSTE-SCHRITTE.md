# HIH-Verwaltung - Erste Schritte

## 🎉 Erfolgreich eingerichtet!

Deine dateibasierte Verwaltungssoftware ist nun bereit zur Nutzung.

## 📁 Projektstruktur

```
HIH-Verwaltung/
├── data/                    # Alle Firmendaten (Git-kompatibel)
│   ├── kunden/             # Kundenverzeichnis
│   │   └── KUNDE-XXX/      # Pro Kunde ein Ordner
│   │       ├── kunde.md    # Kundendaten (Markdown mit YAML)
│   │       └── kontakte.csv # Kontakte (CSV)
│   ├── offerten/           # Offertenverzeichnis
│   │   └── OFF-YYYY-XXX/   # Pro Offerte ein Ordner
│   │       ├── offerte.md  # Offertendaten (Markdown)
│   │       └── positionen.csv # Offertpositionen (CSV)
│   ├── rechnungen/         # Für später
│   └── ausgaben/           # Für später
│
├── src/                    # Programmcode
│   ├── models.js           # Datenmodelle
│   ├── fileManager.js      # Datei-Management
│   ├── cli.js              # CLI-Interface
│   └── services/           # Business Logic
│
└── package.json           # Dependencies
```

## 🚀 CLI verwenden

### Kunden verwalten

```bash
# Neuen Kunden anlegen
node src/cli.js kunde create --name "Firma XY" --typ geschäft --strasse "Hauptstr. 1" --plz "8000" --ort "Zürich"

# Alle Kunden auflisten
node src/cli.js kunde list

# Kontakt zu Kunde hinzufügen
node src/cli.js kunde kontakt --kunde KUNDE-001 --vorname "Max" --nachname "Muster" --email "max@firma.ch"
```

### Offerten verwalten

```bash
# Neue Offerte erstellen
node src/cli.js offerte create --kunde KUNDE-001 --titel "Website Projekt" --gueltig 30

# Alle Offerten auflisten
node src/cli.js offerte list

# Position zu Offerte hinzufügen
node src/cli.js offerte position --offerte OFF-2025-001 --beschreibung "Programmierung" --menge 10 --einheit "Std" --preis 120
```

## 📊 Beispieldaten

Das System enthält bereits Beispieldaten:

- **2 Kunden**: Muster AG (geschäft) und Max Mustermann (privat)
- **1 Offerte**: Website Entwicklung mit 3 Positionen (Total: CHF 12'240.-)
- **1 Kontakt**: Hans Muster bei Muster AG

## 🔧 Features

### ✅ Implementiert
- [x] Kundenverwaltung (anlegen, auflisten)
- [x] Kontakte zu Kunden hinzufügen
- [x] Offertenverwaltung (anlegen, auflisten)
- [x] Offertpositionen hinzufügen
- [x] Automatische Nummerierung (KUNDE-001, OFF-2025-001)
- [x] Git-Integration (alles versioniert)
- [x] Dateibasierte Struktur (Markdown + CSV)

### 🔮 Geplant für später
- [ ] Rechnungsverwaltung
- [ ] Ausgabenverwaltung
- [ ] Web-Frontend (Node.js)
- [ ] PDF-Export für Offerten/Rechnungen
- [ ] Erweiterte Suchfunktionen
- [ ] Dashboard mit Statistiken

## 🎯 Nächste Schritte

1. **CLI testen**: Spiele mit den Befehlen herum
2. **Daten anpassen**: Lösche Beispieldaten oder passe sie an
3. **Git nutzen**: Committe regelmäßig deine Änderungen
4. **Erweiterungen**: Füge weitere Features hinzu

## 💾 Backup

Da alles in Git ist, kannst du einfach das ganze Verzeichnis sichern:
```bash
git remote add origin <dein-git-repo>
git push -u origin main
```

## 🆘 Hilfe

Für Hilfe zu einzelnen Befehlen:
```bash
node src/cli.js --help
node src/cli.js kunde --help
node src/cli.js offerte --help
```

Viel Erfolg mit deiner HIH-Verwaltung! 🎉