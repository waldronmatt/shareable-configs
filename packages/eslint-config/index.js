module.exports = {
  // Plugins that provide the processors to parse code for linting
  plugins: ['sonarjs', 'prettier'],
  extends: [
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
    // Uses the recommended rules from eslint
    'eslint:recommended',
    /*
      Uses the recommended rules from eslint-config-airbnb-base
      Note: depends on eslint-plugin-import to work
    */
    'airbnb-base',
    /*
      Enables eslint-plugin-prettier and displays prettier errors as
      ESLint errors. Make sure this is always the last configuration
      in the extends array.
      https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    */
    'plugin:prettier/recommended',
  ],
  // @babel/eslint-parser and prettier rules go here
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
    'unicorn/prefer-module': 0,
  },
};
