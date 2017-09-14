'use strict';

const testHelper = require('helper');

const {requestJson, chai} = testHelper;
const {expect, factories} = chai;

describe('mock', function () {
    context('GET /mock', function () {
        let response;
        beforeEach(function *() {
            response = yield requestJson.get('/mock');
            this.data = response.body.data;
            this.meta = response.body.meta;
        });
        describe('GET /mock', function () {
            it('should response 200 with pagination', function *() {
                expect(this.meta).to.have.property('totalPage', 40);
                expect(this.meta).to.have.property('page', 1);
                expect(this.meta).to.have.property('per', 5);
                expect(response.status).to.equal(200);
            });
        });
    });
});
