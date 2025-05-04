const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://worksense.4.236.22.176.sslip.io',
    chromeWebSecurity: false, // important for local storage / iframes
  },
});


