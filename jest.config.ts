// SPDX-License-Identifier: Apache-2.0

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Stop running tests after `n` failures
  bail: 1,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.ts'],

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/coverage/',

  // An array of regexp pattern strings used to skip coverage collection.
  // Adjust this list per repository (e.g. clients, interfaces, models, generated code).
  coveragePathIgnorePatterns: ['/node_modules/', './src/interfaces', './src/models', './__tests__', 'interfaces', '.module.ts', '.mock.ts', './src/index.ts', './jest.config.ts'],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {},
  },

  // Make calling deprecated APIs throw helpful error messages
  errorOnDeprecated: false,

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
};

export default config;
