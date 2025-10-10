#!/bin/bash

# Script zum Ersetzen aller Service-Instanziierungen durch req.services

FILE="web-server.js"

# Firma Service
sed -i '' 's/const firmaService = new FirmaService(req\.mandantPath);/const firmaService = req.services.firma;/g' "$FILE"
sed -i '' 's/const firmaService = new FirmaService(req\.mandantPath);/const firmaService = req.services.firma;/g' "$FILE"

# Kunden Service  
sed -i '' 's/const kundenService = new KundenService(req\.mandantPath);/const kundenService = req.services.kunden;/g' "$FILE"
sed -i '' 's/kundenService\./req.services.kunden./g' "$FILE"

# Offerten Service
sed -i '' 's/const offertenService = new OffertenService(req\.mandantPath);/const offertenService = req.services.offerten;/g' "$FILE"
sed -i '' 's/offertenService\./req.services.offerten./g' "$FILE"

# Rechnungen Service
sed -i '' 's/const rechnungenService = new RechnungenService(req\.mandantPath);/const rechnungenService = req.services.rechnungen;/g' "$FILE"
sed -i '' 's/rechnungenService\./req.services.rechnungen./g' "$FILE"

# PDF Export Service
sed -i '' 's/pdfExportService\./req.services.pdf./g' "$FILE"

echo "✅ Service-Referenzen wurden aktualisiert"
