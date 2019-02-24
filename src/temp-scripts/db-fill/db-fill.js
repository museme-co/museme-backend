const mongoose = require('mongoose');

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
  mongoose.connect(
    process.env.DB_HOST,
    {useNewUrlParser: true}).then(
      () => console.log('Database connection established'),
      err => console.error('Error when connecting to the database'+ err)
      );
      
  // Insert documents
  populateCollection(scalesData, Scale);
  populateCollection(accidentalsData, Accidental);
  populateCollection(notesData, Note);

  mongoose.connection.close();
}

main();
