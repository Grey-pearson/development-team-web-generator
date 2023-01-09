const employee = require('./employee')

// adding school to employee data
// modifying the getRole() to say intern
class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getRole() {
        console.log('intern')
        return 'intern'
    }
}


const jerry = new intern('jerry', 3, 'gonk@gonk.com', 'MofM')
jerry.getName()
jerry.getId()
jerry.getEmail()
jerry.getRole()
console.log(jerry.school)

// console.log('testing')