'use strict';

require('mocha');
require('co-mocha');

before(function () {
  console.log('setup');
});

after(function () {
  console.log('trendown');
});

module.exports = {
  app: require('../app'),
  chai: require('chai'),
  factories: require('chai-factories'),
  request: require('supertest'),
  R: require('rambda'),
  moment: require('moment'),
};
