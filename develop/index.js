const inquirer = require('inquirer');
const fs = require('fs');
const { employee } = require('./lib/employee.js')
const manager = require('./lib/manager.js')
const engineer = require('./lib/engineer.js')
const intern = require('./lib/intern.js');
const { finished } = require('stream');
const prompt = inquirer.createPromptModule();
// let HTML

// inquireer prompt for user to pick which role they want to create,
// options let user pick from manager engineer and intern
// how do you make it so you can just add infinte cards to the html file? solution:
// concat the first card to the header of the html, then keep concating the new cards to that doc, then concat the bottom of the html when finished

const managerQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'whats your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'whats your id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'whats your email?'
    },
    {
        type: 'input',
        name: 'special',
        message: 'whats your office number?'
    },
]
const engineerQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'whats your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'whats your id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'whats your email?'
    },
    {
        type: 'input',
        name: 'special',
        message: 'whats your github username?'
    },
]
const internQuestions = [
    {
        type: 'input',
        name: 'title?',
        message: 'whats your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'whats your id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'whats your email?'
    },
    {
        type: 'input',
        name: 'special',
        message: 'whats your shcools name?'
    },
]
const options = [
    {
        type: 'list',
        name: 'role',
        message: 'what role do you want to do first?',
        choices: ['manager', 'engineer', 'intern', 'finished']
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
    inquirer.prompt(options).then((awnser) => {
        // console.log(awnser.role)
        fs.writeFile()
        switch (awnser.role) {
            case 'manager':
                cardCreator(managerQuestions, manager)
                break
            case 'engineer':
                cardCreator(engineerQuestions, engineer)
                break
            case 'intern':
                cardCreator(internQuestions, intern)
                break
            case 'finished':
                endCall()
        }
    })
}

// will take awnsers and will create the card element and save it,
// then will concat to the current portion of the HTML header
function cardCreator(arr, role) {
    // takes awnsers and fills out the aprptiate role to creat the card then combines them
    inquirer.prompt(arr).then((awnsers) => {
        // console.log(awnsers)
        const user = new role(awnsers.title, awnsers.id, awnsers.email, awnsers.special)
        // console.log(user.card())

        fs.appendFile()

        main()
    })
}

function endCall() {
    HTML = + htmlFooter
    console.log(HTML)
    console.log('ya did it')
}

main()

// const boss = new manager('1', 2, 'd', 5)
// console.log(boss.questions)
// console.log(employee)
// console.log('employee')