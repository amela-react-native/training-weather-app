import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Main from '../../navigator/AppNavigation';
const SwitchNavigator = createSwitchNavigator(
  {
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'SignUp'
  }
);
const App = createAppContainer(SwitchNavigator);

export default App;
