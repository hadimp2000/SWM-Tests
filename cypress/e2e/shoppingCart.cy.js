describe("Shopping cart tests", () => {
  beforeEach(() => {
    cy.login();
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

  it("SC-01: Verify card page loads correctly", () => {
    cy.visit("/");
    cy.get('a[href="/cart"]').click();
  });

  it("SC-02 : Verify product quantity update", () => {
    cy.visit("/cart");

    cy.get(
      'div.flex-row > [data-testid="select"] > .css-b62m3t-container > .justify-between'
    ).click();

    cy.get(".shadow-tkn_colors_light_Shadow__default.css-bcdlew-menu")
      .contains("3")
      .click();
  });

  it("PP-02: Verify Add to Cart button", () => {
    cy.visit("/");

    cy.contains("p", "Our premium selection").click();

    cy.get(
      ".swiper-slide-next > .jsx-3710567822 > .group > div.overflow-hidden > a.relative > picture > .h-full"
    ).click();

    cy.wait(3000);
    cy.contains("button", /Add to Cart/i)
      .should("be.visible")
      .click();
  });

  it("SC-03 : Verify product quantity update", () => {
    cy.visit("/cart");

    cy.get('[data-variant="ghost-light"][type="button"]')
      .first()
      .should("be.visible")
      .click();
  });

  it("SC-04 : Verify cart removal", () => {
    cy.visit("/cart");
    cy.wait(2000);

    /* Another way
     cy.get('[data-variant="ghost-light"][type="button"]')
       .should("be.visible")
       .click({ multiple: true });*/

    cy.get('[data-variant="ghost-light"][type="button"]')
      .should("be.visible")
      .each(($button) => {
        cy.wrap($button).click();
        cy.wait(1000);
      });
    cy.wait(1000);

    cy.contains(/no items/i);
  });

  //Checkout
  it("PP-02: Verify Add to Cart button", () => {
    cy.visit("/");

    cy.contains("p", "Our premium selection").click();

    cy.get(
      ".swiper-slide-next > .jsx-3710567822 > .group > div.overflow-hidden > a.relative > picture > .h-full"
    ).click();

    cy.wait(2000);
    cy.contains("button", /Add to Cart/i)
      .should("be.visible")
      .click();
    cy.wait(1000);
  });

  it("CO-01 to 04: visit Logs", () => {
    // TestId = CO-01
    cy.log("CO-01: Verify checkout page loads correctly");
    cy.visit("/cart");

    cy.get('[data-testid="checkout-link"] > .group\\/button')
      .should("be.visible")
      .click({ force: true });

    cy.wait(7000);
    cy.location("pathname").should("eq", "/checkout/processing");

    // TestId = CO-02
    cy.log("CO-02: Verify address input");
    cy.get('select[name="state"]').should("be.visible").select("New York");

    cy.wait(1000);

    // TestId = CO-03
    cy.log("CO-03: Verify payment method selection");
    cy.get(".uPO0_R3nwLOubFleHnFb > .t3f22XBvThTFzPqwPCXg")
      .should("be.visible")
      .click();

    cy.get('[data-testid="delivery-form"] > .qR6B73K8xvy3wURN0jFu')
      .should("be.visible")
      .click();
    cy.wait(1000);

    // TestId = CO-04
    cy.log("CO-04: Verify order confirmation");
    cy.get(
      ":nth-child(3) > :nth-child(1) > .aRd8ru9HY86qiqQcQPLR > .dKQ4xzOC4xSC0dqDi4s0 > label"
    )
      .should("be.visible")
      .click();
    cy.wait(500);

    //click continue
    cy.get(".zeknT__XE5i3d5zPoMmV > .qR6B73K8xvy3wURN0jFu")
      .should("be.visible")
      .click();
    cy.wait(500);

    //click continue
    cy.get(".aMQht1Zf8aoJ2cP2o8Ry").should("be.visible").click();
    cy.wait(5000);

    //click Done
    cy.get(".qR6B73K8xvy3wURN0jFu").should("be.visible").click();
  });
});
