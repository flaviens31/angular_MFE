# Dockerfile pour l'application shell
FROM node:22-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/shell /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
