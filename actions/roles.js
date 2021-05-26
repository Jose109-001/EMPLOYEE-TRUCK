const db = require("../db/model");

const viewAllRoles = async (callback) => {
  const roles = await db.getRoles();
  console.table(roles);
  callback(roles);
  return roles;
};

const addRole = async (callback, makeQuestions) => {
  const departments = (await db.getDepartments()).map(({ id }) => id);

  const role = await makeQuestions("addRole", { departments });

  const { confirm } = await makeQuestions("confirmInput");

  if (confirm) {
    await db.addRole(role);
    console.table(role);
  }

  callback();
};

const deleteRole = async (callback, makeQuestions) => {
    // Get all roles to decide which one to delete
    const roles = (await db.getRoles()).map(({ id }) => id);
  
    // Get role ID
    const { role } = await makeQuestions("deleteRole", { roles });
  
    // Asks for confirmation
    const { confirm } = await makeQuestions("confirmInput");
  
    if (confirm) {
      // Delete role from database
      await db.deleteRole(role);
    }
  
    callback();
  };

module.exports = {
  viewAllRoles,
  addRole,
  deleteRole
};
