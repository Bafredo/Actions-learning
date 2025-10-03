#!/bin/bash
echo "Starting deployment..."
# Add your deployment commands here

# go to app directory
cd /app

# pull the latest changes from the repository
git pull origin main

docker compose down

docker compose up -d --build

echo "Deployment completed."