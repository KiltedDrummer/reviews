const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const date = new Date();
console.log('Starting Generation');

const reviews = [];
const users = [];
const userCount = 100;

for (let i = 1; i <= 10000000; i += 1) { // 500 reviews total
  const review = {
    id: i,
    review: faker.lorem.paragraph(),
    created: moment.utc((faker.date.past())).format("'MMMM YYYY"),
    userId: faker.random.number({
      min: 1,
      max: userCount,
    }),
  };
  reviews.push(review);
}


for (let i = 1; i <= userCount; i += 1) {
  const user = {
    id: i,
    name: faker.name.firstName(),
    photo: faker.image.avatar(),
  };
  users.push(user);
}

fs.writeFile('./fakeReviews.js', JSON.stringify(reviews),
  (err) => {
    if (err) {
      return err;
    }
    return 'The file was saved!';
  });

fs.writeFile('./fakeUsers.js', JSON.stringify(users),
  (err) => {
    if (err) {
      return err;
    }
    return 'The file was saved!';
  });

const time = new Date() - date;

console.log(`Data Generated! in ${time / 1000} seconds`);
