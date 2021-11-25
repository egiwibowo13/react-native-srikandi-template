module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@assets', './assets'],
          ['@components', './app/components'],
          ['@styles', './app/styles'],
          ['@configs', './app/configs'],
          ['@data', './app/data'],
          ['@services', './app/services'],
          ['@routes', './app/routes'],
          ['@appredux', './app/redux'],
          ['@utils', './app/utils'],
          ['@domain', './app/domain'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
  globals: {
    describe: true,
    expect: true,
    test: true,
    beforeEach: true,
    afterEach: true,
    it: false,
    jest: true,
  },
};
