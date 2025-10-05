#!/bin/bash

# Build-Script für HIH-Verwaltung React Frontend
# Erstellt optimiertes Production-Build und kopiert es ins Backend

echo "🚀 Baue HIH-Verwaltung React Frontend..."

# Zum React-Verzeichnis wechseln
cd "$(dirname "$0")/web-react"

# Dependencies installieren (falls nötig)
if [ ! -d "node_modules" ]; then
    echo "📦 Installiere Dependencies..."
    npm install
fi

# Production Build erstellen
echo "⚙️  Erstelle Production Build..."
npm run build

# Überprüfen ob Build erfolgreich war
if [ ! -d "dist" ]; then
    echo "❌ Build fehlgeschlagen!"
    exit 1
fi

# Zurück zum Hauptverzeichnis
cd ..

# Alten Build löschen (falls vorhanden)
if [ -d "web-build" ]; then
    echo "🗑️  Lösche alten Build..."
    rm -rf web-build
fi

# Neuen Build kopieren
echo "📂 Kopiere Build-Dateien..."
cp -r web-react/dist web-build

echo "✅ React Frontend erfolgreich gebaut!"
echo "📁 Build-Dateien in: ./web-build/"

# Optional: Development Server stoppen
if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null ; then
    echo "🛑 Stoppe React Development Server..."
    pkill -f "vite.*5173"
fi

echo ""
echo "🌐 Backend kann jetzt mit 'node web-server.js' gestartet werden"
echo "   Die React-App wird unter http://localhost:3000 verfügbar sein"