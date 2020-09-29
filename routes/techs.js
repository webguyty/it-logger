const express = require('express');
const router = express.Router();

const Techs = require('../models/Techs');

// @route		GET api/logs
// @desc		Get all logs
// @access 	Public
router.get('/', async (req, res) => {
  try {
    const techs = await Techs.find();
    res.json(techs);
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
    const { firstName, lastName } = req.body;

    const newTech = new Techs({
      firstName,
      lastName,
    });

    const tech = await newTech.save();

    res.json(tech);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
