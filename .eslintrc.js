module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:json-schema-validator/recommended',
    'plugin:promise/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'promise', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  ignorePatterns: ['build/*'],
};
