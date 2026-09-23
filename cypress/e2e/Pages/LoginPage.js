class LoginPage {
  get signInButton() {
    return cy.get(".btn.btn-outline-white.header_signin");
  }
  get emailInput() {
    return cy.get("#signinEmail");
  }
  get passwordInput() {
    return cy.get("#signinPassword");
  }
  get loginButton() {
    return cy.get(".btn.btn-primary").contains("Login");
  }

  clickSignInButton() {
    this.signInButton.click();
  }

  typeEmail(email) {
    this.emailInput.type(email);
  }

  typePassword(password) {
    this.passwordInput.type(password);
  }
  clickLoginButton() {
    this.loginButton.click();
  }
}
export default new LoginPage();
