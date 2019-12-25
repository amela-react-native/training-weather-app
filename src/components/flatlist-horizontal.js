import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-ionicons';
export default class HorizontalScrollView extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.textTop}>3</Text>
        <Icon name="ios-moon" size={30} color="white" />
        <Text style={styles.textBottom}>20 ℉</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    width: 90,
    borderColor: 'white'
  },
  textTop: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    margin: 10
  },
  textBottom: {
    fontSize: 16,
    margin: 10,
    color: 'white'
  }
});
