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

const Accidental = mongoose.model('Accidental', accidentalSchema);

module.exports = Accidental;