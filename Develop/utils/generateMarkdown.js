// if else function to match a badge and URL with the users selction for license
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) https://opensource.org/licenses/MIT`;
  } else if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg) https://opensource.org/licenses/MPL-2.0`;
  } else if (license === "IBM") {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg) https://opensource.org/licenses/IPL-1.0`;
  } else if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg) https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "ISC") {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg) https://opensource.org/licenses/ISC`;
  } else {
    return "";
  }
}

// if none is selected for license then license is not displayed in the table of contents
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  else {
    return "* [License](#license)"
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (license === "None") {
     return "";
   } else {
     return `## License
     project is using ${license}`
   }
}

// template for README.md  to be filled out by user
function generateMarkdown(data) {
  return `# ${data.Title}

  ${renderLicenseBadge(data.license)}

  ### Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description 
  ${data.description}

  ## Installation
  to install please run this command
  ${data.install}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
