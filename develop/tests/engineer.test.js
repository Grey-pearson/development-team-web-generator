const engineer = require('../lib/engineer')

describe('engineer class', () => {
    const gary = new engineer('gary', 1, 'email', 'username')
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
        expect(gary.getRole()).toBe('engineer')
    })
})