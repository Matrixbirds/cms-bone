'use strict';

const chai = require('chai');
chai.use(require('chai-factories'));

const {factory} = chai;

factory('user', {
    name: 'matrixbirds',
    password: '1024',
    createdAt: +Date.UTC(2017, 8, 9, 0, 0, 0),
});

factory('passport_params', {
    name: 'matrixbirds',
    password: '1024',
});
