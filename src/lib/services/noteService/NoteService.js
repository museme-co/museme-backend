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
  getNote(name) {
    return this.NoteModel.findOne({ name });
  }
  addNote() {
    console.log('addNote')
  }
};

module.exports = NoteService;
