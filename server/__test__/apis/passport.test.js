'use strict';

const testHelper = require('helper');

const {requestJson, chai} = testHelper;
const {expect, factories} = chai;

describe('Passport', function () {
    context('GET /passport/auth', function () {
        let response;
        beforeEach(function *() {
            response = yield requestJson.get('/passport/auth');
        });
        describe('GET /passport/auth', function () {
            it('should response 200', function *() {
                expect(response.status).to.equal(200);
            });
        });
    });
});
