const faker = require('faker');
const fs = require('fs');
const moment = require('moment');
const Json2csvParser = require('json2csv').Parser;

// const fields = ['id', 'home_id', 'review_id', 'review', 'created', 'user_id'];
// const newLine = '\r\n';

// console.log('STARTED');
// const date = new Date();

// const file = fs.createWriteStream('./DataGen/GeneratedData/1_csv_TEST.csv');
// let fileCount = 1;

console.time('TIMER');

// for (let i = 1; i < 100001; i += 1) { // 100000 listings
//   const numberOfReviews = faker.random.number({ min: 1, max: 20 });

//   const reviews = [];
//   for (let j = 1; j <= numberOfReviews; j += 1) {
//     const home = {
//       id: fileCount,
//       home_id: i,
//       review_id: j,
//       review: faker.lorem.sentence(),
//       created: moment.utc((faker.date.past())).format('MMMM YYYY'),
//       user_id: faker.random.number({ min: 1, max: 100 }),
//     };
//     reviews.push(home);
//     fileCount += 1;
//   }
//   if (i === 1) {
//     const json2csvParser = new Json2csvParser({ fields });
//     const csv = json2csvParser.parse(reviews);
//     file.write(csv);
//   } else {
//     const json2csvParser = new Json2csvParser({ fields, header: false });
//     const csv = json2csvParser.parse(reviews) + newLine;
//     file.write(csv);
//   }
// }

// file.end();
// console.timeEnd('TIMER');

// **************************************************

let nameString = 'id,home_id,review_id,review,created,user_id\n';
let count = 1;
const addOneMillion = (i) => {
  console.log('made it', i);
  console.time('MILLION');
  if (i > 9) {
    return;
  }
  nameString = '';
  for (let j = 1; j <= i * 100000; j += 1) {
    const numberOfReviews = faker.random.number({ min: 1, max: 20 });

    for (let k = 1; k <= numberOfReviews; k += 1) {
      nameString += `${count},${j},${k},${faker.lorem.sentence()},${moment.utc((faker.date.past())).format('MMMM YYYY')},${faker.random.number({ min: 1, max: 100 })}${'\n'}`;
      count += 1;
    }
  }

  fs.appendFile('./DataGen/GeneratedData/1_csv_TEST.csv', nameString, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved! Iteration: ', i);
    i += 1;
    console.timeEnd('MILLION');
    addOneMillion(i);
    return undefined;
  });
};

fs.writeFile('./DataGen/GeneratedData/1_csv_TEST.csv', nameString, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('The header was written!');
  addOneMillion(0);
  return undefined;
});

console.timeEnd('TIMER');
