const generateTeam = require ('./src/TemplateHTML.js');

const fs =require('fs');
const inquirer = require ('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const newTeam = [];

const questions = async () => {
    const answers = await inquirer
    return inquirer.prompt([
        {
        type: 'input',
        message: 'What is your name?',
        name: 'name',

    },
    {
        type: 'input',
        message: 'What is your ID',
        name: 'id',

},
{
    type:'input',
    message: 'What is your email',
    name: 'email'

},
])

if (answers.role === "Manager") {
    const managerAns = await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your office number",
          name: "officeNumber",
        },
      ])
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        managerAns.officeNumber
      );
      newTeam.push(newTeam);
      
  
  } else if (answers.role === "Engineer") {
    const githubAns = await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your GitHub user?",
          name: "github",
        }
      ])
        const newEngineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          githubAns.github
        );
        newTeam.push(newTeam);
      

  } else if (answers.role === "Intern") {
    const internAns = await inquirer
      .prompt([
        {
          type: "input",
          message: "What university did you attend?",
          name: "school",
        },
      ])
      
      const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        internAns.school
      );
      newTeam.push(newTeam);          
  } 

}; 

async function promptQuestions() {
await questions()


const addMemberAns = await inquirer
.prompt([
  {
    name:'addMember',
    type: 'list',
    choices: ['Add a new member', 'Create team'],
    message: "What would you like to do next?"
  }
])

if (addMemberAns.addMember === 'Add a new member') {
  return promptQuestions()
}
return createTeam();
}  

promptQuestions();

function createTeam () {
console.log("new guy", newTeam)
fs.writeFileSync(
"./output/index.html",
generateTeam(newTeam),
"utf-8"
);
}