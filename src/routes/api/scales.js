'use-strict';

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get all scales
router.get('/', async (req, res) => {
  const scales = await loadScalesCollection();
  res.json( await scales.find({}).toArray() );
});

// Get one note by name
// Refactor with id
router.get('/:scaleSlug', async (req, res) => {
  const scales = await loadScalesCollection();
  res.json( await scales.findOne({ name: req.params.scaleSlug }))
});

async function loadScalesCollection(){
  const client = await mongodb.MongoClient.connect(
    "mongodb://localhost:27017/museme-scales-app-db",
    { useNewUrlParser: true }
  );

   return client.db('museme-scales-app-db').collection('scales');
}

module.exports = router;