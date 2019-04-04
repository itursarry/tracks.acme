var express = require('express');
var router = express.Router();
var Track = require('../model/Track.js');
var AcmeAgent = require('../model/AcmeAgent.js');
var Scene = require('../model/Scene.js');


router.get('/:id', function (req, res) {
  var id = req.params.id;
  Track.findById(id).populate('scenes').exec(
    function (err, track) {
      AcmeAgent.find({}).exec(
        function (err, acmeAgents) {
          if (!track) {
            console.log("Track with oid = " + id + " not found.");
            res.render('error', { status: 404, url: req.url, error: "Track with id = " + id + " not found." });
          } else {
            res.render('track-detail', { track: track, acmeAgents: acmeAgents });
          }
        })
    });
});

router.post('/:id/scenes', function (req, res) {
  var id = req.params.id;

  Track.findById(id).populate('scenes').
    exec(function (err, track) {

      AcmeAgent.findById({ _id: req.body.lastModifyedBy }).
        exec(function (err, acmeAgent) {

          if (track && acmeAgent) {
            var scene = new Scene({
              name: req.body.name,
              movieStartAt: req.body.movieStartAt,
              movieEndAt: req.body.movieEndAt,
              songStartAt: req.body.songStartAt,
              songEndAt: req.body.songEndAt,
              lastModifyedBy: acmeAgent
            });

            scene.save(function (err) { console.log(err); });
            track.scenes.push(scene);
            track.save(function (err) { console.log(err); });

            res.redirect(301, '/tracks/'+id);

          } else {
            res.render('error', { status: 404, url: req.url, error: "Track with id = " + id + "or Acme agent with id="+req.body.lastModifyedBy+" not found." });
          }
        });
    });
});

router.get('/', function (req, res) {
  Track.find({}, function (err, tracks) {
    console.log(tracks);
    res.render('track', { tracks: tracks });
  });
});

router.post('/', function (req, res) {
  var track = new Track({ movie: req.body.movie });
  track.save(function (err) { console.log(err); });
  res.redirect('/tracks/')
});


router.get('/:trackId/scenes/:id', function (req, res) {
  var id = req.params.id;
  var trackId = req.params.trackId;

  Track.findById(trackId).populate('scenes').exec(
    function (err, track) {
      if (!track) {
        console.log("Track with id = " + trackId + " not found.");
        res.render('error', { status: 404, url: req.url, error: "Track with id = " + trackId + " not found." });
      } else {
        var scene = track.scenes.find(scene => scene._id == id);
        if (!scene) {
          console.log("Scene with id = " + id + " not found.");
          res.render('error', { status: 404, url: req.url, error: "Scene with id = " + id + " not found." });
        } else {
          console.log(track);
          console.log(scene);
          res.render('scene', { track: track, scene: scene });
        }
      }
    });
});

module.exports = router;