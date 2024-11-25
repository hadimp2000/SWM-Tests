describe("Homepage Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });
  it("HP-01: Verify homepage loads correctly", () => {
    //check if Discover Title exists
    cy.get(
      ':nth-child(3) > .gap-tkn_spacing_xs_Gutter_Y_default > .grid-cols-1 > .col-span-1 > [data-testid="page-heading-headline"]'
    ).should("be.visible");
    //check if SW-MOTECH exists
    cy.get(
      ':nth-child(2) > .gap-y-tkn_spacing_xs_Gutter_Y_sm > .grid > .text-tkn_colors_light_txt__pri > [data-testid="page-heading-headline"]'
    ).should("be.visible");
  });

  it("HP-02: Verify search bar functionality", () => {
    cy.get('input[placeholder="Search"]').click().type("SysBag WP{enter}");
    cy.wait(2000)
  });

  it("HP-03: Verify category navigation", () => {
    cy.get('button[data-variant="secondary"]')
      .first()
      .should("be.visible")
      .click();
    cy.wait(1000);

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
