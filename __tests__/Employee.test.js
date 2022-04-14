
const Employee = require('../library/Employee.js');
const AskUser = require('../library/AskUser.js');

// jest.mock('../library/Employee.js');

test('employee object is created', () => {

    const employee = new Employee("Steve", "stephendickey@gmail.com", "Employee", 0);

    expect(employee.position).toBe("Employee");
    

});

