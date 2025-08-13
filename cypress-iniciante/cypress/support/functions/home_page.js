/// <reference types="cypress" />

// Elements
const elements = {
    page_logo: '.header-logo',
    lock: '.fa.fa-lock',
    user: '#user'    
}


// Functions
export default { // tudo q tiver aqui dentro eu consigo exportar pra outro arquivo facilmente
    accessRegisterPage() {
        cy.visit('/')
        .get(elements.page_logo)

        cy.get(elements.lock)
            .click()

        cy.get(elements.user)
            .should('be.visible')
        }
}