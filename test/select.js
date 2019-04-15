var expect = require('chai').expect;
var exec = require('@momsfriendlydevco/exec');
var mlog = require('mocha-logger');
var setup = require('./setup');

describe('`o select` CLI', function() {
	this.timeout(10 * 1000);
	beforeEach(setup.initEnvironment);

	it('should filter simple collection data', ()=>
		exec([`${setup.o}`, 'select', 'name', `<${__dirname}/scenarios/users.json`], {json: true, pipe: true})
			.then(res => {
				expect(res).to.be.an('array');
				expect(res).to.have.length(7);
				res.forEach(r => expect(Object.keys(r)).to.deep.equal(['name']));
			})
	);

});
