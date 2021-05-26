const db = require("../db/model");

const quit = () => db.closeConnection();

module.exports = { quit };
