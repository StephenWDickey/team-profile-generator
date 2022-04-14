const Manager = require('../library/Manager.js');
const AskUser = require('../library/AskUser.js');

test('Manager object is created', () => {

    const employee = new Manager();

    expect(employee.name).toBe(AskUser.employee);
    

});
