#!/bin/bash

# HIH-Verwaltung Deployment Script für Schweizer Hosting
# Verwendung: ./deploy.sh [hostpoint|infomaniak|nine|cloudscale]

set -e

PROVIDER=${1:-hostpoint}
APP_NAME="hih-verwaltung"
VERSION=$(date +%Y%m%d-%H%M%S)

echo "🚀 Deploying HIH-Verwaltung to $PROVIDER..."

# Build Docker Image
echo "📦 Building Docker image..."
docker build -t $APP_NAME:$VERSION .
docker tag $APP_NAME:$VERSION $APP_NAME:latest

# Test the container locally first
echo "🧪 Testing container..."
docker run -d --name test-$APP_NAME -p 3001:3000 $APP_NAME:latest
sleep 10

# Health check
if curl -f http://localhost:3001/api/kunden > /dev/null 2>&1; then
    echo "✅ Container health check passed"
    docker stop test-$APP_NAME
    docker rm test-$APP_NAME
else
    echo "❌ Container health check failed"
    docker stop test-$APP_NAME
    docker rm test-$APP_NAME
    exit 1
fi

# Backup current data (if exists)
echo "💾 Creating backup..."
if [ -d "./data" ]; then
    mkdir -p ./backups
    tar -czf "./backups/backup-$(date +%Y%m%d-%H%M%S).tar.gz" ./data
    echo "✅ Backup created"
fi

# Deploy based on provider
case $PROVIDER in
    "hostpoint")
        echo "🇨🇭 Deploying to Hostpoint..."
        # Hostpoint-specific deployment commands
        # docker save $APP_NAME:latest | ssh your-server "docker load"
        echo "Please follow Hostpoint's container deployment guide"
        echo "Upload the image and use the provided docker-compose.yml"
        ;;
    "infomaniak")
        echo "🌱 Deploying to Infomaniak..."
        # Infomaniak Public Cloud deployment
        echo "Use Infomaniak's Docker registry and deployment tools"
        ;;
    "nine")
        echo "🏔️ Deploying to Nine..."
        # Nine Kubernetes deployment
        echo "Deploy to Nine's managed Kubernetes service"
        ;;
    "cloudscale")
        echo "☁️ Deploying to CloudScale..."
        # CloudScale container deployment
        echo "Use CloudScale's API or web interface for deployment"
        ;;
    *)
        echo "❌ Unknown provider: $PROVIDER"
        echo "Available providers: hostpoint, infomaniak, nine, cloudscale"
        exit 1
        ;;
esac

echo "🎉 Deployment preparation complete!"
echo ""
echo "📋 Next steps:"
echo "1. Upload docker-compose.yml to your server"
echo "2. Configure SSL certificates (Let's Encrypt recommended)"
echo "3. Set up domain DNS to point to your server"
echo "4. Run: docker-compose up -d"
echo "5. Monitor logs: docker-compose logs -f"
echo ""
echo "🔧 Useful commands:"
echo "- Start: docker-compose up -d"
echo "- Stop: docker-compose down"
echo "- Logs: docker-compose logs -f hih-verwaltung"
echo "- Backup: docker-compose exec hih-verwaltung tar -czf /app/backups/manual-backup.tar.gz /app/data"