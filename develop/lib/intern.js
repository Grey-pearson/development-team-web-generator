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
    card() {
        return `
        <div class="card text-white border-dark bg-primary mb-3 manager" style="max-width: 18rem;">
    <h3 class="card-header">${this.name}</h3>
    <div class="card-body">
        <h5 class="card-title">intern</h5>
        <p class="card-text id">id: ${this.id}</p>
        <p class="card-text email">email: ${this.email}</p>
        <p class="card-text github">github: ${this.school}</p>
    </div>
</div>

`
    }
}


// const jerry = new intern('jerry', 3, 'gonk@gonk.com', 'MofM')
// console.log(jerry.card())
module.exports = intern