var express = require('express');
var router = express.Router();
var gifs = require("../gifs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
	title: 'satanic',
	pic: gifs[Math.floor(gifs.length*Math.random())]
  });
});

module.exports = router;
