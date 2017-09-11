'use strict';

const testHelper = require('../helper');

describe('Passport', function () {
  beforeEach(function *() {
  });
  describe('POST /passport/login', function () {
    it('should response ok', function *() {
      console.log('>>>>>>>>>>>>>>.');
    });
  });
});


describe('User', function () {
  beforeEach(function *() {
    console.log('user');
  });
  afterEach(function *() {
    console.log('user');
  });
  describe('GET /users/profile', function () {
    it('should response ok', function *() {
      console.log('/users/profile return  ok');
    });
  });
});

console.log(2);
