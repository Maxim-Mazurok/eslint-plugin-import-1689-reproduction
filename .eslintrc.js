module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['import'],
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		}
	},
	extends: [
		'plugin:import/errors',
		'plugin:import/typescript',
	],
	settings: {
		'import/resolver': { 'eslint-import-resolver-typescript': true },
	}
};
