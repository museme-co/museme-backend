'use-strict';

const router = require('express').Router();
const Scales = require('../../db/models/Scales')

// Get all scales
router.get('/', (req, res) => {
  Scales.find({}, (err, scales) => {
    if (err) return console.log(err);
    res.json( scales );
  });
});

// Get one note by name
// Refactor with id
router.get('/:scaleSlug', (req, res) => {
  Scales.findOne({ name: req.params.scaleSlug }, (err, note) => {
    if (err) return console.log(err);
    res.json( note );
  });
});

module.exports = router;
