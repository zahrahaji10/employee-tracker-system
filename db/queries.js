// external imports
const mysql = require("mysql2/promise");
const inquirer = require("inquirer");

// internal imports
const { executeQuery } = require("../src/utils/connection");

// main choices inquirer questions
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
      name: "Quit Application",
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

// generate choices function
const generateChoices = (arr, key) => {
  return arr.map((each) => {
    return { name: each[key], value: each.id };
  });
};

// generate employee choices function
const generateEmployeesChoices = (employees) => {
  const employeeArray = [];
  employees.forEach((employee) => {
    if (!employee.managerId) {
      employeeArray.push({
        name: employee.firstName + " " + employee.lastName,
        value: employee.id,
      });
    }
  });
  return employeeArray;
};

// view department query function
const viewDepartments = async (executeQuery) => {
  // declare a variable that stores the query results
  const departments = await executeQuery("SELECT * FROM department");

  // display table
  console.table(departments);
};

// view role query function
const viewRoles = async (executeQuery) => {
  // declare a variable that stores the query results
  const roles = await executeQuery("SELECT * FROM role");

  // display table
  console.table(roles);
};

// view employee query function
const viewEmployees = async (executeQuery) => {
  // declare a variable that stores the query results
  const employees = await executeQuery("SELECT * FROM employee");

  // display table
  console.table(employees);
};

// add department query function
const addDepartment = async (executeQuery, departmentQPrompt) => {
  // declare a variable that stores the query results and inquirer answers
  const newDepartment = await executeQuery(
    `INSERT INTO department (name) VALUES ("${departmentQPrompt.departmentName}")`
  );

  //  // declare a variable that stores the query results
  const updatedDepartments = await executeQuery("SELECT * FROM department");

  // display table
  console.table(updatedDepartments);
};

// add role function
const addRole = async (executeQuery) => {
  // query for all department
  const departments = await executeQuery("SELECT * FROM department");

  // generate current department choices and pass in array and key as name
  const departmentList = generateChoices(departments, "name");

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
      choices: departmentList,
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

// add employee function
const addEmployee = async (executeQuery) => {
  // query for all roles
  const roles = await executeQuery("SELECT * FROM role");

  // generate current department choices and pass in array and key as name
  const rolesList = generateChoices(roles, "title");

  // query for all employees
  const employees = await executeQuery("SELECT * FROM employee");

  // // declare an empty array for employees
  let employeesArray = [];

  // generate employee list
  const employeesList = employees.forEach((employee) => {
    if (!employee.managerId) {
      let employeeObj = {};
      employeeObj.name = employee.firstName + " " + employee.lastName;
      employeeObj.value = employee.id;
      employeesArray.push(employeeObj);
    }
  });

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
      name: "roleId",
      choices: rolesList,
    },
    {
      message: "Please select the employee's manager",
      type: "list",
      name: "managerId",
      choices: employeesArray,
    },
  ];

  // prompt add employee questions
  const { firstName, lastName, roleId, managerId } = await inquirer.prompt(
    employeeQuestions
  );

  // add inputs into role database
  const updatedEmployees = await executeQuery(
    `INSERT INTO employee (firstName, lastName, roleId, managerId) VAlUES ("${firstName}", "${lastName}", "${roleId}", "${managerId}")`
  );
};

// update employee questions
const updateEmployee = async (executeQuery) => {
  // query for all roles
  const roles = await executeQuery("SELECT * FROM role");

  // generate current department choices and pass in array and key as name
  const rolesList = generateChoices(roles, "title");

  // query for all employees
  const employees = await executeQuery("SELECT * FROM employee");

  // declare an empty array for department
  let employeesArray = [];

  // generate current department list
  const employeesList = employees.forEach((employee) => {
    let employeeObj = {};
    employeeObj.name = employee.firstName + " " + employee.lastName;
    employeeObj.value = employee.id;
    employeesArray.push(employeeObj);
  });

  // prompt update questions
  const updateQuestions = [
    {
      message: " Please select the employee you would like to update",
      type: "list",
      name: "employee",
      choices: employeesArray,
    },
    {
      message:
        " Please select the role you would like to update for the employee",
      type: "list",
      name: "role",
      choices: rolesList,
    },
  ];

  // prompt add employee questions
  const { employee, role } = await inquirer.prompt(updateQuestions);

  // add inputs into role database
  const updatedEmployees = await executeQuery(
    ` UPDATE employee SET roleId = '${role}' WHERE (id = '${employee}')`
  );
};

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addRole,
  addEmployee,
  updateEmployee,
  addDepartment,
  choiceQuestions,
  departmentQuestions,
};
