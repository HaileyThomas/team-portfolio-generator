const inquirer = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class App {
    constructor() {
        this.employees = [];
    }

    initializeApp() {
        console.log("Welcome to our Team Profile Generator!");

        inquirer
            .prompt([{
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's id number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?"
            },
            {
                type: "list",
                name: "role",
                message: "What is the employee's role?",
                choices: [{
                    name: "Manager",
                    value: 0
                },
                {
                    name: "Engineer",
                    value: 1
                },
                {
                    name: "Intern",
                    value: 2
                }]
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                when: (answers) => answers.role === 0
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's GitHub?",
                when: (answers) => answers.role === 1
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
                when: (answers) => answers.role === 2
            }
            ])
            .then(answers => {
                this.employees.push(answers);
                console.log(answers);
                console.log(this.employees);
            })
        //.then(confirmNew(answers))
    }

    confirmNew() {
        inquirer
            .prompt([{
                type: "confirm",
                name: "confirmed",
                message: "Would you like to add another employee?",
                default: false
            }, function (reply) {
                if (reply.confirmed) {
                    initializeApp();
                } else {
                    console.log("Thank you! Goodbye!");
                }
            }])
    }
}

module.exports = App;