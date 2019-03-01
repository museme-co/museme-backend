'use strict';

const mongoose = require('mongoose');

function connect(db_uri) {
  mongoose.Promise = global.Promise;

  const reconnectInterval = 5000;
  
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    reconnectInterval: reconnectInterval,
    connectTimeoutMS: 10000
  };

  mongoose.connect(db_uri, options);

  let connection = mongoose.connection;

  connection.on('error', (err) => {
    console.log('an error occured')
    console.log(err)
  });
  connection.on('disconnected', () => {
    console.log('disconnected')
    // setTimeout(connect, reconnectInterval);
  });

  return connection
};

function close() {
  return mongoose.disconnect();
}

module.exports = {
  connect,
  close
}
