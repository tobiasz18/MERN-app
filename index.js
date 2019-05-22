const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const { port, mongoUrl } = require('./config');


mongoose.connect(mongoUrl, {useNewUrlParser: true});

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/test', (req, res) => {
  const data = ['one', 'two', 'three', 'five', 'six'];
  res.json(data)
  console.log('data sended')
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

app.listen(port, () => console.log('server running on: ', port));

