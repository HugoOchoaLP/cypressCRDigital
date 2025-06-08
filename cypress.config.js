import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://qa-s4-frontend-qa-sprint4.up.railway.app",
    chromeWebSecurity: false, // important for local storage / iframes
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
