const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "description of your project?",
  },
  {
    type: "input",
    message: "program installation?",
    name: "install",
  },
  {
    type: "input",
    message: "usage?",
    name: "usage",
  },
  {
    type: "list",
    message: "License?",
    name: "license",
    choices: ["MIT", "Mozilla", "IBM", "Apache", "ISC", "None"],
  },
  {
    type: "input",
    message: "contributing?",
    name: "contributing",
  },
  {
    type: "input",
    message: "tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "please provide github and email for questions",
    name: "questions",
  },
  {
    type: "confirm",
    message: "include table of Contents?",
    name: "includetoc",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);

    // format the dat in readme friendly way
    const context = generateMarkdown(data);
    console.log(context);
    writeToFile("Readme.md", context);
  });
}

// Function call to initialize app
init();
