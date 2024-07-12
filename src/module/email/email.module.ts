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
