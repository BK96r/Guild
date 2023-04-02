Guild - Quality Engineer Project

Structured for using Cypress with TypeScript

Before starting, make sure you have Node.js and npm installed.

Clone this repository: git clone https://github.com/BK96r/Project-Test-For-Guild.git
Navigate to the project folder: "cd Guild"
Install the dependencies: "npm install"

Running Tests
To run the Cypress tests:

Open Cypress with the following command: "npx cypress open"
Run Cypress with the following command: "npx cypress run"

Writing Tests

Tests should be written in TypeScript and stored in the cypress/e2e folder. You can run a test 
by running npx cypress run --spec "cypress/e2e/projectFolder/filename.cy.ts".

Configuration

You can configure Cypress by modifying the cypress.json file. 
Refer to the https://docs.cypress.io/guides/references/configuration for more information on configuration options.

Additional Information

For more information about Cypress, please refer to the https://docs.cypress.io/guides/overview/why-cypress