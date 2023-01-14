const employee = require('../lib/employee')
// npm test

describe('employee class', () => {
    const gary = new employee('gary', 1, 'email')
    it('it can print and employees name', () => {
        expect(gary.getName()).toBe('gary')
    })

    it('it can print and employees id', () => {
        expect(gary.getId()).toBe(1)
    })

    it('it can print and employees email', () => {
        expect(gary.getEmail()).toBe('email')
    })

    it('it can print and employees role', () => {
        expect(gary.getRole()).toBe('employee')
    })
})