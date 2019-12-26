/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
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
  FlatList,
  Alert
} from 'react-native';
import ShowDayOfWeek from './showDayOfWeek';
import moment from 'moment';
import HorizontalFlatListItem from './showWeatherOfDay';
import ShowDayInfo from './showDayInfo';
import ShowDetailDay from './showDetailDay';

const {width} = Dimensions.get('window');
const date = '2019-03-28';
export default class Home extends Component {
  state = {
    name: 'loading',
    humidity: 'loading',
    temp: 'loading',
    descrip: 'loading',
    weather: 'loading',
    feelsLike: 'loading',
    pressure: 'loading',
    tempMin: 'loading',
    tempMax: 'loading',
    list: null,
    listWeek: null,
    windSpeed: null
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
          tempMin: data2.main.temp_min,
          pressure: data2.main.pressure,
          humidity: data2.main.humidity,
          windSpeed: data2.wind.speed,
          feelsLike: data2.main.feels_like
        });
      })
      .catch(function(error) {
        Alert.alert('ERROR CITY NAME');
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
          list: data2.list.filter(item => item.dt_txt.includes(date)),
          listWeek: [
            ...new Set(data2.list.map(item => item.dt_txt.slice(0, 10)))
          ]
        });
      });
  }

  componentDidMount() {
    this.getWeatherCity();
    this.getWeatherCityHourly();
  }

  render() {
    if (this.state == null) {
      return <View />;
    }
    console.log(this.state.listWeek);
    console.log(this.state.feelsLike);
    console.log(this.state);
    const {
      humidity,
      tempMax,
      tempMin,
      feelsLike,
      pressure,
      windSpeed
    } = this.state;
    console.log(moment('2019-03-27').format('dddd'));
    const entries = Object.entries(this.state);
    console.log(entries);
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
                showsHorizontalScrollIndicator={false}
                horizontal
                data={this.state.list}
                renderItem={({item, index}) => {
                  return <HorizontalFlatListItem item={item} index={index} />;
                }}
                keyExtractor={item => `${item.main.temp}`}
              />
              <View style={styles.viewDayOfWeek}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={this.state.listWeek}
                  renderItem={({item, index}) => {
                    return <ShowDayOfWeek item={item} index={index} />;
                  }}
                  keyExtractor={index => `${index}`}
                />
              </View>
              <ShowDayInfo />
              <ShowDetailDay
                humidity={humidity}
                feelsLike={feelsLike}
                tempMax={tempMax}
                tempMin={tempMin}
                windSpeed={windSpeed}
                pressure={pressure}
              />
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
    height: 250,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  viewTextCity: {
    width,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }

});
