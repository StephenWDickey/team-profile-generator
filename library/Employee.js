class Employee {
    constructor(name, email, position, employeeId) {
        this.name = name;
        this.email = email;
        this.position = position;
        this.employeeId = employeeId;
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

    getRole() {
        return "Employee";
    }

    
};



module.exports = Employee;

