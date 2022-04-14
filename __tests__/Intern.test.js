const Intern = require('../library/Intern.js');
const AskUser = require('../library/AskUser.js');

test('Intern object is created', () => {

    
    const intern = new Intern("Steve", "student@gmail.com", "Intern", 3, "UCB coding bootcamp");

    expect(intern.position).toBe("Intern");
    

});
