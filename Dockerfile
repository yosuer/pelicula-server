FROM node:4.4.0
EXPOSE 3000

WORKDIR /app
COPY . /app

RUN npm install
RUN npm start