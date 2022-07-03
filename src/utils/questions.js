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

module.exports = {
  choiceQuestions,
  departmentQuestions,
};
