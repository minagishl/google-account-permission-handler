import js from '@eslint/js'
import solid from 'eslint-plugin-solid'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      solid,
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        alert: 'readonly',
        URLSearchParams: 'readonly',
        URL: 'readonly',
        Event: 'readonly',
        HTMLInputElement: 'readonly',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...solid.configs.recommended.rules,
      'solid/reactivity': 'warn',
      'solid/no-destructure': 'warn',
      'solid/prefer-for': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    ignores: ['dist', 'node_modules'],
  },
]
