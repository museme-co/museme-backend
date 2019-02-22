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

const Scale = module.exports = mongoose.model('Scale', scalesSchema);