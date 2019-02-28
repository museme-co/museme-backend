'use-strict';

const router = require('express').Router();
const noteService = require('../lib/services/noteService')

// Get all notes
router.get('/all', async (req, res, next) => {
  await noteService.listNotes((err, notes) => {
    if (err) {
      throw new Error(err);
    }
    res.status(200).json(notes);
  })
});

// Get single note by name
router.get('/:noteName', async (req, res, next) => {
  await noteService.getNote( req.params.noteName, (err, note) => {
    if (err) {
      throw new Error(err);
    }
    res.status(200).json(note);
  });
});

// Add new note
router.post('/add-note', async (req, res, next) => {
  
  let note = {
    name: req.body.name,
    value: req.body.value,
    possibleAccidentals: req.body.possibleAccidentals
  }

  await noteService.addNote(note, (err, note) => {
    if (err) {
      // TODO add data validation with joi module
      // TODO handle errors (duplicate enrtry)

      throw new Error(err);
    }
    res.status(200).json({ message: 'Note added to database' , data: note});
  });
});

module.exports = router;