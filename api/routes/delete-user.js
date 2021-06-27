const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (_, res) => {
  const userData = await User.findOne();
  await User.remove({ _id: userData._id });

  res.json({ result: true });
});

module.exports = router;
