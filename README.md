# Eslint Config VTEX - React

To this config work, you need to create two config files in your root folder: `package.json` and  `.prettierrc`.

## Your `package.json` should have:

```json
{
  "version": "0.0.0",
  "dependencies": {
    "babel-eslint": "^10.0.1",
    "eslint": "^5.9.0",
    "eslint-config-prettier": "^3.3.0",
    "eslint-config-vtex": "^8.0.0",
    "eslint-config-vtex-react": "^3.0.3",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-lodash": "^4.0.0",
    "eslint-plugin-prettier": "^3.0.0",
    "prettier": "^1.15.2"
  }
}
```

## Your `.prettierrc` should have:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "jsxBracketSameLine": true
}
```