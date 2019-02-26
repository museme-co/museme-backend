const NoteModel = require('./NoteModel');
const NoteService = require('./NoteService');

const noteService = new NoteService(NoteModel);

module.exports = noteService;