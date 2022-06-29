// - plan:-
//   - add actions (department, role, employee) - prompt Q's and INSERT into database
//   - view actions (department, role, employee)  - display from database
//   - update an employee role ( )  - Amend data from database from selected employee
//   - quit - write to file html file and display info.

// import inquirer into file
const inquirer = require("inquirer");

// main choice questions prompted via inquirer
const choiceQuestions = {
  message: "Please select from one of the following options",
  type: "list",
  name: "action",
  choices: [
    {
      name: "View all departments",
      value: "viewDepartments",
    },
    {
      name: "View all roles",
      value: "viewRoles",
    },
    {
      name: "View all employees",
      value: "viewEmployees",
    },
    {
      name: "Add a department",
      value: "addDepartment",
    },
    ,
    {
      name: "Add a role",
      value: "addRole",
    },
    {
      name: "Add an employee",
      value: "addEmployee",
    },
    ,
    {
      name: "Update an employee role",
      value: "update",
    },
    {
      name: "Quit application",
      value: "quit",
    },
  ],
};

// add new department questions
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

// add new role questions
const roleQuestions = [
  {
    message: "Please enter the title for the role",
    type: "input",
    name: "title",
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
    name: "salary",
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
    name: "selectDepartmentForRole",
    // SELECT * DATA FROM DEPARTMENT TABLE
    choices: [
      {
        name: "Finance",
        value: "getFinanceDb",
      },
      {
        name: "Marketing",
        value: "getMarketingDb",
      },
      {
        name: "Software Developer",
        value: "getDeveloperDb",
      },
      {
        name: "Product Production",
        value: "getProductionDb",
      },
    ],
  },
];

// add new employee questions
const employeeQuestions = [
  {
    message: "Please enter employee first name",
    type: "input",
    name: "firstName",
    validate: (enteredName) => {
      if (enteredName) {
        return true;
      } else {
        return "Please enter the employee first name to continue";
      }
    },
  },
  {
    message: "Please enter employee last name",
    type: "input",
    name: "lastName",
    validate: (enteredName) => {
      if (enteredName) {
        return true;
      } else {
        return "Please enter the employee last name to continue";
      }
    },
  },
  {
    message: "Please select the role the employee belongs to",
    type: "list",
    name: "selectRoleForEmployee",
    // SELECT * ALL ROLES IN DATABASE
    choices: [],
  },
  {
    message: "Please select the employee's manager",
    type: "list",
    name: "assignManagerForEmployee",
    // REFERENCE MANAGERS IN EMPLOYEE TABLES
    choice: [],
  },
];

// update an employee questions
const updateQuestions = [
  {
    message: " Please select the employee you would like to update",
    type: "list",
    name: "employeeToUpdate",
    // SELECT * ALL EMPLOYEES FROM DATABASE
    choices: [],
  },
  {
    message:
      " Please select the role you would like to update for the employee",
    type: "list",
    name: "updateToRole",
    // SELECT * ALL ROLES FROM DATABASE
    choices: [],
  },
];

module.exports = {
  choiceQuestions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
  updateQuestions,
};
