const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Discovery service is up!',
  });
})

module.exports = app;