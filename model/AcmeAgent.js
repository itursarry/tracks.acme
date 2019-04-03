var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var acmeAgentSchema = new Schema({
    name    : String,
    surname : String,
    phone   : String,
    email   : String,
  });

module.exports = mongoose.model('AcmeAgent', acmeAgentSchema);