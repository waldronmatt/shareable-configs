module.exports = {
  '*.{yml,yaml}': ['prettier --cache --write', 'yamllint --strict .'],
  '.github/workflows/*.{yml,yaml}': ['actionlint'],
};
