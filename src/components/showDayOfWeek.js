import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-ionicons';
import moment from 'moment';

export default class ShowDayOfWeek extends Component {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.viewDay}>
        <View style={[styles.viewBetWeen, {paddingLeft: 10}]}>
          <Text style={styles.textBetWeen}>{moment(item).format('dddd')}</Text>
        </View>
        <View
          style={[styles.viewBetWeen, {alignItems: 'center', paddingLeft: 20}]}>
          <Icon
            name="ios-sunny"
            size={25}
            style={[styles.textScrollViewHorizontal, {paddingLeft: 10}]}
          />
        </View>
        <View
          style={[
            styles.viewBetWeen,
            {alignItems: 'flex-end', paddingRight: 20}
          ]}>
          <Text style={styles.textBetWeen}>20 28</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewDay: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewBetWeen: {
    justifyContent: 'center',
    flex: 1
  },
  textBetWeen: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  textScrollViewHorizontal: {
    padding: 10,
    color: 'white'
  }
});
