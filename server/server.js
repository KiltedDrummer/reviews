const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
// serve up static files inside public

app.get('/reviews', (req, res) => {
  console.log('TYPEOF', typeof req);
  db.getReviews((results) => {
    res.send(results);
  });
});

// TODO: function that will take in an id, and a callback
app.listen(3001, () => console.log('listening on port 3001...'));
