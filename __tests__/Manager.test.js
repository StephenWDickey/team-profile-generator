const Manager = require('../library/Manager.js');
const AskUser = require('../library/AskUser.js');

test('Manager object is created', () => {

    const manager = new Manager("Steve", "manager@gmail.com", "Manager", 1, 1);

    expect(manager.position).toBe("Manager");
    

});
