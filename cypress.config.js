const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 768,
  viewportWidth: 1920,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    defaultCommandTimeout: 5000,
    baseUrl: "https://automationexercise.com/",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

  env: {
    passwordIncorrect: "incorrectPassword",
    passwordCorrect: "654321",
    signUpName: "BrunoAurelioQA",
    emailExist: "testes-1721608919907@email.com",
  },
});
