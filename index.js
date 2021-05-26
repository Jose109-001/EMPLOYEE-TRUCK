require('dotenv').config();
const figlet = require('figlet');
const init = require('./prompt');

function showWelcome(callback) {
    // Shows message
    console.log(figlet.textSync('Employee'));
    console.log(figlet.textSync('Manager'));
    setTimeout(() => console.log('-'.repeat(50)), 500);
    setTimeout(() => console.log('-'.repeat(50)), 1000);

    // Run callback
    setTimeout(init, 2500);
}

showWelcome(init);

