class employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        console.log(this.name)
        return this.name

    }
    getId() {
        console.log(this.id)
        return this.id

    }
    getEmail() {
        console.log(this.email)
        return this.email

    }
    getRole() {
        console.log('employee')
        return 'employee'
    }

}

module.exports = employee