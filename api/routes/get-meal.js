const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

router.get('/', async (_, res) => {
  const mealData = await Meal.find();

  res.json(mealData);
});

router.get('/:date', async (req, res) => {
  const mealData = await Meal.find({ date: req.params.date });

  res.json(mealData);
});

module.exports = router;
