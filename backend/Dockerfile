FROM node:alpine

WORKDIR /app
COPY . /app
RUN npm ci

EXPOSE 3000
RUN npm i sequelize-cli --location=global

CMD npm run migrate && npm run dev
