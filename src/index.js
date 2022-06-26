//external - import inquirer into file
const inquirer = require("inquirer");

//  internal - import questions into file
const {
  choiceQuestions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
} = require("../src/utils/questions");

// fn to prompt inquirer questions
const init = async () => {
  // declare the process true to enable looping in question
  let inProgress = true;

  // loop through questions while progress is true

  while (inProgress) {
    // prompt choice questions
    const { choices } = await inquirer.prompt(choiceQuestions);
  }
};

// call function to initialize
init();
// create the database using mysql

// create a connection with the database

// take responses form inquirer and store in database
