var express = require('express');
var router = express.Router();
var AcmeAgent = require('../model/AcmeAgent.js');

router.get('/', function (req, res) {   
  AcmeAgent.find({}, function (err, acmeAgents) {
    res.render('acme-agent', { acmeAgents: acmeAgents });
  });
});

router.post('/', function (req, res) {

  var acmeAgent = new AcmeAgent(
    { name: req.body.name, 
      surname: req.body.surname, 
      phone: req.body.phone, 
      email: req.body.email });
  acmeAgent.save(function (err) { console.log(err); });
  res.redirect(301, '/acmeagents/')
});

module.exports = router;