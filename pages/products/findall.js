
class FindAllProducts {
    FindAll(){
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least',1)
            .first()
            .parent()
            .contains('View Product')
            .click()

        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p').should('be.visible').and('have.length',4)
        cy.get('.product-information span span').should('be.visible')
    }
}

export default new FindAllProducts()