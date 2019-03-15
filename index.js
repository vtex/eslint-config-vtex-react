module.exports = {
  extends: [
    'vtex',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
  ],
  plugins: ['react', 'jsx-a11y', 'react-hooks'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },

  rules: {
    // 'react/forbid-prop-types': not-defined
    // 'react/no-danger': 'off', the prop is already clear that its use it's dangerous
    // 'react/no-did-mount-set-state': 'off',
    // 'react/no-did-update-set-state': 'off',
    // 'react/no-multi-comp': not-defined
    // 'react/no-set-state': not-defined
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/self-closing-comp': [
      'error',
      {
        html: false,
      },
    ],
    // 'react/sort-comp': not-defined
    // 'react/sort-prop-types': 'off', this is a pain in the arse

    // JSX Rules
    'react/jsx-wrap-multilines': 'warn',
    'react/jsx-boolean-value': 'error',
    // 'react/jsx-closing-bracket-location': not-defined
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    // 'react/first-prop-new-line': not-defined
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    // 'react/jsx-max-props-per-line': not-defined
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
      },
    ],
    // 'react/jsx-no-literals': not-defined
    'react/jsx-pascal-case': ['error'],
    // 'react/jsx-sort-props': 'off',
    'react/jsx-tag-spacing': 'error',

    // Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
