/// <reference types="cypress" />

const user_data = require('../fixtures/5desafio.json') // puxa as informações do arquivo 5desafio.json

describe('Cadastro de usuário', () => {

    beforeEach('Acessando a página de cadastro', () => {
        cy.accessRegisterPage()
    })

    it('Validar campo nome vazio', () => {
        cy.clickRegister()
        cy.verifyErrorMessage('O campo nome deve ser prenchido')
    })
    

    it('Validar campo e-mail vazio', () => {
        cy.fillName(user_data.name)
        cy.clickRegister()
        cy.verifyErrorMessage('O campo e-mail deve ser prenchido corretamente')
    })


    it('Validar campo e-mail inválido', () => {
        cy.fillName(user_data.name)
        cy.fillEmail('invalidmail@')
        cy.clickRegister()
        cy.verifyErrorMessage('O campo e-mail deve ser prenchido corretamente')
    })


    it('Validar campo senha vazio', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.clickRegister()
        cy.verifyErrorMessage('O campo senha deve ter pelo menos 6 dígitos')
    })


    it('Validar campo senha inválido', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.fillPassword('senh')
        cy.clickRegister()
        cy.verifyErrorMessage('O campo senha deve ter pelo menos 6 dígitos')
    })


    it('Validar cadastro realizado com sucesso', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.fillPassword(user_data.password)
        cy.clickRegister()
        cy.verifyRegisterSuccess(user_data.name)
    })
})