const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   
    

      defaultCommandTimeout: 20000,
      requestTimeout: 20000,
      pageLoadTimeout: 80000,
      
    
  },
});
