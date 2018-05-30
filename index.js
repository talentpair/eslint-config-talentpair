const restrictedGlobals = require("eslint-restricted-globals");

module.exports = {
  root: true,

  parser: "babel-eslint",

  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],

  plugins: ["flowtype"],

  globals: {
    _LTracker: false,
    __insp: false,
    mixpanel: false
  },

  env: {
    browser: true,
    jest: true
  },

  rules: {
    // Airbnb Rule Overrides
    camelcase: "off",
    "func-names": "error",
    "no-param-reassign": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-prototype-builtins": "off",
    "no-restricted-globals": ["error", "isFinite", "isNaN"]
      .concat(restrictedGlobals)
      .filter(g => !["location", "history"].includes(g)),
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "prefer-destructuring": "off",

    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],

    // Import overrides
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/__tests__/**",
          "**/*.test.js",
          "**/*.test.jsx",
          "**/webpack.config.js",
          "**/webpack.config.*.js"
        ],
        packageDir: ["./", "../"],
        optionalDependencies: false
      }
    ],
    "import/prefer-default-export": "off",

    // Flowtype Rules
    "flowtype/no-dupe-keys": "error",
    "flowtype/no-primitive-constructor-types": "error",
    "flowtype/no-weak-types": "warn",
    "flowtype/require-parameter-type": [
      "warn",
      { excludeArrowFunctions: true }
    ],
    "flowtype/require-return-type": [
      "warn",
      "always",
      { excludeArrowFunctions: true }
    ],
    "flowtype/require-valid-file-annotation": [
      "error",
      "always",
      { annotationStyle: "line" }
    ],
    "flowtype/sort-keys": [
      "off",
      "asc",
      { caseSensitive: false, natural: true }
    ],
    "flowtype/type-id-match": ["warn", "^([A-Z][a-z0-9]*)+T$"],

    // React Overrides for Flow
    // These can probably be removed at some point when bugs are worked out
    "react/no-unused-prop-types": "off",
    "react/sort-comp": [
      "error",
      {
        order: [
          "type-annotations",
          "instance-variables",
          "static-methods",
          "lifecycle",
          "/^on.+$/",
          "getters",
          "setters",
          "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
          "instance-methods",
          "everything-else",
          "/^render.+$/",
          "render"
        ]
      }
    ]
  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};
