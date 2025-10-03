# HIH-Verwaltung auf Infomaniak Public Cloud Setup

## Warum Public Cloud für HIH-Verwaltung?

### Vorteile gegenüber VPS:
- **Kosteneffizienz**: ~CHF 12-16/Monat statt CHF 19/Monat
- **Pay-as-you-use**: Bezahlen nur tatsächlichen Verbrauch
- **Automatische Skalierung**: Bei Bedarf mehr Ressourcen
- **OpenStack-Standard**: Professionelle Cloud-Infrastruktur
- **CHF 300 Startguthaben**: 3 Monate kostenlos testen

### Nachteile:
- **Komplexerer Setup**: Mehr Konfiguration als klassischer VPS
- **Verbrauchsabhängige Kosten**: Weniger vorhersagbar als Flatrate

## 1. Public Cloud Account erstellen

1. Gehen Sie zu [shop.infomaniak.com/order/public_cloud](https://shop.infomaniak.com/order/public_cloud)
2. **CHF 300 Startguthaben** aktivieren (3 Monate gültig)
3. Account erstellen und verifizieren

## 2. Instanz erstellen

### Empfohlene Konfiguration für HIH-Verwaltung:
- **Instanztyp**: Allgemeine Verwendung
- **CPU**: 2 vCPUs
- **RAM**: 4 GB
- **Storage**: 20 GB Block Storage (SSD NVMe)
- **Image**: Ubuntu 22.04 LTS
- **Geschätzte Kosten**: ~CHF 12-16/Monat

### SSH-Key vorbereiten:

1. **SSH-Key anzeigen und kopieren**:
```bash
cat ~/.ssh/id_ed25519.pub
# Kompletten Output kopieren (beginnt mit ssh-ed25519...)
```

2. **SSH-Key in Infomaniak hochladen**:
   - **Dashboard**: [manager.infomaniak.com](https://manager.infomaniak.com)
   - **Public Cloud auswählen** (Ihr Projekt)
   - Im **Hauptmenü links**: **Key Pairs**
   - **Button**: "Import Key Pair" oder "+ Key Pair"
   - **Name**: z.B. "mein-macbook-key"  
   - **Public Key**: Ihren kopierten SSH-Key einfügen (ssh-ed25519 AAAAC3...)
   - **Import** klicken

### Setup via Infomaniak Dashboard:
1. **Instances** (im linken Menü) → **Launch Instance**
2. **Details**: Instanzname eingeben (z.B. "hih-verwaltung")
3. **Source**: Ubuntu 22.04 LTS wählen  
4. **Flavor**: 2 vCPUs, 4 GB RAM auswählen
5. **Networks**: Default network auswählen
6. **Security Groups**: default auswählen
7. **Key Pair**: Ihren importierten SSH-Key auswählen ("mein-macbook-key")
8. **Launch Instance** klicken

## 3. Floating IP und Domain Setup

### Floating IP zuweisen:
1. **Network** → **Floating IPs** → **Allocate IP To Project**
2. **Pool**: external auswählen → **Allocate IP**
3. **Actions** (bei der neuen IP) → **Associate**
4. **Port**: Ihre Instanz auswählen → **Associate**

### DNS konfigurieren:
```
A Record: ihre-domain.ch → Floating-IP-Adresse
A Record: www.ihre-domain.ch → Floating-IP-Adresse
```

## 4. Instanz vorbereiten

### SSH-Verbindung:
```bash
ssh ubuntu@ihre-floating-ip
```

### System aktualisieren:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl wget git nano ufw docker.io docker-compose-plugin
```

### Docker konfigurieren:
```bash
sudo usermod -aG docker ubuntu
sudo systemctl enable docker
sudo systemctl start docker
# Session neu starten
exit
ssh ubuntu@ihre-floating-ip
```

### Firewall konfigurieren:
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## 5. HIH-Verwaltung deployen

### Repository klonen:
```bash
cd /home/ubuntu
git clone https://github.com/chrusu/hih-verwaltung.git
cd hih-verwaltung
```

### Domain konfigurieren:
```bash
nano docker-compose.yml
```

```yaml
# Ihre Domain eintragen
- VIRTUAL_HOST=ihre-domain.ch
- LETSENCRYPT_HOST=ihre-domain.ch
- LETSENCRYPT_EMAIL=ihre-email@domain.ch
```

### Deployment starten:
```bash
chmod +x deploy.sh
./deploy.sh
```

## 6. Block Storage für persistente Daten

### Zusätzliches Volume erstellen:
```bash
# Via Dashboard: Block Storage > Volume erstellen
# 10 GB für Daten-Backups
```

### Volume mounten:
```bash
# Volume an Instanz anhängen
sudo mkfs.ext4 /dev/vdb
sudo mkdir -p /data/backups
sudo mount /dev/vdb /data/backups
echo '/dev/vdb /data/backups ext4 defaults 0 0' | sudo tee -a /etc/fstab
```

## 7. Backup-Strategie

### Automatische Snapshots:
```bash
# Via Dashboard: Compute > Instanzen > Snapshot erstellen
# Kann auch via API automatisiert werden
```

### Daten-Backup Script:
```bash
nano /home/ubuntu/backup-to-object-storage.sh
```

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="hih-data-$DATE.tar.gz"

# Daten komprimieren
tar -czf /tmp/$BACKUP_FILE -C /home/ubuntu/hih-verwaltung data/

# Optional: Upload zu Object Storage via Swift API
# swift upload backups /tmp/$BACKUP_FILE

# Lokales Backup in zusätzlichem Volume
cp /tmp/$BACKUP_FILE /data/backups/
rm /tmp/$BACKUP_FILE

# Alte Backups löschen (älter als 30 Tage)
find /data/backups -name "hih-data-*.tar.gz" -mtime +30 -delete

echo "Backup completed: $BACKUP_FILE"
```

```bash
chmod +x /home/ubuntu/backup-to-object-storage.sh
```

### Crontab für automatisches Backup:
```bash
crontab -e
# Täglich um 3 Uhr
0 3 * * * /home/ubuntu/backup-to-object-storage.sh
```

## 8. Monitoring und Skalierung

### Ressourcen-Monitoring:
```bash
# Via Dashboard: Compute > Instanzen > Metriken
# CPU, RAM, Disk, Netzwerk-Nutzung
```

### Automatische Skalierung (Heat Template):
```yaml
# Optional: Auto-Scaling bei hoher Last
# Via Heat Orchestration Templates
```

## 9. Kosten-Optimierung

### Ressourcen-Monitoring:
- **Instanz ausschalten** wenn nicht benötigt (Entwicklung/Tests)
- **Flavor anpassen** je nach tatsächlichem Bedarf
- **Block Storage minimieren** (nur benötigte Daten)

### Geschätzte monatliche Kosten:
- **Instanz (2 vCPU, 4GB)**: ~CHF 10-12
- **Block Storage (20GB)**: ~CHF 2-3
- **Floating IP**: CHF 1-2
- **Total**: ~CHF 13-17/Monat

## 10. Public Cloud spezifische Features

### Object Storage für große Dateien:
```bash
# S3-kompatible API für PDF-Exports
# Automatische Redundanz und Backup
```

### Load Balancer für Hochverfügbarkeit:
```bash
# Bei mehreren Instanzen
# Automatische Verteilung der Last
```

### API-Integration:
```bash
# OpenStack API für Automatisierung
# Terraform/Ansible Integration möglich
```

## Vergleich: VPS vs. Public Cloud

| Kriterium | VPS Basic | Public Cloud |
|-----------|-----------|--------------|
| **Kosten** | CHF 19/Monat | ~CHF 13-17/Monat |
| **Setup-Komplexität** | Einfach | Mittel |
| **Skalierbarkeit** | Manuell | Automatisch |
| **Backup** | Manuell | Integriert |
| **Monitoring** | Basis | Erweitert |
| **Verfügbarkeit** | Standard | Hoch |
| **Lock-in** | Gering | Gering (OpenStack) |

## Empfehlung

**Für HIH-Verwaltung ist die Public Cloud ideal, wenn:**
- Sie bereits Erfahrung mit Cloud-Technologien haben
- Kostenkontrolle wichtig ist (pay-as-you-use)
- Sie zukünftig skalieren möchten
- Automatisierung und Monitoring gewünscht ist

**VPS ist besser, wenn:**
- Sie einfaches Setup bevorzugen
- Kostensicherheit wichtiger als Kostenoptimierung
- Wenig Zeit für komplexere Konfiguration

---

**Nächste Schritte:**
1. Public Cloud Account mit CHF 300 Guthaben erstellen
2. Erste Instanz aufsetzen und testen
3. HIH-Verwaltung deployen
4. Nach 1-2 Monaten Kosten evaluieren

**Bei Fragen zum Public Cloud Setup stehe ich gerne zur Verfügung!**