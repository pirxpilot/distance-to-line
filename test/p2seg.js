var p2seg = require('..').p2seg;
var p2seg_2 = require('..').p2seg_2;
var closest = require('..').closest;

/* global describe, it */


var
	a = [0, 0],
	b = [5, 3],
	c = [5, 0],
	d = [0, 4],
	e = [1, 1];


describe('closest', function() {

	it('shold return point for degenerated segment', function() {
		closest(b, a, a).should.eql(a);
		closest(b, e, e).should.eql(e);
	});

	it('shold return projection for horizontal', function() {
		closest(e, a, c).should.eql([1, 0]);
		closest(e, c, a).should.eql([1, 0]);
	});

	it('shold return projection for vertical', function() {
		closest(e, a, d).should.eql([0, 1]);
		closest(e, d, a).should.eql([0, 1]);
	});

	it('shold return projection for slanted', function() {
		var m;
		m = closest(e, a, b);
		m[0].should.be.approximately(1.17647058823, 1e-10);
		m[1].should.be.approximately(0.70588235294, 1e-10);
		m = closest(e, b, a);
		m[0].should.be.approximately(1.17647058823, 1e-10);
		m[1].should.be.approximately(0.70588235294, 1e-10);
	});

	it('shold return proper end if projection outside of the segment', function() {
		closest([-1, -1], a, b).should.eql(a);
		closest([-1, -1], b, a).should.eql(a);

		closest([7, 10], a, b).should.eql(b);
		closest([7, 10], b, a).should.eql(b);
	});

});

describe('p2seg', function() {


	it('shold calculate distance to a point for degenerated segment', function() {
		p2seg_2(c, a, a).should.eql(25);
		p2seg(d, a, a).should.eql(4);
	});

	it('shold calculate distance to horizontal', function() {
		p2seg_2(e, a, c).should.eql(1);
		p2seg_2(e, c, a).should.eql(1);
	});

	it('shold calculate distance to vertical', function() {
		p2seg_2(e, a, d).should.eql(1);
		p2seg_2(e, d, a).should.eql(1);
	});

	it('shold calculate distance to slanted', function() {
		p2seg_2(e, a, b).should.be.approximately(0.11764705882352947, 1e-10);
		p2seg_2(e, b, a).should.be.approximately(0.11764705882352947, 1e-10);

		p2seg(e, a, b).should.be.approximately(0.34299717028501775, 1e-10);
		p2seg(e, b, a).should.be.approximately(0.34299717028501775, 1e-10);
	});

});