const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const listings = [];
for (let i = 500001; i <= 100000; i += 1) { // 1000 listings
  const numberOfReviews = faker.random.number({
    min: 1,
    max: 20,
  });

  for (let j = 1; j <= numberOfReviews; j += 1) {
    const review = {
      id: j,
      listingId: i,
      review: faker.lorem.paragraph(),
      created: moment.utc((faker.date.past())).format("'MMMM YYYY"),
      userId: faker.random.number({
        min: 1,
        max: 100,
      }),
    };

    listings.push(review);
  }
}

fs.writeFile('./DataGen/GeneratedData/501_1000_Reviews.json', JSON.stringify(listings),
  (err) => {
    if (err) {
      return err;
    }
    console.log('501K - 1M were saved!');
  });
