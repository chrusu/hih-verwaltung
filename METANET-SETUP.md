# HIH-Verwaltung auf Metanet VPS Setup

## 1. VPS bei Metanet bestellen
- Einloggen in Metanet Kundencenter
- Linux VPS "Small" bestellen (CHF 29/Monat)
- Ubuntu 22.04 LTS wählen
- SSH-Key hinterlegen

## 2. Server vorbereiten
```bash
# SSH-Verbindung zum Server
ssh root@ihr-server.metanet.ch

# System aktualisieren
apt update && apt upgrade -y

# Docker installieren
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Docker Compose installieren
apt install docker-compose-plugin -y

# Firewall konfigurieren
ufw allow ssh
ufw allow http
ufw allow https
ufw enable
```

## 3. HIH-Verwaltung deployen
```bash
# Projektverzeichnis erstellen
mkdir -p /opt/hih-verwaltung
cd /opt/hih-verwaltung

# Code hochladen (via Git oder SCP)
git clone https://github.com/chrusu/hih-verwaltung.git .

# Docker Container starten
docker compose up -d

# SSL mit Certbot einrichten
apt install certbot python3-certbot-nginx -y
certbot --nginx -d ihre-domain.ch
```

## 4. Automatische Backups einrichten
```bash
# Backup-Script erstellen
cat > /opt/backup-hih.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d-%H%M%S)
docker compose exec hih-verwaltung tar -czf /app/backups/backup-$DATE.tar.gz /app/data
# Optional: Upload zu Metanet Backup-Space
EOF

chmod +x /opt/backup-hih.sh

# Cronjob für tägliche Backups
echo "0 2 * * * /opt/backup-hih.sh" | crontab -
```

## Kosten-Aufstellung:
- VPS Small: CHF 29/Monat
- Backup Space: CHF 5/Monat (optional)
- Domain: Falls noch nicht vorhanden
- SSL: Kostenlos (Let's Encrypt)

TOTAL: CHF 29-34/Monat