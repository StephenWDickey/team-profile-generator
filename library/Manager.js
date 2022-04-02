const inquirer = require('inquirer');
const Employee = require('../library/Employee.js');

class Manager extends Employee {
    constructor(name, email, position, employeeId, officeNumber) {
        super(name, email, position);
        this.name = name;
        this.email = email;
        this.position = position;
        this.employeeId = employeeId;
        this.officeNumber = officeNumber;
    }
};

module.exports = Manager;