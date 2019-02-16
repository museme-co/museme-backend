const data = require('./Data');

/** 
 * @param {String} baseNote the string tune
 * @param {Integer} frets the desired number of frets, default = 15
 * 
 * @return {Array} of notes values (A = 0) with a base note.
 */

let guitarString = (baseNote, frets) => {
  let notesArray = new Array;
  frets = frets || 15;
  for (let i = 0; i <= frets; i++){
    notesArray.push((baseNote + i) % 12);
  }
  return notesArray;
}

// Returns the representation of a fretboard as a 2D matrix of notes values from an array of notes values.
// Ex: a standard tunning guitar with 18 frets would take [7, 0, 5, 10, 2, 7] and 18 as arguments.
let fretBoard = (baseNotes, frets) => {
  let board = new Array;
  baseNotes.forEach((string) => {
    board.push(guitarString(string, frets));
  });
  return board;
}

// Returns an array of notes names from an array of notes values (A = 0).
// To see flats, set accidental to 'flat'
let valToNotes = (arr, accidental) => {
  let notes = new Array;
  arr.forEach(value => {
    notes.push(data.NOTES[value][accidental || 'sharp']);
  });
  return notes;
}

module.exports = {
  fretBoard
}