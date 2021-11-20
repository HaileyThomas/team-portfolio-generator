const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require('./utils/page-template');
const { writeFile } = require("./utils/generate");
let managers = [];
let engineers = [];
let interns = [];

function initializeApp() {
    console.log("Welcome to our Team Profile Generator!");
};

function promptData() {
    return inquirer
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
            if (answers.role === 0) {
                const employee = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNumber);
                managers.push(employee);
            }
            if (answers.role === 1) {
                const employee = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.github);
                engineers.push(employee);
            }
            if (answers.role == 2) {
                const employee = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
                interns.push(employee);
            }
        })
};

function confirmNew() {
    return inquirer
        .prompt([
            {
                type: "confirm",
                name: "confirmed",
                message: "Would you like to add a new employee?",
                default: false
            }
        ])
        .then((reply) => {
            if (reply.confirmed) {
                promptData().then(confirmNew);
            } else {
                let employees = [...managers, ...engineers, ...interns];
                console.log(employees);
                return employees;
            }
        })
};

initializeApp();
promptData()
    .then(confirmNew)
    .then(employees => {
        return generatePage(employees);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    })