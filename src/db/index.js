'use strict';

const mongoose = require('mongoose');

function connect(db_url) {
  mongoose.Promise = global.Promise;
  mongoose.connect(db_url, { useNewUrlParser: true, useCreateIndex: true }).then(
    () => console.log('Database connection established'),
    err => console.log('Connection to database has failed')
  );
  return mongoose.connection
};

module.exports = {
  connect
}
