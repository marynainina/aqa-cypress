describe("Successful registration, Register button", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.get(".hero-descriptor_btn.btn.btn-primary").should("be.visible").click();
    cy.get(".modal-content").should("be.visible");
  });
  it("Successful registration, register button enabled", () => {
    cy.get('input[id="signupName"]').should("be.visible").type("Maryna");
    cy.get('input[id="signupLastName"]').should("be.visible").type("Inina");
    cy.get('input[id="signupEmail"]')
      .should("be.visible")
      .type(`test+${Date.now()}@gmail.com`);
    cy.get('input[id="signupPassword"]')
      .should("be.visible")
      .type("Q-w-e-123@");
    cy.get('input[id="signupRepeatPassword"]')
      .should("be.visible")
      .type("Q-w-e-123@");
    cy.get(".modal-footer")
      .find(".btn.btn-primary")
      .should("be.visible")
      .click();
    cy.url().should("eq", "https://qauto.forstudy.space/panel/garage");
  });

  it("Unsuccessful registration, register btn disabled", () => {
    cy.get('input[id="signupName"]').should("be.visible").type("123456");
    cy.get('input[id="signupLastName"]').should("be.visible").type("    ");
    cy.get('input[id="signupEmail"]')
      .should("be.visible")
      .type(`test+${Date.now()}gmail.com`);
    cy.get('input[id="signupPassword"]')
      .should("be.visible")
      .type("w-w-e-123@");
    cy.get('input[id="signupRepeatPassword"]')
      .should("be.visible")
      .type("Q-w-e-123@");
    cy.get(".modal-footer")
      .find(".btn.btn-primary")
      .should("be.visible")
      .should("be.disabled");
  });
});
