# HIH-Verwaltung Docker Hosting Guide

## 🇨🇭 Schweizer Hosting-Anbieter Vergleich

### 1. **Hostpoint** (⭐ Empfehlung für KMU)
- **Managed Container Hosting**
- **Preise**: Ab CHF 29/Monat
- **Vorteile**: Einfach, Support auf Deutsch, etabliert
- **Setup**: Web-Interface, sehr benutzerfreundlich

### 2. **Nine** (⭐ Enterprise)
- **Managed Kubernetes**
- **Preise**: Ab CHF 49/Monat
- **Vorteile**: Professionell, sehr skalierbar
- **Setup**: Für technisch versierte Nutzer

### 4. **CloudScale.ch** (⭐ Developer)
- **IaaS mit Container-Services**
- **Preise**: Pay-per-use (ca. CHF 30-50/Monat)
- **Vorteile**: Flexibel, API-first, transparent

## 🚀 Deployment-Schritte

### Schritt 1: Provider wählen und Server einrichten
```bash
# Lokales Testing
docker-compose up -d
```

### Schritt 2: Domain und SSL
- Domain registrieren (bei Switch, Hostpoint, etc.)
- DNS auf Server-IP zeigen lassen
- Let's Encrypt SSL-Zertifikat einrichten

### Schritt 3: Deployment
```bash
# Deployment vorbereiten
./deploy.sh hostpoint

# Auf Server hochladen
scp docker-compose.yml user@your-server:/app/
scp -r data/ user@your-server:/app/

# Auf Server starten
ssh user@your-server
cd /app
docker-compose up -d
```

## 🔧 Verwaltung

### Container-Befehle
```bash
# Status prüfen
docker-compose ps

# Logs anzeigen
docker-compose logs -f hih-verwaltung

# Neustarten
docker-compose restart hih-verwaltung

# Updates
docker-compose pull
docker-compose up -d
```

### Backups
```bash
# Manual backup
docker-compose exec hih-verwaltung tar -czf /app/backups/backup.tar.gz /app/data

# Automated backup (Cron)
0 2 * * * cd /app && docker-compose exec hih-verwaltung tar -czf /app/backups/backup-$(date +\%Y\%m\%d).tar.gz /app/data
```

## 💰 Kostenvergleich (geschätzt/Monat)

| Anbieter | Basic Plan | Pro Features | SSL | Support |
|----------|------------|--------------|-----|---------|
| **Hostpoint** | CHF 29 | Backup, Monitoring | ✅ Kostenlos | 🇨🇭 Deutsch |

| **Nine** | CHF 49 | Kubernetes, LB | ✅ Inklusive | 🇨🇭 Deutsch |
| **CloudScale** | CHF 35* | API, Flexibel | ✅ Let's Encrypt | 🇨🇭 Englisch |

*Pay-per-use, kann variieren

## 🛡️ Sicherheit & Compliance

✅ **DSGVO-konform** (alle Schweizer Anbieter)
✅ **Daten bleiben in der Schweiz**
✅ **SSL/TLS-Verschlüsselung**
✅ **Regular Security Updates**
✅ **Backup-Strategie**

## 📞 Nächste Schritte

1. **Provider auswählen** (Empfehlung: Hostpoint für Einfachheit)
2. **Account erstellen** und Server bestellen
3. **Domain registrieren** (falls noch nicht vorhanden)
4. **Deployment testen**: `docker-compose up -d`
5. **Production deployment** mit `./deploy.sh`

---

**Fragen?** Die meisten Schweizer Anbieter haben sehr guten Support auf Deutsch! 🇨🇭