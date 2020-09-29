const express = require('express');
const router = express.Router();

const Techs = require('../models/techs');

router.post('/', (req, res) => {
  res.send('Submit a techs');
});

module.exports = router;
