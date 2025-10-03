# HIH-Verwaltung - Europäisches Hosting (Einfach & Günstig)

## Die besten europäischen Hosting-Optionen

### 🥇 **Top-Empfehlungen (DSGVO-konform, günstig, einfach)**

---

## 1. **Hetzner (Deutschland)** - **TESTSIEGER**
**💰 Ab €4.15/Monat | 🇩🇪 Deutschland | ⭐⭐⭐⭐⭐**

### **Warum Hetzner?**
- **Günstigster Preis**: €4.15/Monat für 1 vCPU, 2GB RAM, 20GB SSD
- **Deutsche Rechenzentren**: Nürnberg & Falkenstein
- **Einfaches Setup**: 1-Click Ubuntu Installation
- **Excellenter Ruf**: Seit 1997, sehr stabil
- **DSGVO-konform**: Deutscher Anbieter

### **Setup (super einfach):**
```bash
# Nach VPS-Bestellung (hetzner.com/cloud):
ssh root@ihre-ip

# Alles in einem Befehl:
curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
apt install -y nodejs git nginx certbot python3-certbot-nginx && \
cd /opt && \
git clone https://github.com/chrusu/hih-verwaltung.git && \
cd hih-verwaltung && \
npm install && \
npm install -g pm2 && \
pm2 start web-server.js --name hih && \
pm2 startup && \
pm2 save
```

**Kosten**: €4.15/Monat = **CHF ~4.50/Monat**

---

## 2. **OVHcloud (Frankreich)** 
**💰 Ab €3.50/Monat | 🇫🇷 Frankreich | ⭐⭐⭐⭐**

### **VPS Starter:**
- **1 vCore, 2GB RAM, 20GB SSD NVMe**
- **Rechenzentren**: Frankreich, Deutschland, UK
- **DSGVO-konform**: EU-Anbieter
- **Einfaches Control Panel**

**Kosten**: €3.50/Monat = **CHF ~3.80/Monat**

---

## 3. **Scaleway (Frankreich)**
**💰 Ab €7.99/Monat | 🇫🇷 Frankreich | ⭐⭐⭐⭐**

### **Development Instance:**
- **1 vCPU, 2GB RAM, 20GB SSD**
- **ARM-basiert** (sehr effizient)
- **Paris & Amsterdam** Rechenzentren
- **Moderne Cloud-Plattform**

**Kosten**: €7.99/Monat = **CHF ~8.60/Monat**

---

## 4. **Contabo (Deutschland)**
**💰 Ab €4.99/Monat | 🇩🇪 Deutschland | ⭐⭐⭐⭐**

### **VPS S SSD:**
- **4 vCPU, 8GB RAM, 50GB SSD**
- **München & Nürnberg**
- **Sehr viel Power für wenig Geld**
- **Deutscher Support**

**Kosten**: €4.99/Monat = **CHF ~5.40/Monat**

---

## 5. **Netcup (Deutschland)**
**💰 Ab €2.99/Monat | 🇩🇪 Deutschland | ⭐⭐⭐⭐**

### **VPS 200 G8:**
- **1 vCore, 2GB RAM, 20GB SSD**
- **Nürnberg Rechenzentrum**
- **Sehr günstig**, solide Performance
- **Deutsche Firma**

**Kosten**: €2.99/Monat = **CHF ~3.20/Monat**

---

## 🏆 **Meine Empfehlung: Hetzner**

### **Warum Hetzner die beste Wahl ist:**

1. **Preis-Leistung unschlagbar**: €4.15 für mehr als genug Power
2. **Deutsches Unternehmen**: DSGVO automatisch erfüllt
3. **Excellente Reputation**: Millionen zufriedene Kunden
4. **Einfaches Interface**: Intuitive Cloud Console
5. **Schnelle SSD**: NVMe-Storage inklusive
6. **IPv6 inklusive**: Zukunftssicher

### **1-Click Setup bei Hetzner:**

#### **Schritt 1: VPS bestellen**
1. **hetzner.com/cloud** → Account erstellen
2. **Project erstellen** → "New Server"
3. **Location**: Nürnberg (Deutschland)
4. **Image**: Ubuntu 22.04
5. **Type**: CPX11 (€4.15/Monat)
6. **SSH-Key**: Ihren Key hochladen
7. **Create & Boot**

#### **Schritt 2: Automatisches Setup-Script**
```bash
# SSH-Verbindung
ssh root@ihre-hetzner-ip

# HIH-Verwaltung automatisch installieren
curl -s https://raw.githubusercontent.com/chrusu/hih-verwaltung/main/setup-hetzner.sh | bash
```

#### **Schritt 3: Domain & SSL**
```bash
# Domain auf Hetzner-IP zeigen lassen (A-Record)
# Dann SSL aktivieren:
certbot --nginx -d ihre-domain.com
```

**Fertig! Ihre HIH-Verwaltung läuft unter https://ihre-domain.com**

---

## Setup-Script erstellen

Lassen Sie mich ein automatisches Setup-Script für Sie erstellen:

```bash
#!/bin/bash
# HIH-Verwaltung Setup für europäische VPS

echo "🚀 HIH-Verwaltung Setup startet..."

# System aktualisieren
apt update && apt upgrade -y

# Node.js 18 installieren
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs git nginx certbot python3-certbot-nginx

# HIH-Verwaltung klonen
cd /opt
git clone https://github.com/chrusu/hih-verwaltung.git
cd hih-verwaltung

# Dependencies installieren
npm install

# PM2 für Prozess-Management
npm install -g pm2

# App starten
pm2 start web-server.js --name hih-verwaltung
pm2 startup
pm2 save

# Nginx konfigurieren
cat > /etc/nginx/sites-available/hih-verwaltung << 'EOF'
server {
    listen 80;
    server_name _;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

ln -s /etc/nginx/sites-available/hih-verwaltung /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

# Firewall konfigurieren
ufw allow ssh
ufw allow http
ufw allow https
ufw --force enable

echo "✅ HIH-Verwaltung ist bereit!"
echo "🌐 Zugriff über: http://$(curl -s ifconfig.me)"
echo "📝 Für SSL: certbot --nginx -d ihre-domain.com"
```

---

## Kosten-Vergleich (monatlich)

| Anbieter | Preis | RAM | CPU | SSD | Land |
|----------|-------|-----|-----|-----|------|
| **Netcup** | **€2.99** | 2GB | 1 | 20GB | 🇩🇪 DE |
| **OVH** | €3.50 | 2GB | 1 | 20GB | 🇫🇷 FR |
| **Hetzner** | **€4.15** | 2GB | 1 | 20GB | 🇩🇪 DE |
| **Contabo** | €4.99 | 8GB | 4 | 50GB | 🇩🇪 DE |
| **Scaleway** | €7.99 | 2GB | 1 | 20GB | 🇫🇷 FR |

---

## 🎯 **Sofort-Aktion:**

**Für den schnellsten Start empfehle ich:**

1. **Hetzner Cloud Account** erstellen (5 Min)
2. **CPX11 Server** bestellen (€4.15/Monat)
3. **Setup-Script** ausführen (5 Min)
4. **Domain** konfigurieren (optional)

**Total Zeit**: ~15 Minuten  
**Total Kosten**: €4.15/Monat (CHF ~4.50)

**Soll ich Ihnen beim Hetzner-Setup helfen?** Es ist wirklich sehr einfach und Sie haben Ihre HIH-Verwaltung in 15 Minuten online in Deutschland laufen! 🚀