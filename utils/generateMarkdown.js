
//Something to note about the strings is that I had to remove the tabs within them so the md looks good

const licenseInfo = require('./licenseInfo')

// Removed most "generateLicense" parts of code as they were redundant
// and were uneeded as you can get any peice of license info from the file
// ex: license badge = licenseInfo[data.license[0]][data.license[0]].badge

// Function included Below were made to reduce bulk of return
function createTOC (data){

}

function createSection (section, data){
  if (section === 'TOC'){

    let fullTOC = '## Table Of Contents \n';

    //creates table of contents string
    if (data.description !== '') {fullTOC = fullTOC.concat(`[Description](#description)  \n`)}
    if (data.installation !== '') {fullTOC = fullTOC.concat("[Installation](#installation)  \n")}
    if (data.usage !== '') {fullTOC = fullTOC.concat("[Usage](#usage)  \n")}
    if (data.contributers !== '') {fullTOC = fullTOC.concat("[Contributers](#contributers)  \n")}
    if (data.tests !== '') {fullTOC = fullTOC.concat("[Tests](#tests)  \n")}
    if (data.license[1] !== null) {fullTOC = fullTOC.concat("[License](#liscense)  \n")}

    fullTOC = fullTOC.concat("[Contact](#contact)  ")

    return fullTOC;

  } else if (section === 'License'){

    return `
## License\n
This program uses ${licenseInfo[data[0]][data[1]].Name}\n
[${licenseInfo[data[0]][data[1]].Link}](${licenseInfo[data[0]][data[1]].Link})\n
    `

  } else if (section === 'Contact'){

    return `
## Contact
GitHub: [${data[0]}](https://github.com/${data[0]})
Email: [${data[1]}](mailto:${data[1]})
    `

  } else{

    //gives any other section
    if (data === '') {
      return ('');
    } else {
      return `
## ${section}
${data}
      `;
    }

  }
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}\n
${/*Yeah, looking back, this seems like the ravings of a madman*/''}
[![License](${licenseInfo[data.license[0]][data.license[1]].Badge})](${licenseInfo[data.license[0]][data.license[1]].Link})
${createSection("TOC", data)}
${createSection("Description", data.description)}
${createSection("Installation", data.installation)}
${createSection("Usage", data.usage)}
${createSection("Contributers", data.contributers)}
${createSection("Tests", data.tests)}
${createSection("License", data.license)}
${createSection("Contact", [data.username, data.email])}
-----------------------------------------------------
This README was made with Jon Beck's README Generator
Repo: [JonnyDBeck's README Generator](https://github.com/JonnyDBeck/ReadMe_Generator)
`;
}

module.exports = generateMarkdown;
