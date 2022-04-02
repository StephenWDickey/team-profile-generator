
const Employee = require('../library/Employee.js');

// jest.mock('../library/Employee.js');

test('employee object is created', () => {

    const employee = new Employee('Stephen Dickey', 'StephenDickey@programmer.com', 'Developer');

    expect(employee.name).toBe('Stephen Dickey');
    expect(employee.email).toBe('StephenDickey@programmer.com');
    expect(employee.position).toBe('Developer');

});