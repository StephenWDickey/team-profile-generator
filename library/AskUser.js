const inquirer = require('inquirer');

const Manager = require('../library/Manager.js');

const Employee = require('../library/Employee.js');

const Engineer = require('./Engineer.js');

const Intern = require('../library/Intern.js');

const team = [];

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

                },
                {
                    type: 'confirm',
                    name: 'teamMemberAsk',
                    message: 'Add another team member?',
                    default: true,
                }
                ])
                .then((managerInfo) => {
                    const manager = new Manager(info.name, info.email, info.position, info.employeeId, managerInfo.officeNumber)

                    team.push(manager);

                    console.log(manager);
                    if (managerInfo.teamMemberAsk === true) {
                        new AskUser().initializeQuestions();
                    }
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
                                            inquirer.prompt({
                                                
                                                type: 'confirm',
                                                name: 'teamMemberAsk2',
                                                message: 'Add another team member?',
                                                default: true,

                                            })
                                            .then((engineerInfo4) => {

                                                team.push(engineer);

                                                if (engineerInfo4.teamMemberAsk2 === true) {

                                                    new AskUser().initializeQuestions();
                                                }

                                            })

                                        })
                                    }

                                    else {
                                        
                                        const engineer = new Engineer(info.name, info.email, info.position, info.employeeId)
                                        console.log(engineer);
                                        inquirer.prompt({
                                                
                                            type: 'confirm',
                                            name: 'teamMemberAsk2',
                                            message: 'Add another team member?',
                                            default: true,

                                            })
                                            .then((engineerInfo4) => {

                                                team.push(engineer);

                                                if (engineerInfo4.teamMemberAsk2 === true) {

                                                    new AskUser().initializeQuestions();
                                                }

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
                                            team.push(intern);
                                            console.log(intern)
                                            inquirer.prompt({
                                                
                                                type: 'confirm',
                                                name: 'teamMemberAsk3',
                                                message: 'Add another team member?',
                                                default: true,

                                            })
                                            .then((internInfo3) => {
                                                if (internInfo2.teamMemberAsk3 === true) {

                                                    new AskUser().initializeQuestions();
                                                }

                                            })
                                        })

                                    }
                                
                                })

                        }

                    })
                
                
            }

        })
};

module.exports = AskUser;