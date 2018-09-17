const mysql = require('mysql');
// const fakeUsers = require('./fakeUsers');
// const fakeHomes = require('./fakeHomes.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'reviews',
});

connection.connect();

// function will be used be the server to grab all the reviews initially
// const getReviews = (callback) => {
//   connection.query(
//     'SELECT * FROM reviews', (err, results) => {
//       if (err) {
//         console.log(err);
//       }
//       callback(results);
//     },
//   );
// };

const getSpecificReviews = (min, max, callback) => { //search mode OFF
  connection.query(
    `SELECT * FROM reviews WHERE id BETWEEN ${min} AND ${max}`, (err, results) => {
      if (err) {
        console.log(err);
      }
      callback(results);
    },
  );
};

const getFilteredReviews = (query , callback) => { //GETS THE PAGE COUNT 
  connection.query(
    `SELECT * FROM reviews WHERE review LIKE "%${query}%" 
     AND id BETWEEN 1 AND 201`, (err, results) => {
      if(err) {
        console.log(err);
      }
      callback(results);
    },
  );
};

const getSearchReviews = (min, max, query, callback) => { //search mode ON
  connection.query(
    `SELECT * FROM reviews WHERE review LIKE "%${query}%" 
      LIMIT 10 OFFSET ${min}`, (err, results) => {
        if(err) {
          console.log(err);
        }
        callback(results);
      },
  );
};

module.exports.connection = connection;
// module.exports.getReviews = getReviews;
module.exports.getSpecificReviews = getSpecificReviews;
module.exports.getFilteredReviews = getFilteredReviews;
module.exports.getSearchReviews = getSearchReviews;