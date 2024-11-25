describe("User Registration and Login", () => {
  it("UR-01: Verify new user registration", () => {
    cy.visit("/register");
    cy.get('input[placeholder="E-Mail"]').click();
    cy.get('input[placeholder="E-Mail"]').type("differentEmail7@gmail.com");

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

    cy.get("#firstName").type("Hadi");

    cy.get("#lastName").type("Moradi");

    cy.get("#streetName").type("Street number 1");

    cy.get("#postalCode").type("12345");

    cy.get("#city").type("New York");

    cy.get("#react-select-country-placeholder")
      .contains("Country")
      .click({ force: true });

    cy.wait(500);

    cy.contains("United States").click();

    cy.contains("Register Now").click();
    cy.wait(1000);
    cy.contains(
      "Your account has been successfully created. An email was sent to you to verify your account."
    )
      .should("be.visible")
      .scrollIntoView();
      cy.wait(2000)
  });

  it("UR-02: Verify login functionality", () => {
    cy.login()
  });

  it("UR-03: Verify login failure for invalid credentials", () => {
    cy.visit("/login");

    cy.get('input[type="email"]').click();
    cy.get('input[type="email"]').type("something@gmail.com");

    cy.get('input[type="password"]').type("Password123!");

    cy.contains('button[type="submit"]', "Sign In").click();

    cy.contains(
      "The email address or password you provided is incorrect"
    ).scrollIntoView();
    cy.wait(2000)
  });

  it("UR-04: Verify password recovery", () => {
    cy.visit("/login");
    cy.wait(2000);

    cy.get('a[href="/forgot-password"]').click();
    cy.wait(2000);

    cy.get('input[type="email"]').click();
    cy.get('input[type="email"]').type("aValidEmail@gmail.com");

    cy.get('button[type="button"]')
      .contains(/Recover Password/i)
      .click();
      cy.wait(2000)

      cy.contains('An E-Mail has been sent to the provided address if it is registered in our system').should('be.visible').scrollIntoView()
  });
});
