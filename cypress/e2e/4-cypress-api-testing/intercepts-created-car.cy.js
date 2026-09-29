import addGaragePage from "../Pages/AddGaragePage.js";
//import garagePage from "../Pages/GaragePage.js";
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
    addGaragePage.selectBrand("Porsche");
    addGaragePage.selectModel("Cayenne");
    addGaragePage.typeMileage("2000");

    cy.intercept("POST", "/api/cars").as("createCar");

    addGaragePage.clickAddButton();

    cy.wait("@createCar").then((interception) => {
      const createdCarId = interception.response.body.data.id;
      expect(interception.response.statusCode).to.eq(201);
      expect(createdCarId).to.exist;

      cy.request("GET", "/api/cars").then((response) => {
        const carList = response.body.data;
        const getCar = carList.find((car) => car.id === createdCarId);
        //cy.location("pathname").should("eq", "/panel/garage");
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq("ok");
        expect(getCar.id).to.eq(createdCarId);
        expect(getCar.brand).to.eq("Porsche");
        expect(getCar.model).to.eq("Cayenne");
        expect(getCar.initialMileage).to.eq(2000);
        expect(getCar.mileage).to.eq(2000);
        expect(getCar.logo).to.eq("porsche.png");
      });
    });
  });
});
