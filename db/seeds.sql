USE company_db

-- department table data 
INSERT INTO department (name), 
VAlUES 
    ("Finance"),
    ("Marketing"),
    ("Software Developer"),
    ("Product Production");
    ("Sales")


-- role table data 
INSERT INTO role (title, salary, departmentId),
VAlUES
    ('Senior Developer', '56,000', '3');
    ('Junior Developer', '30,000', '3');
    ('Accountant Manager', '64,000', '1');
    ('Marketing Intern', '21,000', '2');
    ('Junior Accountant', '28,000', '1');
    ('Sales Manager', '67,000', '5');
    ('Product Manager', '68,000', '4');
    ('Sales Assistant ', '32,000', '5');
    ('Marketing Manager', '71,000', '2');
    ('Product Designer', '68,000', '4');


-- employee table data 
INSERT INTO employee (firstName, lastName, roleId, managerId), 
VAlUES 
("Sam" , "Smith", 1 , NULL),
("Sarah", "Lee", 4,  NULL ),
("John", "Holland", 2 , 4 ),
("Emma", "Green", 2, NULL);

-- employee table data 
INSERT INTO role (title, salary, departmentId, managerId) VALUES 
    ('Sam', 'Smith', 2 , NULL),
    ('Sarah', 'Smith', ,  ),
    ('John', 'Smith',, NULL ),
    ('Emma', 'Smith',1, 2),
    ('Rob', 'Smith', 1, NULL ),
    ('Steven', 2, 1, ),
    ('Emaily', 'Smith', ,NULL ),
    ('Luke', 'Smith', ),
    ('Liam', 'Smith', ),
    ('Smith', , NULL);

