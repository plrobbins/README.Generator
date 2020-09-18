const inquirer = require("inquirer");
const axios = require("axios");

//GitHub details
const api = {
    getUser(username) {
        inquirer
        .prompt({
            message: "What is your GitHub username?",
            name: "username"
        })

        .then(function({ username }) {
            const queryUrl = `https://api.github.com/users/${username}`;
        });
    }
};