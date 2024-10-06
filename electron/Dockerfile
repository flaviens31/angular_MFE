FROM node:22-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier le package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port utilisé par l'application Electron
EXPOSE 3000

# Commande pour démarrer l'application Electron
CMD ["npx", "electron", "."]
