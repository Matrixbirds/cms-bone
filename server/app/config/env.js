'use strict';

const nconf = require('nconf');

const APP_ENV = {
    NODE_ENV: 'development',
    APP_HOST: 'localhost',
    PORT: 3000,
    APP_ID: '<app-id>',
    APP_SECRET_KEY: '<app-secret-key>',
};

nconf
    .file({
        file: '__settings.yml',
        format: require('nconf-yaml')
    })
    .env()
    .defaults(APP_ENV);

console.log(1);

module.exports = nconf;
