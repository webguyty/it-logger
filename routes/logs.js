const express = require('express');
const router = express.Router();

const Logs = require('../models/logs');

// @route		POST api/dailyGoals
// @desc		Creates a daily goal list
// @access	Public
router.post('/', (req, res) => {
  res.send('Submit a log');
});

module.exports = router;
