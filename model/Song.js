var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var songSchema = Schema({
    name  : String,
    autor : String,
  });

module.exports =  mongoose.model('Song', songSchema);
