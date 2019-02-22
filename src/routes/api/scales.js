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
    process.env.DB_HOST,
    { useNewUrlParser: true }
  );

   return client.db(process.env.DB_NAME).collection('scales');
}

module.exports = router;