//external - imports into file
const inquirer = require("inquirer");
require("dotenv").config();

//  internal - import questions into file
const {
  choiceQuestions,
  departmentQuestions,
  employeeQuestions,
  updateQuestions,
} = require("../src/utils/questions");
const initDatabase = require("../src/utils/connection");
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addRole,
  addDepartment,
  addEmployee,
  updateEmployee,
} = require("../db/queries");

// fn to prompt inquirer questions
const init = async () => {
  try {
    // connect to mysql database
    const { executeQuery, closeConnection } = await initDatabase({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // declare the process true to enable looping in question
    let inProgress = true;

    // loop through questions while progress is true

    while (inProgress) {
      // prompt choice questions
      const { action } = await inquirer.prompt(choiceQuestions);

      // prompt view departments
      if (action === "viewDepartments") {
        await viewDepartments(executeQuery);
        console.log("CURRENT DEPARTMENTS");
      }

      // prompt view roles
      if (action === "viewRoles") {
        await viewRoles(executeQuery);
        await console.log("CURRENT ROLES");
      }

      // prompt view employees
      if (action === "viewEmployees") {
        await viewEmployees(executeQuery);
        console.log("CURRENT EMPLOYEES");
      }

      // prompt add department questions
      if (action === "addDepartment") {
        const departmentQPrompt = await inquirer.prompt(departmentQuestions);
        await addDepartment(executeQuery, departmentQPrompt);
        console.log("YOU HAVE ADDED A DEPARTMENT");
      }

      // prompt add role questions
      if (action === "addRole") {
        await addRole(executeQuery);

        console.log("YOU HAVE ADDED A ROLE");
      }
    }
  } catch (error) {
    console.log(`[ERROR]: Internal error | ${error.message}`);
  }
};

// call function to initialize
init();

module.exports = {
  init,
};
