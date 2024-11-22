describe("User Registration and Login Tests", () => {
  it("UR-01: Verify new user registration", () => {
    cy.visit("/register");
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

  it("UR-02: Verify login functionality", () => {
    cy.visit("/login");

    cy.get('input[type="email"]').click();
    cy.get('input[type="email"]').type("hmp123475@gmail.com");
    cy.get('input[type="email"]').should("have.value", "hmp123475@gmail.com");

    cy.get('input[type="password"]')
      .type("Password123!")
      .should("have.value", "Password123!");

    cy.contains('button[type="submit"]', "Sign In").click();
  });

  it("UR-03: Verify login failure for invalid credentials", () => {
    cy.visit("/login");

    cy.get('input[type="email"]').click();
    cy.get('input[type="email"]').type("something@gmail.com");
    cy.get('input[type="email"]').should("have.value", "something@gmail.com");

    cy.get('input[type="password"]')
      .type("Password123!")
      .should("have.value", "Password123!");

    cy.contains('button[type="submit"]', "Sign In").click();

    cy.contains(
      "The email address or password you provided is incorrect"
    ).scrollIntoView();
  });

  it.only("UR-04: Verify password recovery", () => {
    cy.visit("/login");

    cy.contains("a", "Forgot your password?").click();

    cy.wait(2000) 

    cy.get('input[type="email"]').click();
    cy.get('input[type="email"]').type("hmp123475@gmail.com");

    cy.get('button[type="button"]')
      .contains(/Recover Password/i)
      .click();
  });
});
