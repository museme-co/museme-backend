'use-strict';

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get notes
router.get('/', (req, res) => {
  // res.send('hello world');
  res.json({foo:'bar'});
});

module.exports = router;