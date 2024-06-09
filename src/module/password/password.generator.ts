import {
	generateRandomString,
	generateRandomSymbol,
	generateRandomUppercaseLetter,
	getRandomInt,
	shuffleArray,
} from '../../common/utils.js'

/**
 * Generates a random password with specified length and character requirements.
 * @param length - length of the generated password.
 * @param includeUppercase - include uppercase letters in the password.
 * @param includeDigits - include digits in the password.
 * @param includeSymbols - include special symbols in the password.
 * @returns random generated password.
 */
export function generatePassword(
	length: number,
	includeUppercase: boolean = true,
	includeDigits: boolean = true,
	includeSymbols: boolean = true
): string {
	const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
	const digits = '0123456789'
	const symbols = '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?€£¥₹§±'

	let characterPool = lowercaseLetters
	let password = ''

	if (includeUppercase) {
		characterPool += lowercaseLetters.toUpperCase()
		password += generateRandomUppercaseLetter()
	}

	if (includeDigits) {
		characterPool += digits
		password += digits.charAt(getRandomInt(0, digits.length - 1))
	}

	if (includeSymbols) {
		characterPool += symbols
		password += generateRandomSymbol(symbols)
	}

	password += generateRandomString(length - password.length, characterPool)

	return shuffleArray(password.split('')).join('')
}
