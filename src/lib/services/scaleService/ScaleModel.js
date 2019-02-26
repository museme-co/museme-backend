'use strict';

const { Schema, model } = require('mongoose');

const scaleSchema = new Schema({
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

module.exports = model('Scale', scaleSchema);