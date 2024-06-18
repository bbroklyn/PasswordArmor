import { expect } from 'chai'
import { describe, it } from 'mocha'
import { PasswordValidator } from '../module/password/password.validator.js'

describe('Password Validation Tests', () => {
	it('should validate a password with minimum length', () => {
		const schema = new PasswordValidator().minlet(5)
		const result = schema.validate('12345')
		expect(result.isValid).to.be.true
		expect(result.errors).to.be.empty
	})

	it('should fail validation for a password shorter than minimum length', () => {
		const schema = new PasswordValidator().minlet(6)
		const result = schema.validate('12345')
		expect(result.isValid).to.be.false
		expect(result.errors).to.include(
			'Password should be at least 6 characters long'
		)
	})

	it('should validate a password with maximum length', () => {
		const schema = new PasswordValidator().maxlet(5)
		const result = schema.validate('12345')
		expect(result.isValid).to.be.true
		expect(result.errors).to.be.empty
	})

	it('should fail validation for a password longer than maximum length', () => {
		const schema = new PasswordValidator().maxlet(5)
		const result = schema.validate('123456')
		expect(result.isValid).to.be.false
		expect(result.errors).to.include(
			'Password should be at most 5 characters long'
		)
	})

	it('should validate a password with required digits', () => {
		const schema = new PasswordValidator().hasdigit(1)
		const result = schema.validate('password1')
		expect(result.isValid).to.be.true
		expect(result.errors).to.be.empty
	})

	it('should fail validation for a password with insufficient digits', () => {
		const schema = new PasswordValidator().hasdigit(2)
		const result = schema.validate('password1')
		expect(result.isValid).to.be.false
		expect(result.errors).to.include('Password should have at least 2 digit(s)')
	})

	it('should validate a password with required special characters', () => {
		const schema = new PasswordValidator().hasspec(1)
		const result = schema.validate('password!')
		expect(result.isValid).to.be.true
		expect(result.errors).to.be.empty
	})

	it('should fail validation for a password with insufficient special characters', () => {
		const schema = new PasswordValidator().hasspec(2)
		const result = schema.validate('password!')
		expect(result.isValid).to.be.false
		expect(result.errors).to.include(
			'Password should have at least 2 special character(s)'
		)
	})

	it('should validate a password with required uppercase letters', () => {
		const schema = new PasswordValidator().hasupper(1)
		const result = schema.validate('Password')
		expect(result.isValid).to.be.true
		expect(result.errors).to.be.empty
	})

	it('should fail validation for a password with insufficient uppercase letters', () => {
		const schema = new PasswordValidator().hasupper(2)
		const result = schema.validate('Password')
		expect(result.isValid).to.be.false
		expect(result.errors).to.include(
			'Password should have at least 2 uppercase letter(s)'
		)
	})

	it('should validate a complex password with multiple rules', () => {
		const schema = new PasswordValidator()
			.minlet(5)
			.maxlet(20)
			.hasdigit(1)
			.hasspec(1)
			.hasupper(1)
		const result = schema.validate('ValidPASS123!')
		expect(result.isValid).to.be.true
		expect(result.errors).to.be.empty
	})

	it('should fail validation for a complex password that does not meet all rules', () => {
		const schema = new PasswordValidator()
			.minlet(5)
			.maxlet(20)
			.hasdigit(2)
			.hasspec(1)
			.hasupper(1)
		const result = schema.validate('validpass123')
		expect(result.isValid).to.be.false
		expect(result.errors).to.include(
			'Password should have at least 1 special character(s)'
		)
		expect(result.errors).to.include(
			'Password should have at least 1 uppercase letter(s)'
		)
	})
})
