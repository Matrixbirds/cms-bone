'use strict';

require('mocha');
require('co-mocha');

const superagent = require('supertest');
const {app} = require('../app').context;

const request = superagent(app.listen());

const  requestJson = {};
['get', 'post', 'del', 'patch'].reduce((res, method) => {
    res[method] = url => {
        return request[method](url)
            .type('application/json')
            .accept('application/json');
    };
    return res;
}, requestJson);

module.exports = {
    app,
    chai: require('chai'),
    factories: require('chai-factories'),
    request,
    requestJson,
    R: require('rambda'),
    moment: require('moment'),
};

before(function () {
    // global before
});

after(function () {
    // global after
});
