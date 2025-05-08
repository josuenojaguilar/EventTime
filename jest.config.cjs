module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/setupTests.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
