
const faker = require('faker');
const fs = require('fs');
const moment = require('moment');
// const json2csv = require('json2csv');
const Json2csvParser = require('json2csv').Parser;

let fields = ['homeId', 'reviews.id', 'reviews.review', 'reviews.created', 'reviews.userId'];

// const json2csvParser = new Json2csvParser({ fields, unwind: 'reviews' });
const newLine = '\r\n';
// console.log('STARTED');
// const date = new Date();
// const file = fs.createWriteStream('./DataGen/GeneratedData/1_csvGen.csv');

// const listings = [];
console.time('TIMER');
for (let i = 1; i < 20001; i += 1) { // 100000 listings
  const numberOfReviews = faker.random.number({
    min: 1,
    max: 20,
  });

  const home = {
    homeId: i,
    reviews: [],
  };

  for (let j = 1; j <= numberOfReviews; j += 1) {
    const review = {
      id: j,
      review: faker.lorem.sentence(),
      created: moment.utc((faker.date.past())).format('MMMM YYYY'),
      userId: faker.random.number({
        min: 1,
        max: 100,
      }),
    };
    home.reviews.push(review);
  }

  // const toCsv = {
  //   data: home,
  //   fields,
  //   hasCSVColumnTitle: false,
  // };
  // console.log('FS TIME', i)

  if (i === 1) {
    const json2csvParser = new Json2csvParser({
      fields,
      unwind: 'reviews',
    });
    const csv = json2csvParser.parse(home) + newLine;
    fs.writeFileSync('./DataGen/GeneratedData/1_csvGen.csv', csv);
  } else {
    // write the actual data and end with newline
    const json2csvParser = new Json2csvParser({
      fields,
      unwind: 'reviews',
      header: false,
    });
    const csv = json2csvParser.parse(home) + newLine;

    fs.appendFile('./DataGen/GeneratedData/1_csvGen.csv', csv);
  }

  // if (i % 10000 === 0) {
  //   console.log(i);
  // }

  // fs.stat('./DataGen/GeneratedData/1_csvGen.csv', (err, stat) => {
  //   if (err === null) {
  //     console.log('File exists', i);

  //     // write the actual data and end with newline
  //     const json2csvParser = new Json2csvParser({ fields, unwind: 'reviews', header: false });
  //     const csv = json2csvParser.parse(home) + newLine;
  //     console.log(csv);

  //     fs.appendFileSync('./DataGen/GeneratedData/1_csvGen.csv', csv);
  //   } else {
  //     // write the headers and newline
  //     console.log('New file, just writing headers');
  //     // fields = (fields + newLine);
  //     const json2csvParser = new Json2csvParser({ fields, unwind: 'reviews' });
  //     const csv = json2csvParser.parse(home) + newLine;
  //     fs.writeFileSync('./DataGen/GeneratedData/1_csvGen.csv', csv);
  //   }
  // });

  // const csv = json2csvParser.parse(home);
  // file.write(csv);
  // listings.push(home);
}
// fs.writeFile('./DataGen/GeneratedData/1_csvGen.csv', csv);
// file.end();
console.timeEnd('TIMER');
