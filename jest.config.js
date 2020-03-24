const { defaults: tsjPresets } = require('ts-jest/presets');

module.exports = {
  preset: 'jest-puppeteer',
  transform: {
    ...tsjPresets.transform,
  },
  testMatch: [
    '<rootDir>/tests/**/*.spec.ts',
  ],
  testRunner: 'jest-circus/runner',
  testEnvironment: './custom-environment.ts',
};
