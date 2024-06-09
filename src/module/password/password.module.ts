export const validationConfig = {
	error: {
		length: 'Length should be a valid positive number',
		password: 'Password should be a valid string',
		invalidPlugin: 'Plugin should be a valid function',
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
