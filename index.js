module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: 'airbnb',

  globals: {
    _: false,
    $: false,
    _LTracker: false,
    __insp: false,
    angular: false,
    jQuery: false,
    mixpanel: false,
    moment: false,
  },

  env: {
    browser: true,
    jest: true,
  },

  plugins: ['angular', 'talentpair'],

  rules: {
    // Airbnb Rule Overrides
    camelcase: 'off',
    'func-names': 'error',
    'max-len': ['error', 150, 'error', {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-param-reassign': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-imports': ['warn', 'angular', 'underscore', 'jquery'],
    'no-underscore-dangle': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'padded-blocks': 'off',
    quotes: ['error', 'double', { avoidEscape: true }],
    radix: 'off',

    // Import overrides
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/__tests__/**',
        '**/*.test.js',
        '**/*.test.jsx',
        '**/webpack.config.js',
        '**/webpack.config.*.js',
      ],
      optionalDependencies: false,
    }],

    // Angular rules overrides
    'angular/controller-as-vm': 'off',
    'angular/controller-name': ['error', '/[A-Z]*Controller$/'],
    'angular/definedundefined': 'off',
    'angular/di': 'off',
    'angular/di-unused': 'off',
    'angular/document-service': 'off',
    'angular/foreach': 'off',
    'angular/json-functions': 'off',
    'angular/module-getter': 'off',
    'angular/module-setter': 'off',
    'angular/no-private-call': 'off',
    'angular/no-service-method': 'off',
    'angular/no-services': 'off',
    'angular/on-watch': 'off',
    'angular/typecheck-array': 'off',
    'angular/typecheck-date': 'off',
    'angular/typecheck-function': 'off',
    'angular/typecheck-number': 'off',
    'angular/typecheck-object': 'off',
    'angular/typecheck-regexp': 'off',
    'angular/typecheck-string': 'off',
    'angular/window-service': 'off',

    // Talentpair Rules
    'talentpair/no-template-url': 'error',
  },
};
