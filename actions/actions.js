const db = require("../db/model");

const {
  viewAllEmployees,
  updateEmployee,
  viewEmployeesByManager,
  addEmployee,
  deleteEmployee
} = require('./employees')

const {
  viewAllDepartments,
  viewDepartmentsBudget,
  addDepartment,
  deleteDepartment
} = require('./departments');

const {
  viewAllRoles,
  addRole,
  deleteRole
} = require('./roles');

const { quit } = require('./misc');

const actions = {
  // View
  "View All Employees": viewAllEmployees,
  "View Departments": viewAllDepartments,
  "View Roles": viewAllRoles,
  "View employees by Manager": viewEmployeesByManager,
  "View departments budget": viewDepartmentsBudget,
  
  // Add
  "Add an Employee": addEmployee,
  "Add a Department": addDepartment,
  "Add a Role": addRole,
  //Update
  "Update Employee Role": updateEmployee,
  // Delete
  "Delete Employee": deleteEmployee,
  "Delete Department": deleteDepartment,
  "Delete Role": deleteRole,
  // Quit
  "Quit": quit,
};

module.exports = actions;
