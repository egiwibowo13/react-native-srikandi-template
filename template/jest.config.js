module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globalSetup: './app/utils/tests/globalSetup.js',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/app/utils/tests/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/app/utils/tests/assetsTransformer.js',
    '^app(.*)$': '<rootDir>/app$1',
    '^@assets(.*)$': '<rootDir>/assets$1',
    '^@components(.*)$': '<rootDir>/app/components$1',
    '^@styles(.*)$': '<rootDir>/app/styles$1',
    '^@configs(.*)$': '<rootDir>/app/configs$1',
    '^@data(.*)$': '<rootDir>/app/data$1',
    '^@services(.*)$': '<rootDir>/app/services$1',
    '^@routes(.*)$': '<rootDir>/app/routes$1',
    '^@appredux(.*)$': '<rootDir>/app/redux$1',
    '^@utils(.*)$': '<rootDir>/app/utils$1',
    '^@domain(.*)$': '<rootDir>/app/domain$1',
  },
  moduleDirectories: ['.', './node_modules', './app'],
  setupFiles: [
    './app/utils/tests/enzymeTestAdapterSetup.js',
    './app/utils/tests/setup-react-navigation.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  testEnvironment: 'node',
  collectCoverageFrom: [
    'app/components/**/*.{js,jsx,ts,tsx}',
    'app/screens/**/*.{js,jsx,ts,tsx}',
  ],
  transformIgnorePatterns: [],
};
