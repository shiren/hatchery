module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['../.eslintrc', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
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
