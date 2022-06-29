// external imports
const mysql = require("mysql2/promise");

const viewDepartments = async (executeQuery) => {
  const departments = await executeQuery("SELECT * FROM department");
  console.table(departments);
};

const viewRoles = async (executeQuery) => {
  const roles = await executeQuery("SELECT * FROM role");

  console.table(roles);
};

const viewEmployees = async (executeQuery) => {
  const employees = await executeQuery("SELECT * FROM employee");
  console.table(employees);
};

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
};
