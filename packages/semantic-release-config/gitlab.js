module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/gitlab',
    '@semantic-release/git',
  ],
  branches: 'main',
};
