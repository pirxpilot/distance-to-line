module.exports = {
	p2seg: p2seg,
	p2p: p2p,
	p2seg_2: p2seg_2,
	p2p_2: p2p_2,
	closest: closest
};

// _2 functions returned squared values - useful for comparing

function sqr(x) {
	return x * x;
}

function p2p_2(p, q) {
	return sqr(p[0] - q[0]) + sqr(p[1] - q(1));
}

function p2p(p, q) {
	return Math.sqrt(p2p_2(p, q));
}

function p2seg_2(p, u, v) {
	return p2p_2(p, closest(p, u, v));
}

function p2seg(p, u, v) {
	return Math.sqrt(p2seg_2(p, u, v));
}

function closest(p, u, v) {
	var len_2 = p2p_2(u, v);
	if (len_2 === 0) {
		return u; // u === v so it does not matter which is returned
	}
	var t = (
		(p[0] - u[0]) * (v[0] - u[0]) +
		(p[1] - u[1]) * (v[1] - u[1])
	) / len_2;
	// first endpoint is the closest
	if (t < 0) {
		return u;
	}
	// last endpoint is the closest
	if (t > 1) {
		return v;
	}
	// calculate the closest point
	return [
		u[0] + t * (v[0] - u[0]),
		u[1] + t * (v[1] - u[1])
	];
}
