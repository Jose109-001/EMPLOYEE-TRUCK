const connection = require('./connect');

const addEmployees = `
    INSERT INTO employee
        (first_name, last_name, role_id, manager_id)
    VALUES
        ('John', 'Doe', 1, NULL),
        ('Jane', 'Doe', 2, NULL),
        ('Maria', 'Conor', 3, NULL),
        ('John', 'Conor', 2, 1);
`;

const addDepartments = `
    INSERT INTO department
        (name)
    VALUES
        ('IT'),
        ('Management'),
        ('Sales')
`;

const addRoles = `
    INSERT INTO role
        (title, salary, department_id)
    VALUES
        ('Programmer', 50000, 1),
        ('Admin', 60000, 2),
        ('Salesman', 45000, 3)
`;

(async function() {
    // await connection.query(addEmployees);
    // await connection.query(addDepartments);
    await connection.query(addRoles);

    connection.end();
}())