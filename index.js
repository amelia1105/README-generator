// Import packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Collect user input as an array
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description.',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Enter the installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter a link to your GitHub account.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created ' + fileName + '!')
    );
}

// Function to initialize application using inquirer. A dist file is created if it does not exist and the new README.md file is loaded there.
function init() {
    const dir = './dist';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }   
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile(`${dir}/README.md`, markdownContent);
    });
};

// Initialize
init();
