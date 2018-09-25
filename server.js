require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./database/index.js');
const bodyParser = require('body-parser');

const app = express();

app.use('/homes/:homeId', express.static(path.join(__dirname, './public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/homes/:homeId/reviews/:id', bodyParser.json(), (req, res) => {
  var idNumber = parseInt(req.params.id)
  var min = (idNumber * 10) - 9
  var max = idNumber * 10
  db.getSpecificReviews(min, max, (results) => {
    res.send(results);
  });
});


app.get('/reviews/queried/:query', bodyParser.json(), (req, res) => {
  db.getFilteredReviews(req.params.query, (results) => {
    res.status(200).send(results);
  });
});

app.post('/homes/:homeId/reviews', bodyParser.json(), (req, res) => {
  console.log(req.data);
  db.addReview(req.data, (results) => {
    console.log('Posted', results);
    res.status(201).send();
  });
});

app.delete('/homes/:homeId/reviews/:reviewId', bodyParser.json(), (req, res) => {
  db.deleteReview(req.params.reviewId, (result) => {
    console.log('DELETED', result);
    res.status(204).send();
  });
});

app.put('/homes/:homeId/reviews/:reviewId', bodyParser.json(), (req, res) => {
  console.log('PUT', req.data);
  db.updateReview(req.params.reviewId, req.data, (result) => {
    console.log('UPDATED', result);
    res.status(204).send();
  });
});


app.get('/reviews/queried/:query/:id', bodyParser.json(), (req, res) => {
  var idNumber = parseInt(req.params.id);
  var max = idNumber * 10; 
  var min = max - 9;
  var query = req.params.query;

  db.getSearchReviews(min, max, query, (results) => {
    res.send(results);
  });
});


app.listen(process.env.PORT, () => console.log('listening on port 3001...'));
