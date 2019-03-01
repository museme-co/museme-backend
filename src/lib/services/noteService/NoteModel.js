'use strict';

const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
	name: {
		type: String,
    unique: true
	},
	value: {
		type: Number,
		unique: true
	},
	possibleAccidentals: {
		type: Array
	}
});

module.exports = model('Note', noteSchema);
