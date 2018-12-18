/** @format */

import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
//config status bar (only android)
import StatusBarConfig from './src/config/StatusBarConfig';
//to ignore useless warnings
YellowBox.ignoreWarnings([
	`Warning: Can't perform a React state`,
	'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	'Remote debugger is in a background tab which may cause apps to perform slowly'
]);
AppRegistry.registerComponent(appName, () => App);
