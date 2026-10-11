FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --include=dev --ignore-scripts
RUN npm run browser:install -- --with-deps --only-shell \
 && rm -rf /var/lib/apt/lists/*
COPY . ./
ARG MANUAL_SITE_URL=https://manual.bnovate.net
ARG MANUAL_BASE_PATH=/
ENV MANUAL_SITE_URL=$MANUAL_SITE_URL MANUAL_BASE_PATH=$MANUAL_BASE_PATH
RUN npm run manual:check && npm run build

FROM nginx:1.30-alpine
COPY --from=build /app/build/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
