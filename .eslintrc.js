module.exports = {
  root: true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint'
  ],
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  'rules': {
    'max-len': [
      'error',
      120
    ],
    'indent': [
      'error',
      2
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-trailing-spaces': 'error',
    'keyword-spacing': 'error',
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 0
      }
    ],
    'space-before-function-paren': 'error',
    'curly': [
      'error',
      'multi'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'key-spacing': [
      'error',
      {
        afterColon: true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          'minProperties': 1
        },
        'ObjectPattern': {
          'minProperties': 3,
        },
        'ImportDeclaration': {
          'minProperties': 2
        },
        'ExportDeclaration': {
          'minProperties': 1
        }
      }
    ],
    'object-property-newline': 'error',
    'array-element-newline': [
      'error',
      {
        'minItems': 2,
        'multiline': true
      }
    ],
    'array-bracket-newline': [
      'error',
      {
        'multiline': true,
        'minItems': 1
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'never'
      }
    ],
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/script-indent': [
      'error',
      2
    ]
  },
  overrides: [
    {
      files: '*/**/*.vue',
      'parser': 'vue-eslint-parser',
      'parserOptions': {
        'parser': '@typescript-eslint/parser'
      },
    }
  ]
};
