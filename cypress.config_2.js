const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space/ ",
    userEmail: "marina_77-test@gmail.com",
    userPassword: "Pa$$w0rd77",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
//npx cypress open --config-file=cypress.config.js
