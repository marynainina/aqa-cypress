import addExpensesPage from "../Pages/AddExpensesPage.js";
import expensesPage from "../Pages/ExpensesPage.js";
import loginPage from "../Pages/LoginPage.js";
import addGaragePage from "../Pages/AddGaragePage.js";

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
    addGaragePage.selectBrand("Audi");
    addGaragePage.selectModel("TT");
    addGaragePage.typeMileage("3000");
    addGaragePage.clickAddButton();
  });

  context("Open the Add an expense modal using different buttons", () => {
    it("Add fuel expense button", () => {
      addExpensesPage.clickAddFuelExpenseButton();
      cy.get(".modal-title").contains("Add an expense").should("be.visible");
    });

    it("Fuel expense left sidebar btn + Add an expense btn", () => {
      addExpensesPage.clickFuelExpensesButton();
      cy.location("pathname").should("eq", "/panel/expenses");
      addExpensesPage.clickAddAnExpenseButton();
      cy.get(".btn.btn-primary")
        .contains("Add an expense")
        .should("be.visible");
      addExpensesPage.clickCloseButton();
    });
  });

  it("Successfully adds an expense and displays the entered data", () => {
    addExpensesPage.clickAddFuelExpenseButton();
    cy.get(".modal-title").contains("Add an expense").should("be.visible");

    addExpensesPage.typeReportDate("23.09.2026");
    addExpensesPage.clickdatePickerButton();
    addExpensesPage.selectMonthBlock("Aug");
    addExpensesPage.clickLeftNavBtn();
    addExpensesPage.clickRightnavBtn();
    addExpensesPage.clickdatePickerButton();
    addExpensesPage.typeMileage("8000");
    addExpensesPage.typeNumberOfLiters("3");
    addExpensesPage.typeTotalCost("123000");

    cy.get("#addExpenseMileage").should("have.value", "8000");
    cy.get("#addExpenseLiters").should("have.value", "3");
    cy.get("#addExpenseTotalCost").should("have.value", "123000");

    cy.get("#addExpenseDate").should("have.value", "23.09.2026");
    cy.get(".modal-footer.d-flex.justify-content-end")
      .contains("Add")
      .should("be.enabled");
    addExpensesPage.clickAddButton();

    expensesPage.verifyExpensesPage();
    expensesPage.verifyExpenseData("8000", "3", "123000");
  });

  it("Cancels reopened expense modal without removing saved data", () => {
    addExpensesPage.clickFuelExpensesButton();
    cy.location("pathname").should("eq", "/panel/expenses");

    addExpensesPage.clickAddAnExpenseButton();
    cy.get(".modal-title").contains("Add an expense").should("be.visible");

    addExpensesPage.typeReportDate("23.09.2026");
    addExpensesPage.typeMileage("9000");
    addExpensesPage.typeNumberOfLiters("4");
    addExpensesPage.typeTotalCost("125000");
    addExpensesPage.clickAddButton();

    addExpensesPage.clickFuelExpensesButton();
    cy.location("pathname").should("eq", "/panel/expenses");

    addExpensesPage.clickAddAnExpenseButton();
    cy.get(".modal-title").contains("Add an expense").should("be.visible");

    addExpensesPage.clickCancelButton();

    expensesPage.verifyExpenseData("9000", "4", "125000");
    expensesPage.verifyExpensesPage();
  });
});
