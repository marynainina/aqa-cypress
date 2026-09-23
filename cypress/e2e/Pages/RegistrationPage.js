class RegistrationPage {
  get signupButton() {
    return cy.get(".hero-descriptor_btn.btn.btn-primary");
  }
  get nameInput() {
    return cy.get("#signupName");
  }
  get lastNameInput() {
    return cy.get("#signupLastName");
  }
  get emailInput() {
    return cy.get("#signupEmail");
  }
  get passwordInput() {
    return cy.get("#signupPassword");
  }
  get repeatPasswordInput() {
    return cy.get("#signupRepeatPassword");
  }
  get registerButton() {
    return cy.get(".modal-footer").find(".btn.btn-primary");
  }

  // Методи
  clickSignupButton() {
    this.signupButton.click();
  }

  typeName(name) {
    this.nameInput.type(name);
  }
  typeLastName(lastName) {
    this.lastNameInput.type(lastName);
  }

  typeEmail(email) {
    this.emailInput.type(email);
  }

  typePassword(password) {
    this.passwordInput.type(password);
  }
  typeRepeatPassword(repeatPassword) {
    this.repeatPasswordInput.type(repeatPassword);
  }
  clickRegisterButton() {
    this.registerButton.click();
  }
}
export default new RegistrationPage();
