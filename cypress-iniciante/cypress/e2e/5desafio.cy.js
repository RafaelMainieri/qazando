/// <reference types="cypress" />

const user_data = require('../fixtures/5desafio.json') // puxa as informações do arquivo 5desafio.json

describe('Cadastro de usuário', () => {

    beforeEach('Acessando a página de cadastro', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa.fa-lock')
            .click()
    })

    it('Validar campo nome vazio', () => {
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('exist')
            .should('be.visible')
            .should('contain', 'O campo nome deve ser prenchido')
    })
    

    it('Validar campo e-mail vazio', () => {
        cy.get('#user')
            .type(user_data.name)
        
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
    })


    it('Validar campo e-mail inválido', () => {
        cy.get('#user')
            .type(user_data.name)
        
        cy.get('#email')
            .type('emailinvalido@gmailcom')

        cy.get('#btnRegister')
            .click()
        
        cy.get('#errorMessageFirstName')
            .should('exist')
            .should('be.visible')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
    })


    it('Validar campo senha vazio', () => {
        cy.get('#user')
            .type(user_data.name)

        cy.get('#email')
            .type(user_data.email)

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('exist')
            .should('be.visible')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })


    it('Validar campo senha inválido', () => {
        cy.get('#user')
            .type(user_data.name)

        cy.get('#email')
            .type(user_data.email)

        cy.get('#password')
            .type('senha')

        cy.get('#btnRegister')
            .click()
        
        cy.get('#errorMessageFirstName')
            .should('exist')
            .should('be.visible')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })


    it('Validar cadastro realizado com sucesso', () => {
        cy.get('#user')
            .type(user_data.name)

        cy.get('#email')
            .type(user_data.email)

        cy.get('#password')
            .type(user_data.password)

        cy.get('#btnRegister')
            .click()

        cy.get('#swal2-title')
            .should('exist')
            .should('be.visible')
            .should('contain', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('exist')
            .should('be.visible')
            .should('contain', `Bem-vindo ${name}`)
    })
})