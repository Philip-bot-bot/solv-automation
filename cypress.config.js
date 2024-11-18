const { defineConfig } = require("cypress");

module.exports = defineConfig({
 // projectId: "gvr9f9",

  e2e: {
     viewportWidth: 2560, // Set the width to 2560 pixels
    viewportHeight: 1440, // Set the height to 1440 pixels
    
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
