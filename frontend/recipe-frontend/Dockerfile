# Step 1: Build the Angular app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Step 2: Serve the Angular app with NGINX
FROM nginx:alpine

COPY --from=build /app/dist/recipe-frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
