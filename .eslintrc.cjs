module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-console": 0,
        "import/extensions": 0,
        "no-await-in-loop": 0,
        "fp/no-loops": 0,
        "fp/no-nil": 0,
        "fp/no-unused-expression": 0,
        "fp/no-let": 0,
        "fp/no-throw": 0,
        "fp/no-mutation": 0,
        "fp/no-mutating-methods": 0
    }
}
