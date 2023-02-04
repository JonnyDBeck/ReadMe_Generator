// Included packages needed for this application
const inquirer = require('inquirer');

// Created an array of questions for user input
const questions = [
    "Input Github Username: ",
    "Input Email: ",
    "Input Project Title: ",
    "Input Project Description (Leave Blank If Unwanted): ",
    "Input Project Installation Instructions (Leave Blank If Unwanted): ",
    "Input Project Usage Instructions (Leave Blank If Unwanted): ",
    "Input Project Contributers (Leave Blank If Unwanted): ",
    "Input Project Tests (Leave Blank If Unwanted): ",
    //Yes, I included all of these, momma didn't raise no underachiver
    "What is your Project license?\n" +
        "[0] Apache 2.0\n" +
        "[1] Boost Software 1.0\n" +
        "[2] A BSD License (Further List)\n" +
        "[3] A Creative Commons License (Further List)\n" +
        "[4] Eclipse Public 1.0\n" +
        "[5] A GNU License (Further List)\n" +
        "[6] A Hippocratic License (Further List)\n" +
        "[7] IBM Public 1.0\n" +
        "[8] ISC\n" +
        "[9] MIT\n" +
        "[10] Mozilla Public 2.0\n" +
        "[11] An Open Data Commons License (Further List)\n" +
        "[12] A Perl License (Further List)\n" +
        "[13] SIL Open Font 1.1\n" +
        "[14] The Unlicense\n" +
        "[15] WTFPL\n" +
        "[16] Zlib/Libpng\n" +
        "Input License Number (No number/unrecognized number will be seen as no license): ",
    "Which BSD Liscense?\n" +
        "[0] BSD 3-Clause\n" +
        "[1] BSD 2-Clause\n" +
        "Input License Number (No number/unrecognized number will default to 0): ",
    "Which Creative Commons Liscense?\n" +
        "[0] CC0 1.0\n" +
        "[1] Attribution 4.0 International\n" +
        "[2] Attribution-ShareAlike 4.0 International\n" +
        "[3] Attribution-NonCommercial 4.0 International\n" +
        "[4] Attribution-NoDerivatives 4.0 International\n" +
        "[5] Attribution-NonCommercial-ShareAlike 4.0 International\n" +
        "[6] Attribution-NonCommercial-NoDerivatives 4.0 International\n" +
        "Input License Number (No number/unrecognized number will default to 0): ",
    "Which GNU Liscense?\n" +
        "[0] GNU GPL v3\n" +
        "[1] GNU GPL v2\n" +
        "[2] GNU AGPL v3\n" +
        "[3] GNU LGPL v3\n" +
        "[4] GNU FDL v1.3\n" +
        "Input License Number (No number/unrecognized number will default to 0): ",
    "Which Hippocratic Liscense?\n" +
        "[0] Hippocratic License 2.1\n" +
        "[1] Hippocratic License 3.0\n" +
        "Input License Number (No number/unrecognized number will default to 0): ",
    "Which Open Data Commons Liscense?\n" +
        "[0] Attribution License (BY)\n" +
        "[1] Open Database License (ODbL)\n" +
        "[2] Public Domain Dedication and License (PDDL)\n" +
        "Input License Number (No number/unrecognized number will default to 0): ",
    "Which Perl Liscense?\n" +
        "[0] Perl License\n" +
        "[1] Artistic License 2.0\n" +
        "Input License Number (No number/unrecognized number will default to 0): ",
    // Momma should've raised an underachiver, it is currently 3:15 AM
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
