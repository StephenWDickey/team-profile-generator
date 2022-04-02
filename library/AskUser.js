const inquirer = require('inquirer');

function AskUser() {

};

AskUser.prototype.initializeQuestions = function () { 
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is the name of the team member?'
        })
        // .then((answers)) => {
        // }
};

module.exports = AskUser;