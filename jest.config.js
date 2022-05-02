module.exports = {
  bail: true,
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html?$',
      tsconfig: './tsconfig.test.json',
      useExperimentalLanguageServer: true,
    },
  },
  testURL: 'http://localhost',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/test/test-setup.ts',
  ],
  moduleNameMapper: {
    '@ng-dnd/(.*)': '<rootDir>/packages/$1',
    // https://react-dnd.github.io/react-dnd/docs/testing
    '^dnd-core$': 'dnd-core/dist',
    '^react-dnd$': 'react-dnd/dist',
    '^react-dnd-html5-backend$': 'react-dnd-html5-backend/dist',
    '^react-dnd-touch-backend$': 'react-dnd-touch-backend/dist',
    '^react-dnd-test-backend$': 'react-dnd-test-backend/dist',
    '^react-dnd-test-utils$': 'react-dnd-test-utils/dist'
  },
  testRegex: '.*spec.ts$',
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  transformIgnorePatterns: [
  ],
  modulePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],
  projects: [
    '<rootDir>',
  ],
  collectCoverageFrom: [
    'packages/core/*/src/**/*.ts',
    'packages/multi-backend/*/src/**/*.ts',
    'packages/sortable/*/src/**/*.ts',
  ],
  coveragePathIgnorePatterns: [
    '.*(spec|const|config|mock|module|public-api|index|mock|model|d).ts',
  ],
  coverageReporters: [
    'lcovonly',
    'html',
  ],
};
