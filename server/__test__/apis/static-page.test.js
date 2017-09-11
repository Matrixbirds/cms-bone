'use strict';

const testHelper = require("helper");
const {request, chai} = testHelper;
const {expect, factories} = chai;


describe("static page", function () {
	context("GET /", function () {
		beforeEach(function *() {
			this.response = yield request.get('/');
		});
		it ("should response html page", function () {
			expect(this.response.status).to.equal(200);
			expect(this.response.body).to.be.ok;
		});
	});
});
