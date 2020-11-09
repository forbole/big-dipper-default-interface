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
jest.mock('next/router', () => ({
  // spread out all "Router" exports
  ...jest.requireActual('next/router'),

  // shallow merge the "default" exports with...
  default: {
    // all actual "default" exports...
    ...jest.requireActual('next/router').default,

    // and overwrite push and replace to be jest functions
    push: jest.fn(),
    replace: jest.fn(),
  },
}));

// export the mocked instance above
module.exports = jest.requireMock('next/router');
