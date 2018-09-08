//create database connection
//have functions that will interact with the DB
//example: insertion of the fake data through a process query.

var mysql = require('mysql');
//var fakeData = require('./fakeData');
var fakeUsers = require('./fakeUsers');
var fakeReviewText = require('./fakeReviewText');
var fakeHomes = require('./fakeHomes.js');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'reviews'
});

connection.connect();

//function will be used be the server to grab all the reviews initially
var getReviews = function(id, callback) {
  
}

//function used to fill the tables

var userArray = fakeUsers.userArray;
var fillUsersTable = function() {

  userArray.forEach( (user) => {
    connection.query(
    `INSERT INTO users (id, name)
    VALUES (${user.id}, "${user.name}")`, function(err, result, fields) {
      if(err) {
        console.log(`INSERT INTO users (id, name)
        VALUES (${user.id}, "${user.name}")`)
      } else {
        console.log("success")
      }
    })

  })
}
fillUsersTable();


var homesArray = fakeHomes.homes;

var fillHomesTable = function() {
  homesArray.forEach( (home)=> {
    connection.query(
      `INSERT INTO houses (id, city)
       VALUES (${home.id}, "${home.city}")`, function(err, result, fields) {
         if(err) {
           console.log(err)
           console.log("query:", `INSERT INTO homes (id, city)
            VALUES (${home.id}, "${home.city}")`)
         } else {
           console.log("success")
         }
       })
     })
}

fillHomesTable();

var reviewArray = fakeReviewText.reviewTextArray;

var fillReviewsTable = function() {

  reviewArray.forEach( (review) => {
    connection.query(
      `INSERT INTO reviews (id, review, created, house_id)
       VALUES (${review.id}, "${review.review}", "${review.created}", ${review.house_id})`, function(err, result, fields) {
         if(err) {
           console.log(err);
         } else {
           console.log("success");
         }
       })
  })
}

fillReviewsTable();
