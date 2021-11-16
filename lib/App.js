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
    }

}

module.exports = App;