# PDF-Export für Offerten

## 🎯 Übersicht

Der PDF-Export-Service generiert professionelle PDF-Offerten basierend auf deiner LaTeX-Vorlage und deinen Firmendaten.

## 📋 Voraussetzungen

### LaTeX-Installation erforderlich

Für den PDF-Export wird **XeLaTeX** benötigt. Installation auf macOS:

```bash
# Mit Homebrew (empfohlen)
brew install --cask mactex

# Oder manuell von: https://www.tug.org/mactex/
```

### Firmendaten-Struktur

Das System verwendet automatisch deine Firmendaten aus:
- `data/eigene_firma/briefvorlage/hinderling_internet_handwerk.md` - Firmendaten
- `data/eigene_firma/briefvorlage/meta.md` - Design-Einstellungen (Farbe, Schrift)

## 🚀 Verwendung

### CLI-Befehl

```bash
# PDF für Offerte generieren
node src/cli.js offerte pdf --offerte OFF-2025-001

# PDF generieren ohne automatisches Öffnen
node src/cli.js offerte pdf --offerte OFF-2025-001 --no-open
```

### Was wird generiert?

Das PDF enthält:
- **Header** mit Firmenlogo und Kontaktdaten
- **Kundenadresse** im Adressfenster
- **Offertentitel** und Datum
- **Detaillierte Positionstabelle** mit:
  - Position, Beschreibung, Menge, Einzelpreis, Gesamtpreis
- **Totalsummen** (Subtotal, MwSt, Gesamttotal)
- **Zahlungsbedingungen**
- **Bemerkungen** (falls vorhanden)
- **Signaturblock** mit Namen und Firmierung

## 📁 Ausgabe

- **Speicherort**: `data/exports/`
- **Dateiname**: `offerte_[OFFERTENNUMMER].pdf`
- **Automatisches Öffnen**: PDF wird nach Erstellung geöffnet (deaktivierbar mit `--no-open`)

## 🎨 Design & Layout

### Verwendete Design-Elemente

- **Schrift**: Lexend Exa (aus `meta.md`)
- **Farbe**: #bd00ff (deine Markenfarbe aus `meta.md`)
- **Layout**: Professionelles Geschäftsbriefformat
- **Tabellen**: Saubere Positionstabelle mit Rahmen

### Anpassungen

Design-Änderungen in den Dateien:
- **Farbe ändern**: `data/eigene_firma/briefvorlage/meta.md` → Color-Wert
- **Schrift ändern**: `data/eigene_firma/briefvorlage/meta.md` → Font-Wert
- **Firmendaten**: `data/eigene_firma/briefvorlage/hinderling_internet_handwerk.md`

## 🔧 Technische Details

### LaTeX-Template Features

- **XeLaTeX-Engine**: Für moderne Schriftarten und Unicode-Support
- **Longtable**: Für mehrseitige Positionstabellen
- **Fancyhdr**: Für professionelle Kopf-/Fußzeilen
- **Hyperref**: Für klickbare Links (E-Mail, Telefon)
- **Fontspec**: Für benutzerdefinierte Schriftarten

### Automatische Berechnungen

- **Positionspreise**: Menge × Einzelpreis - Rabatt
- **Subtotal**: Summe aller Positionen
- **MwSt**: Configurable Steuersatz pro Offerte
- **Gesamttotal**: Subtotal + MwSt

## 🛠️ Troubleshooting

### Häufige Probleme

**"XeLaTeX ist nicht installiert"**
```bash
# macOS
brew install --cask mactex

# Nach Installation Terminal neu starten
```

**"PDF-Datei wurde nicht erstellt"**
- Prüfe LaTeX-Installation: `xelatex --version`
- Prüfe Dateiberechtigungen im `data/exports/` Verzeichnis
- Prüfe LaTeX-Syntax in generierten .tex-Dateien

**"Sonderzeichen werden nicht korrekt dargestellt"**
- Verwendet automatisches LaTeX-Escaping für Sonderzeichen
- Bei Problemen: Sonderzeichen in Beschreibungen vermeiden

### Debug-Modus

Temporäre .tex-Datei behalten für Debugging:
```javascript
// In pdfExportService.js auskommentieren:
// await fs.unlink(texPath);
```

## 📊 Beispiel-Output

```
Offerte OFF-2025-001
Website Entwicklung
Datum: 02.10.2025 | Gültig bis: 16.11.2025

╔═══════════════════════════════════════════════════════════╗
║ Pos. │ Beschreibung          │ Menge  │ Preis   │ Total   ║
╠══════════════════════════════════════════════════════════║
║   1  │ Konzept und Design    │ 40 Std │ CHF 120 │ CHF 4800║
║   2  │ Frontend Entwicklung  │ 60 Std │ CHF 100 │ CHF 6000║
║   3  │ CMS Setup + Schulung  │ 16 Std │ CHF 90  │ CHF 1440║
╚══════════════════════════════════════════════════════════╝

                    Subtotal: CHF 12'240.00
                    MwSt 7.7%: CHF 942.48
                    ──────────────────────
                    Total: CHF 13'182.48
```

## 🎉 Fertig!

Deine Offerten werden jetzt als professionelle PDFs exportiert und sind bereit zum Versenden an deine Kunden!