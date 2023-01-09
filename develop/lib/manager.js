const employee = require('./employee')

// adding office number to employee data
// modifying the getRole() to say manager
class manager extends employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum
    }
    getRole() {
        console.log('manager')
        return 'manager'
    }
}


const boss = new manager('tom', 1, 'gonk@gonk.com', 1)
boss.getName()
boss.getId()
boss.getEmail()
boss.getRole()
console.log(boss.officeNum)

// console.log('testing')