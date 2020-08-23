const config = {
  babelrc: false,
  presets: ['@babel/env', '@babel/typescript'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    '@babel/plugin-transform-runtime',
  ],
};
// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = require('babel-jest').createTransformer(config);
