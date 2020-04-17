FROM node:12.16.1-alpine3.10

ARG GIT_HASH
ARG CMS_URL

ENV GIT_HASH ${GIT_HASH}
ENV CMS_URL ${CMS_URL}

COPY . /app

WORKDIR /app

RUN npm i && npm run build

EXPOSE 8000

CMD ["npm", "run", "serve"]
