// const { defaults } = require('jest-config');

module.exports = {
  bail: true,
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    }
  },
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  // testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/client/__mocks__/fileMock.js',
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ] // setupFiles before the tests are ran
};
