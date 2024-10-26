
class Subscription {
    NewSubscription(){
        
        cy.get('[id="susbscribe_email"]').scrollIntoView().type(Cypress.env("emailExist"))
        cy.get('[id="subscribe"]').click()
        cy.contains('You have been successfully subscribed').should('be.visible')
    }
}

export default new Subscription()