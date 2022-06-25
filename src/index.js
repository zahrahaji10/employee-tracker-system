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

const roleQuestions = [
  {
    message: "Please enter the title for the role",
    type: "input",
    name: "roleTitle",
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
    name: "roleSalary",
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
    name: "addDepartmentRole",
    choice: [
      {
        name: "Finance",
        value: "getFinanceDb",
        short: "finance",
      },
      {
        name: "Marketing",
        value: "getMarketingDb",
        short: "marketing",
      },
      {
        name: "Software Developer",
        value: "getDeveloperDb",
        short: "developer",
      },
      {
        name: "Product Production",
        value: "getProductionDb",
        short: "productProduction",
      },
    ],
  },
];

const employeeQuestions = [
  {
    message: "Please enter employee first name",
    type: "input",
    name: "employeeName",
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
    name: "employeeName",
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
    name: "employeeRole",
    choice: [
      {
        name: "Senior Developer",
        value: "getDeveloperDb",
        short: "developer",
      },
      {
        name: " Junior Developer",
        value: "getDeveloperDb",
        short: "developer",
      },
      {
        name: " Accountant",
        value: "getFinanceDb",
        short: "finance",
      },
      {
        name: "Marketing Manager",
        value: "getMarketingDb",
        short: "marketing",
      },
      {
        name: "Production Manager",
        value: "getProductionDb",
        short: "production",
      },
      {
        name: "researcher",
        value: "getProductionDb",
        short: "production",
      },
    ],
  },
  {
    message: "Please select the employee's manager",
    type: "list",
    name: "employeeManager",
    choice: [
      {
        name: "Sam Smith",
        value: "getEmployeeDb",
        short: "employeeManager",
      },
      {
        name: "Sarah Lee",
        value: "getEmployeeDb",
        short: "employeeManager",
      },
      ,
      {
        name: "John Smith",
        value: "getEmployeeDb",
        short: "employeeManager",
      },
    ],
  },
];

const update = [
  {
    message: " Please select the employee you would like to update",
    type: "list",
    name: "employeeToUpdate",
    choices: [
      {
        name: "Sam Smith",
        value: "getEmployeeDb",
        short: "employeeManager",
      },
      {
        name: "Sarah Lee",
        value: "getEmployeeDb",
        short: "employeeManager",
      },
      ,
      {
        name: "John Smith",
        value: "getEmployeeDb",
        short: "employeeManager",
      },
    ],
  },
  {
    message:
      " Please select the role you would like to update for the employee",
    type: "list",
    name: "updateToRole",
    choices: [
      {
        name: "Senior Developer",
        value: "getDeveloperDb",
        short: "developer",
      },
      {
        name: " Junior Developer",
        value: "getDeveloperDb",
        short: "developer",
      },
      {
        name: " Accountant",
        value: "getFinanceDb",
        short: "finance",
      },
      {
        name: "Marketing Manager",
        value: "getMarketingDb",
        short: "marketing",
      },
      {
        name: "Production Manager",
        value: "getProductionDb",
        short: "production",
      },
      {
        name: "researcher",
        value: "getProductionDb",
        short: "production",
      },
    ],
  },
];

// loop through array questions

// create the database using mysql

// create a connection with the database

// take responses form inquirer and store in database
