const mongoose = require('mongoose');

function connect() {
  mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true }).then(
    () => console.log('Database connection established'),
    err => console.log('Connection to database has failed')
  );
  return mongoose.connection
};

module.exports = {
  connect
}
