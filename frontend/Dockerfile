# Stage 1: Build the React application
FROM node:lts-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./


RUN npm run build

# Stage 2: Run the server

CMD ["npm", "start"]