// create a questions array using inquirer

const choiceQuestions = {
  message: "Please select from one of the following options",
  type: "list",
  name: "choiceQuestions",
  choices: [
    {
      name: "View all departments",
      value: "viewDepartments",
      short: "departments",
    },
    {
      name: "View all roles",
      value: "viewRoles",
      short: "roles",
    },
    {
      name: "View all employees",
      value: "viewEmployees",
      short: "employees",
    },
    {
      name: "Add a department",
      value: "addDepartment",
      short: "newDepartment",
    },
    ,
    {
      name: "Add a role",
      value: "addRole",
      short: "newRole",
    },
    {
      name: "Add an employee",
      value: "addEmployee",
      short: "newEmployee",
    },
    ,
    {
      name: "Update an employee role",
      value: "updateRole",
      short: "update",
    },
    {
      name: "Quit application",
      value: "quit",
      short: "quit",
    },
  ],
};
