describe("Site Load Time Verification", () => {
  it("Verify site loads within acceptable time", () => {
    const maxLoadTime = 2000;

    cy.visit("/", {
      onBeforeLoad: (win) => {
        win.performance.mark("start");
      },
      onLoad: (win) => {
        win.performance.mark("end");
        win.performance.measure("pageLoad", "start", "end");
        const measure = win.performance.getEntriesByName("pageLoad")[0];

        expect(measure.duration).to.be.lessThan(maxLoadTime);
      },
    });
  });

  it("should redirect from HTTP to HTTPS", () => {
    const httpUrl = Cypress.config("baseUrl").replace("https://", "http://");

    cy.visit(httpUrl);

    cy.url().should("eq", Cypress.config("baseUrl"));
  });

  const sqlInjectionPayloads = [
    "'; DROP TABLE users; --",
    "' OR 1=1 --",
    "' UNION SELECT username, password FROM users --",
  ];

  sqlInjectionPayloads.forEach((payload) => {
    it(`should handle SQL injection payload gracefully: ${payload}`, () => {
      cy.visit("/");
      cy.wait(500);

      cy.get('input[placeholder="Search"]')
        .click()
        .clear()
        .type(payload + "{enter}");
      cy.wait(1000); 

      // Verify that the site does not display errors or SQL-related content
      cy.contains("Error").should("not.exist"); // Ensure no error messages are shown
      cy.contains("SQL").should("not.exist"); // Ensure no SQL-related content is exposed
    });
  });
});
