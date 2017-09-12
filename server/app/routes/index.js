'use strict';
const Router = require('koa-router');
const path = require('path');

const loadModule = require('../kit');

function router() {
	return new Router();
}
module.exports = function (models) {
	const { __meta__ } = loadModule({
		format: '.routes.js',
		deps: [{router, models}],
		dir: path.resolve(__dirname, '.')
    });
	return __meta__;
};
