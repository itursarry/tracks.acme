var express = require('express');
var router = express.Router();
var AcmeAgent = require('../model/AcmeAgent.js');

router.get('/', function (req, res) {   
  AcmeAgent.find({}, function (err, acmeAgents) {
    console.log(acmeAgents);
    res.render('acme-agent', { acmeAgents: acmeAgents });
  });
});

router.post('/', function (req, res) {

  var acmeAgent = new AcmeAgent(
    { name: req.body.name, 
      surname: req.body.surname, 
      phone: req.body.phone, 
      email: req.body.email });

  console.log(acmeAgent);

  acmeAgent.save(function (err) { console.log(err); });
  res.redirect('/acmeagents/')
});

module.exports = router;