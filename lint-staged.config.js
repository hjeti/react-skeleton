const config = require('./build-tools/config/config');

const defaultSettings = ['prettier --write', 'git add'];

const jsLintCommand = 'eslint --ext .js,.jsx --cache';
const tsLintCommand = 'tslint -p tsconfig.json';
const scssLintCommand = 'stylelint --cache';

const jsSettings = config.lintStaged.eslintEnabled
  ? [...defaultSettings, jsLintCommand]
  : [...defaultSettings];

const tsSettings = config.lintStaged.tslintEnabled
  ? [...defaultSettings, tsLintCommand]
  : [...defaultSettings];

const scssSettings = config.lintStaged.stylelintEnabled
  ? [...defaultSettings, scssLintCommand]
  : [...defaultSettings];

module.exports = {
  'src/**/*.{js,jsx}': jsSettings,
  'src/**/*.{ts,tsx}': tsSettings,
  'src/**/*.scss': scssSettings,
};
