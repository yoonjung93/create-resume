module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true
  },
  extends: ['eslint:recommended', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 2018,
    babelOptions: {
      // configFile: '',
    },
  },
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'config/webpack.config.js'
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'brace-style': [
      'warn',
      'stroustrup', {
        'allowSingleLine': true
      }
    ],
    'no-array-constructor': 'error',
    'no-inner-declarations': 0,
    'space-before-function-paren': [
      'error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'dot-location': [
      'error',
      'property'
    ],
    'keyword-spacing': 'warn',
    'space-before-blocks': [
      'warn', {
        'functions': 'always',
        'keywords': 'always',
        'classes': 'always'
      }
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'warn',
      'single', {
        'allowTemplateLiterals': true
      }
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-underscore-dangle': 0,
    'no-empty': [
      'error',
      {
        'allowEmptyCatch': true
      }
    ],
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-console': [
      'warn',
      {
        'allow': [
          'warn',
          'error'
        ]
      }
    ]
  }
};