const generateTeam = require ('./src/TemplateHTML.js');

const fs =require('fs');
const inquirer = require ('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const newTeam = [];

const teamManager  = () => {
  return inquirer.prompt([

  {
    type: 'input',
    name: 'name',
    message: "Enter team manager's name",
    validate: nameInput => {
      if (nameInput) {
        return true;

      } else {
        console.log ("Please enter the manager's name");
        return false;
      }
    }
  },
{
  type: "input",
  name: "id",
  message: "Enter team manager's iD.",
  validate: IDInput => {
    if (isNaN(IDInput)){
      console.log ("Please enter the manager's ID");
      return false;

    } else {
      return true;
    }
  }

},
{
  type: 'input',
  name: 'email',
  message: "Enterr the manager's email.",
  validate: emailInput => {
    if (emailInput.includes('@') ){
      return true;
    } else {
      console.log('Please enter the employees email address!');
      return false;
      }
  }
},
{
  type: 'input',
  name: 'officeNumber',
  message: "Enter the manager's office number",
  validate: officeInput => {
      if  (isNaN(officeInput)) {
          console.log ('Please enter an office number!')
          return false; 
      } else {
          return true;
      }
  }
}
])
.then(managerInput =>{ 
  const {name, id, email, officeNumber}  = managerInput;
  const manager = new Manager (name, id, email, officeNumber);
  newTeam.push(manager);
  console.log(manager);

})
};
