import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

// Importações dos novos plug-ins instalados
import reactPlugin from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import importPlugin from 'eslint-plugin-import'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react': reactPlugin,
      'simple-import-sort': simpleImportSort,
      'import': importPlugin,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      // Configuração padrão recomendada do React
      reactPlugin.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      // Aplica as regras do Prettier como erros do ESLint automaticamente
      eslintPluginPrettierRecommended, 
    ],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React instalada
      },
    },
    rules: {
      // Desativa a necessidade de importar o React em cada arquivo (padrão do React 17+)
      'react/react-in-jsx-scope': 'off',
      
      // Configurações de ordenação automática de imports
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  // Desativa regras de formatação do ESLint que conflitam com o Prettier
  eslintConfigPrettier, 
])
