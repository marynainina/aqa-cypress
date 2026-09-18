import "../../support/commands2";

it("login with hidden pass", () => {
  cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
  cy.get(".btn.btn-outline-white.header_signin").should("be.visible").click();
  cy.get(".modal-dialog.modal-dialog-centered").should("be.visible");
  cy.get("#signinEmail.form-control.ng-untouched.ng-pristine.ng-invalid").type(
    "marina_5-test@gmail.com",
  );
  cy.get(
    "#signinPassword.form-control.ng-untouched.ng-pristine.ng-invalid",
  ).type("Pa$$w0rd99", { sensitive: true });
  cy.get(".btn.btn-primary").contains("Login").click();
});
