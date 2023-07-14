FROM node:18 as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm pkg delete scripts.prepare

RUN npm install

COPY . .

ENV NODE_ENV=development

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "dev"]
