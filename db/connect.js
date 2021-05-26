const mysql = require('mysql2');
const util = require('util')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '##Gasper12345678',
    database: 'employees',
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;
