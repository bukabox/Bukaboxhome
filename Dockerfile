# Build stage: build the Vite (or other npm) project
FROM node:18-bullseye-slim AS build

WORKDIR /app

# Copy package files first for caching
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit --progress=false || npm install

# Copy source and build
COPY . .

# Ensure build script runs if present (Vite: npm run build)
RUN if [ -f package.json ]; then \
      echo "Running build..."; \
      npm run build --if-present; \
    fi

# Production stage: serve built static files with nginx
FROM nginx:stable-alpine AS prod

# Remove default site config and write our SPA-friendly nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Create a simple nginx config that does SPA fallback for index.html
RUN printf '%s\n' \
'server {' \
'  listen 80;' \
'  server_name _;' \
'  root /usr/share/nginx/html;' \
'  index index.html index.htm;' \
'  # Serve static files, fallback to index.html for SPA routes' \
'  location / {' \
'    try_files $uri $uri/ /index.html;' \
'  }' \
'  client_max_body_size 20M;' \
'  sendfile on;' \
'  keepalive_timeout 65;' \
'}' \
> /etc/nginx/conf.d/default.conf

# Copy built files from build stage. Support both "dist" (Vite) and "build" (CRA)
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html

# If repository includes a root index.html (static), also copy it as fallback
COPY --from=build /app/index.html /usr/share/nginx/html || true

EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
