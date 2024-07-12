import { generateRandomString } from '../../common/utils.js'
import { emailConfig } from './email.module.js'

export class EmailGenerator {
	private length: number
	private domain: string
	private tld: string

	constructor() {
		this.length = emailConfig.DEFAULT_LENGTH
		this.domain = emailConfig.DEFAULT_DOMAIN
		this.tld = emailConfig.DEFAULT_TLD
	}

	setLength(length: number): this {
		if (length <= 0) {
			throw new Error(emailConfig.error.length)
		}
		this.length = length
		return this
	}

	at(domain: string): this {
		if (!emailConfig.regex.domain.test(domain)) {
			throw new Error(emailConfig.error.domain)
		}
		this.domain = domain
		return this
	}

	end(tld: string): this {
		if (!emailConfig.regex.tld.test(tld)) {
			throw new Error(emailConfig.error.tld)
		}
		this.tld = tld
		return this
	}

	generate(): string {
		const localPart = generateRandomString(this.length, emailConfig.characters)
		if (!emailConfig.regex.localPart.test(localPart)) {
			throw new Error(emailConfig.error.invalidLocalPart)
		}
		return `${localPart}@${this.domain}.${this.tld}`
	}
}
