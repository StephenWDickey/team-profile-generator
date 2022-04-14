const Engineer = require('../library/Engineer.js');
const AskUser = require('../library/AskUser.js');

test('Engineer object is created', () => {

    const engineer = new Engineer("Steve", "engineer@gmail.com", "Developer", 2, "SoftwareDeveloper@github.com");

    expect(engineer.position).toBe("Developer");
    

});
