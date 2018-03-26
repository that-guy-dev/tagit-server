var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},    
    email: {type: String, required: true, max: 100},
    looking_for: {type: []},
    styles: {type: []},
    budget: {type: Number},
    hours: {type: Number},
    meeting_point: {type: String},
    occupation: {type: String},
  }
);

module.exports = mongoose.model('Client', ClientSchema);