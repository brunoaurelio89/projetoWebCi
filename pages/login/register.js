import { faker } from "@faker-js/faker";

class RegisterNew {
  fillForm() {
    const timestamp = new Date().getTime();
    const email = `BrunoQA-${timestamp}@email.com`;

    cy.contains("Signup").click();
    // Signup.ClickSignup()
    cy.get('[data-qa="signup-name"]').type(Cypress.env("signUpName"));
    cy.get('[data-qa="signup-email"]').type(email);
    cy.contains("button", "Signup").click();
    cy.get("input[type=radio]").eq(1).check();
    cy.get('[id="password"]').type(Cypress.env("passwordCorrect"), {
      log: false,
    });
    cy.get('[data-qa="days"]').select("10");
    cy.get('[data-qa="months"]').select("November");
    cy.get('[data-qa="years"]').select("1993");
    cy.get('input[type="checkbox"]#newsletter').check();
    cy.get('input[type="checkbox"]#optin').check();
    cy.get('[data-qa="first_name"]').type("Bruno");
    cy.get('[data-qa="last_name"]').type("Aurelio QA");
    cy.get('[data-qa="company"]').type(faker.company.name());
    cy.get('[data-qa="address"]').type(faker.location.streetAddress());
    cy.get('[data-qa="address2"]').type(faker.location.cardinalDirection());
    cy.get('[data-qa="country"]').select("New Zealand");
    cy.get('[data-qa="state"]').type("Wellington");
    cy.get('[data-qa="city"]').type(faker.location.city());
    cy.get('[data-qa="zipcode"]').type(faker.location.zipCode());
    cy.get('[data-qa="mobile_number"]').type(faker.phone.number());
    cy.get('[data-qa="create-account"]').click();
    cy.url().should("includes", "account_created");
    cy.get('[data-qa="continue-button"]').click();
    cy.wait(500);
    cy.contains(`Logged in as ${Cypress.env("signUpName")}`);
  }

  DeleteAccountCreated() {
    cy.get('[href="/delete_account"]').click();
    cy.url().should("includes", "delete_account");
    cy.get('[data-qa="continue-button"]').click;
  }
}

export default new RegisterNew();
