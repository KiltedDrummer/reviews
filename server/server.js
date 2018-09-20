const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');

const app = express();

// serve up static files inside public
app.use('/homes/:homeId', express.static(path.join(__dirname, '../public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

app.get('/homes/:homeId/reviews/:id', bodyParser.json(), (req, res) => {
  //depending on this id the index.js will do a different query
  console.log(req.params)
  var idNumber = parseInt(req.params.id)
  var min = (idNumber * 10) - 9
  var max = idNumber * 10
  db.getSpecificReviews(min, max, (results) => {
    res.send(results);
  });
});

// app.get('/reviews/', bodyParser.json(), (req, res) => {
//   db.getReviews((results) => {
//     res.send(results);
//   });
// });

app.get('/reviews/queried/:query', bodyParser.json(), (req, res) => {

  
  db.getFilteredReviews(req.params.query, (results) => {
    res.send(results);
  });
});

app.get('/reviews/queried/:query/:id', bodyParser.json(), (req, res) => {
  var idNumber = parseInt(req.params.id)
  var max = idNumber * 10; //min and max are the id ranges... 
  var min = max - 9; //offset
  var query = req.params.query;

  db.getSearchReviews(min, max, query, (results) => {
    res.send(results);
  });


});


//visibility none

app.listen(3001, () => console.log('listening on port 3001...'));
