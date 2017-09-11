'use strict';
const Router = require('koa-router');
const router = new Router();
const path = require('path');

const loadModule = require('../kit');
module.exports = function (models) {
    const { __meta__ } = loadModule({
        format: '.routes.js',
        deps: [{router, models}],
		dir: path.resolve(__dirname, '.')
    });
	return __meta__;
};
