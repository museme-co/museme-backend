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

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;