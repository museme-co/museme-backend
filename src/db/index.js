const mongoose = require('mongoose');

function connect(url) {
  mongoose.connect(url, {useNewUrlParser: true}).then(
    () => console.log('Database connection established'),
    err => console.error('Error when connecting to the database'+ err)
  );
}

module.exports = {connect}