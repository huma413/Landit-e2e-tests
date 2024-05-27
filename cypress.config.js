const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      
      defaultCommandTimeout: 50000,
      requestTimeout: 50000,
      pageLoadTimeout: 80000,
      env: 
      {
        login_url:'https://app.accept.dev.landit.com/login',
      },  
  },
});
