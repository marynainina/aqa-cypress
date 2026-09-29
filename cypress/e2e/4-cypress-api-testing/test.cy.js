import loginPage from "../Pages/LoginPage.js";
import garagePage2 from "../Pages/GaragePage2.js";
import addExpensesPage from "../Pages/AddExpensesPage.js";
import expensesPage2 from "../Pages/ExpensesPage2.js";

const user = {
  useremail: Cypress.config("userEmail"),
  password: Cypress.config("userPassword"),
};

describe("Varification of previously created carid and its expense", () => {
  beforeEach(() => {
    cy.visit("/");
    loginPage.clickSignInButton();
    loginPage.typeEmail(user.useremail);
    loginPage.typePassword(user.password);
    loginPage.clickLoginButton();
    cy.location("pathname").should("eq", "/panel/garage");
  });

  it("Find previously created car", () => {
    garagePage2.verifyGarageData_2();
  });

  it("Find previously created expense", () => {
    addExpensesPage.clickFuelExpensesButton();
    cy.location("pathname").should("eq", "/panel/expenses");
    expensesPage2.verifyExpenseData("2012", "3", "1240");
  });
});
