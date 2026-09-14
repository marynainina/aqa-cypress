describe("Find buttons and links in the header", () => {
  context("Header_left elements", () => {
    beforeEach(() => {
      cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    });

    it("Find logo in the header", () => {
      cy.get(".header_left.d-flex.align-items-center").within(() => {
        cy.get(".header_logo").should("be.visible");
      });
    });
    it("Verify logo image exists", () => {
      cy.get(".header_logo").within(() => {
        cy.get("svg").should("have.attr", "width", "135");
        cy.get("svg").should("have.attr", "height", "30");
        cy.get("svg").should("have.attr", "viewBox", "0 0 135 30");
        cy.get("svg").should("have.attr", "fill", "none");
        cy.get("svg").should(
          "have.attr",
          "xmlns",
          "http://www.w3.org/2000/svg",
        );
      });
    });
    it("Verify visibility of navigation elements", () => {
      cy.get(".btn.header-link.-active").should("be.visible");
      cy.get('.btn.header-link[appscrollto="aboutSection"]')
        .should("be.visible")
        .click()
        .get(".section.about")
        .should("be.visible");
      cy.get('.btn.header-link[appscrollto="contactsSection"]')
        .should("be.visible")
        .click()
        .get(".section.contacts")
        .should("be.visible");
    });
    it("Verify navigation menu text", () => {
      cy.get(".header_nav.d-flex.align-items-center").contains("Home");
      cy.get('.btn.header-link[appscrollto="aboutSection"]').contains("About");
      cy.get('.btn.header-link[appscrollto="contactsSection"]').contains(
        "Contacts",
      );
    });
  });
  context("Header_right elements", () => {
    beforeEach(() => {
      cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    });

    it("Verify visibility of header right elements", () => {
      cy.get(".header_right.d-flex.align-items-center").within(() => {
        cy.get(".header-link.-guest").should("be.visible");
        cy.get(".btn.btn-outline-white.header_signin").should("be.visible");
      });
    });
    it("Verify header right elements text", () => {
      cy.get(".header-link.-guest").contains("Guest log in");
      cy.get(".btn.btn-outline-white.header_signin").contains("Sign In");
    });
  });
});
