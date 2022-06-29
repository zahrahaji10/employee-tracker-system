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
('Accountant Manager', 64000.00,1),
('Marketing Intern', 21000.00, '2'),
('Junior Accountant',28000.00, 1),
('Sales Manager', 67000.00, 5),
('Product Manager', 68000.00,4),
('Sales Assistant ', 32000.00, 5),
('Marketing Manager', 71000.00, 2),
('Product Designer', 68000.00, 4);



INSERT INTO employee (firstName, lastName, roleId, managerId)
VAlUES ('Sam', 'Smith', 3 , NULL),
('Sarah', 'Lee', 1 , NULL ),
('John', 'Holland',2, NULL )
('Emma', 'Green',5, NULL ),
('Rob', 'Gray', 4, NULL ),
('Steven','Andrews', 4, 5 ),
('Emaily', 'Charl', 1 , 2 ),
('Luke', 'Ross', 3, 1 ),
('Liam', 'Tim', 2, 3 ),
('Alice', 'White', 5,4 );