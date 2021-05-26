const inquirer = require("inquirer");
const questions = require("./questions");
const actions = require("../actions/actions");

const makeQuestions = async (questionsGroup, values) => {
  if (values) {
    questions.set(values);
  }

  return await inquirer.prompt(questions[questionsGroup]);
};

async function init() {
  // User choose
  const { choice } = await makeQuestions("mainMenu");

  // Shows choice
  console.log(choice);

  // Call action
  actions[choice](init, makeQuestions);
}

module.exports = init;
