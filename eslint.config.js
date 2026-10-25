import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import importX from 'eslint-plugin-import-x';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactQuery from '@tanstack/eslint-plugin-query';
import { defineConfig, globalIgnores } from 'eslint/config';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

export default defineConfig([
    globalIgnores(['dist', 'node_modules', 'coverage']),

    eslint.configs.recommended,
    tseslint.configs.recommended,

    {
        name: 'oty/base',
        files: ['**/*.{js,ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                sourceType: 'module',
                project: './tsconfig.app.json',
            },
            globals: globals.browser,
        },
        plugins: {
            'react': react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@tanstack/query': reactQuery,
            'prettier': prettierPlugin,
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...reactRefresh.configs.vite.rules,
            ...reactQuery.configs.recommended.rules,

            'react/react-in-jsx-scope': 'off',

            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_$', ignoreRestSiblings: true }],
            '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
            'comma-dangle': ['error', 'always-multiline'],
            'no-process-exit': 'error',
            'object-shorthand': 'off',
            'no-magic-numbers': [
                'warn',
                {
                    ignore: [-1, 0, 1],
                    ignoreArrayIndexes: true,
                    detectObjects: false,
                },
            ],

            'prettier/prettier': 'error',
        },
    },
    {
        name: 'oty/importX',
        files: ['**/*.{js,ts,tsx}'],
        settings: {
            'import-x/resolver-next': [
                createTypeScriptImportResolver({
                    project: './tsconfig.app.json',
                }),
            ],
        },
        plugins: { 'import-x': importX },
        rules: {
            ...importX.configs.recommended.rules,

            'import-x/no-unresolved': 'off',
            'import-x/order': [
                'error',
                {
                    'newlines-between': 'never',
                    'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
                    'sortTypesGroup': true,
                    'pathGroups': [
                        {
                            pattern: '@/shared/**',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '@/entities/**',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '@/features/**',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '@/widgets/**',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '@/pages/**',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '@/app/**',
                            group: 'internal',
                            position: 'before',
                        },
                    ],
                    'pathGroupsExcludedImportTypes': ['builtin'],
                },
            ],
        },
    },

    {
        name: 'oty/unicorn',
        files: ['**/*.{js,ts,tsx}'],
        plugins: { unicorn },
        rules: {
            ...unicorn.configs.recommended.rules,

            'unicorn/prevent-abbreviations': 'off',
            'unicorn/no-null': 'off',
            'unicorn/no-array-for-each': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-thenable': 'off',
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/consistent-compound-words': 'warn',
            'unicorn/filename-case': [
                'error',
                {
                    case: 'kebabCase',
                    ignore: [String.raw`^.+\.(?:tsx|(props|state)\.ts)`],
                },
            ],
        },
    },

    {
        name: 'oty/sonarjs',
        files: ['**/*.{js,ts,tsx}'],
        plugins: { sonarjs },
        rules: {
            ...sonarjs.configs.recommended.rules,

            'sonarjs/function-return-type': 'off',
            'sonarjs/argument-type': 'off',
            'sonarjs/prefer-read-only-props': 'off',
            'sonarjs/no-hardcoded-passwords': 'warn',
            'sonarjs/no-unused-vars': 'off',
            'sonarjs/no-nested-functions': 'off',
        },
    },

    {
        name: 'oty/prettier',
        ...prettierConfig,
    },
]);
