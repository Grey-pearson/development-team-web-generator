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
    card() {
        return `
        <div class="card text-white border-dark bg-primary mb-3 manager" style="max-width: 18rem;">
    <h3 class="card-header">${this.name}</h3>
    <div class="card-body">
        <h5 class="card-title">manager</h5>
        <p class="card-text id">id: ${this.id}</p>
        <p class="card-text email">email: ${this.email}</p>
        <p class="card-text officeNum">office number: ${this.officeNum}</p>
    </div>
</div>

`
    }
}

// testing
// const boss = new manager('tom', 1, 'gonk@gonk.com', 1)
// console.log(boss.card())
module.exports = manager