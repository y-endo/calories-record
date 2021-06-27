const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (_, res) => {
  const userData = await User.findOne();

  res.json(userData);
});

module.exports = router;
