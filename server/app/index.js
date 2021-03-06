'use strict'

const expose = Object.assign;
const models = require('./models');

const fs = require('fs');
const path = require('path');

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

const staticPage = new Router({prefix: '/'});
staticPage.get('/', async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.join(__dirname, "../../index.html"));
    ctx.status = 200;
});
app.use(staticPage.routes());
app.use(staticPage.allowedMethods());
if (process.env.NODE_ENV !== 'test' && require.main === module) {
    app.listen(config.env.port, () => {
		console.log("Listenning on %s", config.env.port);
	});
}

module.exports = {
    expose,
    context: {
        app,
        models,
        config,
    }
};
