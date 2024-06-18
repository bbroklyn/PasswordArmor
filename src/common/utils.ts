// TODO: Generation of a random letter, special symbol and string from the created.

/**
 * Shuffles array elements in random order.
 * @param array - array for mixing.
 * @returns a new array with shuffled elements.
 */
export function shuffleArray<T>(array: T[]): T[] {
	const shuffledArray = array.slice()
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
	}
	return shuffledArray
}

/**
 * Generates a random string of a given length from a given set of characters.
 * @param length - generated string length.
 * @param characters - a string with a set of characters to generate.
 * @returns random string of a given length.
 */
export function generateRandomString(
	length: number,
	characters: string
): string {
	let result = ''
	for (let i = 0; i < length; i++) {
		result += characters.charAt(getRandomInt(0, characters.length - 1))
	}
	return result
}

/**
 * Generates a random special character from a given set.
 * @param symbols - a string with a set of characters to generate.
 * @returns random special character.
 */
export function generateRandomSymbol(symbols: string): string {
	return symbols.charAt(getRandomInt(0, symbols.length - 1))
}

/**
 * Returns a random number in the given key.
 * @param min - minimal value (includes).
 * @param max - maximal value (includes).
 * @returns - random number between min and max.
 */
export function getRandomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Generates a random lowercase letter.
 * @returns random lowercase letter.
 */
export function generateRandomLowercaseLetter(): string {
	const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
	return lowercaseLetters.charAt(getRandomInt(0, lowercaseLetters.length - 1))
}

/**
 * Generates a random uppercase letter.
 * @returns random uppercase letter.
 */
export function generateRandomUppercaseLetter(): string {
	const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	return uppercaseLetters.charAt(getRandomInt(0, uppercaseLetters.length - 1))
}
