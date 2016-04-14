var express = require('express');
var router = express.Router();

/* Canvases in the public/worlds directory */
var canvases = ['balancedMobile', 'carDrive', 'dominos', 'fallingShapes',
'pulleyJoint','pyramid','ropeJoint'];


/* GET first canvas page. */
router.get('/', function(req, res, next) {
	res.redirect('/box2d/' + canvases[0]);
});

/* GET first canvas page. */
router.get('/box2d/', function(req, res, next) {
	res.redirect('/box2d/' + canvases[0]);
});

/* GET the given canvas page. */
router.get('/box2d/:canvasType', function(req, res, next) {
    if (canvases.indexOf(req.params.canvasType) >= 0) {
		res.render('canvas', { canvas: req.params.canvasType, title: 'ExpressBox2D' });
	} else {
		res.render('canvasNotFound', { canvas: req.params.canvasType });
	}
});

/* GET next canvas page. */
router.get('/box2d/:canvasType/next', function(req, res, next) {
    if (canvases.indexOf(req.params.canvasType) >= 0) {
    	var next = canvases.indexOf(req.params.canvasType)+1;
    	if (next >= canvases.length) {
    		next = 0;
    	}
    	res.redirect('/box2d/' + canvases[next]);
	} else {
		res.render('canvasNotFound', { canvas: req.params.canvasType });
	}
});

/* GET prev canvas page. */
router.get('/box2d/:canvasType/prev', function(req, res, next) {
    if (canvases.indexOf(req.params.canvasType) >= 0) {
    	var prev = canvases.indexOf(req.params.canvasType) - 1;
    	if (prev < 0) {
    		prev = (canvases.length)-1;
    	}
    	res.redirect('/box2d/' + canvases[prev]);
	} else {
		res.render('canvasNotFound', { canvas: req.params.canvasType });
	}
});

module.exports = router;
