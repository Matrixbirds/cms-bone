'use strict';
const nconf = require('nconf');
const path = require('path');

const APP_ENV = {
    NODE_ENV: 'development',
    APP_HOST: 'localhost',
    PORT: 3000,
    APP_ID: '<app-id>',
    APP_SECRET_KEY: '<app-secret-key>',
};

nconf
    .file({
        file: path.join(__dirname, '__settings.yml'),
        format: require('nconf-yaml')
    })
    .env()
    .defaults(APP_ENV);

module.exports = nconf.get(process.env.NODE_ENV);
