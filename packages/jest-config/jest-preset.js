module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|scss|apng|avif|gif|jpe?g|png|svg|webp|woff2?)$':
      'jest-transform-stub',
  },
};
