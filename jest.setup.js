/* eslint-disable */
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { setConfig } = require('next/config');
const { initReactI18next } = require('./tests/utils/mock_react_i18next');
const { publicRuntimeConfig } = require('./next.config');

publicRuntimeConfig.use = [initReactI18next];

setConfig({
  publicRuntimeConfig,
});
configure({
  adapter: new Adapter(),
});

// ============================
// Mock next/router
// ============================
jest.mock("next/router", () => ({
  useRouter() {
      return {
          route: "/",
          pathname: "",
          query: "",
          asPath: "",
      };
  },
}));

// ============================
// Mock axios
// ============================
jest.mock('axios');
