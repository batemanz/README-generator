// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'description of your project?',
    },
    {
        type: 'list',
        message: 'table of contents?',
        name: 'table',
        choices: ['title', 'description', 'table of contents', 'installation', 'usage', 'license', 'contributing', 'test', 'questions'],
    },
    {
        type: 'input',
        message: 'program installation?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'usage?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices: ['MIT', 'description', 'table of contents', 'installation', 'usage', 'license', 'contributing', 'test', 'questions'],
    },
    {
        type: 'input',
        message: 'contributing?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'please provide github and email for questions',
        name: 'questions',
    },
  ])
  .then((data) => {
    const filename = `${data.Title.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
