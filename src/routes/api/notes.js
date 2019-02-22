'use-strict';

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get all notes
router.get('/', async (req, res) => {
  const notes = await loadNotesCollection();
  res.json( await notes.find({}).toArray() );
});

// Get one note by name
router.get('/:noteName', async (req, res) => {
  const notes = await loadNotesCollection();
  res.json( await notes.findOne({ name: req.params.noteName }))
});

async function loadNotesCollection(){
  const client = await mongodb.MongoClient.connect(
    process.env.DB_HOST,
    { useNewUrlParser: true }
  );

   return client.db(process.env.DB_NAME).collection('notes');
}

module.exports = router;