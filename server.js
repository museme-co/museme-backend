'use strict';

const app = require('./src/app');

// Loading config
const config = require('./src/config/index');

// Connect to database
var db = require('./src/db/index')
let connection = db.connect(config.db)

connection.on('error', console.warn)
connection.on('disconnected', () => {
  console.log('Database disconnected. Reconnecting in 10 sec');
  setTimeout(db.connect, 10000);
});

// Server listenning once connected to Database
connection.once('open', () => {
  app.listen( config.port, () => console.log(`Server started on port ${config.port}`) );
});
