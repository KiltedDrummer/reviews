-- the actual schema for the DB
-- do not drop this DB. Only create it if it exists
DROP DATABASE IF EXISTS reviews ;
-- DROP DATABASE REVIEWS;
CREATE DATABASE IF NOT EXISTS reviews;

USE reviews;

-- CREATE TABLE IF NOT EXISTS houses (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   city varchar(500) NOT NULL
-- );
--
-- -- DROP TABLE IF EXISTS users;
-- CREATE TABLE IF NOT EXISTS users (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   name varchar(500) NOT NULL,
--   photo varchar(500) NOT NULL
-- );

-- DROP TABLE IF EXISTS reviews;
CREATE TABLE IF NOT EXISTS reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  review varchar(500) NOT NULL,
  created VARCHAR(500) NOT NULL,
  user VARCHAR(500) NOT NULL,
  photo VARCHAR(500) NOT NULL
);
