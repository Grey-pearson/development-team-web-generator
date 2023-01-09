const employee = require('./employee')

// adding github username to employee data
// modifying the getRole() to say engineer
class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getRole() {
        console.log('engineer')
        return 'engineer'
    }
}


const fred = new engineer('fred', 2, 'gonk@gonk.com', 'freddyboi')
fred.getName()
fred.getId()
fred.getEmail()
fred.getRole()
console.log(fred.github)

// console.log('testing')