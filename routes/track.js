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
          console.log("Scenes");
          console.log(track.scenes);
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
  var rb = req.body
  Track.findById(id).populate('scenes').
    exec(function (err, track) {

      AcmeAgent.findById({ _id: rb.lastModifyedBy }).
        exec(function (err, acmeAgent) {

          if (track && acmeAgent) {
            var scene = new Scene({
              name: rb.name,
              movieStartAt: rb.movieStartAt,
              movieEndAt: rb.movieEndAt,
              songStartAt: rb.songStartAt,
              songEndAt: rb.songEndAt,
              lastModifyedBy: acmeAgent
            });

            scene.save(function (err) { console.log(err); });
            track.scenes.push(scene);
            track.save(function (err) { console.log(err); });

            res.redirect('/tracks/'+id);

          } else {
            res.render('error', { status: 404, url: req.url, error: "Track with id = " + id + "or Acme agent with id="+rb.lastModifyedBy+" not found." });
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
  var movie = req.body.movie;
  var track = new Track({ movie: movie });

  console.log(track);

  track.save(function (err) {
    console.log(err);
    // if (err) return handleError(err);
  });
  res.redirect('/tracks')
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