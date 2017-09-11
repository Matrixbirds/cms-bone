'use strict'

const expose = Object.assign;
const models = require('./models');

const koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const routes = require('./routes')(models);
const app = new koa();
const config = require('./config');

app.use(logger());
app.use(bodyParser());
app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(3000);

module.exports = {
    expose,
    context: {
        app,
        models,
        config,
    }
};
