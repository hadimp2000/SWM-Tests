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
      cy.get('input[placeholder="Search"]') // Adjust the selector if needed
        .should("be.visible") // Ensure the search bar is visible
        .type("SysBag WP"); // Replace with the product name you want to test
  
      // Step 2: Click the "Search" button
      // cy.get('button[type="submit"]').click(); // Adjust the selector for the Search button
  
      // // Step 3: Verify that relevant products appear
      // cy.get(".search-results") // Replace with the selector for the search results container
      //   .should("be.visible") // Ensure results are displayed
      //   .and("contain.text", "SysBag WP"); // Verify the product name is in the results
    });
  });
  