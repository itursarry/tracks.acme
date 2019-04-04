var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    name    : String,
    surname : String,
    phone   : String,
    email   : String,
  });

module.exports = mongoose.model('Person', personSchema);