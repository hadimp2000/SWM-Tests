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

Cypress.Commands.add("getDataTest", (dataTestSelector) => {
  return cy.get(`[data-test="${dataTestSelector}"]`);
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

//Unfortunately this didn't work
// Cypress.Commands.add('restoreLogin', () => {
//   cy.visit('/');
//   cy.window().then((window) => {
//     window.localStorage.setItem('authToken', 'yourAuthToken');
//   });
// });

Cypress.Commands.add("login", () => {
  cy.session("loginSession", () => {
    cy.visit("/login");
    cy.get('input[type="email"]').click();

    cy.get('input[type="email"]').type("differentEmail6@gmail.com");
    cy.get('input[type="password"]').type("Password123!");
    cy.contains('button[type="submit"]', "Sign In").click();
    cy.wait(2000)
    cy.location('pathname').should('eq', '/account')
    cy.wait(2000)
  });
});
