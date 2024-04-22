FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM node:18 AS final

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY . .

EXPOSE 5600

CMD [ "node", "server.js" ]