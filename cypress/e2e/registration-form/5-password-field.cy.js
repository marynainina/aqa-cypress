describe("Password field", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.get(".hero-descriptor_btn.btn.btn-primary").should("be.visible").click();
    cy.get(".modal-content").should("be.visible");
  });

  it("Empty field - Password is required", () => {
    cy.get('input[id="signupPassword"]').should("be.visible").focus();
    cy.press("Tab");
    cy.contains("Password required").should("be.visible");
  });

  context("Wrong data - Password", () => {
    it("No integer", () => {
      cy.get('input[id="signupPassword"]')
        .should("be.visible")
        .type("Abcdefgh");
      cy.press("Tab");
      cy.contains(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ).should("be.visible");
    });

    it("No capital letter", () => {
      cy.get('input[id="signupPassword"]')
        .should("be.visible")
        .type("abcdefg1");
      cy.press("Tab");
      cy.contains(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ).should("be.visible");
    });

    it("No small letter", () => {
      cy.get('input[id="signupPassword"]')
        .should("be.visible")
        .type("ABCDEFG1");
      cy.press("Tab");
      cy.contains(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ).should("be.visible");
    });

    it("Wrong length < 8", () => {
      cy.get('input[id="signupPassword"]').should("be.visible").type("Abc123");
      cy.press("Tab");
      cy.get('input[id="signupPassword"]')
        .invoke("val")
        .its("length")
        .should("be.lt", 8);
      cy.contains(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ).should("be.visible");
    });
    it("Wrong length > 15", () => {
      cy.get('input[id="signupPassword"]')
        .should("be.visible")
        .type("Abcdefghijk123456");
      cy.press("Tab");
      cy.get('input[id="signupPassword"]')
        .invoke("val")
        .its("length")
        .should("be.gt", 15);
      cy.contains(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      ).should("be.visible");
    });

    it("Border color red", () => {
      cy.get('input[id="signupPassword"]').should("be.visible").focus();
      cy.press("Tab");
      cy.get('input[id="signupPassword"]').should("have.class", "is-invalid");
    });
  });
});
