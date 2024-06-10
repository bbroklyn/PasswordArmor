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
