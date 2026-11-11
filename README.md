# LEARNPLAYWRIGHT2X

> A structured, chapter-by-chapter path from JavaScript fundamentals to professional test automation with Playwright.

![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-Roadmap-2EAD33?logo=playwright&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active%20Learning-blue)

---

## Overview

Reliable test automation depends on fluency in the language under it. This repository builds that base one step at a time. Every concept is shown in a small, runnable file before moving on to Playwright, so each tool is understood rather than copied.

Each chapter is self-contained. Each file covers one idea and can be run on its own with Node.js.

---

## Learning Objectives

- Understand how JavaScript runs on Node.js and how to check the local setup.
- Learn the language rules (identifiers, literals, comments, variables) that every test script relies on.
- Use the naming conventions found in professional automation frameworks.
- Move on to Playwright: locators, assertions, the Page Object Model, API testing and CI/CD.

---

## Repository Structure

```
LEARNPLAYWRIGHT2X/
├── chapter_01_Basics/
│   ├── 01_Basics.js                         # console.log and the first variable
│   ├── 02_JS.js                             # Loops, functions and block scope
│   ├── 03_JS_Verify_Setup.js                # Checks platform, CPU architecture and Node version
│   └── 04_HotCode.js                        # "Hot" code and how the JS engine optimizes it
│
├── chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js                      # Declaring and reassigning variables
│
├── chapter_03_Identifier_Literals/
│   ├── 06_Identifier_Rules.js               # Valid identifier examples
│   ├── 07_Identifier_Part2.js               # Naming cases: camelCase, PascalCase, snake_case and more
│   ├── 08_Comments.js                       # Single-line, inline, multi-line and JSDoc comments
│   ├── Identifier_Rules_Examples.js         # All identifier rules with valid/invalid cases and a quiz
│   ├── VS_Code_keyboard_shortcut_window.md  # VS Code shortcuts for Windows
│   └── VS_Code_keyboard_shortcut_mac.md     # VS Code shortcuts for macOS
│
└── README.md
```

---

## Curriculum

| # | Chapter | Topics Covered | Status |
|---|---|---|---|
| 01 | **Basics** | Console output, variables, loops, functions, environment check, hot code | Complete |
| 02 | **JavaScript Concepts** | Declaring and reassigning variables | In progress |
| 03 | **Identifiers & Literals** | Identifier rules, reserved words, naming conventions, comments | In progress |
| 04 | Data Types & Operators | Primitive types, `typeof`, arithmetic, comparison, logical operators | Planned |
| 05 | Control Flow | `if`/`else`, `switch`, loops, `break`/`continue` | Planned |
| 06 | Functions & Scope | Declarations, arrow functions, closures, hoisting | Planned |
| 07 | Objects & Arrays | Literals, destructuring, spread, built-in array methods | Planned |
| 08 | Asynchronous JavaScript | Callbacks, Promises, `async`/`await` | Planned |
| 09 | Playwright Fundamentals | Setup, locators, actions, assertions, auto-waiting | Planned |
| 10 | Framework Design | Page Object Model, fixtures, test data, reporting, CI/CD | Planned |

---

## Getting Started

### Prerequisites

| Tool | Version | Purpose |
|---|---|---|
| [Node.js](https://nodejs.org/) | 18 LTS or later | Runs JavaScript outside the browser |
| [Visual Studio Code](https://code.visualstudio.com/) | Latest | Code editor |
| [Git](https://git-scm.com/) | Latest | Version control |

### Installation

```bash
git clone https://github.com/Tush783/LEARNPLAYWRIGHT2X.git
cd LEARNPLAYWRIGHT2X
```

### Verify Your Environment

```bash
node chapter_01_Basics/03_JS_Verify_Setup.js
```

Expected output (values depend on your machine):

```
win32
x64
Node Version: v25.9.0
```

### Running Any Example

```bash
node <chapter_folder>/<file_name>.js

# Example
node chapter_03_Identifier_Literals/07_Identifier_Part2.js
```

---

## Conventions Used in This Repository

| Element | Convention | Example |
|---|---|---|
| Chapter folders | `chapter_NN_Topic_Name` | `chapter_03_Identifier_Literals` |
| Lesson files | `NN_Topic.js`, numbered in reading order | `08_Comments.js` |
| Variables & functions | camelCase | `loginButton`, `clickSubmit()` |
| Classes / Page Objects | PascalCase | `LoginPage` |
| Constants | UPPER_SNAKE_CASE | `BASE_URL` |

Each file is meant to be read from top to bottom. Comments explain *why* the code works, not only *what* it does. Examples that would throw an error are commented out on purpose, so the file still runs; remove the `//` to see the error.

---

## Quick References

- [VS Code Shortcuts — Windows](chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_window.md)
- [VS Code Shortcuts — macOS](chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_mac.md)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Playwright Documentation](https://playwright.dev/docs/intro)

---

## Author

**Tushar R Shetty**
QA Engineer moving from manual testing into test automation.

GitHub: [@Tush783](https://github.com/Tush783)

---

<p align="center"><i>Learn the language first, then the framework.</i></p>
