/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/navigator/App';
// import Search from './src/components/Search';
import Home from './src/components/firebaseLogin/App';
// import AppNavi from './src/navigator/AppNavigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
