'use strict';

const { Schema, model } = require('mongoose');

const accidentalSchema = new Schema({
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

module.exports = model('Accidental', accidentalSchema);