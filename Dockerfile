ARG SERVER_PORT=3000

FROM node:16 AS production

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --only=production
RUN npm install -g @nestjs/cli

COPY . .

RUN nest build
COPY *.env ./dist/

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/app/dist

EXPOSE $SERVER_PORT

CMD node main