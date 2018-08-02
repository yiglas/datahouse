const fs = require('fs');
const expect = require('chai').expect;
const sinon = require('sinon');
const lambdaToTest = require('../src/handler');

describe('handler', () => {
    let event = null;
    let e = null;
    let r = null;

    function callback(done) {
        return function (err, result) {
            e = err;
            r = result;
            done();
        };
    } 

    before((done) => {
        event = null;
        e = null;
        r = null;
        done();
    })

    describe('with a valid payload', () => {

        before((done) => {
            let sandbox = sinon.createSandbox();
            sandbox.stub(console, 'log'); 
            event = JSON.parse(fs.readFileSync('spec/event.json', 'utf8'));
            lambdaToTest.handler(event, {}, callback(done));
            sandbox.restore();
        });

        it('should not throw an error', () => {
            expect(e).to.be.null;
        });

        it('should have a response', () => {
            expect(r).to.be.not.null;
        });

        it('should have a statusCode of 200', () => {
            const { statusCode } = r;

            expect(statusCode).to.equal(200);
        });

        it('should have the same number of applicants that were scored', () => {
            const { applicants } = JSON.parse(event.body);
            const { scoredApplicants } = JSON.parse(r.body);
            let countApplicants = applicants.length;
            let countScoredApplicants = scoredApplicants.length;

            expect(countApplicants).to.equal(countScoredApplicants);
        });
    });

    describe('with an invalid payload', () => {
        before((done) => {
            let sandbox = sinon.createSandbox();
            sandbox.stub(console, 'log'); 
            event = JSON.parse(fs.readFileSync('spec/bad-event.json', 'utf8'));
            lambdaToTest.handler(event, {}, callback(done));
            sandbox.restore();
        });

        it('should not throw an error', () => {
            expect(e).to.be.null;
        });

        it('should have a response', () => {
            expect(r).to.be.not.null;
        });

        it('should have a statusCode of 400', () => {
            const { statusCode } = r;

            expect(statusCode).to.equal(400);
        });
    })
});

