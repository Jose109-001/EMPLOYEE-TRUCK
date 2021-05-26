const db = require("../db/model");

const viewAllDepartments = async (callback) => {
  const departments = await db.getDepartments();
  console.table(departments);
  callback(departments);
  return departments;
};

const viewDepartmentsBudget = async (callback) => {
  // Get all employees and roles
  const employees = await db.getEmployees();
  const roles = await db.getRoles();

  // Get departments totals
  const totals = employees.reduce((totals, employee) => {
    const { first_name, last_name, role_id } = employee;
    // Get employee salary and department
    const role = roles.find(({ id }) => id === role_id);

    if (!role) {
      console.warn(`${first_name} ${last_name} has a role (${role_id}) that does not exist. Please, change the employee role`);
      return totals;
    }

    const { salary, department_id } = role;

    // This department doesn't have a previous salary; sets the total to 0
    if (!totals[department_id]) {
      totals[department_id] = 0;
    }

    // Add employee salary to the department total
    totals[department_id] += Number(salary);

    // Return totals to avoid loosing the data
    return totals;
  }, {});

  console.table(totals);
  callback();
};

const addDepartment = async (callback, makeQuestions) => {
  const department = await makeQuestions("addDepartment");

  const { confirm } = await makeQuestions("confirmInput");

  if (confirm) {
    await db.addDepartment(department);
    console.table(department);
  }

  callback();
};

const deleteDepartment = async (callback, makeQuestions) => {
    // Get all departments to decide which one to delete
    const departments = (await db.getDepartments()).map(({ id }) => id);
  
    // Get department ID
    const { department } = await makeQuestions("deleteDepartment", { departments });
  
    // Asks for confirmation
    const { confirm } = await makeQuestions("confirmInput");
  
    if (confirm) {
      // Delete department from database
      await db.deleteDepartment(department);
    }
  
    callback();
  };

module.exports = {
  viewAllDepartments,
  viewDepartmentsBudget,
  addDepartment,
  deleteDepartment
};
