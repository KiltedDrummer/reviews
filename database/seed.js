const connection = require('./index.js')

const fakeReviewText = require('./fakeReviewText');


const reviewArray = fakeReviewText.reviewTextArray;

const fillReviewsTable = () => {
  reviewArray.forEach((review) => {
    connection.connection.query(
      `INSERT INTO reviews (id, review, created, user, photo)
       SELECT ${review.id}, "${review.review}", "${review.created}", "${review.user}", "${review.photo}"
       WHERE NOT EXISTS (SELECT * FROM reviews WHERE id=${review.id})`, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('success');
        }
      },
    );
  });
};


fillReviewsTable();
