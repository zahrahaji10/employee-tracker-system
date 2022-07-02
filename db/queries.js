// external imports
const mysql = require("mysql2/promise");

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

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
};
