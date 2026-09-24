class AddGaragePage {
  get addCarButton() {
    return cy.get(".btn.btn-primary").contains("Add car");
  }
  get brandInput() {
    return cy.get("#addCarBrand");
  }
  get modelInput() {
    return cy.get("#addCarModel");
  }
  get mileageInput() {
    return cy.get("#addCarMileage");
  }
  get addButton() {
    return cy.get(".modal-footer.d-flex.justify-content-end").contains("Add");
  }
  get cancelButton() {
    return cy.get(".btn.btn-secondary").contains("Cancel");
  }

  clickAddCarButton() {
    this.addCarButton.click();
  }
  selectBrand(brand) {
    this.brandInput.select(brand);
  }
  selectModel(model) {
    this.modelInput.select(model);
  }
  typeMileage(number) {
    this.mileageInput.type(number);
  }
  clickAddButton() {
    this.addButton.click();
  }
  clickCancelButton() {
    this.cancelButton.click();
  }
}
export default new AddGaragePage();
