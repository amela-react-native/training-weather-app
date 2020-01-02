import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Loading from './Loading';
import SignUp from './SignUp';
import Login from './Login';
import Main from './Main';
const SwitchNavigator = createSwitchNavigator(
  {
    Loading,
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
