import "../../support/commands3";

import loginPage from "../Pages/LoginPage.js";

const user = {
  useremail: Cypress.config("userEmail"),
  password: Cypress.config("userPassword"),
};

describe("Create expense using existing carId", () => {
  beforeEach(() => {
    cy.visit("/");
    loginPage.clickSignInButton();
    loginPage.typeEmail(user.useremail);
    loginPage.typePassword(user.password);
    loginPage.clickLoginButton();
    cy.url().should("eq", "https://qauto.forstudy.space/panel/garage");
  });

  it("Create expense", () => {
    cy.request("GET", "/api/cars").then((response) => {
      const car = response.body.data.find((car) => car.id === 568100);
      expect(car).to.exist;
      cy.expense(568100, "2026-09-29T00:00:00.000Z", 3, 2012, 1240);
    });
  });
});
