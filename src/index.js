// create a questions array using inquirer

const choiceQuestions = {
  message: "Please select from one of the following options",
  type: "list",
  name: "choiceQuestions",
  choices: [
    {
      name: "View all departments",
      value: "viewDepartments",
      short: "departments",
    },
    {
      name: "View all roles",
      value: "viewRoles",
      short: "roles",
    },
    {
      name: "View all employees",
      value: "viewEmployees",
      short: "employees",
    },
    {
      name: "Add a department",
      value: "addDepartment",
      short: "newDepartment",
    },
    ,
    {
      name: "Add a role",
      value: "addRole",
      short: "newRole",
    },
    {
      name: "Add an employee",
      value: "addEmployee",
      short: "newEmployee",
    },
    ,
    {
      name: "Update an employee role",
      value: "updateRole",
      short: "update",
    },
    {
      name: "Quit application",
      value: "quit",
      short: "quit",
    },
  ],
};

const departmentQuestions = {
  message: "Please enter a department name",
  type: "input",
  name: "departmentName",
  validate: (enteredDepartmentName) => {
    if (enteredDepartmentName) {
      return true;
    } else {
      return "Please enter a department name to continue";
    }
  },
};

const roleQuestions = [
  {
    message: "Please enter the title for the role",
    type: "input",
    name: "roleTitle",
    validate: (enteredTitle) => {
      if (enteredTitle) {
        return true;
      } else {
        return "Please enter the role title to continue";
      }
    },
  },
  {
    message: "Please enter the salary for this role",
    type: "input",
    name: "roleSalary",
    validate: (enteredSalary) => {
      if (enteredSalary) {
        return true;
      } else {
        return "Please enter the role salary to continue";
      }
    },
  },
  {
    message: "Please select the department this role belongs to",
    type: "list",
    name: "addDepartmentRole",
    choice: [
      {
        name: "Finance",
        value: "getFinanceDb",
        short: "Finance",
      },
      {
        name: "Marketing",
        value: "getMarketingDb",
        short: "Marketing",
      },
    ],
  },
];

// loop through array questions

// create the database using mysql

// create a connection with the database

// take responses form inquirer and store in database
