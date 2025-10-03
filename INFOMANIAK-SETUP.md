# HIH-Verwaltung auf Infomaniak VPS Setup

## 1. VPS bestellen bei Infomaniak

1. Gehen Sie zu [infomaniak.com](https://www.infomaniak.com)
2. Navigieren Sie zu **Hosting > VPS**
3. Wählen Sie den **VPS Basic** für CHF 19/Monat:
   - 2 CPU Cores
   - 4 GB RAM
   - 80 GB SSD
   - Unbegrenzt Traffic

## 2. VPS Konfiguration

### Betriebssystem wählen
- **Ubuntu 22.04 LTS** (empfohlen)
- SSH-Key hochladen oder Password setzen

### Erste Verbindung
```bash
ssh root@ihre-vps-ip
```

## 3. System vorbereiten

### System aktualisieren
```bash
apt update && apt upgrade -y
apt install -y curl wget git nano ufw
```

### Firewall konfigurieren
```bash
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

### Non-root User erstellen
```bash
adduser hih
usermod -aG sudo hih
mkdir -p /home/hih/.ssh
cp ~/.ssh/authorized_keys /home/hih/.ssh/
chown -R hih:hih /home/hih/.ssh
chmod 700 /home/hih/.ssh
chmod 600 /home/hih/.ssh/authorized_keys
```

## 4. Docker installieren

```bash
# Als hih user einloggen
su - hih

# Docker Repository hinzufügen
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Docker installieren
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# User zu docker Gruppe hinzufügen
sudo usermod -aG docker hih

# Session neu starten
exit
su - hih
```

## 5. HIH-Verwaltung deployen

### Repository klonen
```bash
cd /home/hih
git clone https://github.com/chrusu/hih-verwaltung.git
cd hih-verwaltung
```

### Domain konfigurieren
```bash
# docker-compose.yml editieren
nano docker-compose.yml
```

Ändern Sie:
```yaml
# Ihre Domain eintragen
- VIRTUAL_HOST=ihre-domain.ch
- LETSENCRYPT_HOST=ihre-domain.ch
- LETSENCRYPT_EMAIL=ihre-email@domain.ch
```

### Deployment starten
```bash
chmod +x deploy.sh
./deploy.sh
```

## 6. Domain Setup

### DNS konfigurieren
Bei Ihrem Domain-Anbieter:
```
A Record: ihre-domain.ch → VPS-IP-Adresse
A Record: www.ihre-domain.ch → VPS-IP-Adresse
```

### SSL Zertifikat
Das SSL-Zertifikat wird automatisch von Let's Encrypt erstellt.

## 7. Backup Setup

### Backup Script aktivieren
```bash
# Crontab editieren
crontab -e

# Folgende Zeile hinzufügen für tägliches Backup um 3 Uhr:
0 3 * * * /home/hih/hih-verwaltung/backup.sh
```

### Backup Script erstellen
```bash
nano backup.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/home/hih/backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Data Verzeichnis sichern
tar -czf $BACKUP_DIR/hih-data-$DATE.tar.gz -C /home/hih/hih-verwaltung data/

# Alte Backups löschen (älter als 30 Tage)
find $BACKUP_DIR -name "hih-data-*.tar.gz" -mtime +30 -delete

echo "Backup completed: hih-data-$DATE.tar.gz" >> $BACKUP_DIR/backup.log
```

```bash
chmod +x backup.sh
```

## 8. Monitoring & Wartung

### Container Status prüfen
```bash
cd /home/hih/hih-verwaltung
docker compose ps
docker compose logs -f
```

### Updates
```bash
cd /home/hih/hih-verwaltung
git pull
docker compose pull
docker compose up -d --build
```

### System Ressourcen überwachen
```bash
# System Status
htop
df -h
docker system df
```

## 9. Infomaniak-spezifische Tipps

### VPS Manager
- Zugang über Infomaniak Manager: manager.infomaniak.com
- Backup-Snapshots verfügbar (kostenpflichtig)
- Monitoring-Tools im Manager integriert

### Support
- 24/7 Support auf Deutsch verfügbar
- Live-Chat und Ticket-System
- Telefon: 0848 333 073

### Netzwerk
- Infomaniak hat sehr gute Peering-Verbindungen in der Schweiz
- Niedrige Latenz zu Schweizer Providern
- IPv6 standardmässig verfügbar

## 10. Kosten Übersicht

- **VPS Basic**: CHF 19/Monat
- **Domain** (falls über Infomaniak): CHF 12-15/Jahr
- **Backup Snapshots** (optional): CHF 2-5/Monat
- **Total ca.**: CHF 21-24/Monat

## Troubleshooting

### Container startet nicht
```bash
docker compose logs app
docker compose logs nginx-proxy
```

### SSL Probleme
```bash
docker compose logs letsencrypt
# Warten Sie 5-10 Minuten nach Domain-Setup
```

### Performance Issues
```bash
# Memory Usage prüfen
free -h
# Disk Space prüfen
df -h
# Docker cleanup
docker system prune -f
```

---

**Nächste Schritte:**
1. VPS bei Infomaniak bestellen
2. Domain konfigurieren (oder neue registrieren)
3. Setup-Schritte befolgen
4. HIH-Verwaltung testen unter Ihrer Domain

Bei Fragen zum Setup stehe ich gerne zur Verfügung!