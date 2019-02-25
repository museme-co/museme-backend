'use strict';

const mongoose = require('mongoose');

function connect(db_url) {
  mongoose.connect(db_url, { useNewUrlParser: true }).then(
    () => console.log('Database connection established'),
    err => console.log('Connection to database has failed')
  );
  mongoose.set('useCreateIndex', true);
  return mongoose.connection
};

module.exports = {
  connect
}
