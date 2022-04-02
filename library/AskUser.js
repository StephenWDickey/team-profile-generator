const inquirer = require('inquirer');
const Employee = require('../library/Employee.js');

function AskUser() {
    this.employee;
};

AskUser.prototype.initializeQuestions = function () { 
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is the name of the team member?'
        })
        .then((name) => {
            this.employee = new Employee(name);
            console.log(this.employee);
        })
};

module.exports = AskUser;