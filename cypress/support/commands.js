// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.Commands.add('loginsa', (email, password) => {
    cy.get('#mat-input-0').type(email)
    cy.get('#mat-input-1').type(password)
})



//Upload option
import 'cypress-file-upload';


// cypress/support/commands.js
const COMMAND_DELAY = 1000;  

// Delay specific commands
const commandsToDelay = [
  'click', 'type', 'check', 'select'
];

commandsToDelay.forEach((command) => {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        originalFn(...args).then(resolve);
      }, COMMAND_DELAY);
    });
  });
});
