const connection = require("./connect");

// GET
const getEmployees = () => connection.query(`SELECT * from employee`);
const getDepartments = () => connection.query(`SELECT * from department`);
const getRoles = () => connection.query(`SELECT * from role`);

// ADD
const addEmployee = ({ first_name, last_name, role_id, manager_id }) =>
  connection.query(`
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('${first_name}', '${last_name}', '${role_id}', '${manager_id}')
`);

const addDepartment = ({ department }) =>
  connection.query(`
    INSERT INTO department (name)
    VALUES ('${department}')
`);

const addRole = ({ title, salary, department }) =>
  connection.query(`
    INSERT INTO role (title, salary, department_id)
    VALUES ('${title}', '${Number(salary)}', '${department}')
`);

// UPDATE
const updateEmployeeRole = (employee_id, role_id) =>
  connection.query(`
    UPDATE employee
    SET role_id='${role_id}'
    WHERE id='${employee_id}'
`);

// DELETE
const deleteEmployee = (id) =>
  connection.query(`
    DELETE FROM employee
    WHERE id='${id}'
`);

const deleteRole = (id) =>
  connection.query(`
    DELETE FROM role
    WHERE id='${id}'
`);

const deleteDepartment = (id) =>
  connection.query(`
    DELETE FROM department
    WHERE id='${id}'
`);

// END
const closeConnection = () => connection.end();

module.exports = {
  closeConnection,

  // GET
  getEmployees,
  getDepartments,
  
  getRoles,

  // INSERT
  addEmployee,
  addDepartment,
  addRole,

  //  DELETE
  deleteEmployee,
  deleteRole,
  deleteDepartment,

  // UPDATE
  updateEmployeeRole,
};
