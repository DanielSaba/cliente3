-- CREATE DATABASE IF NOT EXISTS companydb;

-- USE companydb;

-- CREATE TABLE employee (
--   id INT(11) NOT NULL AUTO_INCREMENT,
--   name VARCHAR(45) DEFAULT NULL,
--   salary INT(11) DEFAULT NULL, 
--   PRIMARY KEY(id)
-- );

-- DESCRIBE employee;

-- INSERT INTO employee values 
--   (1, 'Ryan Ray', 20000),
--   (2, 'Joe McMillan', 40000),
--   (3, 'John Carter', 50000);

-- SELECT * FROM employee;


CREATE DATABASE crudnode;

use crudnode;

CREATE TABLE usuario(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    university VARCHAR(30) NOT NULL,
    carrera VARCHAR(50) NOT NULL,
    institution VARCHAR(40) NOT NULL,
    phone VARCHAR(40) NOT NULL,
    uno varchar(100)

);