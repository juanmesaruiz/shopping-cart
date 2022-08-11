/* prettier-ignore */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "react-app",
        "react-app/jest"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "jest-dom",
        "prettier",
        "react",
        "simple-import-sort",
        "testing-library"
    ],
    "rules": {
        "no-unused-expressions": 0,
        "padded-blocks": 0,
        "max-len": 0,
        "no-tabs": 0,
        "indent": 0,
        "no-new-object": 0,
        "no-console": 1,
        "react/prop-types": 0,
        "simple-import-sort/imports": [
            "error",
            {
                "groups": [
                    // External packages
                    ["^react", "^@?\\w"],
                    // Components and other stuff
                    [".\/classes", "..\/models", "..\/reducers"],
                    // Components
                    ["\\./[A-Z]", "^\\."],
                    // Style files
                    ["^./.*.css", "^./.*.less"]
                ]
            }
        ]
    }
}
