// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

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
        "[0] A BSD License (Further List)\n" +
        "[1] A Creative Commons License (Further List)\n" +
        "[2] A GNU License (Further List)\n" +
        "[3] A Hippocratic License (Further List)\n" +
        "[4] An Open Data Commons License (Further List)\n" +
        "[5] A Perl License (Further List)\n" +
        "[6] Apache 2.0\n" +
        "[7] Boost Software 1.0\n" +
        "[8] Eclipse Public 1.0\n" +
        "[9] IBM Public 1.0\n" +
        "[10] ISC\n" +
        "[11] MIT\n" +
        "[12] Mozilla Public 2.0\n" +
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

function getLicense() { return new Promise((resolve, reject) => {
    // Questions for License
    // I could've done a fancy list but I had alrady set up for this
    // Plus, having the input be a number can let me do some wacky things with the array
    inquirer.prompt({type:'number', name:'l', message:questions[8]})
    .then((licenseBase) => {
        if (licenseBase.l < 6){

            //This one gets deeper into specific Liscenses
            inquirer.prompt({type:'number', name:'l', message:questions[9 + licenseBase.l]})
            .then((licenseFull) => {
                //Returns array as [Liscense Group, Liscense]
                resolve([licenseBase.l, licenseFull.l])
            })
            .catch((err) => {
                console.error(err);
            });

        }
        else {
            //Returns Specific Liscense in regards to the liscenseInfo file
            resolve([6, licenseBase.l - 6])
        }
    })
    .catch((err) => {
        console.error(err);
    });
})}

// Created a function to write README file
// Additionally I reformatted the function
function createReadme(data) {

    // Delete Old README if there is one
    fs.unlink('README.md', function (err) {
        console.log('Old README Deleted')
    })



    //Create New README
    fs.appendFile('README.md', generateMarkdown(data), function (err) {
        if (err) throw err;
        console.log('New README Created');
    })

}

// Created a function to initialize app
function init() {
    //Fun, Quirky Message
    console.log("Let's create your README.md!");

    //Questions Asked Below
    inquirer
        .prompt([
            {type:'input', name:'username', message:questions[0]},
            {type:'input', name:'email', message:questions[1]},
            {type:'input', name:'title', message:questions[2]},
            {type:'input', name:'description', message:questions[3]},
            {type:'input', name:'installation', message:questions[4]},
            {type:'input', name:'usage', message:questions[5]},
            {type:'input', name:'contributers', message:questions[6]},
            {type:'input', name:'tests', message:questions[7]},
        ])
        .then((answers) => {

            const data = answers;

            //gets the liscense
            getLicense().then((license) => {
                data.license = license;
                createReadme(data);
            })

        })
        .catch((err) => {
            console.error(err);
        });
}

// Function call to initialize app
init();
