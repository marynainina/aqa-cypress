class AddExpensesPage {
  get addFuelExpenseButton() {
    return cy.get(".car_add-expense.btn.btn-success").last();
  }
  get fuelExpensesButton() {
    return cy.get('a[routerlink="expenses"]');
  }
  get addAnExpenseButton() {
    return cy.get(".btn.btn-primary").contains("Add an expense");
  }
  get vehicleInput() {
    return cy.get("#addExpenseCar");
  }
  get reportDateInput() {
    return cy.get("#addExpenseDate");
  }
  //Calendar btn
  get datePickerButton() {
    return cy.get(".btn.date-picker-toggle");
  }
  get leftNavBtn() {
    return cy.get('button[aria-label="Previous month"]');
  }
  get rightnavBtn() {
    return cy.get('button[aria-label="Next month"]');
  }

  get monthBlock() {
    return cy.get('select[aria-label="Select month"]');
  }

  get mileageInput() {
    return cy.get("#addExpenseMileage");
  }
  get numberOfLitersInput() {
    return cy.get("#addExpenseLiters");
  }
  get totalCostInput() {
    return cy.get("#addExpenseTotalCost");
  }
  get addButton() {
    return cy.get(".modal-footer.d-flex.justify-content-end").contains("Add");
  }
  get cancelButton() {
    return cy.get(".btn.btn-secondary").contains("Cancel");
  }

  get closeButton() {
    return cy.get("button.close");
  }
  //Methods
  clickAddFuelExpenseButton() {
    this.addFuelExpenseButton.click();
  }

  clickFuelExpensesButton() {
    this.fuelExpensesButton.click();
  }
  clickAddAnExpenseButton() {
    this.addAnExpenseButton.click();
  }
  selectVehicle(vehicle) {
    this.vehicleInput.select(vehicle);
  }
  typeReportDate(date) {
    this.reportDateInput.clear().type(date);
  }

  clickdatePickerButton() {
    this.datePickerButton.click();
  }
  clickLeftNavBtn() {
    this.leftNavBtn.click();
  }
  clickRightnavBtn() {
    this.rightnavBtn.click();
  }

  selectMonthBlock(month) {
    this.monthBlock.select(month);
  }

  typeMileage(number) {
    this.mileageInput.clear().type(number);
  }
  typeNumberOfLiters(numberliter) {
    this.numberOfLitersInput.clear().type(numberliter);
  }
  typeTotalCost(numbercost) {
    this.totalCostInput.clear().type(numbercost);
  }

  clickAddButton() {
    this.addButton.click();
  }
  clickCancelButton() {
    this.cancelButton.click();
  }

  clickCloseButton() {
    this.closeButton.click();
  }
}
export default new AddExpensesPage();
