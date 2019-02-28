'use strict';

const ScaleModel = require('./ScaleModel');

class ScaleService {
  constructor(ScaleModel) {
    this.ScaleModel = ScaleModel;
    this.listScales = this.listScales.bind(this);
    this.getScale = this.getScale.bind(this);
    this.addScale = this.addScale.bind(this);
  }
  listScales(callback) {
    return this.ScaleModel.find({}, callback);
  }
  getScale(name, callback) {
    return this.ScaleModel.findOne({ name }, callback);
  }
  addScale(scale, callback) {
    return this.ScaleModel.create(scale, callback);
  }
};

module.exports = new ScaleService(ScaleModel);
