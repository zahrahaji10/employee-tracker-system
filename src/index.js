//external - import inquirer into file
const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");

//  internal - import questions into file
const {
  choiceQuestions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
  updateQuestions,
} = require("../src/utils/questions");

// fn to prompt inquirer questions
const init = async () => {
  // declare the process true to enable looping in question
  let inProgress = true;

  // loop through questions while progress is true

  while (inProgress) {
    // prompt choice questions
    const { action } = await inquirer.prompt(choiceQuestions);

    // prompt add department questions
    if (action === "addDepartment") {
      const departmentQPrompt = await inquirer.prompt(departmentQuestions);
      console.log("YOU HAVE ADDED A DEPARTMENT");
    }

    // prompt add role questions
    if (action === "addRole") {
      const { addRoleTitle, addRoleSalary, selectDepartmentForRole } =
        await inquirer.prompt(roleQuestions);
      console.log("YOU HAVE ADDED A ROLE");
    }

    // prompt add employee questions
    if (action === "addEmployee") {
      const {
        addEmployeeName,
        ddEmployeeName,
        selectRoleForEmployee,
        assignManagerForEmployee,
      } = await inquirer.prompt(employeeQuestions);
      console.log("YOU HAVE ADDED AN EMPLOYEE");
    }

    // prompt view departments
    if (action === "viewDepartment") {
      // execute query for SELECT * FROM departments table
      console.log("CURRENT DEPARTMENTS");
    }

    // prompt view roles
    if (action === "viewRoles") {
      // execute query for SELECT * FROM roles table
      console.log("CURRENT ROLES");
    }

    // prompt view employees
    if (action === "viewEmployees") {
      console.log("CURRENT EMPLOYEES");
    }

    // prompt update questions
    if (action === "update") {
      const { employeeToUpdate, updateToRole } = await inquirer.prompt(
        Questions
      );
      // execute query for update selected employee role
      console.log("CURRENT EMPLOYEES");
    }

    // end looping of questions
    if (action === "quit") {
      // set inProgress false to quit questions looping
      inProgress = false;
      console.log("YOU HAVE CHOSEN TO QUIT APPLICATION");
    }
  }
};

// call function to initialize
init();
// create the database using mysql

// create a connection with the database

// take responses form inquirer and store in database
