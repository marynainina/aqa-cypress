import "../../support/commands2";
describe("Login", () => {
  it("Login with valid data", () => {
    cy.login("marina_5-test@gmail.com", "Pa$$w0rd99");
  });
});
