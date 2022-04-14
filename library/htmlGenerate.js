const fs = require('fs');
const path = require("path");
const inquirer = require('inquirer');
const Employee = require('../library/Employee.js');
const Manager = require('../library/Manager.js');
const Intern = require('../library/Intern.js');
const AskUser = require('../library/AskUser.js');
const Engineer = require('./Engineer.js');

// parameter will be our new array we create from team
function generateCards(teamArray) {
  //Local Variables
  //Cards to save the html cards
  let cards = [],
    role;

  for (let i = 0; i < teamArray.length; i++) {
    // we take the array 'team' that we generated from user input!
    // then we put that info into a new array called teamArray
    // we specify an index position 
    const team = teamArray[i];
    role = team.getRole();
    if (role === "Manager") {
      cards.push(generateManagerCard(team));
    } else if (role === "Engineer") {
      cards.push(generateEngineerCard(team));
    } else if (role === "Intern") {
      cards.push(generateInternCard(team));
    } else {
      console.log("Can't generate card");
    }
  }

  return cards.join(``);
}

function generateManagerCard(Manager) {
  return `
      <div class="card m-1 shadow" style="width: 18rem">
        <div class='card-header bg-primary'>
          <h3 class="card-title text-light">${(Manager.name)}</h3>
          <h6 class="card-text text-light"><i class="fa fa-coffee"></i> ${Manager.position}</h6>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Manager.employeeId}</li>
            <li class="list-group-item">Position: ${Manager.position}</li>
            <li class="list-group-item">Email: <a href="mailto: ${
              Manager.email
            }"> ${Manager.email} </a></li>
            <li class="list-group-item">Office Number: ${
              Manager.officeNumber}
              </li>
          </ul>
        </div>
      </div>
      `;
}

function generateEngineerCard(Engineer) {
  return `
    <div class="card m-1 shadow" style="width: 18rem">
      <div class='card-header bg-success'>
        <h3 class="card-title text-light">${Engineer.name}</h3>
        <h6 class="card-text text-light"><i class="fa fa-laptop"></i> ${Engineer.position}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${Engineer.employeeId}</li>
          <li class="list-group-item">Position: ${Engineer.position}</li>
          <li class="list-group-item">Email: <a href="mailto: ${
            Engineer.email
          }"> ${Engineer.email} </a></li>
          <li class="list-group-item">GitHub: <a href=https://github.com/${
            Engineer.gitHub
          }> ${Engineer.gitHub} </a></li>
        </ul>
      </div>
    </div>
    `;
}

function generateInternCard(Intern) {
  return `
    <div class="card m-1 shadow" style="width: 18rem">
      <div class='card-header bg-warning'>
        <h3 class="card-title text-light">${Intern.name}</h3>
        <h6 class="card-text text-light"><i class="fa fa-graduation-cap"></i> ${Intern.position}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${Intern.employeeId}</li>
          <li class="list-group-item">Position: ${Intern.position}</li>
          <li class="list-group-item">Email: <a href="mailto: ${
            Intern.email
          }"> ${Intern.email} </a></li>
          <li class="list-group-item">School: ${Intern.school}</li>
        </ul>
      </div>
    </div>
    `;
}

// we pass our team array into this generateTeam function
function htmlGenerate(teamArray) {
  

  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <title>My Team</title>
            <body>
            <div class="jumbotron jumbotron-fluid text-light bg-danger">
              <div class="container">
                <h1 class="display-4 text-center">My Team</h1>
              </div>
            </div>
            <div class="d-flex flex-row flex-wrap justify-content-center">
            ${generateCards(teamArray)}
            </div>
            </body>
        </head>
        </html>
    `;
}

module.exports = htmlGenerate;
