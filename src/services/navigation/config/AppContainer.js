import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import SignUp from '../../../feature/login/components/SignUp';
import Login from '../../../feature/login/components/Login';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../../../feature/home/HomeView';
import Search from '../../../feature/search/Search';
import Icon from 'react-native-vector-icons/Ionicons';
import Position from '../../../feature/position/Position';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;

  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-planet`;
  } else if (routeName === 'Search') {
    iconName = `ios-options`;
  } else if (routeName === 'Position') {
    iconName = `ios-flag`;
  }
  return <Icon name={iconName} size={25} color={tintColor} />;
};

const Main = createBottomTabNavigator(
  {
    Home,
    Search,
    Position
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: '#147efb',
      inactiveTintColor: '#ccc'
    }
  }
);

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
