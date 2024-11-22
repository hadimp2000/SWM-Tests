describe("Homepage Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("HP-01: Verify homepage loads correctly", () => {
    cy.get('[data-testid="banner-headline"]')
      .should("be.visible")
      .and("contain.text", "SysBag WP");

    cy.get('[data-testid="page-heading-headline"]')
      .should("be.visible")
      .and("contain.text", "Discover");
  });

  it("HP-02: Verify search bar functionality", () => {
    cy.get('input[placeholder="Search"]').click().type("SysBag WP{enter}");
  });

  it("HP-03: Verify category navigation", () => {
    cy.get('button[data-variant="secondary"]')
      .first()
      .should("be.visible")
      .click();

    cy.get("div.typo-xs_list_base")
      .find("div.flex-1")
      .contains("Protection")
      .should("be.visible")
      .click();

    cy.get("a")
      .contains(/go to protection/i)
      .should("be.visible")
      .click();
  });
});
