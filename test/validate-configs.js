const eslint = require('eslint');
const config = require('../index.js');

test('test basic properties of config', () => {
	expect(config.parserOptions).toBeObject();
	expect(config.env).toBeObject();
	expect(config.globals).toBeObject();
	expect(config.rules).toBeObject();
});

test('load config in eslint to validate all rule syntax is correct', async() => {
	const ESLint = eslint.ESLint;

	const cli = new ESLint({
		overrideConfigFile: 'index.js',
		useEslintrc: false
	});

	const lintResult = await cli.lintFiles([ 'index.js' ]);
	expect(lintResult[0].errorCount).toBe(0);
	expect(lintResult[0].fatalErrorCount).toBe(0);
	expect(lintResult[0].warningCount).toBe(0);
	expect(lintResult[0].fixableErrorCount).toBe(0);
	expect(lintResult[0].fixableWarningCount).toBe(0);
});
