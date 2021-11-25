module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@components': './app/components',
          '@styles': './app/styles',
          '@configs': './app/configs',
          '@data': './app/data',
          '@services': './app/services',
          '@routes': './app/routes',
          '@appredux': './app/redux',
          '@utils': './app/utils',
          '@domain': './app/domain',
        },
      },
    ],
  ],
};
