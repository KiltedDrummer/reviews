var faker = require('faker');
var fs = require('fs');
var moment = require('moment');

//Process: Generate 100 names
//store as an array
//send the array to fakeData.js which will
//be referenced by index.js
//index.js will have a function for every table that will insert its appropriate data

//don't run this file... unless database needs to be populated.

var users = [];

for (var i = 1 ; i < 101; i++) {
  var user = {
    id: i,
    name: faker.name.firstName()
  }
  users.push(user);
}

fs.writeFile("./fakeUsers.js", JSON.stringify(users)
, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});


var reviews = [];

for (var i = 1; i < 1501; i++) { //1500 reviews total
  var review = {
    id: i,
    review: faker.lorem.paragraph(),
    created: moment.utc((faker.date.past())).format("'MMMM YYYY"),
    house_id: Math.floor(Math.random() * (199 - 100 + 1)) + 100
  }
  reviews.push(review);
}

fs.writeFile("./fakeReviewText.js", JSON.stringify(reviews),
  function(err) {
    if(err) {
      console.log(err);
    }
      console.log("The file was saved!")
  });


create an array with houses  ({id:, city:})

var houses = [];

for (var i = 100; i < 200; i++){
  var house = {
    id: i,
    city: faker.address.city()
  }
  houses.push(house);
}

fs.writeFile("./fakeHomes.js", JSON.stringify(houses),
function(err) {
  if(err) {
    console.log(err);
  }
  console.log("The file was saved!")
});
