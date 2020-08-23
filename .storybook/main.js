const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    'storybook-dark-mode/register',
    '@storybook/addon-notes/register-panel'
  ],
  webpackFinal: async (config, { configType }) => {
    const isDev = configType === 'DEVELOPMENT';

    config.module.rules.push({
      test: /\.scss$/,
      use: [
          'lit-scss-loader',
          'extract-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // enable css modules (to import in JS)
              sourceMap: isDev,
              modules: {
                localIdentName: '[local]' // by default css-modules hash the class names, local uses the same class name
              }
            }
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
      ],
    });

    config.module.rules.push({
      test: /\.ts$/,
      use: [ 'ts-loader']
    });

    config.resolve.extensions.push('.ts');

    return config;
  },
};
