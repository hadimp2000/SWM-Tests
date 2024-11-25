describe("Search tests", () => {
  beforeEach(() => {
    cy.login();
  });

  it("SR-01: Verify search results for a valid query", () => {
    cy.visit("/");
    cy.wait(500);

    cy.get('input[placeholder="Search"]')
      .click()
      .type("PRO Yukon WP tank bag{enter}");
  });

  it("SR-02: Verify search results for an invalid query", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get('input[placeholder="Search"]').click().type("Invalid Query{enter}");
    cy.wait(500);

    cy.contains("0 results").should("exist");
  });

  it("SR-03: Verify filtering in search results", () => {
    cy.visit("/");
    cy.wait(500);

    cy.get('input[placeholder="Search"]')
      .click()
      .type("PRO Yukon WP tank bag{enter}");
    cy.wait(1000);

    cy.contains("span", "Filters").click({ force: true });

    cy.wait(500);
    cy.get("div.flex.flex-col.gap-tkn_spacing_xs_Gutter_Y_sm") 
      .find("input") 
      .eq(0) 
      .click({ force: true })
      .scrollIntoView();
    cy.wait(500);

    cy.wait(500);
    cy.get("div.flex.flex-col.gap-tkn_spacing_xs_Gutter_Y_sm") 
      .find("input")
      .eq(12) 
      .click({ force: true })
      .scrollIntoView();

    cy.wait(500);
    cy.get("div.flex.flex-col.gap-tkn_spacing_xs_Gutter_Y_sm") 
      .find("input") 
      .eq(22) 
      .click({ force: true })
      .scrollIntoView();

    cy.wait(500);

    cy.get('body').click(10, 200); 
  });
});
