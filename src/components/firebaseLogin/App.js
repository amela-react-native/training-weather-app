import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import SignUp from './SignUp';
import Login from './Login';
import Main from '../../navigator/AppNavigation';
//import Main from './Main';
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
