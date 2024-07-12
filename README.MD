# PasswordArmor

PasswordArmor is a TypeScript library for generating and validating passwords with customizable rules. This library provides a flexible and easy-to-use API to generate secure passwords and validate them against various criteria.

## Features

- Generate random passwords with specified length and character requirements.
- Validate passwords against custom rules such as minimum length, maximum length, presence of digits, special characters, uppercase letters, and more.
- Easily extendable with additional validation rules.
- **Generate random email addresses** with customizable options.

PasswordArmor includes functionality to generate random email addresses using the `EmailGenerator` class. You can set the length of the local part, specify the domain, and define the top-level domain (TLD) to create customized email addresses. This feature is useful for applications requiring temporary or random email address generation, such as testing environments or user registration simulations.

## Installation

Install PasswordArmor via npm:

```bash
npm install passwordarmor
```

## Wiki

- For more detailed documentation, examples, and advanced usage, please refer to our [Wiki](https://github.com/bbroklyn/passwordarmor/wiki).

## Usage

### Importing the Library

- To use PasswordArmor in your project, import the necessary classes and functions:

```ts
import { generatePassword, PasswordValidator } from 'passwordarmor'
```

### Generating Passwords

- You can generate random passwords with customizable options using the generatePassword function.

```ts
import { generatePassword } from 'passwordarmor'

// Generate a random password with default options
const password = generatePassword(12)
console.log(password) // Example output: 'a1B!2cD#3eF4'

// Generate a random password with specific options
const customPassword = generatePassword(16, true, true, true)
console.log(customPassword) // Example output: 'A1b!C2d@E3f#G4h%'
```

### Validating Passwords

- Use the PasswordValidator class to create and apply custom validation rules.

```ts
import { PasswordValidator } from 'passwordarmor'

// Create a new password validator with custom rules
const schema = new PasswordValidator()
	.minlet(5)
	.maxlet(50)
	.hasdigit(2)
	.hasspec(1)
	.hasupper(1)

// Validate passwords
const validPassword = 'ValidPASS123!'
const invalidPassword = 'invalid'

console.log(schema.validate(validPassword)) // true
console.log(schema.validate(invalidPassword)) // false
```

- Error result:

```json
{
 'Password should be at least 5 characters long', 'Password should have at least 2 digit(s)', 'Password should have at least 1 uppercase letter(s)',
 'Password should have at least 1 special character(s)'
}
```

### Configuration

- PasswordArmor comes with a default configuration that can be customized if needed. The default configuration includes error messages and regex patterns used for validation.

```ts
export const validationConfig = {
	error: {
		length: 'Length should be a valid positive number',
		password: 'Password should be a valid string',
		invalidPlugin: 'Plugin should be a valid function',
		minlet: (length: number) =>
			`Password should be at least ${length} characters long`,
		maxlet: (length: number) =>
			`Password should be at most ${length} characters long`,
		hasdigit: (count: number) =>
			`Password should have at least ${count} digit(s)`,
		hasspec: (count: number) =>
			`Password should have at least ${count} special character(s)`,
		hasupper: (count: number) =>
			`Password should have at least ${count} uppercase letter(s)`,
	},
	regex: {
		digits: '(\\d.*)',
		letters: '([a-zA-Z].*)',
		symbols:
			'([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\{\\}\\]\\\\|;:\\\'",<.>\\/\\?€£¥₹§±].*)',
		spaces: '([\\s].*)',
		tags: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).$',
		minlength: 6,
		maxlength: 30,
	},
}
```

### API Reference

#### Functions

```ts
generatePassword(length: number, includeUppercase: boolean = true, includeDigits: boolean = true, includeSymbols: boolean = true): string
```

- Generates a random password with specified length and character requirements.
  - `length`: The length of the generated password.
  - `includeUppercase`: Include uppercase letters in the password (default: true).
  - `includeDigits`: Include digits in the password (default: true).
  - `includeSymbols`: Include special symbols in the password (default: true).

### Classes

#### PasswordValidator

- A class for creating and applying custom password validation rules.

  - `minlet(length: number)`: PasswordValidator: Adds a rule to enforce a minimum password length.
  - `maxlet(length: number)`: PasswordValidator: Adds a rule to enforce a maximum password length.
  - `hasdigit(count: number)`: PasswordValidator: Adds a rule to enforce a minimum number of digits.
  - `hasspec(count: number)`: PasswordValidator: Adds a rule to enforce a minimum number of special characters.
  - `hasupper(count: number)`: PasswordValidator: Adds a rule to enforce a minimum number of uppercase letters.
  - `validate(password: string)`: boolean: Validates the password against the defined rules.
  - `validateWithErrors(password: string)`: { isValid: boolean; errors: string[] }: Validates the password and returns an object containing validation result and error messages.

#### Example:

```ts
const schema = new PasswordValidator()
	.minlet(8)
	.maxlet(16)
	.hasdigit(2)
	.hasspec(1)
	.hasupper(1)

const isValid = schema.validate('StrongPass123!')
console.log(isValid) // true
```

### Generating Email Addresses

- PasswordArmor provides functionality to generate email addresses with customizable options using the EmailGenerator class.

```ts
import { EmailGenerator } from 'passwordarmor'

// Create an email generator instance
const emailGenerator = new EmailGenerator()

// Generate a random email address with default settings
const email = emailGenerator.generate()
console.log(email) // Example output: 'randomstring@example.com'

// Generate a custom email address
const customEmail = emailGenerator
	.setLength(10) // Set the length of the local part
	.at('customdomain') // Set the domain
	.end('org') // Set the TLD
	.generate()
console.log(customEmail) // Example output: 'custom1234@customdomain.org'
```

### Email configuration

- You can edit configuration at `module/email/email.module.ts`

```ts
export const emailConfig = {
	DEFAULT_LENGTH: 10,
	DEFAULT_DOMAIN: 'example',
	DEFAULT_TLD: 'com',
	characters: 'abcdefghijklmnopqrstuvwxyz0123456789',
	error: {
		length: 'Length should be a valid positive number',
		domain: 'Domain should be a valid string',
		tld: 'TLD should be a valid string',
		invalidLocalPart: 'Local part should be a valid string',
	},
	regex: {
		domain: /^[a-zA-Z0-9.-]+$/,
		localPart: /^[a-zA-Z0-9._%+-]+$/,
		tld: /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/,
	},
}
```

### TODO:

- [ ] Mail Validation
- [x] Mailbox Generation with Customization
- [ ] Generating random people cards in the form of json

### Contributing

- Contributions are welcome! Please open an issue or submit a pull request on GitHub.
