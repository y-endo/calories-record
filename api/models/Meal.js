const mongoose = require('mongoose');

const MealSchema = mongoose.Schema({
  date: String,
  time: String,
  calorie: String,
  protein: String,
  carbs: String,
  fat: String,
  food: String
});

const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
