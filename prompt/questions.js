class Questions {
  set (values) {
    Object.entries(values).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  get mainMenu() {
    let choices = [
      // View
      "View All Employees",
      "View Departments",
      "View Roles",
      // Special views
      "View employees by Manager",
      "View departments budget",
      // Add
      "Add an Employee",
      "Add a Department",
      "Add a Role",
      // Update
      "Update Employee Role",
      // Delete
      "Delete Employee",
      "Delete Department",
      "Delete Role",
      // Quit
      "Quit",
    ];
    return {
      type: "list",
      message: "Main Menu:",
      choices: choices,
      name: "choice",
      pageSize: choices.length,
    };
  }
  get addDepartment() {
    return {
      type: "input",
      message: "What is the name of the department?",
      name: "department",
    };
  }
  get addRole() {
    return [
      {
        type: "input",
        message: "What is the title of the role?",
        name: "title",
      },
      {
        type: "number",
        message: "What is the salary for this role?",
        name: "salary",
      },
      {
        type: "list",
        message: "What is the department this role belongs to?",
        name: "department",
        choices: this.departments,
      },
    ];
  }
  get addEmployee() {
    return [
      {
        type: "input",
        message: "What is the first name of the employee?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the last name of the employee?",
        name: "last_name",
      },
      {
        type: "list",
        message: "What is the role of the employee?",
        name: "role_id",
        choices: this.roles,
      },
      {
        type: "list",
        message: "who is this employees manager?",
        name: "manager_id",
        choices: this.managers,
      },
    ];
  }
  get deleteEmployee() {
    return {
      type: "list",
      message: "Which employee would you like to remove?",
      choices: this.employees,
      name: "employee",
    };
  }
  get deleteRole() {
    return {
      type: "list",
      message: "Which role would you like to remove?",
      choices: this.roles,
      name: "role",
    };
  }
  get deleteDepartment() {
    return {
      type: "list",
      message: "Which department would you like to remove?",
      choices: this.departments,
      name: "department",
    };
  }
  get updateEmployeeRole() {
    return [
      {
        type: "list",
        message: "Which employee would you like to update?",
        choices: this.employees,
        name: "employee",
      },
      {
        type: "list",
        message: "Choose a new role for the employee",
        choices: this.roles,
        name: "role",
      },
    ];
  }
  get confirmInput() {
    return {
      type: "confirm",
      message: "",
      name: "confirm",
    };
  }
  get getEmployeesByManager() {
    return [
      {
        type: "list",
        message: "Which manager's employees you want to see?",
        choices: this.managers,
        name: "manager",
      }
    ]
  }
}

module.exports = new Questions();
