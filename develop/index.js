const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')
const prompt = inquirer.createPromptModule();



// inquireer prompt for user to pick which role they want to create,
// options let user pick from manager engineer and intern
// how do you make it so you can just add infinte cards to the html file? solution:
// concat the first card to the header of the html, then keep concating the new cards to that doc, then concat the bottom of the html when finished

const managerQuestions = [
    {
        type: 'input',
        name: 'title?',
        message: 'whats your name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'whats your name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'whats your name'
    },
]
const engineerQuestions = [
    {
        type: 'input',
        name: 'title?',
        message: 'whats your name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'whats your name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'whats your name'
    },
]
const internQuestions = [
    {
        type: 'input',
        name: 'title?',
        message: 'whats your name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'whats your name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'whats your name'
    },
]
const options = [
    {
        type: 'list',

    }
]


// the string for HTML header
const htmlHeader = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <div id="mainBody">`
// string for the bottom half of HTML header
const htmlFooter = `
</div>
<style>
    #mainBody {
        display: grid;
        align-items: center;
        justify-content: center;
        padding: 10rem;
    }
</style>
</body>

</html>`
// will run the main program triggering questions and functions
function main() {
    prompt(options).then(
        // ah idk awnsers prompt(specified option???)
    );
}
// will take awnsers and will create the card element and save it,
// then will concat to the current portion of the HTML header
function cardCreator