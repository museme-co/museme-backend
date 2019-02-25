'use strict';

// Load environment vars form .env file
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3000;

// Server setup with express
const express = require('express');
const server = express();

// Loading config
const config = require('./config/index');

// Middleware
const bodyParser = require('body-parser');
const cors = require('cors');
server.use(cors());
server.use(bodyParser.json());

// API Routes
server.use('/api/notes', require('./routes/api/notes'));
server.use('/api/scales', require('./routes/api/scales'));
server.use('/api/accidentals', require('./routes/api/accidentals'));

// Connect to database
var db = require('./db/index')
let connection = db.connect(config.db)

connection.on('error', console.warn)
connection.on('disconnected', () => {
  console.log('Database disconnected. Reconnecting in 10 sec');
  setTimeout(db.connect, 10000);
});
connection.once('open', listen);

// Server listenning
function listen () {
  // if (app.get('env') === 'test') return;
  server.listen(port, () => {
    console.log('Server started');
    console.log(`Listenning on port ${port}`);
  });
}

module.exports = server;