const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

// Process: Generate 100 names
// store as an array
// send the array to fakeData.js which will
// be referenced by index.js
// index.js will have a function for every table that will insert its appropriate data

// don't run this file... unless files need to be created/populated.

// const users = [];
//
// for (let i = 1; i < 101; i += 1) {
//   const user = {
//     id: i,
//     name: faker.name.firstName(),
//     photo: faker.image.avatar(),
//   };
//   users.push(user);
// }
//
// fs.writeFile('./fakeUsers.js', JSON.stringify(users), (err) => {
//   if (err) {
//     return err;
//   }
//   return 'The file was saved!';
// });

const reviews = [];

for (let i = 1; i < 202; i += 1) { // 200 reviews total
  const review = {
    id: i,
    review: faker.lorem.paragraph(),
    created: moment.utc((faker.date.past())).format("'MMMM YYYY"),
    user: faker.name.firstName(),
    photo: faker.image.avatar(),
  };
  reviews.push(review);
}

fs.writeFile('./fakeReviewText.js', JSON.stringify(reviews),
  (err) => {
    if (err) {
      return err;
    }
    return 'The file was saved!';
  });


// create an array with houses  ({id:, city:})

// const houses = [];
//
// for (let i = 100; i < 200; i += 1) {
//   const house = {
//     id: i,
//     city: faker.address.city(),
//   };
//   houses.push(house);
// }
//
// fs.writeFile('./fakeHomes.js', JSON.stringify(houses),
//   (err) => {
//     if (err) {
//       return err;
//     }
//     return 'The file was saved!';
//   });
