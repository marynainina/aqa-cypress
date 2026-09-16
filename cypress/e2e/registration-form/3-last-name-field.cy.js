describe("Last name field", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.get(".hero-descriptor_btn.btn.btn-primary").should("be.visible").click();
    cy.get(".modal-content").should("be.visible");
  });

  it("Empty field - Name is required", () => {
    cy.get('input[id="signupLastName"]').should("be.visible").focus();
    cy.press("Tab");
    cy.contains("Last name required").should("be.visible");
  });

  context("Wrong data- Last name is invalid", () => {
    it("Numbers", () => {
      cy.get('input[id="signupLastName"]').should("be.visible").type("123");
      cy.press("Tab");
      cy.contains("Last name is invalid").should("be.visible");
    });

    it("Cyrillic", () => {
      cy.get('input[id="signupLastName"]').should("be.visible").type("Марина");
      cy.press("Tab");
      cy.contains("Last name is invalid").should("be.visible");
    });

    it("Special characters", () => {
      cy.get('input[id="signupLastName"]')
        .should("be.visible")
        .type("./@#$%&*()_+=!~[]{}");
      cy.press("Tab");
      cy.contains("Last name is invalid").should("be.visible");
    });

    it("Letter plus characters", () => {
      cy.get('input[id="signupLastName"]')
        .should("be.visible")
        .type("Inina456");
      cy.press("Tab");
      cy.contains("Last name is invalid").should("be.visible");
    });
  });
  it("Wrong length < 2", () => {
    cy.get('input[id="signupLastName"]').should("be.visible").type("I");
    cy.press("Tab");
    cy.get('input[id="signupLastName"]')
      .invoke("val")
      .its("length")
      .should("be.lt", 2);
    cy.contains("Last name has to be from 2 to 20 characters long").should(
      "be.visible",
    );
  });
  it("Wrong length > 20", () => {
    cy.get('input[id="signupLastName"]')
      .should("be.visible")
      .type("I n i n i n a M a r y n a V a s y l i v n a ");
    cy.press("Tab");
    cy.get('input[id="signupLastName"]')
      .invoke("val")
      .its("length")
      .should("be.gt", 20);
    cy.contains("Last name has to be from 2 to 20 characters long").should(
      "be.visible",
    );
  });
  it("Ignore spaces", () => {
    cy.get('input[id="signupLastName"]').should("be.visible").type(" Inina ");
    cy.press("Tab");
    cy.get('input[id="signupLastName"]')
      .invoke("val")
      .then((value) => {
        expect(value.trim().length).to.equal(5);
      });
  });
  it("Border color red", () => {
    cy.get('input[id="signupLastName"]').should("be.visible").focus();
    cy.press("Tab");
    cy.get('input[id="signupLastName"]').should("have.class", "is-invalid");
  });
});
