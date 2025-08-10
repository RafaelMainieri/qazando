/// <reference types="cypress" />

Cypress.Commands.add('clickRegister', () => {
    cy.get('#btnRegister')
        .click()
})