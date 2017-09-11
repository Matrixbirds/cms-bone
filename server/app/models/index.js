'use strict';
const path = require('path');

const loadModule = require('../kit');
module.exports = function (models) {
    const { __meta__ } = loadModule({
        format: '.models.js',
        deps: [{router, models}],
		dir: path.resolve(__dirname, '.')
    });
	return __meta__;
};
