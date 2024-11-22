describe("User Registration and Login Tests", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("UR-01: Verify new user registration", () => {
    cy.get("input#email")
      .should("exist")
      .should("be.visible")
      .should("not.be.disabled")
      .type("hmp123475@gmail.com");

    cy.get("input#password")
      .type("Password123!")
      .should("have.value", "Password123!");

    cy.get("input#passwordConfirmation")
      .type("Password123!")
      .should("have.value", "Password123!");

    cy.get("#react-select-salutation-placeholder")
      .contains("Salutation")
      .click({ force: true });

    cy.wait(500);

    cy.contains("Mr").click();

    cy.get("#firstName").type("John");

    cy.get("#lastName").type("Doe");

    cy.get("#streetName").type("123 Main St");

    cy.get("#postalCode").type("12345");

    cy.get("#city").type("Sample City");

    cy.get("#react-select-country-placeholder")
      .contains("Country")
      .click({ force: true });

    cy.wait(500);

    cy.contains("United States").click();

    cy.contains("Register Now").click();
  });
});
