const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    // "experimentalStudio": true,
    // "video": false,
    // "env": {
    //   "title": "This is a title"
    // },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
