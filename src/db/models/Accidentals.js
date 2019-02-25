'use strict';

const mongoose = require('mongoose');

const accidentalSchema = new mongoose.Schema({
  name: {
		type: String,
    unique: true
	},
	charcode: {
    type: Number
	},
  value: {
    type: Number
  }
});

const Accidental = module.exports = mongoose.model('Accidental', accidentalSchema);