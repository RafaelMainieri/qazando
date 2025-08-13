describe('Cadastro de usuário', () => {

    it('Cadastro sem nome', () => {
        // entra na home e verifica a logo pra esperar carregar o site
        cy.visit('/')
            .get('.header-logo')
        
        // clica e entre na tela de cadastro
        cy.get('.fa.fa-lock')
            .click()

        // foca no menu Home
        cy.get('#menuHome')
            .focus()

        // verifica se o sub menu da Home é visivel
        cy.get('.sub-menu')
            .should('be.visible')
    })
})