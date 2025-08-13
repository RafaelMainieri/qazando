/// <reference types="cypress" />

// Elements
const elements = {
    buttons: {
        register: '#btnRegister'
    },

    fields: {
        user: '#user',
        email: '#email',
        password: '#password'
    },

    messages: {
        error: '#errorMessageFirstName',
        titleSuccess: '#swal2-title',
        subtitleSuccess: '#swal2-html-container'
    }
}


// Functions
export default {
    clickRegister() {
        cy.get(elements.buttons.register)
            .click()
    },

    fillName(name) {
        cy.get(elements.fields.user)
            .type(name)
    },

    fillEmail(email) {
    cy.get(elements.fields.email)
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .type(password)
    },

    verifyErrorMessage(message) {
        cy.get(elements.messages.error)
            .should('exist')
            .should('be.visible')
            .should('contain', message)
    },

    verifyRegisterSuccess(name) {
        cy.get(elements.messages.titleSuccess)
            .should('exist')
            .should('be.visible')
            .should('contain', 'Cadastro realizado!')

        cy.get(elements.messages.subtitleSuccess, {timeout: 4000}) // timeout pode ser aqui ou no arquivo cypress.config.js
            .should('exist')
            .should('be.visible')
            .should('contain', `Bem-vindo ${name}`)
    }
}
