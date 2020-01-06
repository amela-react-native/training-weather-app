import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {formatDate} from '../../../utils/formatNumber';

export default class HorizontalScrollView extends Component {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.view}>
        <Text style={styles.textTop}>{formatDate(item.dt_txt)}</Text>
        <Icon name="ios-moon" size={30} color="white" />
        <Text style={styles.textBottom}>{parseInt(item.main.temp, 10)}℉</Text>
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
