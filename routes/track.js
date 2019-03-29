var express = require('express');
var router = express.Router();
var Track = require('../model/Track.js');

router.get('/tracks', function(req, res) {
  var track = new Track("Back to the future");
  trackAcmeApp = app.get('trackAcmeApp');

  res.render('track', { tracks: tracks });
});

module.exports = router;
