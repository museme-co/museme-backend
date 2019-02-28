'use strict';

const AccidentalModel = require('./AccidentalModel');

class AccidentalService {
  constructor(AccidentalModel) {
    this.AccidentalModel = AccidentalModel;
    this.listAccidentals = this.listAccidentals.bind(this);
    this.getAccidental = this.getAccidental.bind(this);
    this.addAccidental = this.addAccidental.bind(this);
  }
  listAccidentals(callback) {
    return this.AccidentalModel.find({}, callback);
  }
  getAccidental(name, callback) {
    return this.AccidentalModel.findOne({ name }, callback);
  }
  addAccidental(accidental, callback) {
    return this.AccidentalModel.create(accidental, callback);
  }
};

module.exports = new AccidentalService(AccidentalModel);
