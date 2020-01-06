import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import SignUp from '../../../feature/login/components/SignUp';
import Login from '../../../feature/login/components/Login';
import Home from '../../../feature/home/HomeView';
import Search from '../../../feature/search/Search';
import Icon from 'react-native-vector-icons/Ionicons';
import Position from '../../../feature/position/Position';
import {APP_ROUTE, LOGIN_ROUTE, HOME_ROUTE} from './routes';
const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;

  let iconName;
  if (routeName === HOME_ROUTE.home) {
    iconName = `ios-planet`;
  } else if (routeName === HOME_ROUTE.search) {
    iconName = `ios-options`;
  } else if (routeName === HOME_ROUTE.position) {
    iconName = `ios-flag`;
  }
  return <Icon name={iconName} size={25} color={tintColor} />;
};

const Main = createBottomTabNavigator(
  {
    [HOME_ROUTE.home]: {
      screen: Home
    },
    [HOME_ROUTE.search]: {
      screen: Search
    },
    [HOME_ROUTE.position]: {
      screen: Position
    }
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
    [LOGIN_ROUTE.signup]: SignUp,
    [LOGIN_ROUTE.login]: Login,
    [APP_ROUTE.homeRoute]: Main
  },
  {
    initialRouteName: LOGIN_ROUTE.signup
  }
);
const App = createAppContainer(SwitchNavigator);

export default App;
