// ============================================================
//  IDENTIFIER RULES IN JAVASCRIPT - All Examples
//  An identifier is the NAME you give to a variable, function,
//  class, etc.   e.g.  var age = 25;   -> "age" is the identifier
//
//  Run this file:  node Identifier_Rules_Examples.js
//  INVALID examples are commented out (they would crash the file).
//  Remove the "//" in front of one to see the error yourself.
// ============================================================


// ------------------------------------------------------------
// RULE 1: The FIRST character can be a letter (a-z, A-Z), $ or _
// ------------------------------------------------------------
var name = "Tushar";      // starts with a letter
var $price = 499;         // starts with $
var _count = 5;           // starts with _
var $ = 10;               // just $ alone is valid
var _ = 20;               // just _ alone is valid

console.log("Rule 1:", name, $price, _count, $, _);

// INVALID - cannot start with a number
// var 1name = "x";       // SyntaxError: Invalid or unexpected token
// var 9lives = 9;        // SyntaxError

// INVALID - cannot start with other special characters
// var @email = "a@b.com";   // SyntaxError
// var #id = 1;              // SyntaxError (# is only for private class fields)
// var -value = 5;           // SyntaxError
// var %rate = 10;           // SyntaxError


// ------------------------------------------------------------
// RULE 2: After the first character, you can use letters,
//         digits (0-9), $ and _
// ------------------------------------------------------------
var v1 = 50;
var user123 = "abc";
var test_case_01 = "Login";
var amount$ = 100;
var a1_b2$c3 = "mixed";

console.log("Rule 2:", v1, user123, test_case_01, amount$, a1_b2$c3);


// ------------------------------------------------------------
// RULE 3: NO spaces, hyphens (-) or other special characters
// ------------------------------------------------------------
// var first name = "Tushar";   // SyntaxError - space not allowed
// var first-name = "Tushar";   // SyntaxError - "-" is the minus operator
// var user.name = "Tushar";    // SyntaxError - "." is for object property access
// var price! = 10;             // SyntaxError
// var total@sum = 10;          // SyntaxError

var firstName = "Tushar";       // fix: use camelCase
var first_name = "Tushar";      // fix: use underscore

console.log("Rule 3:", firstName, first_name);


// ------------------------------------------------------------
// RULE 4: Identifiers are CASE-SENSITIVE
//         These are 4 DIFFERENT variables
// ------------------------------------------------------------
var amit = 60;
var Amit = 70;
var AMIT = 80;
var aMiT = 90;

console.log("Rule 4:", amit, Amit, AMIT, aMiT);   // 60 70 80 90


// ------------------------------------------------------------
// RULE 5: Reserved keywords CANNOT be used as identifiers
// ------------------------------------------------------------
// var var = 1;          // SyntaxError
// var let = 1;          // Error only in strict mode / modules - avoid it anyway
// var if = 1;           // SyntaxError
// var for = 1;          // SyntaxError
// var function = 1;     // SyntaxError
// var class = 1;        // SyntaxError
// var return = 1;       // SyntaxError
// var const = 1;        // SyntaxError
// var true = 1;         // SyntaxError
// var null = 1;         // SyntaxError
// var new = 1;          // SyntaxError
// var typeof = 1;       // SyntaxError

// Full reserved list: break case catch class const continue debugger
// default delete do else export extends false finally for function
// if import in instanceof new null return super switch this throw
// true try typeof var void while with enum
// Also reserved in strict mode / modules: let static yield await
// implements interface package private protected public

// BUT a keyword can be PART of a name - this is fine
var ifCondition = true;
var forLoop = "ok";
var classRoom = "A1";
var _return = "valid";
var $new = "valid";

console.log("Rule 5:", ifCondition, forLoop, classRoom, _return, $new);


// ------------------------------------------------------------
// RULE 6: Unicode letters are allowed (not recommended)
// ------------------------------------------------------------
var café = "coffee";
var नाम = "Tushar";     // Hindi letters work
var π = 3.14;

console.log("Rule 6:", café, नाम, π);

// Emojis are NOT allowed
// var 😀 = "smile";    // SyntaxError


// ------------------------------------------------------------
// RULE 7: No length limit (but keep names meaningful)
// ------------------------------------------------------------
var x = 1;                                                // valid but unclear
var totalNumberOfFailedTestCasesInRegressionSuite = 3;   // valid but too long
var failedTests = 3;                                      // best: short + clear

console.log("Rule 7:", x, totalNumberOfFailedTestCasesInRegressionSuite, failedTests);


// ============================================================
//  NAMING CONVENTIONS (not rules - code works either way,
//  but professionals follow these)
// ============================================================

// camelCase      -> variables & functions (MOST COMMON in JS)
var pramodDutta = 90;
var loginButton = "#login";
function clickLoginButton() { return "clicked"; }

// PascalCase     -> classes (and Page Objects in Playwright!)
class LoginPage {}
class DashboardPage {}

// UPPER_SNAKE_CASE -> constants that never change
const BASE_URL = "https://example.com";
const MAX_RETRIES = 3;

// snake_case     -> valid, but less common in JS
var parmod_dutta = 80;

// _prefix        -> hint that something is "private/internal"
var _internalValue = "hidden";

// $prefix        -> often used for DOM elements / jQuery
var $header = "header-element";

console.log("Conventions:", pramodDutta, loginButton, clickLoginButton(),
    typeof LoginPage, typeof DashboardPage, BASE_URL, MAX_RETRIES,
    parmod_dutta, _internalValue, $header);


// ============================================================
//  QUICK QUIZ - Valid or Invalid?  (answers below)
// ============================================================
//  1. var _1 = 1;
//  2. var 1_ = 1;
//  3. var $$ = 1;
//  4. var my-var = 1;
//  5. var myVar2 = 1;
//  6. var while = 1;
//  7. var While = 1;
//  8. var user name = 1;
//  9. var __proto_test__ = 1;
// 10. var pramod$dutta = 1;
//
// Answers:
//  1 Valid   2 Invalid (starts with digit)   3 Valid
//  4 Invalid (hyphen)    5 Valid    6 Invalid (keyword)
//  7 Valid (While != while, case-sensitive)  8 Invalid (space)
//  9 Valid   10 Valid
