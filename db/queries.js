// external imports
const mysql = require("mysql2/promise");
const { executeQuery } = require("../src/utils/connection");
const inquirer = require("inquirer");
const {
  choiceQuestions,
  departmentQuestions,
  employeeQuestions,
  updateQuestions,
} = require("../src/utils/questions");

// view department query function
const viewDepartments = async (executeQuery) => {
  const departments = await executeQuery("SELECT * FROM department");
  console.table(departments);
};

// view role query function
const viewRoles = async (executeQuery) => {
  const roles = await executeQuery("SELECT * FROM role");

  console.table(roles);
};

// view employee query function
const viewEmployees = async (executeQuery) => {
  const employees = await executeQuery("SELECT * FROM employee");
  console.table(employees);
};

// add department query function
const addDepartment = async (executeQuery, departmentQPrompt) => {
  const newDepartment = await executeQuery(
    `INSERT INTO department (name) VALUES ("${departmentQPrompt.departmentName}")`
  );
  const updatedDepartments = await executeQuery("SELECT * FROM department");
  console.table(updatedDepartments);
};

// add role query function
const addRole = async (executeQuery) => {
  // query for all department
  const departments = await executeQuery("SELECT * FROM department");

  // declare an empty array for department
  let departmentsArray = [];

  // generate current department list
  const departmentList = departments.forEach((department) => {
    let departmentObj = {};
    departmentObj.name = department.name;
    departmentObj.value = department.id;
    departmentsArray.push(departmentObj);
  });

  // declare inquirer new role questions
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
      name: "departmentId",
      choices: departmentsArray,
    },
  ];

  // prompt role questions
  const { title, salary, departmentId } = await inquirer.prompt(roleQuestions);

  // add inputs into role database
  const updatedRoles =
    await executeQuery(`INSERT INTO role (title, salary, departmentId)
  VAlUES ("${title}", "${salary}", "${departmentId}")`);

  // console.table(updatedRoles);
};

// add role query function
const addEmployee = async (executeQuery) => {
  // query for all roles
  const roles = await executeQuery("SELECT * FROM role");
  // query for all employees
  const employees = await executeQuery("SELECT * FROM employee");

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
      choices: rolesList,
    },
    {
      message: "Please select the employee's manager",
      type: "list",
      name: "manager",
      // REFERENCE MANAGERS IN EMPLOYEE TABLES
      choice: [],
    },
  ];

  // prompt add employee questions
  const { firstName, lastName, role, manager } = await inquirer.prompt(
    employeeQuestions
  );
};

// add role query function
const updateEmployee = async (executeQuery) => {
  // query for all roles
  const roles = await executeQuery("SELECT * FROM role");

  // query for all employees
  const employees = await executeQuery("SELECT * FROM employee");

  // prompt add employee questions
  const updateEmployeeQuestions = await inquirer.prompt(updateQuestions);
};

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addRole,
  addEmployee,
  updateEmployee,
  addDepartment,
};
