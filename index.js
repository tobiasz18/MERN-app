const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { port, mongoUrl } = require('./config');
const routes =  require('./routes');

mongoose.connect(mongoUrl, {useNewUrlParser: true});

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(bodyParser.json())
app.use('/api', routes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

app.listen(port, () => console.log('Server running on: ', port));

