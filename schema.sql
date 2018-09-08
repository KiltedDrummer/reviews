-- the actual schema for the DB
DROP DATABASE IF EXISTS reviews ;

CREATE DATABASE reviews;

USE reviews;

DROP TABLE IF EXISTS houses;
CREATE TABLE houses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  city varchar(500) NOT NULL
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(500) NOT NULL
);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  review varchar(500) NOT NULL,
  created VARCHAR(500) NOT NULL,
  house_id INT NOT NULL

);