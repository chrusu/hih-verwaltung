# HIH-Verwaltung - Einfaches Setup ohne Docker

## Option 1: Lokales Setup (Empfohlen für den Start)

### Warum lokal anfangen?
- **Kein Cloud-Setup nötig**
- **Keine monatlichen Kosten**
- **Sofort einsatzbereit**
- **Einfach zu testen und entwickeln**

### Lokaler Web-Server starten:
```bash
cd /Users/tobiashinderling/Development/HIH-Verwaltung
node web-server.js
```

**Öffnen Sie dann**: http://localhost:3000

### Für andere Geräte im Netzwerk erreichbar machen:
```bash
# Ihre lokale IP herausfinden
ifconfig | grep "inet " | grep -v 127.0.0.1

# Server mit lokaler IP starten
node web-server.js --host 0.0.0.0
```

**Dann können andere Geräte zugreifen über**: http://IHRE-IP:3000

---

## Option 2: Einfacher VPS ohne Docker

### 1. VPS bestellen
**Empfehlung: Hostpoint VPS Basic - CHF 29/Monat**
- Sehr einfache Einrichtung
- Web-Interface für alles
- Deutscher Support
- Ubuntu vorinstalliert

### 2. VPS Setup (super einfach)
```bash
# SSH-Verbindung
ssh root@ihr-vps-ip

# System aktualisieren
apt update && apt upgrade -y

# Node.js installieren
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs git nginx

# Projekt klonen
cd /opt
git clone https://github.com/chrusu/hih-verwaltung.git
cd hih-verwaltung

# Abhängigkeiten installieren
npm install

# PM2 für automatischen Start
npm install -g pm2
```

### 3. App starten
```bash
# App als Service starten
pm2 start web-server.js --name hih-verwaltung
pm2 startup
pm2 save
```

### 4. Nginx als Reverse Proxy
```bash
nano /etc/nginx/sites-available/hih-verwaltung
```

```nginx
server {
    listen 80;
    server_name ihre-domain.ch;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Nginx konfigurieren
ln -s /etc/nginx/sites-available/hih-verwaltung /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

# SSL automatisch einrichten
apt install certbot python3-certbot-nginx
certbot --nginx -d ihre-domain.ch
```

### 5. Automatische Updates
```bash
# Update-Script erstellen
nano /opt/update-hih.sh
```

```bash
#!/bin/bash
cd /opt/hih-verwaltung
git pull
npm install
pm2 restart hih-verwaltung
echo "HIH-Verwaltung updated: $(date)" >> /var/log/hih-update.log
```

```bash
chmod +x /opt/update-hih.sh

# Automatisches Update jeden Tag um 3 Uhr
crontab -e
# Hinzufügen:
0 3 * * * /opt/update-hih.sh
```

---

## Option 3: Noch einfacher - Shared Hosting

### Infomaniak Web Hosting (CHF 5.75/Monat)
- **Node.js Support verfügbar**
- **SSL inklusive**
- **Backups automatisch**
- **Keine Server-Administration nötig**

### Setup bei Shared Hosting:
1. **Web Hosting bestellen** bei Infomaniak
2. **Node.js aktivieren** im Control Panel
3. **Code hochladen** via FTP/Git
4. **npm install** ausführen
5. **Fertig!**

---

## Option 4: GitHub Pages (Kostenlos, aber begrenzt)

Wenn Sie nur die Frontend-Funktionen ohne Backend brauchen:

```bash
# Statische Version erstellen
cd /Users/tobiashinderling/Development/HIH-Verwaltung

# Simple HTTP-Server für statische Dateien
python3 -m http.server 8000 -d web/
```

**Dann**: http://localhost:8000

---

## Empfehlung je nach Bedarf:

### **Für Entwicklung/Testen:**
→ **Option 1: Lokal** (kostenlos, sofort verfügbar)

### **Für produktiven Einsatz:**
→ **Option 2: Hostpoint VPS** (einfach, zuverlässig, CHF 29/Monat)

### **Für minimale Kosten:**
→ **Option 3: Shared Hosting** (CHF 5.75/Monat, weniger Kontrolle)

### **Nur Frontend ohne Daten-Persistierung:**
→ **Option 4: GitHub Pages** (kostenlos)

---

## Sofort-Start (Empfehlung):

**Lassen Sie uns erstmal lokal starten:**

```bash
cd /Users/tobiashinderling/Development/HIH-Verwaltung
node web-server.js
```

**Dann schauen Sie unter**: http://localhost:3000

**Funktioniert das bei Ihnen?** Dann können wir entscheiden, ob/wie wir es später online stellen möchten.

**Viel einfacher als Cloud-Setup - und Sie können sofort loslegen!** 🚀