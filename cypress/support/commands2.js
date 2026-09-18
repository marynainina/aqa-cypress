Cypress.Commands.add("login", (email, password) => {
  cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");

  cy.get(".btn.btn-outline-white.header_signin").should("be.visible").click();
  cy.get(".modal-dialog.modal-dialog-centered").should("be.visible");
  cy.get("#signinEmail.form-control.ng-untouched.ng-pristine.ng-invalid").type(
    email,
  );
  cy.get(
    "#signinPassword.form-control.ng-untouched.ng-pristine.ng-invalid",
  ).type(password);
  cy.get(".btn.btn-primary").contains("Login").click();
});

Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false;
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: "type",
      message: "*".repeat(text.length),
    });
  }

  return originalFn(element, text, options);
});
