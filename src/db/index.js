const mongoose = require('mongoose');

function connect() {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
    () => console.log('Database connection established'),
    err => console.log('Connection to database has failed')
  );
  mongoose.set('useCreateIndex', true);
  return mongoose.connection
};

module.exports = {
  connect
}
