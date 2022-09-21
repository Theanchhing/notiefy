FROM node:16

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

ENV TZ=Asia/Phnom_Penh

EXPOSE 3000

CMD ["npm", "run", "dev"]