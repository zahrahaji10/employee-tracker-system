// import inquirer into file
const inquirer = require("inquirer");

const { executeQuery } = require("../utils/connection");
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
    {
      name: "Update an employee role",
      value: "updateEmployee",
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
    name: "role",
    // SELECT * ALL ROLES IN DATABASE
    choices: [],
  },
  {
    message: "Please select the employee's manager",
    type: "list",
    name: "manager",
    // REFERENCE MANAGERS IN EMPLOYEE TABLES
    choice: [],
  },
];

// update an employee questions
const updateQuestions = [
  {
    message: " Please select the employee you would like to update",
    type: "list",
    name: "UpdateDate",
    choices: [],
  },
  {
    message:
      " Please select the role you would like to update for the employee",
    type: "list",
    name: "updateRole",
    choices: [],
  },
];

module.exports = {
  choiceQuestions,
  departmentQuestions,
  employeeQuestions,
  updateQuestions,
};
