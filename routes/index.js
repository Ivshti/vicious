var express = require('express');
var router = express.Router();
var gifs = require("../gifs");

/* GET home page. */
var i = 0;

router.get('/', function(req, res, next) {
  i++;
  if (i > gifs.length-1) i=0; 
  res.render('index', { 
	title: 'satanic',
	pic: gifs[i]
  });
});

module.exports = router;
