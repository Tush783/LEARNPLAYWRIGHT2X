// This is single comment this will be ignored by the JS engine
/* This is multi-line comment
   This will also be ignored by the JS engine
    This is useful for commenting out large blocks of code*/


// 1. Single-line comment
// Starts with //
var city = "Bangalore";


// 2. Inline comment
var age = 25; // comment after code on the same line


// 3. Multi-line comment
/*
   Starts with slash-star and ends with star-slash
   Can span many lines
*/
var country = "India";


// 4. Documentation comment (JSDoc)
// Starts with /** and describes a function
/**
 * Adds two numbers.
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} sum of a and b
 */
function add(a, b) {
    return a + b;
}


// 5. Commenting out code (code will not run)
// console.log("This line will not run");
console.log(city, age, country, add(2, 3));


// Shortcut in VS Code:
// Ctrl + /          -> single-line comment
// Shift + Alt + A   -> multi-line comment

