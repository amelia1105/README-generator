# README Generator

## Description

This project was developed for Homework 7 of the Rutgers University Coding Bootcamp program. The goal is to build an application that will allow users to develop a high-quality README file. Using this code and Node.js, the user will be asked a series of questions that they will answer in the command line. A README.md file will be created with the user's input in a preset template. This saves the user time and allows them to dedicate more time to the rest of their project. I mainly used JavaScript, Node.js, and Markdown to create this project. This project has not only broadened my knowledge of command line applicability, but it has also taught me how to troubleshoot outside of a browser environment without the help of Chrome DevTools.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Questions](#questions)
- [Video](#video)

## Installation

1. First, navigate to where you would like the files to be stored on your local device.

2. Clone the repo to your local device. This can be done by following the link to the GitHub Repo, clicking the green "Code" button, copying either the HTTPS or SSH filepath, and then running the following code in the command line:

    ```sh
    git clone <filepath>
    ```

3. In the command line, install dependencies using the following:

    ```sh
    npm i
    ```

## Usage

1. Open the command line and change to the README-generator directory. Run Node on the index.js file:

    ```sh
    node index.js
    ```

2. You should then be prompted to answer a series of questions. Type in your answers and press enter. For the license, use the arrow keys to scroll through the list, and use enter to select a license.

    ![screenshot of terminal demonstrating which licenses are available](./assets/license-choice.png)

3. After answering all of these questions, you should see "Successfully created ./dist/README.md!" in the command line. If a README.md file is already in the dist folder, it will be overwritten with the new input.

    ![screenshot of terminal showing that information was entered successfully](./assets/success.png)

    A dist folder will be created (or updated) with the new README.md file containing all the information that was entered. 
    
    ![screenshot of README.md file](./assets/dist-folder.png)

    New README.md:

    ![screenshot of README.md file](./assets/new-readme.png)

4. You can copy and paste this file into your new project directory. Edit and add or remove sections as needed.

    Pasted into a 'sample' directory:
    
    ![screenshot showing newly created README-new.md used in a sample repo](./assets/paste-sample.png)

## License

MIT License

Copyright (c) 2024 Amelia Bellanger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributions

Starter code was sourced from Rutgers University Coding Bootcamp 07-NodeJS > 02-Challenge > Develop. All other contributions were made by myself. 

GitHub: amelia1105 (https://github.com/amelia1105)

## Questions

For any questions about this project, please contact me by email: (aebellanger@yahoo.com)

## Video
link to video here