
const Employee = require('../library/Employee.js');
const AskUser = require('../library/AskUser.js');

// jest.mock('../library/Employee.js');

test('employee object is created', () => {

    const employee = new Employee();

    expect(employee.employee).toBe(AskUser.employee);
    

});

test('employee info populates from inquirer input', () => {
    const employee = new Employee();
    expect(employee.employee).toBe(AskUser.employee);
});