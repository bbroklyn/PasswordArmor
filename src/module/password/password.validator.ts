import { validationConfig } from './password.module.js'

export interface ValidationResult {
	isValid: boolean
	errors: string[]
}

export class PasswordValidator {
	private rules: string[] = []
	private errorMessages: string[] = []

	minlet(length: number): PasswordValidator {
		if (length <= 0) {
			throw new Error(validationConfig.error.length)
		}
		this.rules.push(`minlet:${length}`)
		return this
	}

	maxlet(length: number): PasswordValidator {
		if (length <= 0) {
			throw new Error(validationConfig.error.length)
		}
		this.rules.push(`maxlet:${length}`)
		return this
	}

	hasdigit(count: number): PasswordValidator {
		if (count <= 0) {
			throw new Error(validationConfig.error.length)
		}
		this.rules.push(`hasdigit:${count}`)
		return this
	}

	hasspec(count: number): PasswordValidator {
		if (count <= 0) {
			throw new Error(validationConfig.error.length)
		}
		this.rules.push(`hasspec:${count}`)
		return this
	}

	hasupper(count: number): PasswordValidator {
		if (count <= 0) {
			throw new Error(validationConfig.error.length)
		}
		this.rules.push(`hasupper:${count}`)
		return this
	}

	validate(password: string): ValidationResult {
		this.errorMessages = []
		if (typeof password !== 'string') {
			this.errorMessages.push(validationConfig.error.password)
			return { isValid: false, errors: this.errorMessages }
		}

		this.rules.forEach(rule => {
			const [ruleName, ruleValue] = rule.split(':')
			const value = parseInt(ruleValue, 10)
			switch (ruleName) {
				case 'minlet':
					if (password.length < value) {
						this.errorMessages.push(
							`Password should be at least ${value} characters long`
						)
					}
					break
				case 'maxlet':
					if (password.length > value) {
						this.errorMessages.push(
							`Password should be at most ${value} characters long`
						)
					}
					break
				case 'hasdigit':
					const digitCount = (password.match(/\d/g) || []).length
					if (digitCount < value) {
						this.errorMessages.push(
							`Password should have at least ${value} digit(s)`
						)
					}
					break
				case 'hasspec':
					const specialCount = (
						password.match(new RegExp(validationConfig.regex.symbols, 'g')) ||
						[]
					).length
					if (specialCount < value) {
						this.errorMessages.push(
							`Password should have at least ${value} special character(s)`
						)
					}
					break
				case 'hasupper':
					const upperCount = (password.match(/[A-Z]/g) || []).length
					if (upperCount < value) {
						this.errorMessages.push(
							`Password should have at least ${value} uppercase letter(s)`
						)
					}
					break
			}
		})

		return {
			isValid: this.errorMessages.length === 0,
			errors: this.errorMessages,
		}
	}
}
