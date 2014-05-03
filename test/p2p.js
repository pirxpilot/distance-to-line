var p2p = require('..').p2p;
var p2p_2 = require('..').p2p_2;

/* global describe, it */

describe('p2p', function() {

	it('shold return 0 for the same point', function() {
		p2p_2([5,5], [5,5]).should.eql(0);
		p2p([5,5], [5,5]).should.eql(0);
	});


	it('shold measure distance for different points', function() {
		p2p_2([0,0], [1,1]).should.eql(2);
		p2p([0,0], [1,1]).should.eql(Math.SQRT2);

		p2p_2([0,0], [-3, 2]).should.eql(13);
	});

	it('shold be symmetric', function() {
		var a = [5, 15], b = [-3, 22];

		p2p(a, b).should.eql(p2p(b, a));
	});

});