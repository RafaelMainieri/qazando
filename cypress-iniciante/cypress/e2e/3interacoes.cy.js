/// <reference types="cypress" />

describe('Interações', () => {
    
    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.form-control')
            .type('rafasolmainieri@gmail.com')
    })

    it('Click', () => {
         cy.visit('/')
            .get('.header-logo')
        
        // clique normal
        // cy.get('.fa.fa-user')
        //     .click()

        // clique duplo
        // cy.get('.fa.fa-user')
        //     .dblclick()

        // clique direito
        // cy.get('.fa.fa-user')
        //     .rightclick()

        // clique por coordenadas
        // cy.get('.fa.fa-user')
        //     .click(100, 100)

        // simular enter do teclado
        cy.get('.form-control')
            .type('rafasolmainieri@gmail.com{enter}')
    })

    it('Select', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('#footer_one')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Albania')
    })

    it.only('Checkbox e radio button', () => {
        cy.visit('/')
            .get('.header-logo')
1
        cy.get('#footer_one')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        cy.get('#css').as('Checkbox Paypal')
            .check()
    })
})