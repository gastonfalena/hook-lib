module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "tsconfigRootDir": __dirname,
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.app.json"
    },
    "plugins": [
        "react",
        "simple-import-sort",
        "react-hooks"
    ],
    "ignorePatterns": [".eslintrc.cjs", "dist", "node_modules","mutation.html"],
    "rules": {
        "simple-import-sort/imports":"error",
        "simple-import-sort/exports":"error",
        "no-console":"warn",
        "@typescript-eslint/no-explicit-any":"error",
        "no-unused-vars":"warn"
    }
}
