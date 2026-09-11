describe("Find buttons and links in the footer", () => {
  context("Footer_left buttons", () => {
    beforeEach(() => {
      cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    });

    it("Verify buttonts footer left", () => {
      cy.get(".contacts_socials.socials").within(() => {
        cy.get('[href="https://www.facebook.com/Hillel.IT.School"]').should(
          "be.visible",
        );
        cy.get('[href="https://t.me/ithillel_kyiv"]').should("be.visible");
        cy.get(
          '[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]',
        ).should("be.visible");
        cy.get('[href="https://www.instagram.com/hillel_itschool/"]').should(
          "be.visible",
        );
        cy.get('[href="https://www.linkedin.com/school/ithillel/"]').should(
          "be.visible",
        );
      });
    });
    it("Verify image footer left", () => {
      cy.get('[href="https://www.facebook.com/Hillel.IT.School"]').within(
        () => {
          cy.get(".socials_icon.icon.icon-facebook").should("be.visible");
        },
      );
      cy.get('[href="https://t.me/ithillel_kyiv"]').within(() => {
        cy.get(".socials_icon.icon.icon-telegram").should("be.visible");
      });
      cy.get(
        '[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]',
      ).within(() => {
        cy.get(".socials_icon.icon.icon-youtube").should("be.visible");
      });
      cy.get('[href="https://www.instagram.com/hillel_itschool/"]').within(
        () => {
          cy.get(".socials_icon.icon.icon-instagram").should("be.visible");
        },
      );
      cy.get('[href="https://www.linkedin.com/school/ithillel/"]').within(
        () => {
          cy.get(".socials_icon.icon.icon-linkedin").should("be.visible");
        },
      );
    });
  });
  context("Footer_right buttons", () => {
    beforeEach(() => {
      cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    });
    it("Verify buttons footer right", () => {
      cy.get(
        ".col-md-6.d-flex.flex-column.align-items-center.align-items-md-end.justify-content-md-end.mb-2.mt-3.mt-md-0",
      ).within(() => {
        cy.get('.contacts_link.display-4[href="https://ithillel.ua"]')
          .should("be.visible")
          .should("have.attr", "href", "https://ithillel.ua");
        cy.get('.contacts_link.h4[href="mailto:developer@ithillel.ua"]')
          .should("be.visible")
          .should("have.attr", "href", "mailto:developer@ithillel.ua");
      });
    });
  });
});
