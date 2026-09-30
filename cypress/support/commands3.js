Cypress.Commands.add(
  "expense",
  (carId, reportedAt, liters, mileage, totalCost) => {
    cy.request("POST", "/api/expenses", {
      carId,
      reportedAt,
      mileage,
      liters,
      totalCost,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("status", "ok");
      expect(response.body.data).to.include({
        carId,
        reportedAt,
        liters,
        mileage,
        totalCost,
      });
    });
  },
);
