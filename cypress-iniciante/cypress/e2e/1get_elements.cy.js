describe('Get Elements', () => {
    
    it('Encontrar/Selecionar elementos', () => {
        // entrar no site
        cy.visit('/') 
            // get() - encontrar ou selecionar elementos
            .get('.header-logo')

        // as() - da um apelido pro comando
        cy.get('#top_header').as('cabecalho')

        // contains() - encontrar elementos por texto
        cy.get('@cabecalho')
            .contains('Login')

        // find() - encontrar elementos
        cy.get('@cabecalho')
            .find('div:nth-child(2) > div > ul > li:nth-child(2) > a')
    })
})