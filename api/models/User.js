const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  age: Number,
  sex: String,
  height: Number,
  weight: Number,
  activeLevel: Number,
  bmr: Number,
  requiredEnergy: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
