// based on Google's browserslist-config-google/modern
// https://github.com/awkaiser/browserslist-config-google/tree/2.0.0#alternative-configuration

const desktop = [
  'last 2 Chrome major versions',
  'last 2 Firefox major versions',
  'last 2 Safari major versions',
  'last 2 Edge major versions',
];

const mobile = [
  'last 2 Android major versions',
  'last 2 ChromeAndroid major versions',
  'last 2 iOS major versions',
];

const supportedBrowsers = desktop.concat(mobile);

module.exports = supportedBrowsers;
