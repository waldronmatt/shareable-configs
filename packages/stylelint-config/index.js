module.exports = {
  plugins: [
    // to enforce the order of certain rules
    'stylelint-order',
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
};
