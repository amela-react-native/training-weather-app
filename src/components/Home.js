/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ImageBackground,
  Dimensions,
  FlatList
} from 'react-native';
import moment from 'moment';
import HorizontalFlatListItem from './flatlist-horizontal';
import Icon from 'react-native-ionicons';

const {width} = Dimensions.get('window');
const date = '2019-03-28';
const horizontalStatus = {
  rainy: {
    ios: 'ios-rainy',
    android: 'md-rainy'
  }
};
const horizontalFlatListData = [
  {
    hour: '1 AM',
    status: horizontalStatus.rainy,
    degrees: 57
  },
  {
    hour: '2 AM',
    status: horizontalStatus.rainy,
    degrees: 57
  }
];

export default class Home extends Component {
  state = {
    name: 'loading',
    humidity: 'loading',
    temp: 'loading',
    descrip: 'loading',
    weather: 'loading',
    list: null
  };

  getWeatherCity() {
    const city = this.props.navigation.getParam('citySearch', 'Hanoi');
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=ebb42b00cdec55898025ba25c0277005`
    )
      .then(data => data.json())
      .then(data2 => {
        this.setState({
          name: data2.name,
          temp: data2.main.temp,
          weather: data2.weather[0].main,
          descrip: data2.weather[0].description,
          tempMax: data2.main.temp_max,
          tempMin: data2.main.temp_min
        });
      });
  }

  getWeatherCityHourly() {
    const city1 = this.props.navigation.getParam('citySearch', 'Hanoi');
    fetch(
      `https://samples.openweathermap.org/data/2.5/forecast/hourly?q=${city1}&appid=b6907d289e10d714a6e88b30761fae22`
    )
      .then(data => data.json())
      .then(data2 => {
        this.setState({
          list: data2.list.filter(item => item.dt_txt.includes(date))
        });
      });
  }

  componentDidMount() {
    this.getWeatherCity();
    this.getWeatherCityHourly();
  }

  render() {
    console.log('date: ', moment().format('dddd'));
    console.log('2010-10-20 04:30:00'.slice(11, 13));
    // console.log(this.state.list);
    if (this.props.navigation.getParam('citySearch')) {
      this.getWeatherCity();
    }
    return (
      <View>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.viewTextCity}>
            <Text style={styles.textCity}>{this.state.name}</Text>
            <Text style={styles.textMain}>{this.state.weather}</Text>
          </View>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.viewTop}>
                <Text style={styles.textTemp}>{this.state.temp}</Text>
                <Text style={styles.textCirle}>°</Text>
              </View>
              <View style={styles.viewtextSpaceBetween}>
                <View>
                  <Text style={styles.textSpaceBetWeen}>
                    Today {moment().format('dddd')}
                  </Text>
                </View>
                <View>
                  <Text style={styles.textSpaceBetWeen}>
                    {this.state.tempMin} {this.state.tempMax}
                  </Text>
                </View>
              </View>
              <FlatList
                style={styles.scrollViewHorizontal}
                horizontal
                data={horizontalFlatListData}
                renderItem={({item, index}) => {
                  return (
                    <HorizontalFlatListItem
                      item={item}
                      index={index}
                      parentFlatList={this}
                    />
                  );
                }}
                keyExtractor={item => item.hour}
              />
              <View style={styles.viewDayOfWeek}>
                <View style={styles.viewDay}>
                  <View style={[styles.viewBetWeen, {paddingLeft: 10}]}>
                    <Text style={styles.textBetWeen}>Wednesday</Text>
                  </View>
                  <View style={styles.viewBetWeen}>
                    <Icon
                      name="ios-sunny"
                      size={25}
                      style={[
                        styles.textScrollViewHorizontal,
                        {paddingLeft: 10}
                      ]}
                    />
                  </View>
                  <View style={[styles.viewBetWeen, {paddingRight: 10}]}>
                    <Text style={styles.textBetWeen}>20 28</Text>
                  </View>
                </View>
              </View>
              <View style={styles.infoDay} />
              <View style={styles.detailsDay}>
                <View style={styles.rowDetails}>
                  <View style={styles.alignLeftText}>
                    <Text style={styles.textTitle}>detail</Text>
                    <Text style={styles.value}>20</Text>
                  </View>
                  <View style={styles.alignLeftText}>
                    <Text style={styles.textTitle}>detail</Text>
                    <Text style={styles.value}>20</Text>
                  </View>
                </View>
                <View style={styles.rowDetails} />
                <View style={styles.rowDetails} />
                <View style={styles.rowDetails} />
                <View style={styles.rowDetails} />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewTop: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  textCity: {
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    top: 70
  },
  textMain: {
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    top: 100
  },
  textTemp: {
    color: 'white',
    fontSize: 85
  },
  textCirle: {
    fontSize: 80,
    color: 'white',
    position: 'absolute',
    top: -5,
    right: -35
  },
  viewtextSpaceBetween: {
    flexDirection: 'row',
    width,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 50
  },
  textSpaceBetWeen: {
    color: 'white',
    fontSize: 15
  },
  scrollViewHorizontal: {
    marginTop: 10,
    width,
    height: 120,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    borderTopColor: 'white',
    borderTopWidth: 1
  },
  viewDayOfWeek: {
    width,
    height: 400,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  infoDay: {
    width,
    height: 100,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  detailsDay: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: 300,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  rowDetails: {
    width: width - 50,
    height: 60,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewTextCity: {
    width,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  vtextScrollViewHorizontal: {
    flexDirection: 'row'
  },
  textScrollViewHorizontal: {
    padding: 10,
    color: 'white'
  },
  viconScrollViewHorizontal: {
    flexDirection: 'row',
    marginLeft: 10
  },
  textBottomScrollViewHorizontal: {
    paddingLeft: 15,
    color: 'white'
  },
  viewDay: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewBetWeen: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBetWeen: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  alignLeftText: {
    flex: 1,
    justifyContent: 'center'
  },
  textTitle: {
    color: 'white'
  },
  value: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

//
// <View style={styles.container}>
//   <Text>name: {this.state.name} </Text>
//   <Text>temp: {this.state.temp} </Text>
//   <Text>weather: {this.state.weather} </Text>
//   <Text>descrip: {this.state.descrip} </Text>
//   <Text>humidity: {this.state.humidity} </Text>
// </View>
