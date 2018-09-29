const faker = require('faker');
const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;

const fields = ['id', 'name', 'photo'];
const json2csvParser = new Json2csvParser({ fields });

// const reviews = [];
const users = [];
const userCount = 100;

for (let i = 1; i <= userCount; i += 1) {
  const user = {
    id: i,
    name: faker.name.firstName(),
    photo: faker.image.avatar(),
  };
  users.push(user);
}
const csv = json2csvParser.parse(users);
fs.writeFile('./DataGen/GeneratedData/fakeUsers.csv', csv,
  (err) => {
    if (err) {
      return err;
    }
    console.log('The USER file was saved!');
  });
