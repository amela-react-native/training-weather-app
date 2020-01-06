import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default class showDetailDay extends Component {
  render() {
    const {
      humidity,
      tempMax,
      tempMin,
      feelsLike,
      pressure,
      windSpeed
    } = this.props;
    return (
      <View style={styles.detailsDay}>
        <View style={styles.rowDetails}>
          <View style={styles.alignLeftText}>
            <Text style={styles.textTitle}>humidity</Text>
            <Text style={styles.value}>{humidity}</Text>
          </View>
          <View style={styles.alignLeftText}>
            <Text style={styles.textTitle}>temp max</Text>
            <Text style={styles.value}>{tempMax}</Text>
          </View>
        </View>
        <View style={styles.rowDetails}>
          <View style={styles.alignLeftText}>
            <Text style={styles.textTitle}>tempMin</Text>
            <Text style={styles.value}>{tempMin}</Text>
          </View>
          <View style={styles.alignLeftText}>
            <Text style={styles.textTitle}>feel like</Text>
            <Text style={styles.value}>{feelsLike}</Text>
          </View>
        </View>
        <View style={[styles.rowDetails, {borderBottomColor: 'transparent'}]}>
          <View style={styles.alignLeftText}>
            <Text style={styles.textTitle}>pressure</Text>
            <Text style={styles.value}>{pressure}</Text>
          </View>
          <View style={styles.alignLeftText}>
            <Text style={styles.textTitle}>Wind Speed</Text>
            <Text style={styles.value}>{windSpeed}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailsDay: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: 200,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  alignLeftText: {
    flex: 1,
    justifyContent: 'center'
  },
  textTitle: {
    color: 'white',
    textTransform: 'uppercase'
  },
  value: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  rowDetails: {
    width: width - 50,
    height: 60,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
