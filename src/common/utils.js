"use strict";
// TODO: Generation of a random letter, special symbol and string from the created.
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomUppercaseLetter = exports.generateRandomLowercaseLetter = exports.getRandomInt = exports.generateRandomSymbol = exports.generateRandomString = exports.shuffleArray = void 0;
/**
 * Shuffles array elements in random order.
 * @param array - array for mixing.
 * @returns a new array with shuffled elements.
 */
function shuffleArray(array) {
    var _a;
    var shuffledArray = array.slice();
    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [shuffledArray[j], shuffledArray[i]], shuffledArray[i] = _a[0], shuffledArray[j] = _a[1];
    }
    return shuffledArray;
}
exports.shuffleArray = shuffleArray;
/**
 * Generates a random string of a given length from a given set of characters.
 * @param length - generated string length.
 * @param characters - a string with a set of characters to generate.
 * @returns random string of a given length.
 */
function generateRandomString(length, characters) {
    var result = '';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(getRandomInt(0, characters.length - 1));
    }
    return result;
}
exports.generateRandomString = generateRandomString;
/**
 * Generates a random special character from a given set.
 * @param symbols - a string with a set of characters to generate.
 * @returns random special character.
 */
function generateRandomSymbol(symbols) {
    return symbols.charAt(getRandomInt(0, symbols.length - 1));
}
exports.generateRandomSymbol = generateRandomSymbol;
/**
 * Returns a random number in the given key.
 * @param min - minimal value (includes).
 * @param max - maximal value (includes).
 * @returns - random number between min and max.
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandomInt = getRandomInt;
/**
 * Generates a random lowercase letter.
 * @returns random lowercase letter.
 */
function generateRandomLowercaseLetter() {
    var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    return lowercaseLetters.charAt(getRandomInt(0, lowercaseLetters.length - 1));
}
exports.generateRandomLowercaseLetter = generateRandomLowercaseLetter;
/**
 * Generates a random uppercase letter.
 * @returns random uppercase letter.
 */
function generateRandomUppercaseLetter() {
    var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return uppercaseLetters.charAt(getRandomInt(0, uppercaseLetters.length - 1));
}
exports.generateRandomUppercaseLetter = generateRandomUppercaseLetter;
