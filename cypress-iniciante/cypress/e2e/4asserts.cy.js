/// <reference types="cypress" />

describe('Interações', () => {
    it.only('Verificar se está visivel', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa.fa-user')
            .click()

        cy.get('.account_form > h3')
            .should('be.visible')

        cy.get('.account_form > h3')
            .should('contain', 'Login')
            .should('have.text', 'Login')
        
        // outra maneira de validar o campo:
        cy.get('.account_form > h3')
            .then((element) => {
                expect(element.text()).equals('Login') // verifica se o elemento selecionado no get tem um texto igual a 'Login'
                expect(element).to.be.visible // verifica se o elemento selecionado no get esta visivel
            })
    })
})