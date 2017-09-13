FROM mhart/alpine-node:8.4.0
MAINTAINER Matrixbirds <yooobuntu@163.com>
ENV WORKDIR /usr/src/app
ENV NPM npm --registry=https://registry.npm.taobao.org
RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR
EXPOSE 2333
COPY server/package.json $WORKDIR
RUN $NPM i
VOLUME $WORKDIR $WORKDIR/node_modules
CMD npm start
