/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');

module.exports = withOffline(withSass({
  // Set this to true if you use CSS modules.
  // See: https://github.com/css-modules/css-modules
  cssModules: false,
  generateInDevMode: true
}));
