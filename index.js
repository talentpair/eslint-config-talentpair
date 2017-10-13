const restrictedGlobals = require("eslint-restricted-globals");

module.exports = {
  root: true,

  parser: "babel-eslint",

  extends: ["airbnb", "plugin:flowtype/recommended"],

  globals: {
    _LTracker: false,
    __insp: false,
    mixpanel: false,
  },

  env: {
    browser: true,
    jest: true,
  },

  plugins: ["flowtype"],

  rules: {
    // Airbnb Rule Overrides
    camelcase: "off",
    "func-names": "error",
    "max-len": [
      "error",
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-param-reassign": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-restricted-globals": ["error", "isFinite", "isNaN"]
      .concat(restrictedGlobals)
      .filter(g => !["location", "history"].includes(g)),
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "no-underscore-dangle": "off",
    "no-unused-expressions": ["error", { allowTernary: true }],
    "padded-blocks": "off",
    quotes: ["error", "double", { avoidEscape: true }],
    radix: "off",

    // Import overrides
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/__tests__/**",
          "**/*.test.js",
          "**/*.test.jsx",
          "**/webpack.config.js",
          "**/webpack.config.*.js",
        ],
        optionalDependencies: false,
      },
    ],

    // Flowtype Rules
    "flowtype/delimiter-dangle": ["error", "always-multiline"],
    "flowtype/no-dupe-keys": "error",
    "flowtype/no-primitive-constructor-types": "error",
    "flowtype/no-weak-types": "warn",
    "flowtype/object-type-delimiter": "error",
    "flowtype/require-parameter-type": ["warn", { excludeArrowFunctions: true }],
    "flowtype/require-return-type": ["warn", "always", { excludeArrowFunctions: true }],
    "flowtype/require-valid-file-annotation": ["error", "always", { annotationStyle: "line" }],
    "flowtype/semi": "error",
    "flowtype/sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],
    "flowtype/space-after-type-colon": ["error", "always", { allowLineBreak: true }],
    "flowtype/type-id-match": ["warn", "^([A-Z][a-z0-9]*)+T$"],

    // React Overrides for Flow
    // These can probably be removed at some point when bugs are worked out
    "react/no-unused-prop-types": "off",
    "react/sort-comp": [
      "error",
      {
        order: [
          "/^props$/",
          "static-methods",
          "lifecycle",
          "/^on.+$/",
          "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
          "everything-else",
          "/^render.+$/",
          "render",
        ],
      },
    ],
  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
    "import/core-modules": ["kyoto"],
  },
};
