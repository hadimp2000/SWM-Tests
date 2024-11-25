import "cypress-iframe";

describe("Payment Tests", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Add to Cart", () => {
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

  it.only("PY-01: Verify valid card payment", () => {
    // TestId = CO-01
    cy.log("CO-01: Verify checkout page loads correctly");
    cy.visit("/cart");

    cy.get('[data-testid="checkout-link"] > .group\\/button')
      .should("be.visible")
      .click({ force: true });

    cy.wait(7000);
    cy.location("pathname").should("eq", "/checkout/processing");

    // TestId = CO-02
    // cy.get('select[name="state"]').should("be.visible").select("New York");

    cy.wait(1000);

    // click  SAVE & CONTINUE
    cy.get(".uPO0_R3nwLOubFleHnFb > .t3f22XBvThTFzPqwPCXg")
      .should("be.visible")
      .click();
    cy.wait(500);

    // click SAVE & CONTINUE
    cy.get('[data-testid="delivery-form"] > .qR6B73K8xvy3wURN0jFu')
      .should("be.visible")
      .click();
    cy.wait(7000);

    // Zugriff auf das iframe für das Ablaufdatum (Expiry Date)
    // cy.get('iframe[title="Iframe for expiry date"]')
    //   .its("0.contentDocument.body") // Lade den Inhalt des iframe
    //   .should("not.be.empty") // Stelle sicher, dass der Inhalt geladen ist
    //   .then(cy.wrap) // Wrappe den Inhalt
    //   .find("input") // Finde das Eingabefeld für das Ablaufdatum
    //   .type("0330"); // Gib ein Beispiel-Ablaufdatum ein (MM/YY)
    // // Zugriff auf das iframe für den Sicherheitscode (CVC)
    // cy.get('iframe[title="Iframe for security code"]')
    //   .its("0.contentDocument.body") // Lade den Inhalt des iframe
    //   .should("not.be.empty") // Stelle sicher, dass der Inhalt geladen ist
    //   .then(cy.wrap) // Wrappe den Inhalt
    //   .find("input") // Finde das Eingabefeld für den Sicherheitscode
    //   .type("123"); // Gib ein Beispiel-CVC ein (z.B. 123)

    // cy.contains("All fields are required unless marked otherwise.").should(
    //   "be.visible"
    // );

    // cy.get('.adyen-checkout__field--cardNumber > .adyen-checkout__input-wrapper > .adyen-checkout__input')
    //   .click()
    //   .type("4111111111111111", { delay: 100 });
  });
});
