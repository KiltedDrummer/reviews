const mysql = require('mysql');
// const fakeUsers = require('./fakeUsers');
// const fakeHomes = require('./fakeHomes.js');

const connection = mysql.createConnection({
  host: 'reviewsdb.c3dnjfcdx109.us-west-1.rds.amazonaws.com',
  user: 'root',
  password: 'Potatoes1',
  port: '3306',
  database: 'reviews'
});

connection.connect();

const getSpecificReviews = (min, max, callback) => { 
  connection.query(
    `SELECT * FROM reviews WHERE id BETWEEN ${min} AND ${max}`, (err, results) => {
      if (err) {
        callback(err);
      }
      callback(results);
    }
  )
};


const getFilteredReviews = (query , callback) => { 
  connection.query(
    `SELECT * FROM reviews WHERE review LIKE "%${query}%" 
     AND id BETWEEN 1 AND 201`, (err, results) => {
      if(err) {
        callback(err);
      }
      callback(results);
    }
  )
};

getFilteredReviews("lorem", (item)=>{console.log(item)})

const getSearchReviews = (min, max, query, callback) => {
  connection.query(
    `SELECT * FROM reviews WHERE review LIKE "%${query}%" 
      LIMIT 10 OFFSET ${min}`, (err, results) => {
        if(err) {
          callback(err);
        }
        callback(results);
      }
  )
};

module.exports.connection = connection;
module.exports.getSpecificReviews = getSpecificReviews;
module.exports.getFilteredReviews = getFilteredReviews;
module.exports.getSearchReviews = getSearchReviews;