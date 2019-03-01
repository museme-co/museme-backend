'use strict';

const { Schema, model } = require('mongoose');

const accidentalSchema = new Schema({
  name: {
		type: String,
    required: true,
    unique: true
	},
	charcode: {
    type: Number,
    required: true,
    unique: true
	},
  value: {
    type: Number,
    required: true,
    unique: true
  }
});

module.exports = model('Accidental', accidentalSchema);