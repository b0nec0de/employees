module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:prettier/recommended'
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', 'prettier'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['error', 'always'],
		'no-unused-vars': [
			'warn',
			{ vars: 'all', args: 'none', ignoreRestSiblings: false }
		],
		'prettier/prettier': 'error'
	},
	settings: {
		react: {
			version: '16.0'
		}
	}
};
