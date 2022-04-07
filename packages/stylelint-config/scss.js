module.exports = {
  plugins: [
    // to enforce the order of certain rules
    'stylelint-order',
  ],
  extends: [
    // extends stylelint-config-standard and
    // stylelint-config-recommended-scss - The recommended shareable
    // SCSS config for stylelint.
    // also bundles stylelint-scss - A collection of SCSS specific
    // linting rules for Stylelint (in a form of a plugin).
    // and postcss-scss
    'stylelint-config-standard-scss',
    // based on the SCSS guidelines documented in https://sass-guidelin.es/
    'stylelint-config-sass-guidelines',
    // accessibility rules
    'stylelint-a11y/recommended',
    // adds prettier as a stylelint rule
    'stylelint-prettier/recommended',
  ],
};
