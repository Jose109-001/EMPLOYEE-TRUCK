const db = require("../db/model");

const viewAllEmployees = async (callback) => {
  const employees = await db.getEmployees();
  console.table(employees);
  callback(employees);
  return employees;
};

const viewEmployeesByManager = async (callback, makeQuestions) => {
  const employees = await db.getEmployees();

  // Get managers
  const managers = employees.reduce((managers, { manager_id }) => {
    // If employee has manager and it is not included in the list,
    // then pushes the manager id into the managers list
    const hasManager = manager_id !== null;
    const managerNotRepeatedInList = !managers.includes(manager_id);

    if (hasManager && managerNotRepeatedInList) {
      managers.push(manager_id);
    }

    return managers;
  }, []);

  // Ask which manager need to show
  const { manager } = await makeQuestions("getEmployeesByManager", {
    managers,
  });

  // Get selected manager employees
  const filteredEmployees = employees.filter(
    ({ manager_id }) => manager_id === manager
  );

  // Show employees and finish function
  console.table(filteredEmployees);
  callback(employees);
  return employees;
};

const getEmployeesAndRoles = async () => {
  // Get all employees and roles
  const allEmployees = await db.getEmployees();
  const allRoles = await db.getRoles();

  // Map roles and managers into their IDs
  const roles = allRoles.map(({ id }) => id);
  const employees = allEmployees.map(({ id }) => id);

  return {
    employees,
    roles,
  };
};

const addEmployee = async (callback, makeQuestions) => {
  const { roles, employees: managers } = await getEmployeesAndRoles();

  // Get new employee data
  const employee = await makeQuestions("addEmployee", {
    managers,
    roles,
  });

  const { confirm } = await makeQuestions("confirmInput");

  if (confirm) {
    // Add employee into the database
    db.addEmployee(employee);

    // Show created employee
    console.table(employee);
  }

  callback();
};

const updateEmployee = async (callback, makeQuestions) => {
  // Get data for the options
  const data = await getEmployeesAndRoles();

  // Get employee and role
  const { employee, role } = await makeQuestions("updateEmployeeRole", data);

  const { confirm } = await makeQuestions("confirmInput");

  if (confirm) {
    // Update database
    db.updateEmployeeRole(employee, role);
  }

  callback();
};

const deleteEmployee = async (callback, makeQuestions) => {
  // Get all employees to decide which one to delete
  const employees = (await db.getEmployees()).map(({ id }) => id);

  // Get employee ID
  const { employee } = await makeQuestions("deleteEmployee", { employees });

  // Asks for confirmation
  const { confirm } = await makeQuestions("confirmInput");

  if (confirm) {
    // Delete employee from database
    await db.deleteEmployee(employee);
  }

  callback();
};

module.exports = {
  viewAllEmployees,
  viewEmployeesByManager,
  getEmployeesAndRoles,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
