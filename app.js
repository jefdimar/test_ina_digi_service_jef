const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get('/json', (req, res) => {
  res.send({ message: "Hello World!" });
});

module.exports = app;