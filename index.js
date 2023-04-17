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
.then(managerData =>{ 
  const {name, id, email, officeNumber}  = managerData;
  const manager = new Manager (name, id, email, officeNumber);
  newTeam.push(manager);
  console.log(manager);

})
};

const teamEmployees = () => {
  console.log ('Adding employees to the team');

  return inquirer.prompt ([
    {
      type:'input',
      name: 'name',
      messages: 'What is the name of the employee?',
      validate: (nameInput) => {
        if (nameInput){
          return true;

        } else {
          console.log ("Enter the name of the employee!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID?",
      validate: IDInput => {
      if  (isNaN(IDInput)) {
        console.log ("Enter the employee's ID!")
        return false; 
    } else {
        return true;
    }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the employee's email?",
    validate: emailInput => {
      if (emailInput.includes('@') ){
        return true;
      } else {
        console.log("Enter the employee's email address!");
        return false;
        }
    }
  },
{
  type: 'list',
  name: 'role',
  message: "What is the employee's role?",
  choices: ['Engineer', 'Intern']
},
{
  type: 'input',
  name: 'github',
  message: "What is the employee's github?",
  when: (githubInput) => githubInput.role === 'Engineer', 
  validate: githubInput =>{
    if (githubInput) {

    return true;
  } else {
    console.log ("Enter the employee's github username");
    return false;

  }
}
},
{
  type: 'input',
  name: 'school',
  message: "Enter the intern's school",
  when: (schoolInput) => schoolInput.role === 'Intern',
  validate: schoolInput  => {
    if (schoolInput){
      return false; 
      
    } else {
      console.log ("Enter the intern's school")

    }
  }

},
{
  type: 'confirm',
  name: 'addEmployees',
  message: ":Would you like to add more employee's to the team?",
  default: false
}

  ])
.then(employeeData => {
  let { name, id, email, role, github, school, addEmployees } = employeeData;
  let employee;

if (role === "Engineer"){
  employee = new Engineer (name, id, email, github);
  console.log (employee);

} else if (role === "Intern") {
  employee = new Intern (name, id, email, school);
  console.log (employee);

}

newTeam.push(employee);

if (addEmployees){
  return teamEmployees(newTeam);

} else {
  return newTeam;

}
})
};
 
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      
      if (err) {
          console.log(err);
          return;
    
      } else {
          console.log("Your team profile has been successfully created!")
      }
  })
}; 
teamManager()
.then(teamEmployees)
.then(newTeam => {
  return TemplateHTML(newTeam);

})
.then(HTML => {
  return writeFile(HTML);

})
.catch (err => {
  console.log(err);
});
