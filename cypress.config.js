const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://frontend-staging.sw-motech.us/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
