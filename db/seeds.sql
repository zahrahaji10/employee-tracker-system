USE company_db;

INSERT INTO department (name)
VAlUES ("Finance"), 
("Marketing"),
("Software Developer"),
("Product Production"),
("Sales") ;

INSERT INTO role (title, salary, departmentId)
VAlUES ('Senior Developer', 56000.00, 3),
('Junior Developer', 30000.00, 3),
('Accountant', 64000.00,1),
('Marketing Intern', 21000.00, 2),
('Junior Accountant',28000.00, 1),
('Sales Representative', 67000.00, 5),
('Product Engineer', 68000.00,4),
('Sales Assistant ', 32000.00, 5),
('Marketing Officer', 71000.00, 2),
('Product Designer', 45000.00, 4);


INSERT INTO employee (firstName, lastName, roleId, managerId)
VAlUES ('Sam', 'Smith', 1 , NULL),
('Sarah', 'Lee', 3 , NULL ),
('John', 'Holland',9, NULL ),
('Emma', 'Green',6, NULL ),
('Rob', 'Gray', 7, NULL ),
('Steven','Andrews', 10, NULL ),
('Emaily', 'Charl', 5 , NULL),
('Luke', 'Ross',2, NULL),
('Liam', 'Tim', 4, NULL ),
('Alice', 'White', 8,NULL);

UPDATE employee SET managerId = '5' WHERE (id = '6');
UPDATE employee SET managerId = '2' WHERE (id = '7');
UPDATE employee SET managerId = '1' WHERE (id = '8');
UPDATE employee SET managerId = '3' WHERE (id = '9');
UPDATE employee SET managerId = '4' WHERE (id = '10');
