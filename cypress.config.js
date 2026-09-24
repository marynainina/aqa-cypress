const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      console.log("CONFIG PLUGIN TEST");
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
      //require("cepress-mochawesome-reporter/plugin")(on);
      //return config;
      // implement node event listeners here
    },
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space/",
    userEmail: "marina_14-test@gmail.com",
    userPassword: "Pa$$w0rd14",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
