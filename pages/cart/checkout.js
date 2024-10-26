

class CartCheckout {
    Checkout(){
        
        cy.contains("View Cart").click()
        cy.get('.btn-default.check_out').should('be.visible')
        cy.get('.btn-default.check_out').click()
        cy.get(':nth-child(2) > .heading').should('have.text', 'Address Details')
        cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order')
        cy.get('.form-control').type('Colocar em uma embalagem para presente, sem custo, com  cupom de desconto.')
        cy.get('.btn-default.check_out').click()
    }


}

export default new CartCheckout()