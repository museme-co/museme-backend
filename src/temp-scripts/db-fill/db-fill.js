'use strict';

const db = require('../../db/index');

const Note = require('../../db/models/Notes')
const { notesData } = require('./data-notes')

const Accidental = require('../../db/models/Accidentals')
const { accidentalsData } = require('./data-accidentals')

const Scale = require('../../db/models/Scales')
const { scalesData } = require('./data-scales')


function populateCollection(dataArray, collection) {
  dataArray.forEach((element) => {
    var doc = new collection(element);
    doc.save().then( item => {
      console.log('Document successfully added', element);
    })
    .catch(err => {
      console.log("Error when saving to database", err);
    });
  });
}

function main() {
  // Connect to db
  db.connect(process.env.MONGODB_URI);
      
  // Insert documents
  populateCollection(scalesData, Scale);
  populateCollection(accidentalsData, Accidental);
  populateCollection(notesData, Note);

  mongoose.connection.close();
}

main();
