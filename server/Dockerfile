FROM node:latest

WORKDIR /app

COPY . /app
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install
RUN npm run build

WORKDIR /app/dist

CMD ["node", "index.js"]