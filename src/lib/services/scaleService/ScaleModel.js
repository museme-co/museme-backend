'use strict';

const { Schema, model } = require('mongoose');

const scaleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
	},
	type: {
    type: String,
    required: true
	},
  slug: {
    type: String,
    required: true,
    unique: true
  },
	intervals: {
    type: Array,
    required: true,
    unique: true
	}
});

module.exports = model('Scale', scaleSchema);