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
    "mongodb://localhost:27017/museme-scales-app-db",
    { useNewUrlParser: true }
  );

   return client.db('museme-scales-app-db').collection('notes');
}

module.exports = router;