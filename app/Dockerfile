# NodeJS Dockerfile

FROM node:12.14.1
RUN  apt-get update

RUN mkdir /app
WORKDIR /app
COPY ./ /app
RUN ls -l
RUN npm install
RUN npm install -g eslint
EXPOSE 3010