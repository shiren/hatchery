module.exports = {
  extends: ['../.eslintrc', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
