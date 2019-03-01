'use-strict';

const router = require('express').Router();
const accidentalService = require('../lib/services/accidentalService')

// Get all accidentals
router.get('/all', async (req, res, next) => {
  await accidentalService.listAccidentals((err, accidentals) => {
    if (err) {
      throw new Error(err);
    }
    res.status(200).json(accidentals);
  })
});

// Get single accidental by name
router.get('/:accidentalName', async (req, res, next) => {
  await accidentalService.getAccidental( req.params.accidentalName, (err, accidental) => {
    if (err) {
      throw new Error(err);
    }
    res.status(200).json(accidental);
  });
});

// Add new accidental
router.post('/add-accidental', async (req, res, next) => {
  
  let accidental = {
    name: req.body.name,
    value: req.body.value,
    charcode: req.body.charcode
  }

  await accidentalService.addAccidental(accidental, (err, accidental) => {
    if (err) {
      // TODO add data validation with joi module
      // TODO handle errors (duplicate enrtry)
      throw new Error(err);
    }
    res.status(200).json({ message: 'Accidental added to database' , data: accidental});
  });
});

module.exports = router;
