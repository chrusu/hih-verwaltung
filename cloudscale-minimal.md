# CloudScale.ch - Minimal-Setup für HIH-Verwaltung
# Günstigste Konfiguration für sporadische Nutzung

## Server-Konfiguration (Minimal)
Server: Flex-4
- CPU: 1 vCPU
- RAM: 512 MB
- Storage: 10 GB SSD
- Kosten: CHF 10.80/Monat (Dauerbetrieb)

## Optimierung für sporadische Nutzung
Da Sie nur 2x/Monat arbeiten, können Sie den Server:
- Nur bei Bedarf starten (on-demand)
- Nach Arbeit wieder stoppen
- → Massive Kosteneinsparung!

## Realistische Nutzungsrechnung:
Annahme: 4 Stunden pro Arbeitsgang, 2x/Monat = 8h/Monat

Kosten pro Stunde: CHF 0.015
8 Stunden × CHF 0.015 = CHF 0.12/Monat

ABER: Minimum-Abrechnung oft pro angefangene Stunde
Realistischer: 8h × CHF 0.015 × 2 (Puffer) = CHF 0.24/Monat

## Zusätzliche Kosten:
- Storage (10GB): CHF 1.50/Monat (läuft immer)
- Backup: CHF 0.50/Monat
- Network: CHF 0-1/Monat

## TOTAL Minimal-Setup:
Server (8h/Monat): CHF 0.24
Storage (Always-on): CHF 1.50
Backup: CHF 0.50
Network: CHF 0.50
─────────────────────────
TOTAL: CHF 2.74/Monat (!!)

## Aber Vorsicht - Versteckte Kosten:
- Load Balancer für SSL: CHF 20/Monat
- Oder: Floating IP: CHF 5/Monat
- Management-Aufwand: Sehr hoch