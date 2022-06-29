DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL(8,2) NOT NULL ,
departmentId INT NOT NULL,
FOREIGN KEY (departmentId) REFERENCES department(id),
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
firstName VARCHAR(50) NOT NULL,
lastName VARCHAR(50) NOT NULL,
roleId INT NOT NULL,
managerId INT,
PRIMARY KEY (id),
FOREIGN KEY (roleId) REFERENCES role(id),
FOREIGN KEY (managerId) REFERENCES employee(id)
);



-- npm i console.table