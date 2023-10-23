const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: "ts-jest",
  globals: {
    __DEV__: true,
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  // setupFiles: ["react-app-polyfill/jsdom"],
  // testMatch: [
  //   "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
  //   "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  // ],
  testEnvironment: "jsdom",
  // testRunner: "<rootDir>/node_modules/jest-circus/runner.js",
  // transform: {
  //   "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
  //   "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
  //   "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
  //     "<rootDir>/config/jest/fileTransform.js",
  // },
  // transformIgnorePatterns: ["^.+\\.module\\.(css|sass|scss)$"],
  // moduleFileExtensions: [
  //   "web.js",
  //   "js",
  //   "web.ts",
  //   "ts",
  //   "web.tsx",
  //   "tsx",
  //   "json",
  //   "web.jsx",
  //   "jsx",
  //   "node",
  // ],
  // watchPlugins: [
  //   "jest-watch-typeahead/filename",
  //   "jest-watch-typeahead/testname",
  // ],
  // resetMocks: true,
  roots: ["<rootDir>"],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts",
  ],
  modulePaths: ["<rootDir>"],
  moduleDirectories: [".", "src", "node_modules"],
  // testTimeout: 10000,
  // moduleNameMapper: {
  //   "^react-native$": "react-native-web",
  //   "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  //   ...pathsToModuleNameMapper(compilerOptions.paths),
  // },
};
