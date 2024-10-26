

class SearchProducts {
    Search(){
        const productName = 'Shirt'

        cy.get('[id="search_product"]').type(productName)
        cy.get('[id="submit_search"]').click()
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least',1)
    }

    Search2(){
        const productName = 'Jeans'

        cy.get('[id="search_product"]').type(productName)
        cy.get('[id="submit_search"]').click()
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least',3)
    }
}

export default new SearchProducts()