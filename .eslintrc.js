module.exports = {
    env: {
      node: true,
      es2021: true,
    },
    parserOptions: { ecmaVersion: 12 },
    ignorePatterns: ['node_modules/*'],
    extends: ['eslint:recommended'],
    rules: {
        "complexity" : ["error", 3],
        "max-lines-per-function" : ["error", 15],
        "max-nested-callbacks": ["error", 3],
        "no-return-await": "error",
        "curly" : "error"
    }
  }
  