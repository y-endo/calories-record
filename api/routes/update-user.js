const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const userData = await User.findOne();

  const { age, sex, height, weight, activeLevel } = req.body;
  const data = {
    age: userData.age,
    sex: userData.sex,
    height: userData.height,
    weight: userData.weight,
    activeLevel: userData.activeLevel
  };

  if (age) data.age = age;
  if (sex) data.sex = sex;
  if (height) data.height = height;
  if (weight) data.weight = weight;
  if (activeLevel) data.activeLevel = activeLevel;

  if (sex === 'male') {
    data.bmr = Math.floor(13.397 * data.weight + 4.799 * data.height - 5.677 * data.age + 88.362);
  } else {
    data.bmr = Math.floor(9.247 * data.weight + 3.098 * data.height - 4.33 * data.age + 447.593);
  }

  data.requiredEnergy = data.bmr * data.activeLevel;

  const updated = await User.updateOne({ _id: userData._id }, { $set: data });
  res.json(updated);
});

module.exports = router;
