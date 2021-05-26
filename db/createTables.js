const connection = require('./connect');

const createEmployees = `
CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    manager_id INT UNSIGNED
);`;

const createDepartment = `
CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);`;

const createRole = `
CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary decimal NOT NULL,
    department_id INT UNSIGNED NOT NULL
);`;

(async function() {
    // await connection.query(`DROP TABLE employee`);
    // await connection.query(createDepartment);
    await connection.query(createRole);

    connection.end();
})()
