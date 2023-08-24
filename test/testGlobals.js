const sinon = require('sinon');
const expect = require('chai').expect;

require('dotenv').config({
    path: "env/.env.test"
});

global.sinon = sinon;
global.expect = expect;
// Restores test doubles to default in sandbox after every test
exports.mochaHooks = {
    afterEach() {
        sinon.restore();
    }
};