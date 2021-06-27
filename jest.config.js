module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/scripts/setupTests.ts'],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1'
  }
};
