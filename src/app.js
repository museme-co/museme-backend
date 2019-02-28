'use strict';

// Load environment vars form .env file
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3000;

// App setup with express
const express = require('express');
const app = express();

// Middleware
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/scales', require('./routes/scales'));
app.use('/api/accidentals', require('./routes/accidentals'));

module.exports = app;