describe('Get Texts', () => {
    
    it('Obter texto de um elementos', () => {
        cy.visit('/')
            .get('.header-logo')

        // pegando texto de um elemento
        cy.get('.top_header_left > p')
            .then((element) => {
                console.log(element.text())

            })
    })
})