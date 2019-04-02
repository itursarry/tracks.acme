var express = require('express');
var router = express.Router();
var Track = require('../model/Track.js');
var Scene = require('../model/Scene.js');
var AcmeAgent = require('../model/AcmeAgent.js');

router.get('/:oid', function(req, res) {
  var oid = req.params.oid;
  var trackAcmeApp = req.app.get('trackAcmeApp');
  var tracks = trackAcmeApp.tracks;
  var tracks = trackAcmeApp.tracks.filter( iter => iter.oid == oid);

  if(tracks.length != 1){
    console.log("Track with oid = "+oid+" not found.");
    res.render('error', { status: 404, url: req.url, error: "Track with oid = "+oid+" not found." });
  }else{
    var track = tracks[0];
    res.render('track-detail', { track: track});
  }
});

router.get('/', function(req, res) {
  var trackAcmeApp = req.app.get('trackAcmeApp');
  var tracks = trackAcmeApp.tracks; 
  res.render('track', { tracks: tracks });
});

router.post('/', function(req, res) {
  var movie = req.body.movie;
  var track = new Track(movie);
  var acmeAgent = new AcmeAgent('Marty', 'McFly', '44532443', 'martymcfly@gmail.com');
  var scene = new Scene('First time travel', '00:20:00', '00:25:00', '00:01:02', '00:06:02', acmeAgent)
  track.scenes.push(scene);
  var trackAcmeApp = req.app.get('trackAcmeApp');
  trackAcmeApp.tracks.push(track);
  var tracks = trackAcmeApp.tracks;
  req.app.save();
  res.render('track', { tracks: tracks });
});


module.exports = router;