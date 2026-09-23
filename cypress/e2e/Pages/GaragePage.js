class GaragePage {
  verifyGarageData() {
    cy.get(".update-mileage-form_input").should("have.value", "3000");
    cy.get(".car_name").contains("Audi TT");

    cy.get(".panel-page_content").within(() => {
      cy.get(".panel-page_cars").should("be.visible");
      cy.get(".car.jumbotron")
        .last()
        .within(() => {
          cy.get(".car-logo_img")
            .should("have.attr", "src")
            .and("include", "/public/images/brands/audi.png");
          cy.get("button.car_add-expense.btn.btn-success")
            .should("be.visible")
            .and("contain", "Add fuel expense");
          cy.get(".icon.icon-edit").should("be.visible");
          cy.get(".icon.icon-tachometer").should("be.visible");
          //cy.get(
          //".update-mileage-form_input.form-control.ng-untouched.ng-pristine.ng-valid",
          //);
          cy.get(".update-mileage-form_submit.btn.btn-secondary.btn-sm");
        });
    });
  }
}

export default new GaragePage();
