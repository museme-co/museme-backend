'use strict';

const { Schema, model } = require('mongoose');

const accidentalSchema = new Schema({
  name: {
		type: String,
    required: true,
    enum: ['flat', 'natural', 'sharp'],
    unique: true
	},
	charcode: {
    type: Number,
    required: true,
    unique: true
	},
  value: {
    type: Number,
    min: -1,
    max: 1,
    required: true,
    unique: true
  }
});

module.exports = model('Accidental', accidentalSchema);