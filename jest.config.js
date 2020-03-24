module.exports = {
  preset: 'ts-jest',
  testMatch: [
    '<rootDir>/tests/**/*.spec.ts',
  ],
  testRunner: 'jest-circus/runner',
  testEnvironment: './custom-environment.ts',
};
