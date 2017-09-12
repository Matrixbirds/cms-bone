'use strict';

const testHelper = require('helper');

const {requestJson, chai} = testHelper;
const {expect, factories} = chai;

describe('Users', function () {
    context('GET /users/profile', function () {
        let response;
        beforeEach(function *() {
            response = yield requestJson.get('/users/profile');
        });
        describe('GET /users/profile', function () {
            it('should response 200', function *() {
                expect(response.status).to.equal(200);
            });
        });
    });
});
