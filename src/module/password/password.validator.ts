// TODO: Checking the password for suitability.
// TODO: minlet +, maxlet +, hasdigit

export class PasswordValidator {
	private rules: string[]

	constructor() {
		this.rules = []
	}

	minlet(length: number): PasswordValidator {
		this.rules.push(`.minlet(${length})`)
		return this
	}

	maxlet(length: number): PasswordValidator {
		this.rules.push(`.maxlet(${length})`)
		return this
	}

	hasdigit(length: number): PasswordValidator {
		this.rules.push(`.hasdigit(${length})`)
		return this
	}
	hasspec(length: CharacterData): PasswordValidator {
		this.rules.push(`.hasspec(${length})`)
		return this
	}
	hasupper(length: string): PasswordValidator {
		this.rules.push(`.hasupper(${length})`)
		return this
	}
}
