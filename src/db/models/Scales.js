const mongoose = require('mongoose');

const scalesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
	},
	type: {
    type: String
	},
  slug: {
    type: String
  },
	intervals: {
    type: Array
	}
});

const Scale = mongoose.model('Scale', scalesSchema);

module.exports = Scale;