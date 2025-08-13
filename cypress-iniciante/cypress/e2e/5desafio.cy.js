/// <reference types="cypress" />

import home_page from '../support/functions/home_page'
import register_page from '../support/functions/register_page'

const user_data = require('../fixtures/5desafio.json') // puxa as informações do arquivo 5desafio.json

describe('Cadastro de usuário', () => {

    beforeEach('Acessando a página de cadastro', () => {
        home_page.accessRegisterPage()
    })

    it('Validar campo nome vazio', () => {
        register_page.clickRegister()
        register_page.verifyErrorMessage('O campo nome deve ser prenchido')
    })
    

    it('Validar campo e-mail vazio', () => {
        register_page.fillName(user_data.name)
        register_page.clickRegister()
        register_page.verifyErrorMessage('O campo e-mail deve ser prenchido corretamente')
    })


    it('Validar campo e-mail inválido', () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail('invalidmail@')
        register_page.clickRegister()
        register_page.verifyErrorMessage('O campo e-mail deve ser prenchido corretamente')
    })


    it('Validar campo senha vazio', () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail(user_data.email)
        register_page.clickRegister()
        register_page.verifyErrorMessage('O campo senha deve ter pelo menos 6 dígitos')
    })


    it('Validar campo senha inválido', () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail(user_data.email)
        register_page.fillPassword('senh')
        register_page.clickRegister()
        register_page.verifyErrorMessage('O campo senha deve ter pelo menos 6 dígitos')
    })


    it('Validar cadastro realizado com sucesso', () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail(user_data.email)
        register_page.fillPassword(user_data.password)
        register_page.clickRegister()
        register_page.verifyRegisterSuccess(user_data.name)
    })
})