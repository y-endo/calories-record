const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

router.post('/', async (req, res) => {
  const { date, time, calorie, protein, carbs, fat, food } = req.body;

  const meal = new Meal({
    date,
    time,
    calorie,
    protein,
    carbs,
    fat,
    food
  });

  const saved = await meal.save();
  res.json(saved);
});

module.exports = router;
