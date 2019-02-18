'use-strict';

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get all accidentals
router.get('/', async (req, res) => {
  const accidentals = await loadAccidentalsCollection();
  res.json( await accidentals.find({}).toArray() );
});

// Get one note by name
// Refactor with id
router.get('/:accidentalName', async (req, res) => {
  const accidentals = await loadAccidentalsCollection();
  res.json( await accidentals.findOne({ name: req.params.accidentalName }))
});

async function loadAccidentalsCollection(){
  const client = await mongodb.MongoClient.connect(
    "mongodb://localhost:27017/museme-scales-app-db",
    { useNewUrlParser: true }
  );

   return client.db('museme-scales-app-db').collection('accidentals');
}

module.exports = router;