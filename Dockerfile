FROM mhart/alpine-node:8.4.0
MAINTAINER Matrixbirds <yooobuntu@163.com>
RUN mkdir -p /usr/local/server
COPY ./server /usr/local/server
WORKDIR /usr/local/server
RUN apk add --no-cache make gcc g++ python
RUN npm install --production
