var name = "Tushar";

//Camel Case
var firstName = "Tushar";
var lastName = "Shetty";

//Snake case
var first_name = "Tushar";


// ============================================================
//  TYPES OF NAMING CASES
//  These are CONVENTIONS (styles), not rules.
//  JavaScript accepts all of them, but each has a typical use.
// ============================================================


// ------------------------------------------------------------
// 1. camelCase
//    First word lowercase, every next word starts with a Capital
//    USE: variables and functions (MOST COMMON in JavaScript)
// ------------------------------------------------------------
var userName = "tushar123";
var totalTestCases = 50;
var isLoggedIn = true;
function clickSubmitButton() { return "Submit clicked"; }

console.log("camelCase:", userName, totalTestCases, isLoggedIn, clickSubmitButton());


// ------------------------------------------------------------
// 2. PascalCase (also called UpperCamelCase)
//    EVERY word starts with a Capital, including the first
//    USE: classes and constructors (Page Objects in Playwright!)
// ------------------------------------------------------------
class LoginPage {}
class ShoppingCartPage {}
class ApiHelper {}

console.log("PascalCase:", LoginPage.name, ShoppingCartPage.name, ApiHelper.name);


// ------------------------------------------------------------
// 3. snake_case
//    All lowercase, words joined with underscore _
//    USE: rare in JS; common in Python, databases, API JSON fields
// ------------------------------------------------------------
var last_name = "Shetty";
var test_case_id = "TC_001";
var max_wait_time = 3000;

console.log("snake_case:", first_name, last_name, test_case_id, max_wait_time);


// ------------------------------------------------------------
// 4. UPPER_SNAKE_CASE (also called SCREAMING_SNAKE_CASE)
//    All CAPITALS, words joined with underscore _
//    USE: constants - values that never change
// ------------------------------------------------------------
const BASE_URL = "https://app.example.com";
const MAX_RETRIES = 3;
const DEFAULT_TIMEOUT = 30000;

console.log("UPPER_SNAKE_CASE:", BASE_URL, MAX_RETRIES, DEFAULT_TIMEOUT);


// ------------------------------------------------------------
// 5. kebab-case
//    All lowercase, words joined with hyphen -
//    NOT ALLOWED as a JS identifier ("-" means minus)!
//    USE: file names, folder names, CSS classes, URLs, HTML attributes
// ------------------------------------------------------------
// var first-name = "Tushar";     // SyntaxError

// Where you WILL see kebab-case:
var cssSelector = ".login-button";            // CSS class
var testId = "[data-testid='submit-btn']";    // HTML attribute value
var pageUrl = "/user-profile/edit-details";   // URL path
// File names like: login-page.spec.js, playwright.config.js

console.log("kebab-case (inside strings only):", cssSelector, testId, pageUrl);


// ------------------------------------------------------------
// 6. lowercase / flatcase
//    All lowercase, words joined with nothing
//    USE: short single-word names; hard to read for long names
// ------------------------------------------------------------
var age = 25;
var username = "tushar";        // ok
var firstnamelastname = "x";   // valid but hard to read -> prefer camelCase

console.log("lowercase:", age, username, firstnamelastname);


// ------------------------------------------------------------
// 7. UPPERCASE / FLATCASE
//    All capitals, words joined with nothing
//    USE: rare; sometimes short constants like PI or URL
// ------------------------------------------------------------
const PI = 3.14;
const ENV = "QA";

console.log("UPPERCASE:", PI, ENV);


// ------------------------------------------------------------
// 8. Hungarian Notation (old style)
//    Prefix that tells the TYPE of the variable
//    USE: old codebases; modern JS mostly avoids it
// ------------------------------------------------------------
var strCity = "Bangalore";   // str = string
var nCount = 10;             // n   = number
var bIsActive = true;        // b   = boolean
var arrUsers = ["a", "b"];   // arr = array

console.log("Hungarian:", strCity, nCount, bIsActive, arrUsers);


// ------------------------------------------------------------
// 9. Special prefixes: _ and $
// ------------------------------------------------------------
var _privateToken = "abc123";   // _  -> "internal / don't touch"
var $loginForm = "#form";       // $  -> DOM element / jQuery object

console.log("Prefixes:", _privateToken, $loginForm);


// ============================================================
//  SUMMARY TABLE
// ------------------------------------------------------------
//  Case               Example            Used for
// ------------------------------------------------------------
//  camelCase          firstName          variables, functions
//  PascalCase         LoginPage          classes, Page Objects
//  snake_case         first_name         Python, DB columns, API JSON
//  UPPER_SNAKE_CASE   BASE_URL           constants
//  kebab-case         login-page.spec.js file names, CSS, URLs (NOT JS names)
//  lowercase          username           short single words
//  UPPERCASE          PI                 short constants
//  Hungarian          strCity            old code (avoid)
// ============================================================


// ============================================================
//  PLAYWRIGHT EXAMPLE - all conventions together
// ============================================================
const LOGIN_URL = "https://app.example.com/login";     // UPPER_SNAKE_CASE

class LoginPageObject {                                // PascalCase
    constructor() {
        this.usernameInput = "#user-name";             // camelCase var, kebab-case selector
        this.passwordInput = "#password";
        this.loginButton = ".login-btn";
    }
    getLoginSteps() {                                  // camelCase function
        return ["goto " + LOGIN_URL, "fill " + this.usernameInput,
                "fill " + this.passwordInput, "click " + this.loginButton];
    }
}
// File name would be: login-page.js  (kebab-case)

var loginPage = new LoginPageObject();
console.log("Playwright example:", loginPage.getLoginSteps());
