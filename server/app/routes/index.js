'use strict';
const { loadModule } = require('../utils');
const Router = require('koa-router');
const router = new Router();
module.exports = function (_) {
  require('./passport')(router);
  return router;
};
