'use strict';

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require('./db/index')

db.connect(process.env.DB_HOST);


// Middleware
app.use(bodyParser.json())
app.use(cors()) 

const port = process.env.PORT || 3000;

const notes = require('./routes/api/notes')
app.use('/api/notes', notes)

const scales = require('./routes/api/scales')
app.use('/api/scales', scales)  

const accidentals = require('./routes/api/accidentals')
app.use('/api/accidentals', accidentals)  

app.listen(port, () => {
  console.log('Server started');
  console.log(`Listenning on port ${port}`);
});
