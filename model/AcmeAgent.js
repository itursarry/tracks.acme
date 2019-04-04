var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var acmeAgentSchema = new Schema({
    name    : String,
    surname : String,
    phone   : String,
    email   : String,
  });

module.exports = mongoose.model('AcmeAgent', acmeAgentSchema);