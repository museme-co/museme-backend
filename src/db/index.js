const mongoose = require('mongoose');

function connect() {
  mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true }).then(
    () => console.log('Database connection established'),
    err => console.log('Connection to database has failed')
  );
  return mongoose.connection
};

function reconnect() {
  setTimeout(() => connect(), 2000)
};

module.exports = {
  connect,
  reconnect
}