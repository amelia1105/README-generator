// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'GPL') {
    return '![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'BSD') {
    return '![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } else if (license === 'None') {
    return '';
  } 
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'None') {
    return '';
  } 
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under the ${license} license.`;
  } else {
    return '';
  } 
}

// Function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
${data.description}
  
## Installation
${data.instructions}
  
## Usage
${data.usage}
  
## Contributing
${data.contributing}
  
## Tests
${data.tests}
  
## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
  
## Questions
For questions about this project, please contact me at:
- GitHub: ${data.username} (${data.link})
- Email: ${data.email}
`;
}

// Export generateMarkdown function
export default generateMarkdown;
