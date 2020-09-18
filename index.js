const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");
const api = require("./utils/api");

//Questions
function questions() {
    return inquirer.prompt([
      {
          type: "input",
          message: "What is the title of your project?",
          name: "title"
      },
      {
          type: "input",
          message: "Please provide a description of your project.",
          name: "description"
      },
      {
          type: "input",
          message: "What packages need to be installed for your project?",
          name: "installation"
      },
      {
          type: "input",
          message: "Please explain how your project can be used.",
          name: "usage"
      },
      {
          type: "input",
          message: "Please list all of the contributors for this project.",
          name: "contributor"
      },
      {
          type: "input",
          message: "What command is used to run a test?",
          name: "test"
      },
      {
          type: "list",
          name: "license",
          message: "What kind of license is needed?",
          name: "license",
          choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"]
      },
      {
          type: "input",
          message: "What is your GitHub username?",
          name: "username"
      },
      {
          type: "input",
          message: "What is your email address?",
          name: "email"
      }
    ]);
}; 

//Write to Readme
function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
        console.log("You have successfully written your README file");
    });
};

//Generate Readme
async function init() {
    try {
        const answers = await questions();
        generateReadme(answers);
        writetoFile("README.md", generateReadme(answers));

    } catch (err) {
        console.log(err);
    }
};

init();
