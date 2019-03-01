'use strict';

const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
	name: {
		type: String,
    enum: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ],
    unique: true
	},
	value: {
		type: Number,
		min: 0,
    max: 11,
		unique: true
	},
	possibleAccidentals: {
		type: Array,
		required: true
	}
});

module.exports = model('Note', noteSchema);
