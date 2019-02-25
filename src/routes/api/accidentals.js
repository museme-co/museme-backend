'use-strict';

const router = require('express').Router();
const Accidentals = require('../../db/models/Accidentals')

// Get all accidentals
router.get('/', (req, res) => {
  Accidentals.find({}, (err, accidentals) => {
    if (err) return console.log(err);
    res.json( accidentals );
  });
});

// Get one accidental by name
// Refactor with id
router.get('/:accidentalName', (req, res) => {
  Accidentals.findOne({ name: req.params.accidentalName }, (err, note) => {
    if (err) return console.log(err);
    res.status(200).json( note );
  });
});

module.exports = router;