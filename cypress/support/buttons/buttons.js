class ActionButtons {
  ClickSignup() {
    cy.contains("Signup").click();
    cy.url().should("contain", "login");
  }

  ClickLogout() {
    cy.contains("Logout").click();
    cy.url().should("eq", "https://automationexercise.com/login");
    cy.contains("Login to your account").should("be.visible");
  }

  ContactUs() {
    cy.contains(`Contact us`).click();
  }

  ClickProducts() {
    cy.contains("Products").click();
    cy.url().should("contain", "products");
    cy.get(".title").should("be.visible").and("contain", "All Products");
  }
}

export default new ActionButtons();
