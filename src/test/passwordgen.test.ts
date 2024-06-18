import { expect } from 'chai'
import { describe, it } from 'mocha'
import { generatePassword } from '../module/password/password.generator.js'

describe('Password Generator Tests', () => {
	it('should generate a password of the specified length', () => {
		const length = 12
		const password = generatePassword(length, true, true, true)
		expect(password).to.have.length(length)
	})

	it('should include uppercase letters if specified', () => {
		const password = generatePassword(12, true, false, false)
		expect(password).to.match(/[A-Z]/)
	})

	it('should include digits if specified', () => {
		const password = generatePassword(12, false, true, false)
		expect(password).to.match(/[0-9]/)
	})

	it('should include special symbols if specified', () => {
		const password = generatePassword(12, false, false, true)
		const specialSymbols = '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?€£¥₹§±'
		const hasSpecialSymbol = specialSymbols
			.split('')
			.some(char => password.includes(char))
		expect(hasSpecialSymbol).to.be.true
	})

	it('should generate a password with a mix of all character types if all options are true', () => {
		const password = generatePassword(12, true, true, true)
		expect(password).to.match(/[a-z]/) // Lowercase letters
		expect(password).to.match(/[A-Z]/) // Uppercase letters
		expect(password).to.match(/[0-9]/) // Digits
		const specialSymbols = '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?€£¥₹§±'
		const hasSpecialSymbol = specialSymbols
			.split('')
			.some(char => password.includes(char))
		expect(hasSpecialSymbol).to.be.true
	})
})
