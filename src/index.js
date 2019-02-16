'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json())
app.use(cors()) 

const port = process.env.PORT || 3000;

const notes = require('./routes/api/notes')
app.use('/api/notes', notes)

app.listen(port, () => {
  console.log('Server started');
  console.log(`Listenning on port ${port}`);
});
