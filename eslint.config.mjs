import js from '@eslint/js';
// import pluginImport from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
// import * as eslintImportResolverTypescript from 'eslint-import-resolver-typescript';
import importAccess from 'eslint-plugin-import-access/flat-config';
import * as tseslintParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
      globals: {
        node: true,
        jest: true,
      },
    },
    plugins: {
      'eslint-plugin-import': eslintPluginImport,
      'import-access': importAccess,
    },
    // settings: {
    //   'import/resolver': {
    //     typescript: {
    //       alwaysTryTypes: true,
    //     },
    //   },
    // },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          singleQuote: true,
        },
      ],
      'import-access/jsdoc': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: 'module',
      globals: {
        node: true,
        jest: true,
      },
    },
    rules: {},
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      // import: pluginImport,
      'eslint-plugin-import': eslintPluginImport,
    },
    // 'import/resolver': {
    //   typescript: {
    //     alwaysTryTypes: true,
    //   },
    // },
    rules: {
      'eslint-plugin-import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            ['parent', 'sibling'],
            'index',
            'object',
            'type',
          ],
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
        },
      ],
    },
  },
];
