module.exports = {
  "extends": "vtex",
  "rules": {
    "react/display-name": 2,
    // "react/forbid-prop-types": not-defined
    // "react/no-danger": 0, the prop is already clear that its use it's dangerous
    "react/no-deprecated": 2,
    // "react/no-did-mount-set-state": 0,
    // "react/no-did-update-set-state": 0,
    "react/no-direct-mutation-state": 2,
    "react/no-is-mounted": 2,
    // "react/no-multi-comp": not-defined
    // "react/no-set-state": not-defined
    "react/no-string-refs": 2,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": [2, "always"],
    "react/prefer-stateless-function": 0,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-render-return": 2,
    "react/self-closing-comp": [2, {
      "html": false
    }],
    // "react/sort-comp": not-defined
    // "react/sort-prop-types": 0, this is a pain in the arse
    // JSX Rules
    "react/jsx-wrap-multilines": 1,
    "react/jsx-boolean-value": 2,
    // "react/jsx-closing-bracket-location": not-defined
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    // "react/first-prop-new-line": not-defined
    "react/jsx-handler-names": [2, {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on"
    }],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 2,
    // "react/jsx-max-props-per-line": not-defined
    "react/jsx-no-bind": [2, {
      "ignoreRefs": true,
      "allowArrowFunctions": true
    }],
    "react/jsx-no-duplicate-props": 2,
    // "react/jsx-no-literals": not-defined
    // "react/jsx-no-target-blank": not-defined
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": [2],
    // "react/jsx-sort-props": 0,
    "react/jsx-tag-spacing": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-curly-spacing": 0,
    "react/jsx-equals-spacing": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-tag-spacing": 0,
    "react/jsx-wrap-multilines": 0
  },
  "plugins": [
    "react"
  ]
};
