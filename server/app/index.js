'use strict'

const expose = Object.assign;
const models = require('./models');

const koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const routes = require('./routes')(models);
const app = new koa();
const config = require('./config');

const { render, error } = require('./concern');

if (process.env.NODE_ENV !== 'test')
    app.use(logger());

app.use(render);
app.use(error);
app.use(bodyParser());
Object.keys(routes).forEach( _key => {
    app.use(routes[_key].routes());
    app.use(routes[_key].allowedMethods());
});
if (process.env.NODE_ENV !== 'test')
    app.listen(3000);

module.exports = {
    expose,
    context: {
        app,
        models,
        config,
    }
};
