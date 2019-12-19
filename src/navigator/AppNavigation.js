/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../components/Home';
import Search from '../components/Search';
import Icon from 'react-native-ionicons';
import {createAppContainer} from 'react-navigation';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;

  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-planet`;
  } else if (routeName === 'Search') {
    iconName = `ios-options`;
  }

  return <Icon name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      Search
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
  )
);
