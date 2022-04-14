const Engineer = require('../library/Engineer.js');
const AskUser = require('../library/AskUser.js');

test('Engineer object is created', () => {

    const employee = new Engineer();

    expect(employee.name).toBe(AskUser.employee);
    

});
