const automaticCommitPattern = /^chore\(release\):.*\[skip ci]/;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  /*
    This resolves a linting conflict between commitlint's body-max-line-length
    due to @semantic-release/git putting release notes in the commit body
    https://github.com/semantic-release/git/issues/331
  */
  ignores: [commitMsg => automaticCommitPattern.test(commitMsg)],
};
