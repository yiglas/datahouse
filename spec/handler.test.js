const fs = require('fs');
const expect = require('chai').expect;
const lambdaToTest = require('../src/handler');

describe('calling the scoring lambda with a valid payload.', function() {
    let event = null;
    let e = null;
    let r = null;

    before(function(done){
        event = JSON.parse(fs.readFileSync('spec/event.json', 'utf8'));
        lambdaToTest.handler(event, {}, callback(done));
    });

    function callback(done) {
        return function (err, result) {
            e = err;
            r = result;
            done();
        };
    } 

    it('should not throw an error', function() {
        expect(e).to.be.null;
    });

    it('should have a response', function() {
        expect(r).to.be.not.null;
    });

    it('should have the same number of applicants that were scored', function() {
        const { applicants } = JSON.parse(event.body);
        const { scoredApplicants } = JSON.parse(r.body);
        let countApplicants = applicants.length;
        let countScoredApplicants = scoredApplicants.length;

        expect(countApplicants).to.equal(countScoredApplicants);
    })
});

