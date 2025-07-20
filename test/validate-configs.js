import { ESLint } from 'eslint';
import config from '../index.js';

test('test basic properties of config', () => {
	expect(config).toBeObject();
	expect(config.languageOptions).toBeObject();
	expect(config.languageOptions.globals).toBeObject();
	expect(config.languageOptions.parserOptions).toBeObject();
	expect(config.plugins).toBeObject();
	expect(config.rules).toBeObject();
});

test('load config in eslint to validate all rule syntax is correct', async () => {
	const cli = new ESLint({
		overrideConfig: config
	});

	const lintResult = await cli.lintFiles('index.js');

	expect(lintResult[0].errorCount).toBe(0);
	expect(lintResult[0].fatalErrorCount).toBe(0);
	expect(lintResult[0].warningCount).toBe(0);
	expect(lintResult[0].fixableErrorCount).toBe(0);
	expect(lintResult[0].fixableWarningCount).toBe(0);
});
