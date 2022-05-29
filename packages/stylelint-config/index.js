module.exports = {
  plugins: [
    // to enforce the order of certain rules
    'stylelint-order',
    // disallow features not supported by target browsers
    'stylelint-no-unsupported-browser-features',
    // prevent use of low performance animation and transition properties.
    'stylelint-high-performance-animation',
  ],
  extends: [
    // for a set of community lint rules around
    // best practices and catching errors in css
    'stylelint-config-standard',
    // accessibility rules
    'stylelint-a11y/recommended',
    // adds prettier as a stylelint rule
    'stylelint-prettier/recommended',
  ],
  // https://github.com/ismay/stylelint-no-unsupported-browser-features#recommendations
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'plugin/no-low-performance-animation-properties': true,
  },
};
