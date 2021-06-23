const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

router.get('/', async (_, res) => {
  const meals = await Meal.find();

  res.json(meals);
});

router.get('/:date', async (req, res) => {
  const meal = await Meal.find({ date: req.params.date });

  res.json(meal);
});

module.exports = router;
