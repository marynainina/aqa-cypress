import addGaragePage from "../Pages/AddGaragePage.js";
import garagePage from "../Pages/GaragePage.js";
import loginPage from "../Pages/LoginPage.js";

const user = {
  useremail: Cypress.config("userEmail"),
  password: Cypress.config("userPassword"),
};

describe("Add car", () => {
  beforeEach(() => {
    cy.visit("/");
    loginPage.clickSignInButton();
    loginPage.typeEmail(user.useremail);
    loginPage.typePassword(user.password);
    loginPage.clickLoginButton();
    cy.location("pathname").should("eq", "/panel/garage");
    addGaragePage.clickAddCarButton();
    cy.get(".modal-header").should("be.visible");
  });

  it("Successful adding car", () => {
    addGaragePage.selectBrand("Audi");

    addGaragePage.selectModel("TT");

    addGaragePage.typeMileage("3000");

    addGaragePage.clickAddButton();

    garagePage.verifyGarageData();
  });

  it("Cancel button, closing modal", () => {
    addGaragePage.clickCancelButton();
    garagePage.verifyGarageData();
  });
});
