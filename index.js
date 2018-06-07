module.exports = {
	env: {
		browser: true,
		jest: true,
		node: true,
		serviceworker: true,
		webextensions: true
	},
	globals: { },
	parserOptions: {
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [ 'jest' ],
	root: true,
	rules: {
		'jest/no-disabled-tests': 'error',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/no-jasmine-globals': 'error',
		'jest/no-jest-import': 'error',
		'jest/no-test-prefixes': 'error',
		'jest/prefer-to-be-null': 'error',
		'jest/prefer-to-be-undefined': 'error',
		'jest/prefer-to-have-length': 'error',
		'jest/valid-expect': 'error',

		'no-magic-numbers': [ 'error', { 'ignore': [ -1, 0, 1, 2, 3, 4, 5, 7, 10, 24, 60, 100, 365, 1000, 1024 ] }],

		'for-direction': 'error', // eslint-disable-line sort-keys
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-console': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-dupe-args': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-extra-parens': [ 'error', 'functions' ],
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': [ 'error', 'both' ],
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': [ 'error', {
			skipComments: true,
			skipRegExps: true,
			skipStrings: true,
			skipTemplates: true
		}],
		'no-obj-calls': 'error',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-negation': 'error',
		'use-isnan': 'error',
		'valid-jsdoc': [ 'error', { requireReturn: false }],
		'valid-typeof': 'error',

		'array-callback-return': 'error', // eslint-disable-line sort-keys
		'block-scoped-var': 'error',
		'complexity': [ 'error', { max: 2 }],
		'curly': 'error',
		'default-case': 'error',
		'dot-location': [ 'error', 'object' ],
		'dot-notation': 'error',
		'eqeqeq': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-div-regex': 'error',
		'no-else-return': [ 'error', { allowElseIf: false }],
		'no-empty-function': 'error',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': [ 'error', {
			boolean: false,
			number: true
		}],
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'guard-for-in': 'error', // eslint-disable-line sort-keys
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-void': 'error',
		'no-warning-comments': [ 'error', {
			location: 'start',
			terms: [ 'todo', 'fixme' ]
		}],
		'no-with': 'error',
		'radix': 'error',
		'require-await': 'error',
		'wrap-iife': [ 'error', 'inside' ],
		'yoda': 'error',
		'init-declarations': [ 'error', 'never' ], // eslint-disable-line sort-keys
		'no-catch-shadow': 'error',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-unused-vars': 'error',
		'no-use-before-define': 'error',
		'callback-return': 'error', // eslint-disable-line sort-keys
		'global-require': 'error',
		'global-require': 'error',
		'handle-callback-err': 'error',
		'no-buffer-constructor': 'error',
		'no-mixed-requires': 'error',
		'no-new-require': 'error',
		'no-restricted-modules': [ 'error', {
			patterns: [ 'lodash/*', 'lodash', 'request' ]
		}],
		'array-bracket-spacing': [ 'error', 'always', { // eslint-disable-line sort-keys
			arraysInArrays: false,
			objectsInArrays: false
		}],
		'block-spacing': 'error',
		'brace-style': [ 'error', '1tbs' ],
		'camelcase': 'off',
		'comma-dangle': [ 'error', 'never' ],
		'comma-spacing': [ 'error', {
			after: true,
			before: false
		}],
		'comma-style': [ 'error', 'last' ],
		'computed-property-spacing': [ 'error', 'never' ],
		'consistent-this': 'error',
		'eol-last': 'error',
		'func-call-spacing': [ 'error', 'never' ],
		'func-names': [ 'error', 'always' ],
		'id-blacklist': [ 'error', 'data', 'err', 'e', 'cb', 'callback', 'result', 'returned', 'resultJson' ],
		'id-length': [ 'error', {
			exceptions: [ 'i', 'j', '$' ]
		}],
		'indent': [ 'error', 'tab', {
			'SwitchCase': 1,
			'VariableDeclarator': 1
		}],
		'jsx-quotes': [ 'error', 'prefer-single' ],
		'key-spacing': [ 'error', {
			afterColon: true,
			beforeColon: false,
			mode: 'strict'
		}],
		'keyword-spacing': [ 'error', {
			after: true,
			before: true,
			overrides: {
				'for': { 'after': false },
				'if': { 'after': false },
				'while': { 'after': false }
			}
		}],
		'linebreak-style': [ 'error', 'unix' ],
		'lines-between-class-members': [ 'error', 'always' ],
		'max-depth': [ 'error', 4 ],
		'max-nested-callbacks': [ 'error', 3 ],
		'max-params': [ 'error', 5 ],
		'max-statements-per-line': [ 'error', { max: 1 }],
		'multiline-comment-style': [ 'error', 'starred-block' ],
		'new-cap': [ 'error', { newIsCap: true }],
		'new-parens': 'error',
		'no-array-constructor': 'error',
		'no-lonely-if': 'error',
		'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-ternary': 'error',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': [ 'error', 'always', {
			arraysInObjects: true,
			objectsInObjects: false
		}],
		'one-var': [ 'error', {
			const: 'never',
			let: 'never',
			var: 'always'
		}],
		'operator-linebreak': [ 'error', 'none' ],
		'padded-blocks': [ 'error', 'never' ],
		'quotes': [ 'error', 'single', {
			allowTemplateLiterals: true,
			avoidEscape: true
		}],
		'require-jsdoc': [ 'error', {
			require: {
				ArrowFunctionExpression: false
			}
		}],
		'semi': [ 'error', 'always' ],
		'semi-spacing': [ 'error', {
			after: true,
			before: false
		}],
		'semi-style': [ 'error', 'last' ],
		'sort-keys': [ 'error', 'asc' ],
		'space-before-blocks': 'error',
		'space-before-function-paren': [ 'error', {
			anonymous: 'never',
			asyncArrow: 'always',
			named: 'never'
		}],
		'space-infix-ops': 'error',
		'spaced-comment': [ 'error', 'always' ],
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',
		'wrap-regex': 'error',
		'arrow-spacing': [ 'error', { // eslint-disable-line sort-keys
			after: true,
			before: true
		}],
		'constructor-super': 'error',
		'no-class-assign': 'error',
		'no-confusing-arrow': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'error',
		'no-restricted-imports': [ 'error', {
			patterns: [ 'lodash/*', 'lodash', 'request' ]
		}],
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-var': 'error',
		'object-shorthand': [ 'error', 'always' ],
		'prefer-const': 'error',
		'prefer-template': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': 'error',
		'template-curly-spacing': 'error'
	}
};
