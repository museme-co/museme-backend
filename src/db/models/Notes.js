'use strict';

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
	name: {
		type: String,
    unique: true
	},
	value: {
		type: Number
	},
	possibleAccidentals: {
		type: Array
	}
});

const Note = module.exports = mongoose.model('Note', noteSchema);