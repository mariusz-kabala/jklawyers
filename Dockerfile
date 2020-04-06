FROM node:12.16.1-alpine3.10

ARG GIT_HASH

ENV GIT_HASH ${GIT_HASH}

COPY . /app

WORKDIR /app

RUN npm i && npm run build

EXPOSE 9000

CMD ["npm", "run", "serve"]
