import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default class showDayInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Weather Underground provides local & long-range weather forecasts,
          weather reports, maps & tropical weather conditions for locations
          worldwide.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height: 100,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  text: {
    padding: 10,
    color: 'white',
    fontSize: 15
  }
});
