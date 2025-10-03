FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ARG VITE_API_HOST
ENV VITE_API_HOST=$VITE_API_HOST

RUN npm run build

FROM nginx:alpine as production

COPY --from=builder /app/dist/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/*
COPY test.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



