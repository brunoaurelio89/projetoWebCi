class UserLogin {
  CorrectUser() {
    cy.get('[data-qa="login-email"]').type(Cypress.env("emailExist"));
    cy.get('[data-qa="login-password"]').type(Cypress.env("passwordCorrect"), {
      log: false,
    });
    cy.get('[data-qa="login-button"]').click();
    cy.get("i.fa.fa-user").parent().should("contain", "AurelioQA");
  }

  IncorretUser() {
    cy.get("#form .login-form h2").should("contain", "Login to your account");
    cy.get('[data-qa="login-email"]').type(Cypress.env("emailExist"));
    cy.get('[data-qa="login-password"]').type(
      Cypress.env("passwordIncorrect"),
      { log: false },
    );
    cy.get('[data-qa="login-button"]').click();
    cy.get(`.login-form form p`).should(
      "contain",
      "Your email or password is incorrect",
    );
  }

  SignupExistUser() {
    cy.get('[data-qa="signup-name"]').type(Cypress.env("signUpName"));
    cy.get('[data-qa="signup-email"]').type(Cypress.env("emailExist"));
    cy.get('[data-qa="signup-button"]').click();
    cy.get(`.signup-form form p`)
      .should("be.visible")
      .and("contain", "Email Address already exist!");
  }

  DeletedAccount() {
    cy.get('[href *="delete"]').click();
    cy.get("b").should("contain", "Account Deleted!");
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default new UserLogin();
