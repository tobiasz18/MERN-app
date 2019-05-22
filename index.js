const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//endpoints
const routes =  require('./routes'); 

const { port, mongoUrl } = require('./config');

// create mongo connection with url from https://mlab.com/
mongoose.connect(mongoUrl, {useNewUrlParser: true});

const app = express();

//serve the static files from CRA(client folder)
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(bodyParser.json())

//  All endpoints with express routers middleware
app.use('/api', routes);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

app.listen(port, () => console.log('Server running on: ', port));

