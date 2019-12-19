import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>abcseeee</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#E6E6E6'
  }
});
