const Intern = require('../library/Intern.js');
const AskUser = require('../library/AskUser.js');

test('Intern object is created', () => {

    const employee = new Intern();

    expect(employee.name).toBe(AskUser.employee);
    

});
