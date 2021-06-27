const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  // 登録済のデータがある場合削除
  const userData = await User.findOne();
  if (userData) {
    await User.remove({ _id: userData._id });
  }

  const { age, sex, height, weight, activeLevel } = req.body;

  let bmr;
  if (sex === 'male') {
    bmr = Math.floor(13.397 * weight + 4.799 * height - 5.677 * age + 88.362);
  } else {
    bmr = Math.floor(9.247 * weight + 3.098 * height - 4.33 * age + 447.593);
  }

  const requiredEnergy = bmr * activeLevel;

  const user = new User({
    age,
    sex,
    height,
    weight,
    activeLevel,
    bmr,
    requiredEnergy
  });

  const saved = await user.save();
  res.json(saved);
});

module.exports = router;
