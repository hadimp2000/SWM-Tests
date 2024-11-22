describe("User Registration and Login Tests", () => {
  it("PP-01: Verify product details display", () => {
    cy.visit("/");

    cy.contains('p', 'Our premium selection').click()

    cy.get('div.jsx-3710567822').first().find('img').first().click();

  });

  it("PP-02: Verify Add to Cart button", () => {
    cy.visit("/");

    cy.contains('p', 'Our premium selection').click()

    cy.get('div.jsx-3710567822').first().find('img').first().click();

    cy.contains('button', /Add to Cart/i).should('be.visible').click()
  });

});
