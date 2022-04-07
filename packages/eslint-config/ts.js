module.exports = {
  // Plugins that provide the processors to parse code for linting
  plugins: ['@typescript-eslint', 'prettier'],
  /*
    A parser that converts TypeScript into an ESTree-compatible
    form so it can be used in ESLint.
  */
  parser: '@typescript-eslint/parser',
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    /*
      Uses the recommended rules from eslint-config-airbnb-typescript
      depends on @typescript-eslint/eslint-plugin
      and eslint-plugin-import to work
    */
    'airbnb-typescript/base',
    /*
      Enables eslint-plugin-prettier and displays prettier errors as
      ESLint errors. Make sure this is always the last configuration
      in the extends array.
      https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    */
    'plugin:prettier/recommended',
  ],
  // @typescript-eslint/parser and prettier rules go here
  rules: {
    // https://github.com/prettier/eslint-config-prettier#max-len
    'max-len': [
      'error',
      {
        code: 80,
        ignoreUrls: true,
      },
    ],
    // https://stackoverflow.com/questions/44939304/eslint-should-be-listed-in-the-projects-dependencies-not-devdependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
