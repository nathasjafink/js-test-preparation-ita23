/**
 * This function adds two numbers.
 *
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 * @returns {number} - The sum of the two numbers.
 *
 * Usage:
 * const result = add(2, 3); // result will be 5
 * const anotherResult = add(-1, 1); // anotherResult will be 0
 */
function add(a, b) {
    let result = a + b;
    return result
}
const result = add(2,3);
console.log(result);
const anotherResult = add(-1,1);
console.log(anotherResult);

/** * This function returns the length of the provided string.
 *
 * @param {string} value - A string whose length needs to be determined.
 * @returns {number} - The length of the string.
 *
 * Usage:
 * const result = determineLength("Hello"); // result will be 5
 * const anotherResult = determineLength("AB"); // anotherResult will be 2
 */
function determineLength(value) {
    const sentence = value.length;
    return sentence;
}
const result1 = determineLength("Hello");
const anotherResult1 = determineLength("AB");
console.log(result1);
console.log(anotherResult1);

/**
 * This function concatenates two strings with a specified delimiter.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @param {string} delimiter - The delimiter to be placed between the two strings.
 * @returns {string} - The concatenated string.
 *
 * Usage:
 * const result = concatenateWithDelimiter("Hello", "World", ", "); // result will be "Hello, World"
 */
function concatenateWithDelimiter(a, b, delimiter) {
    const firstWord = a;
    const secondWord = b;
    const seperated = [firstWord,secondWord].join(delimiter);
    return seperated;
}
const result3 = concatenateWithDelimiter("Hello", "World",", ");
console.log(result3);

