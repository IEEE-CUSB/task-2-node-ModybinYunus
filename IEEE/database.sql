CREATE DATABASE IF NOT EXISTS ieee;
USE ieee;
CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	fullname varchar(20),
	email varchar(20),
	phonenumber varchar(15),
	PRIMARY KEY (id)
);
