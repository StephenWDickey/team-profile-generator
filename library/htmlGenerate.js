const fs = require('fs');
const path = require("path");
const inquirer = require('inquirer');
const Employee = require('../library/Employee.js');
const Manager = require('../library/Manager.js');
const Intern = require('../library/Intern.js');
const AskUser = require('../library/AskUser.js');



const generateHtml = () => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Team Profile Generator!</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            <link rel="stylesheet" href="style.css">
        </head>
        
        <body>
            
        </body>
        
        </html>`
    };

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
    };
    
