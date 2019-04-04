var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var trackSchema = new Schema({
    movie  : String,
    scenes : [{ type: Schema.Types.ObjectId, ref: 'Scene' }]
  });

module.exports = mongoose.model('Track', trackSchema);