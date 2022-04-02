const inquirer = require('inquirer');
const Employee = require('../library/Employee.js');


function AskUser() {
    this.employee;
    
};

AskUser.prototype.initializeQuestions = function () { 
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'What is the name of the team member?'
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the team member's email address?"
        },
        {
            type: 'text',
            name: 'position',
            message: "What is the team member's position?"
        },
        {
            type: 'confirm',
            name: 'gitHubAsk',
            message: "is there a gitHub account associated with this team member?",
            default: true,
            
        }
        ])
        .then((info) => {
            
            if (info.gitHubAsk === true) {
                inquirer.prompt({
                    type: 'text',
                    name: "gitHubInfo",
                    message: "Please enter team member's GitHub username"
                })
                .then((info2) => {
                    const employee = new Employee(info.name, info.email, info.position, info2.gitHubInfo)
                    console.log(employee);
                    
                })
            }

            else {
                const employee = new Employee(info.name, info.email, info.position);
                
                console.log(employee);
            }
        })
};

function addTeamMember() {
    inquirer.prompt({
        type: "confirm",
        name: "newTeamMember",
        message: "Add another team member?",
        default: true,
    })
    .then((addYes) => {
        if (newTeamMember === true) {
            AskUser()
        }
        else {
            
        }
    })
}

module.exports = AskUser;