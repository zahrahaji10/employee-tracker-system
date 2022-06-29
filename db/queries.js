// external imports
const mysql = require("mysql2/promise");

const viewDepartments = async (executeQuery) => {
  const departments = await executeQuery("SELECT * FROM department");
  console.table(departments);
};

const viewRoles = async () => {
  const roles = await db.cons;

  console.table(roles);
};

const viewEmployees = async () => {
  const employees = await db.cons;
  console.table(employees);
};

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
};
