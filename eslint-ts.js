module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'./.eslintrc.json',
		'plugin:@typescript-eslint/recommended'
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		'@typescript-eslint/interface-name-prefix': 0,
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'valid-jsdoc': 'off'
	}
};
