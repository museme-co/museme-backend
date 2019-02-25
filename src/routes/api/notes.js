'use-strict';

const router = require('express').Router();
const Notes = require('../../db/models/Notes')

// Get all notes
router.get('/', (req, res) => {
  Notes.find({}, (err, notes) => {
    if (err) return console.log(err);
    res.status(200).json( notes );
  });
});

// Get one note by name
router.get('/:noteName', (req, res) => {
  Notes.findOne({ name: req.params.noteName }, (err, note) => {
    if (err) return console.log(err);
    res.status(200).json( note );
  });
});

module.exports = router;