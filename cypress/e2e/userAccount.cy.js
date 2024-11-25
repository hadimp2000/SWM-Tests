describe("User Account tests", () => {
  beforeEach(() => {
    cy.login();
  });

  it("UA-01: Verify account dashboard access", () => {
    cy.visit("/account");
  });

  it("UA-02: Verify order history", () => {
    cy.visit("/account");

    cy.contains("Order History").should("be.visible").click();
  });

  it("UA-03: Verify address management", () => {
    cy.visit("/account");
    cy.wait(500);

    cy.contains("Shipping Address").should("be.visible").click();
    cy.wait(500);

    cy.get('input[name="firstName"]').clear().type("Hadi"); 

    cy.get('input[name="lastName"]').clear().type("Moradi"); 

    cy.get('input[name="company"]').clear().type("Kosmonaut"); 

    cy.get('input[name="email"]').clear().type("differentEmail6@example.com");

    cy.get('input[placeholder="Street"]').clear().type("123 Elm Street");

    cy.get('input[placeholder="Postal Code"]').clear().type("12345");

    cy.get('input[placeholder="City"]').clear().type("New York");

    cy.get('input[placeholder="State"]').clear().type("New York");

    // Submit the form
    cy.get('button[type="submit"][data-variant="secondary"]')
      .contains("Save changes")
      .click();
    cy.wait(1000);

    cy.contains("Your shipping address has been updated successfully")
      .should("be.visible")
      .scrollIntoView();
  });

  it("UA-04: Verify logout functionality", () => {
    cy.visit("/account");
    cy.wait(1000);
    cy.get('button[data-variant="secondary"]')
      .first()
      .should("be.visible")
      .click();
    cy.wait(1000);

    cy.contains("button", "Sign Out").scrollIntoView().click({ force: true });

    cy.wait(1000);
  });
});
