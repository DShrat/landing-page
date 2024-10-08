# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /app

COPY src/ /cool-landing-page/src
COPY package.json /cool-landing-page/
COPY . .

RUN npm install

RUN npm run build

EXPOSE 3101

CMD [ "npm", "start" ]