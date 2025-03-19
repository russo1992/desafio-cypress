const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
  },
});

module.exports = {
  e2e: {
    video: true, 
    videoCompression: 32, 
    videoUploadOnPasses: true, 
    videosFolder: 'cypress/videos', 
    screenshotsFolder: 'cypress/screenshots', 
  },
};