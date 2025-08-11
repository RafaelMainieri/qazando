/// <reference types="cypress" />

Cypress.Commands.add('clickRegister', () => {
    cy.get('#btnRegister')
        .click()
})

Cypress.Commands.add('fillName', (name) => {
    cy.get('#user')
        .type(name)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email')
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password')
        .type(password)
})

Cypress.Commands.add('verifyErrorMessage', (message) => {
    cy.get('#errorMessageFirstName')
        .should('exist')
        .should('be.visible')
        .should('contain', message)
})

Cypress.Commands.add('verifyRegisterSuccess', (name) => {
    cy.get('#swal2-title')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Cadastro realizado!')

    cy.get('#swal2-html-container', {timeout: 4000})
        .should('exist')
        .should('be.visible')
        .should('contain', `Bem-vindo ${name}`)
})