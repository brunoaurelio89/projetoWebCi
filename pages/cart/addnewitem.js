class Item {
  AddNewItemCart() {
    cy.contains("Add to cart").click();
  }
}

export default new Item();
