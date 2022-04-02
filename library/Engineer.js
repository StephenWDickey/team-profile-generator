const inquirer = require('inquirer');
const Employee = require('../library/Employee.js');

class Engineer extends Employee {
    constructor(name, email, position, employeeId, gitHub) {
        super(name, email, position);
        this.name = name;
        this.email = email;
        this.position = position;
        this.employeeId = employeeId;
        this.gitHub = gitHub;
    }
};

module.exports = Engineer;