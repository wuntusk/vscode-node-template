module.exports = {
  ignorePatterns: ['**/dist/*.js'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': 'error',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'no-console': 1,
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
  },
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
