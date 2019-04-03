var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var songSchema = Schema({
    name  : String,
    autor : String,
  });

module.exports =  mongoose.model('Song', songSchema);
