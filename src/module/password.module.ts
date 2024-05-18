export const validationConfig = {
	regex: {
		digits: '(\\d.*)',
		letters: '([a-zA-Z].*)',
		symbols:
			'([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\{\\}\\]\\\\|;:\\\'",<.>\\/\\?€£¥₹§±].*)', 
		spaces: '([\\s].*)',
		tags: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).$',
		minlength: 6 , 
        maxlength: 30 ,


	},
}
