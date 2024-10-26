class ContactUs {
  contactFillForm() {
    const text =
      "Olá, poderia me informar o status e o código de rastreio do pedido nº 7458931521";

    cy.get("h2.title.text-center").should("contain.text", "Get In Touch");
    cy.get('[data-qa="name"]').type("Bruno");
    cy.get('[data-qa="email"]').type(Cypress.env("emailExist"));
    cy.get('[data-qa="subject"]').type("Qualquer Assunto");
    cy.get('[data-qa="message"]').type(text);
    cy.fixture("example.json").as("archiveUpload");
    cy.get('input[name="upload_file"]').selectFile("@archiveUpload");
    cy.get('[data-qa="submit-button"]').click();
    cy.get(".status").should(
      "have.text",
      "Success! Your details have been submitted successfully.",
    );
    cy.get('[class="btn btn-success"]').click();
  }
}

export default new ContactUs();
