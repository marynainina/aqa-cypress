class ExpensesPage {
  get addAnExpenseButton() {
    return cy.get(".btn.btn-primary").contains("Add an expense");
  }

  get cancelButton() {
    return cy.get(".btn.btn-secondary").contains("Cancel");
  }

  verifyExpenseData(mileage, liters, totalCost, month) {
    cy.get(".expenses_table").within(() => {
      cy.contains(mileage).should("be.visible");
      cy.contains(liters).should("be.visible");
      cy.contains(totalCost).should("be.visible");
    });
  }

  verifyExpensesPage() {
    cy.get(".panel-page").should("be.visible");
    cy.contains("Fuel expenses").should("be.visible");

    cy.get(".item-group").should("be.visible");
    cy.get("#carSelectDropdown").should("be.visible");
    cy.get(".expenses_table").should("be.visible");

    cy.contains("Date").should("be.visible");
    cy.contains("Mileage").should("be.visible");
    cy.contains("Liters used").should("be.visible");
    cy.contains("Total cost").should("be.visible");
    cy.get(".btn.btn-primary").should("be.visible").contains("Add an expense");
  }
}
//}

export default new ExpensesPage();
