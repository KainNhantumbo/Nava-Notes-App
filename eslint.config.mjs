// @ts-check
import eslintImports from 'eslint-plugin-import';
import eslintJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import babelParser from '@babel/eslint-parser';

export default [
  {
    ignores: [
      'dist/**/*',
      'public/**/*',
      '.vite/**/*',
      'node_modules/**/*',
      '.env',
      '.env.*',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '*.config.ts',
      '.DS_Store',
      'Thumbs.db',
      '.idea/**/*',
      '.vscode/**/*',
      '!dist/important.js'
    ]
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ['@babel/preset-react']
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': eslintJsxA11y,
      import: eslintImports,
      react: eslintReact
    },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      ...eslintReact.configs.flat.recommended.rules,
      ...eslintJsxA11y.configs.recommended.rules,
      ...eslintImports.configs.react.rules,
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
