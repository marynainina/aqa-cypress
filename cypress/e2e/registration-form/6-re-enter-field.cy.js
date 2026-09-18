describe("Name field", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.get(".hero-descriptor_btn.btn.btn-primary").should("be.visible").click();
    cy.get(".modal-content").should("be.visible");
  });

  it("Empty field - Re-enter password required", () => {
    cy.get('input[id="signupRepeatPassword"]').should("be.visible").focus();
    cy.press("Tab");
    cy.contains("Re-enter password required").should("be.visible");
  });

  it("Passwords do not match", () => {
    cy.get('input[id="signupPassword"]')
      .should("be.visible")
      .type("Abcdefghijk1234");
    cy.press("Tab");
    cy.get('input[id="signupRepeatPassword"]')
      .should("be.visible")
      .type("Abcdefghijk5678");
    cy.press("Tab");
    cy.get("div.invalid-feedback p")
      .contains("Passwords do not match")
      .should("be.visible");
  });

  it("Border color red", () => {
    cy.get('input[id="signupRepeatPassword"]').should("be.visible").focus();
    cy.press("Tab");
    cy.get('input[id="signupRepeatPassword"]').should(
      "have.class",
      "is-invalid",
    );
    cy.press("Tab");
  });
});
