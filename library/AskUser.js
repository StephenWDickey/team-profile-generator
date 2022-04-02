const inquirer = require('inquirer');

const Manager = require('../library/Manager.js');

const Employee = require('../library/Employee.js');

const Engineer = require('./Engineer.js');

const Intern = require('../library/Intern.js');

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
            type: 'input',
            name: 'employeeId',
            message: 'Please enter employee ID'
        },
        {
            type: 'confirm',
            name: 'managerAsk',
            message: 'Is this team member a manager?',
            default: true,
        }
        ])
        .then((info) => {
            if (info.managerAsk === true) {
                inquirer.prompt([
                {
                    type: 'text',
                    name: 'officeNumber',
                    message: "Enter manager's office number"

                }
                ])
                .then((managerInfo) => {
                    const manager = new Manager(info.name, info.email, info.position, info.employeeId, managerInfo.officeNumber)
                    console.log(manager);
                })
          
            }

            else if (info.managerAsk === false) {
                inquirer.prompt (
                    {
                        type: 'confirm',
                        name: 'engineerAsk',
                        message: 'Is this team member an engineer?',
                        default: true,
                    })
                    .then((engineerInfo) => {

                        if (engineerInfo.engineerAsk === true) {
                            inquirer.prompt (
                                {
                                    type: 'confirm',
                                    name: 'gitHubAsk',
                                    message: "is there a gitHub account associated with this team member?",
                                    default: true,
                                })
                                .then((engineerInfo2) => {
                                    if (engineerInfo2.gitHubAsk === true) {
                                        inquirer.prompt({
                                            type: 'text',
                                            name: "gitHubInfo",
                                            message: "Please enter team member's GitHub username"
                                        })
                                        .then((engineerInfo3) => {
                                            const engineer = new Engineer(info.name, info.email, info.position, info.employeeId, engineerInfo3.gitHubInfo)
                                            console.log(engineer);

                                        })
                                    }
                                })
                        }
                        else {
                            inquirer
                                .prompt(
                                {
                                    type: 'confirm',
                                    name: 'internAsk',
                                    message: 'Is this team member an intern?',
                                    default: true,

                                })
                                .then((internInfo) => {

                                    if (internInfo.internAsk === true) {
                                        inquirer.prompt({
                                            type: 'input',
                                            name: 'school',
                                            message: "What school does your intern attend?"
                                        })
                                        .then((internInfo2) => {
                                            const intern = new Intern(info.name, info.email, info.position, info.employeeId, internInfo2.school)
                                            console.log(intern)
                                        })

                                    }
                                
                                })

                        }

                    })
                
                
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