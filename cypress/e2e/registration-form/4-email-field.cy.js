describe("Email field", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.get(".hero-descriptor_btn.btn.btn-primary").should("be.visible").click();
    cy.get(".modal-content").should("be.visible");
  });

  it("Empty field - Email is required", () => {
    cy.get('input[id="signupEmail"]').should("be.visible").focus();
    cy.press("Tab");
    cy.contains("Email required").should("be.visible");
  });

  context("Wrong data- Email is incorrect", () => {
    it("Without@", () => {
      cy.get('input[id="signupEmail"]')
        .should("be.visible")
        .type("testgmail.com");
      cy.press("Tab");
      cy.contains("Email is incorrect").should("be.visible");
    });

    it("Without domain", () => {
      cy.get('input[id="signupEmail"]').should("be.visible").type("test@");
      cy.press("Tab");
      cy.contains("Email is incorrect").should("be.visible");
    });

    it("Without local part", () => {
      cy.get('input[id="signupEmail"]').should("be.visible").type("@gmail.com");
      cy.press("Tab");
      cy.contains("Email is incorrect").should("be.visible");
    });

    it("Spaces in the begining and in the end", () => {
      cy.get('input[id="signupEmail"]')
        .should("be.visible")
        .type(" test@gmail.com ");
      cy.press("Tab");
      cy.contains("Email is incorrect").should("be.visible");
    });
    it("Spaces in the middle", () => {
      cy.get('input[id="signupEmail"]')
        .should("be.visible")
        .type("tes t@gmail.com");
      cy.press("Tab");
      cy.contains("Email is incorrect").should("be.visible");
    });
  });
  it("Border color red", () => {
    cy.get('input[id="signupEmail"]').should("be.visible").focus();
    cy.press("Tab");
    cy.get('input[id="signupEmail"]').should("have.class", "is-invalid");
  });
});
