const inquirer = require('inquirer');
const Employee = require('../library/Employee.js');

class Intern extends Employee {
    constructor(name, email, position, employeeId, school) {
        super(name, email, position);
        this.name = name;
        this.email = email;
        this.position = position;
        this.employeeId = employeeId;
        this.school = school;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getPosition() {
        return this.position;
    }

    getId() {
        return this.employeeId;
    }

    getSchool() {
        return this.gitHub;
    }
    
    getRole() {
        return "Intern";
    }
};

module.exports = Intern;