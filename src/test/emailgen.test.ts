import { expect } from 'chai'
import { EmailGenerator } from '../module/email/email.generator.js'
import { emailConfig } from '../module/email/email.module.js'

describe('EmailGenerator', () => {
	it('should generate a valid email with default settings', () => {
		const email = new EmailGenerator().generate()
		expect(email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
	})

	it('should generate a valid email with custom length', () => {
		const customLength = 15
		const email = new EmailGenerator().setLength(customLength).generate()
		const localPart = email.split('@')[0]
		expect(localPart.length).to.equal(customLength)
		expect(email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
	})

	it('should generate a valid email with custom domain', () => {
		const customDomain = 'mydomain'
		const email = new EmailGenerator().at(customDomain).generate()
		expect(email).to.match(new RegExp(`^[^\\s@]+@${customDomain}\\.[^\\s@]+$`))
	})

	it('should generate a valid email with custom TLD', () => {
		const customTLD = 'net'
		const email = new EmailGenerator().end(customTLD).generate()
		expect(email).to.match(new RegExp(`^[^\\s@]+@[^\s@]+\\.${customTLD}$`))
	})

	it('should throw an error for invalid length', () => {
		expect(() => new EmailGenerator().setLength(0)).to.throw(
			emailConfig.error.length
		)
	})

	it('should throw an error for invalid domain', () => {
		expect(() => new EmailGenerator().at('invalid domain')).to.throw(
			emailConfig.error.domain
		)
	})

	it('should throw an error for invalid TLD', () => {
		expect(() => new EmailGenerator().end('invalid tld')).to.throw(
			emailConfig.error.tld
		)
	})

	it('should generate a valid email with custom settings', () => {
		const customLength = 12
		const customDomain = 'testdomain'
		const customTLD = 'org'
		const email = new EmailGenerator()
			.setLength(customLength)
			.at(customDomain)
			.end(customTLD)
			.generate()

		const [localPart, domainPart] = email.split('@')
		const [domain, tld] = domainPart.split('.')

		expect(localPart.length).to.equal(customLength)
		expect(domain).to.equal(customDomain)
		expect(tld).to.equal(customTLD)
		expect(email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
	})
})
