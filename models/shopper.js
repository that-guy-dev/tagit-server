var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShopperSchema = new Schema(
  {
    email: {type: String, required: true, unique: true, max: 100},
    password: {type: String},
    status:{type: String},
    first_name: {type: String, max: 100},
    last_name: {type: String, max: 100},    
    city: {type: String},
    price: {type: Number},
    about: {type: String},
    instagram: {type: String},    
    styles: {type: []},
    assists_with: {type: []},
    calendar: {type: []},
  }
);

module.exports = mongoose.model('Shopper', ShopperSchema);