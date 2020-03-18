module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        },
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        // eslint:recommended
        // "for-direction": "error",
        // "getter-return": ["error", { allowImplicit: true }],
        // "no-async-promise-executor": "error",
        // "no-await-in-loop": "error",
        // "no-compare-neg-zero": "error",
        // "no-cond-assign": "error",
        // "no-console": "error",
        // "no-constant-condition": ["error", { checkLoops: false }],
        // "no-control-regex": "error",
        // "no-debugger": "error",
        // "no-dupe-args": "error",
        // "no-dupe-keys": "error",
        // "no-duplicate-case": "error",
        // "no-empty": ["error", { allowEmptyCatch: true }],
        // "no-empty-character-class": "error",
        // "no-ex-assign": "error",
        // "no-extra-boolean-cast": "error",
        // "no-extra-parens": "error",
        // "no-extra-semi": "error",
        // "no-func-assign": "error",
        // "no-inner-declarations": "error",
        // "no-invalid-regexp": "error",
        // "no-irregular-whitespace": "error",
        // "no-misleading-character-class": "error",
        // "no-obj-calls": "error",
        // "no-prototype-builtins": "error",
        // "no-regex-spaces": "error",
        // "no-sparse-arrays": "error",
        // "no-template-curly-in-string": "warn",
        // "no-unexpected-multiline": "error",
        // "no-unreachable": "error",
        // "no-unsafe-finally": "error",
        // "no-unsafe-negation": "error",
        // "require-atomic-updates": "error",
        // "use-isnan": "error",
        // "valid-typeof": "error",

        // Best Practices
        // "accessor-pairs": ["error", { getWithoutSet: true }],
        // "array-callback-return": ["error", { allowImplicit: true }],
        // "block-scoped-var": "error",
        // "class-methods-use-this": "error",
        // "complexity": ["error", 30],
        // "curly": "error",
        // "default-case": "error",
        // "dot-location": ["error", "property"],
        // "eqeqeq": ["error", "always"],
        // "guard-for-in": "error",
        // "max-classes-per-file": ["error", 20],
        // "no-alert": "error",
        // "no-caller": "error",
        // "no-case-declarations": "error",
        // "no-div-regex": "error",
        // "no-else-return": "error",
        // "no-empty-function": "error",
        // "no-empty-pattern": "error",
        // "no-eq-null": "error",
        // "no-eval": "error",
        // "no-extend-native": "error",
        // "no-extra-bind": "error",
        // "no-extra-label": "error",
        // "no-fallthrough": "error",
        // "no-floating-decimal": "error",
        // "no-global-assign": "error",
        // "no-implicit-coercion": "warn",
        // "no-implicit-globals": "warn",
        // TODO: Add More


        "@typescript-eslint/explicit-function-return-type": "off"
    }
};