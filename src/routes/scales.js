'use-strict';

const router = require('express').Router();
const scaleService = require('../lib/services/scaleService')

// Get all scales
router.get('/all', async (req, res, next) => {
  await scaleService.listScales((err, scales) => {
    if (err) {
      throw new Error(err);
    }
    res.status(200).json(scales);
  })
});

// Get single scale by slug
router.get('/:scaleSlug', async (req, res, next) => {
  await scaleService.getScale( req.params.scaleSlug, (err, scale) => {
    if (err) {
      throw new Error(err);
    }
    res.status(200).json(scale);
  });
});

// Add new scale
router.post('/add-scale', async (req, res, next) => {
  
  let scale = {
    name: req.body.name,
    intervals: req.body.intervals,
    type: req.body.type,
    slug: req.body.slug
  }

  await scaleService.addScale(scale, (err, scale) => {
    if (err) {
      // TODO add data validation with joi module
      // TODO handle errors (duplicate enrtry)
      throw new Error(err);
    }
    res.status(200).json({ message: 'Scale added to database' , data: scale});
  });
});

module.exports = router;