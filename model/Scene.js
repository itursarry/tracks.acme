var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var sceneSchema =  new Schema({
    name           : String,
    movieStartAt   : String,
    movieEndAt     : String,
    songStartAt    : String,
    songEndAt      : String,
    lastModifyedBy : [{ type: Schema.Types.ObjectId, ref: 'Person' }]
  });

  sceneSchema.methods.state = function() {
    return "Approved";
  };
  

module.exports = mongoose.model('Scene', sceneSchema);
