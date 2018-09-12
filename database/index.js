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
const getReviews = (callback) => {
  connection.query(
    'SELECT * FROM reviews', (err, results) => {
      if (err) {
        console.log(err);
      }
      callback(results);
    },
  );
};


// const userArray = fakeUsers.userArray;
//
// const fillUsersTable = () => {
//   userArray.forEach((user) => {
//     connection.query(
//       `INSERT INTO users (id, name, photo)
//      SELECT ${user.id}, "${user.name}", "${user.photo}"
//      WHERE NOT EXISTS (SELECT * FROM users WHERE id=${user.id})`, (err) => {
//         if (err) {
//           console.log(err, `INSERT INTO users (id, name, photo)
//         VALUES (${user.id}, "${user.name}", "${user.photo}")`, 'failed');
//         }
//         console.log(`${user.id}`);
//       },
//     );
//   });
// };
//
// fillUsersTable();
//
//
// const homesArray = fakeHomes.homes;
//
// const fillHomesTable = () => {
//   homesArray.forEach((home) => {
//     connection.query(
//       `INSERT INTO houses (id, city)
//        SELECT ${home.id}, "${home.city}"
//        WHERE NOT EXISTS (SELECT * FROM users WHERE id=${home.id})`, (err) => {
//         if (err) {
//           return err;
//         }
//         return 'success';
//       },
//     );
//   });
// };
//
// fillHomesTable();

// const reviewArray = fakeReviewText.reviewTextArray;
//
// const fillReviewsTable = () => {
//   reviewArray.forEach((review) => {
//     connection.query(
//       `INSERT INTO reviews (id, review, created, user, photo)
//        SELECT ${review.id}, "${review.review}", "${review.created}", "${review.user}", "${review.photo}"
//        WHERE NOT EXISTS (SELECT * FROM reviews WHERE id=${review.id})`, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       },
//     );
//   });
// };
//
//
// fillReviewsTable();
module.exports.connection = connection;
module.exports.getReviews = getReviews;
