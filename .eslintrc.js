module.exports = {
  root: true,
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier/standard",
    "prettier/unicorn",
  ],
  plugins: ["eslint-comments", "react", "react-hooks", "jest", "import"],
  env: {
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },

  overrides: [
    {
      files: ["*.js", "*.jsx"],
      parser: "babel-eslint",
      plugins: ["flowtype"],
      rules: {
        "flowtype/define-flow-type": 1,
        "flowtype/use-flow-type": 1,
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint/eslint-plugin"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/camelcase": "off",
      },
    },
    {
      files: ["*.{spec,test}.{js,ts,tsx}", "**/__{mocks,tests}__/**/*.{js,ts,tsx}"],
      env: {
        jest: true,
        "jest/globals": true,
      },
    },
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "import/no-unresolved": "warn",
      },
    },
  ],

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },

  ignorePatterns: ["**/mobile/ios/HaruApp/*.entitlements"],
  rules: {
    /** ******** GENERAL ********* */

    camelcase: "off",
    "default-case": "off",
    "global-require": "warn",
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "no-else-return": "off",
    "no-plusplus": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    "no-shadow": "off", // -> warn???
    "no-unused-vars": "warn",
    "no-use-before-define": "off",
    "no-useless-escape": "warn",
    "no-useless-catch": "off",
    "no-empty": "off",
    "no-await-in-loop": "off",
    "operator-linebreak": "off",
    "no-return-assign": "off",
    "consistent-return": "off",
    "no-lonely-if": "off",
    "no-nested-ternary": "off",
    "no-useless-return": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    quotes: ["warn", "double"],

    /** ******** STYLES ********* */

    /** ******** BEST-PRACTICES ********* */

    // specify curly brace conventions for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ["error", "all"],

    // enforce that class methods use "this"
    // https://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": "off",

    // encourages use of dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    "dot-notation": "warn",

    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ["error", "always", { null: "ignore" }],

    // make sure for-in loops have an if statement
    // https://eslint.org/docs/rules/guard-for-in
    "guard-for-in": "off",

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    "max-classes-per-file": ["warn", 1],

    /** ******** IMPORT ********* */

    "import/extensions": "off",
    "import/no-named-as-default": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          { name: "decimal.js", message: "Please use @core/utils/decimal" },
          {
            name: "react-native",
            importNames: ["RefreshControl"],
            message: "Please import 'RefreshControl' from 'components/common/RefreshControl' instead.",
          },
        ],
      },
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    "import/order": [
      "error",
      {
        groups: ["external", ["sibling", "parent"], ["internal", "builtin", "index", "unknown"]],
        pathGroups: [
          {
            pattern: "+(react|react-native)",
            group: "external",
            position: "before",
          },
          {
            pattern: "@+(core|shared-components|design)/**", // @core/**, @shared-components/**, ...
            group: "external",
            position: "after",
          },
          {
            pattern: "components+(_v4|)/**", // components/**, components_v4/**
            group: "sibling",
          },
          {
            pattern: "+(hooks|containers)/**",
            group: "sibling",
          },
          {
            pattern: "+(scrollToTop|GlobalDrawer)",
            group: "sibling",
          },
          {
            pattern: "+(setupTests|appHistory|i18n|HaruTheme|deepLinking|URLConstant|envConstants|services)",
            group: "internal",
          },
          {
            pattern: "@+(mobile|webapp)/**",
            group: "internal",
          },
          {
            pattern: "+(assets|contexts|services|utils|styles|navigation|shared)/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: [""],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-mutable-exports": "off",

    /** ******** REACT ********* */

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-boolean-value": "off",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    "react/jsx-sort-props": "off",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    "react/no-access-state-in-setstate": "error",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    "react/no-did-mount-set-state": "error",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    "react/no-did-update-set-state": "error",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    "react/no-multi-comp": "off",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [">", "}"],
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    "react/no-unknown-property": "error",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": "off",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/prop-types": "off",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],

    /** ******** REACT HOOKS ********* */

    // https://reactjs.org/docs/hooks-rules.html
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
