describe("Product tests", () => {
  beforeEach(() => {
    cy.login();
  });

  it("PP-01: Verify product details display", () => {
    cy.visit("/");

    cy.contains("p", "Our premium selection").click();

    cy.get("div.jsx-3710567822").first().find("img").first().click();
  });

  it("PP-02: Verify Add to Cart button", () => {
    cy.visit("/");

    cy.contains("p", "Our premium selection").click();

    cy.get(
      ".swiper-slide-active > .jsx-3710567822 > .group > div.overflow-hidden > a.relative > picture > .h-full"
    ).click();

    cy.wait(3000);

    cy.contains("button", /Add to Cart/i)
      .should("be.visible")
      .click();
  });

  
});
