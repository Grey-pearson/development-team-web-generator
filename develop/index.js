const inquirer = require('inquirer');
const fs = require('fs');
const engineer = require('./lib/manager')
const engineer = require('./lib/engineer')
const engineer = require('./lib/intern')

// inquireer prompt for user to pick which role they want to create,
// options let user pick from manager engineer and intern
// 
//
//
//
//
//
//
//
//
//
//
//
// 

const managerQuestions = [
    {
        type: 'input',
        name: 'title?',
        message: 'whats your name'
    },
]