const eslint = require('eslint');
const config = require('../index.js');

require('jest-extended');

test('test basic properties of config', () => {
	expect(config.parserOptions).toBeObject();
	expect(config.env).toBeObject();
	expect(config.globals).toBeObject();
	expect(config.rules).toBeObject();
});

test('load config in eslint to validate all rule syntax is correct', () => {
	const CLIEngine = eslint.CLIEngine;

	const cli = new CLIEngine({
		configFile: 'index.js',
		useEslintrc: false
	});

	expect(cli.executeOnFiles([ 'index.js' ]).errorCount).toBe(0);
});
