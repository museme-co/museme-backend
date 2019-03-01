'use strict';

// Loading app
const app = require('./src/app');

// Loading config
const config = require('./src/config/index');

// Connect to database
var db = require('./src/db/index')
let connection = db.connect(config.db)

// Server listenning once connected to Database
connection.once('open', () => {
  console.log('Database connection established');
  app.listen( config.port, () => console.log(`Server started on port ${config.port}`) );
});
