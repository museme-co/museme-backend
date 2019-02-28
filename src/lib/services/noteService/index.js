'use strict';

const NoteModel = require('./NoteModel');

class NoteService {
  constructor(NoteModel) {
    this.NoteModel = NoteModel;
    this.listNotes = this.listNotes.bind(this);
    this.getNote = this.getNote.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  listNotes(callback) {
    return this.NoteModel.find({}, callback);
  }
  getNote(name, callback) {
    return this.NoteModel.findOne({ name }, callback);
  }
  addNote(note, callback) {
    return this.NoteModel.create(note, callback);
  }
};

module.exports = new NoteService(NoteModel);
