module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:astro/recommended',
    ],
    plugins: ['@typescript-eslint', 'astro'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro'],
        },
      },
    ],
    ignorePatterns: ['public/scripts/*', 'scripts/*', '.astro/', 'src/env.d.ts'],
  };