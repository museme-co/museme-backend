const mongoose = require('mongoose');

const Note = require('../../db/models/Notes')
const { notesData } = require('./data-notes')

const Accidental = require('../../db/models/Accidentals')
const { accidentalsData } = require('./data-accidentals')

const Scale = require('../../db/models/Scales')
const { scalesData } = require('./data-scales')


async function populateCollection(dataArray, collection) {
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

async function main() {
  // Connect to db
  await mongoose.connect(
    process.env.DB_HOST,
    {useNewUrlParser: true}).then(
      () => console.log('Database connection established'),
      err => console.error('Error when connecting to the database'+ err)
      );
      
  // Insert documents
  await populateCollection(scalesData, Scale);
  await populateCollection(accidentalsData, Accidental);
  await populateCollection(notesData, Note);

}

main();
// mongoose.connection.close();
