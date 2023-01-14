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
    card() {
        return `
        <div class="card text-white border-dark bg-primary mb-3 manager" style="max-width: 18rem;">
    <h3 class="card-header">${this.name}</h3>
    <div class="card-body">
        <h5 class="card-title">manager</h5>
        <p class="card-text id">id: ${this.id}</p>
        <p class="card-text email">email: ${this.email}</p>
        <p class="card-text github">github: ${this.github}</p>
    </div>
</div>

`
    }
}

// const fred = new engineer('fred', 2, 'gonk@gonk.com', 'freddyboi')
// console.log(fred.card())
module.exports = engineer