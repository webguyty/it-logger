const express = require('express');
const router = express.Router();

const Logs = require('../models/Logs');

// @route		GET api/logs
// @desc		Get all logs
// @access 	Public
router.get('/', async (req, res) => {
  try {
    const logs = await Logs.find();
    res.json(logs);
  } catch (error) {
    console.error(error.msg);
    res.status(500).send('Server Error');
  }
});

// @route		POST api/logs
// @desc		Create a log item
// @access	Public
router.post('/', async (req, res) => {
  try {
    const { message, attention, tech } = req.body;

    const newLog = new Logs({
      message,
      attention,
      tech,
    });

    const log = await newLog.save();

    res.json(log);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
