#!/bin/bash
# HIH-Verwaltung Setup Script für europäische VPS
# Kompatibel mit: Hetzner, OVH, Contabo, Netcup, Scaleway

set -e

echo "🚀 HIH-Verwaltung Setup für europäische VPS startet..."
echo "📍 Optimiert für: Deutschland, Frankreich, EU-DSGVO"
echo ""

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Prüfen ob als root ausgeführt
if [[ $EUID -ne 0 ]]; then
   print_error "Dieses Script muss als root ausgeführt werden"
   echo "Verwendung: sudo bash setup-europa.sh"
   exit 1
fi

print_status "System wird aktualisiert..."
apt update && apt upgrade -y

print_status "Node.js 18 wird installiert..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs git nginx certbot python3-certbot-nginx ufw htop curl wget

print_success "Node.js $(node --version) installiert"

print_status "HIH-Verwaltung wird geklont..."
cd /opt
if [ -d "hih-verwaltung" ]; then
    print_warning "Verzeichnis existiert bereits, wird aktualisiert..."
    cd hih-verwaltung
    git pull
else
    git clone https://github.com/chrusu/hih-verwaltung.git
    cd hih-verwaltung
fi

print_status "NPM Dependencies werden installiert..."
npm install

print_status "PM2 Prozess-Manager wird installiert..."
npm install -g pm2

print_status "HIH-Verwaltung wird gestartet..."
pm2 delete hih-verwaltung 2>/dev/null || true
pm2 start web-server.js --name hih-verwaltung
pm2 startup
pm2 save

print_success "HIH-Verwaltung läuft mit PM2"

print_status "Nginx wird konfiguriert..."

# Backup der Standard-Konfiguration
cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup 2>/dev/null || true

# HIH-Verwaltung Nginx-Konfiguration
cat > /etc/nginx/sites-available/hih-verwaltung << 'EOF'
server {
    listen 80;
    server_name _;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
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
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        proxy_pass http://localhost:3000;
        expires 1M;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Nginx-Konfiguration aktivieren
ln -sf /etc/nginx/sites-available/hih-verwaltung /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Nginx-Konfiguration testen
if nginx -t; then
    systemctl reload nginx
    print_success "Nginx konfiguriert und neu geladen"
else
    print_error "Nginx-Konfiguration fehlerhaft"
    exit 1
fi

print_status "Firewall wird konfiguriert..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow http
ufw allow https
ufw --force enable

print_success "Firewall konfiguriert (SSH, HTTP, HTTPS erlaubt)"

# Externe IP ermitteln
EXTERNAL_IP=$(curl -s ifconfig.me || curl -s icanhazip.com || echo "Unbekannt")

print_status "Automatische Updates werden eingerichtet..."
cat > /opt/update-hih.sh << 'EOF'
#!/bin/bash
cd /opt/hih-verwaltung
git pull
npm install
pm2 restart hih-verwaltung
echo "$(date): HIH-Verwaltung aktualisiert" >> /var/log/hih-updates.log
EOF

chmod +x /opt/update-hih.sh

# Cronjob für automatische Updates (täglich um 3 Uhr)
(crontab -l 2>/dev/null; echo "0 3 * * * /opt/update-hih.sh") | crontab -

print_success "Automatische Updates konfiguriert (täglich 3:00 Uhr)"

# System-Informationen sammeln
TOTAL_RAM=$(free -h | awk 'NR==2{printf "%.1f GB", $2/1024/1024}')
DISK_SPACE=$(df -h / | awk 'NR==2{print $4}')
NODEJS_VERSION=$(node --version)
NGINX_VERSION=$(nginx -v 2>&1 | cut -d' ' -f3)

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                    🎉 INSTALLATION ERFOLGREICH! 🎉             ║"
echo "╠════════════════════════════════════════════════════════════════╣"
echo "║                                                                ║"
print_success "HIH-Verwaltung ist bereit!"
echo "║                                                                ║"
echo "║  🌐 Web-Zugriff: http://$EXTERNAL_IP"
echo "║  📊 PM2 Status:  pm2 status"
echo "║  🔧 Logs:        pm2 logs hih-verwaltung"
echo "║  🔄 Neustart:    pm2 restart hih-verwaltung"
echo "║                                                                ║"
echo "║  📋 System-Info:"
echo "║     💾 RAM: $TOTAL_RAM verfügbar"
echo "║     💿 Disk: $DISK_SPACE frei"
echo "║     🟢 Node.js: $NODEJS_VERSION"
echo "║     🌐 Nginx: $NGINX_VERSION"
echo "║                                                                ║"
echo "║  🔒 Für SSL-Zertifikat (Domain erforderlich):"
echo "║     certbot --nginx -d ihre-domain.com"
echo "║                                                                ║"
echo "║  📝 Nützliche Befehle:"
echo "║     pm2 status          - Prozess-Status"
echo "║     pm2 logs            - Live-Logs anzeigen" 
echo "║     pm2 restart all     - Alle Prozesse neustarten"
echo "║     nginx -t            - Nginx-Config testen"
echo "║     ufw status          - Firewall-Status"
echo "║                                                                ║"
echo "║  🇪🇺 DSGVO-konform gehostet in Europa! ✅"
echo "║                                                                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

print_status "Setup-Log wird erstellt..."
cat > /opt/hih-setup-info.txt << EOF
HIH-Verwaltung Setup Informationen
==================================
Installation: $(date)
Server IP: $EXTERNAL_IP
Node.js: $NODEJS_VERSION
System: $(lsb_release -d | cut -f2)
RAM: $TOTAL_RAM
Disk: $DISK_SPACE

Wichtige Dateien:
- Anwendung: /opt/hih-verwaltung/
- Nginx Config: /etc/nginx/sites-available/hih-verwaltung
- Update Script: /opt/update-hih.sh
- PM2 Prozesse: pm2 status

Web-Zugriff: http://$EXTERNAL_IP
SSL Setup: certbot --nginx -d ihre-domain.com

Automatische Updates: Täglich 3:00 Uhr
Logs: /var/log/hih-updates.log
EOF

print_success "Setup-Informationen gespeichert in /opt/hih-setup-info.txt"

echo ""
print_success "🚀 Installation abgeschlossen! Ihre HIH-Verwaltung läuft unter http://$EXTERNAL_IP"
echo ""