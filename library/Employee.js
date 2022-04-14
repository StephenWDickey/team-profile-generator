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

    
};



module.exports = Employee;

