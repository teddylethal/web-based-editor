import eslintPluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'node:path'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
  allConfig: pluginJs.configs.all
})

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',

    'eslint-config-prettier',
    'prettier'
  ),
  {
    plugins: {
      prettier: eslintPluginPrettier
    },

    languageOptions: {
      globals: {
        ...globals.browser
      }
    },

    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: true,
        node: {
          paths: [path.resolve(__dirname, '')],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',

      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ]
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
]
