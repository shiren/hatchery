module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
};
