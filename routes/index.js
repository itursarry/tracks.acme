var express = require('express');
var router = express.Router();
var Track = require('../model/Track.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ACME Tracks' });
});

module.exports = router;
