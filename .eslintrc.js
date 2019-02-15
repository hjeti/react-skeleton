// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['import', 'prettier'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build-tools/config/webpack/webpack.conf.base.js',
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never'
      },
    ],
    // allow debugger during development
    'no-debugger': 2,
    'no-console': 1,
    'no-param-reassign': 0,
    // only for use with getter-setters
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': 0,
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'all', printWidth: 100, tabWidth: 2 },
    ],
  },
};
