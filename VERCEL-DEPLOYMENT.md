# HIH-Verwaltung - Vercel Deployment

## 🚀 Deployment auf Vercel

### Voraussetzungen
- GitHub Account
- Vercel Account (kostenlos bei vercel.com)
- Git installiert

### Deployment-Schritte

1. **Repository zu GitHub pushen:**
   ```bash
   git init
   git add .
   git commit -m "Vercel-ready: HIH-Verwaltung"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Auf Vercel deployen:**
   - Gehe zu vercel.com und logge dich ein
   - Klicke "New Project"
   - Wähle dein GitHub Repository
   - Vercel erkennt automatisch die Konfiguration durch `vercel.json`
   - Klicke "Deploy"

3. **Nach dem Deployment:**
   - Erhalte eine URL wie `https://hih-verwaltung.vercel.app`
   - Die Anwendung ist sofort verfügbar!

### ⚠️ Wichtige Hinweise

#### Temporäre Datenspeicherung
- **Aktuell**: Daten werden nur im Memory gespeichert
- **Problem**: Daten gehen bei Neustart verloren (serverless)
- **Lösung für Produktion**: Vercel KV oder externe Datenbank

#### PDF-Export
- **Aktuell**: Vereinfachte HTML-Vorschau
- **Künftig**: Echte PDF-Generierung mit puppeteer

#### Demo-Daten
- System startet mit Demo-Daten:
  - 1 Demo-Kunde
  - 1 Demo-Offerte mit Position
- Perfekt zum Testen der Funktionalität

### 🔧 Lokale Entwicklung für Vercel

```bash
# Vercel CLI installieren
npm i -g vercel

# Lokale Vercel-Entwicklung
vercel dev

# Zugriff auf http://localhost:3000
```

### 📁 Vercel-Struktur

```
├── api/
│   ├── index.js              # Haupt-API (Serverless Function)
│   ├── vercelServices.js     # Angepasste Services
│   ├── vercelFileManager.js  # Memory-basierter FileManager
│   ├── storage.js            # In-Memory Datenspeicher
│   └── simplePdf.js          # HTML-PDF Generator
├── web/
│   ├── index.html            # Frontend
│   ├── app.js               # JavaScript
│   └── styles-modern.css    # Styling
├── vercel.json              # Vercel-Konfiguration
└── package.json             # Dependencies
```

### 🎯 Was funktioniert

✅ **Vollständig funktional:**
- Kunden verwalten (CRUD)
- Offerten erstellen und bearbeiten
- Positionen hinzufügen/bearbeiten/löschen
- Gesamtsummen-Berechnung
- Terminal-Style UI
- Responsive Design

⚠️ **Eingeschränkt:**
- PDF-Export (nur HTML-Vorschau)
- Daten-Persistierung (nur während Session)

### 🔮 Nächste Schritte für Produktion

1. **Dauerhafte Datenspeicherung:**
   ```bash
   # Vercel KV hinzufügen
   vercel kv create hih-storage
   ```

2. **Echte PDF-Generierung:**
   ```bash
   # Puppeteer für PDF
   npm install puppeteer-core @sparticuz/chromium
   ```

3. **Authentifizierung:**
   ```bash
   # Vercel Auth oder NextAuth.js
   npm install next-auth
   ```

### 🆘 Support

Bei Problemen:
1. Vercel Logs prüfen: `vercel logs`
2. GitHub Issues erstellen
3. Vercel Support kontaktieren

---
**Status**: ✅ Deployment-ready für Demo und Testing
**Nächster Schritt**: GitHub Repository erstellen und deployen!