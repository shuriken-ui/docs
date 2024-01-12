const stylistic = require('@stylistic/eslint-plugin')

const customized = stylistic.configs.customize({
  indent: 2,
  quotes: 'single',
  semi: false,
})

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      plugins: ['@stylistic'],
      extends: ['eslint:recommended'],
      parserOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        ...customized.rules,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off', // auto-imports are not recognized
      },
    },
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint', '@stylistic'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
      rules: {
        ...customized.rules,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off', // auto-imports are not recognized

        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
    {
      files: ['*.vue'],
      plugins: ['@typescript-eslint', '@stylistic'],
      extends: [
        'eslint:recommended',
        'plugin:tailwindcss/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:vue/vue3-recommended',
        // 'plugin:vuejs-accessibility/recommended',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
      rules: {
        ...customized.rules,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off', // auto-imports are not recognized

        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',

        'vue/script-setup-uses-vars': 'error',
        'vue/multi-word-component-names': 'off',
        'vue/define-macros-order': 'error',
        'vue/no-v-html': 'off',
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: {
              max: 2,
            },
            multiline: {
              max: 1,
            },
          },
        ],
        // vue 3.3 allows setup props destructuring
        'vue/no-setup-props-destructure': 'off',

        // 'vuejs-accessibility/form-control-has-label': 'off',
        // 'vuejs-accessibility/label-has-for': 'off',
        // 'vuejs-accessibility/anchor-has-content': 'off',
        // 'vuejs-accessibility/click-events-have-key-events': 'off',

        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/classnames-order': 'error',
      },
    },
  ],
}
