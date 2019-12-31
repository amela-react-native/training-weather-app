import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  Alert,
  ActivityIndicator
} from 'react-native';
import ShowDayOfWeek from './showDayOfWeek';
import moment from 'moment';
import HorizontalFlatListItem from './showWeatherOfDay';
import ShowDayInfo from './showDayInfo';
import ShowDetailDay from './showDetailDay';

const {width} = Dimensions.get('window');
const date = '2019-03-28';
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataWeather: null
    };
  }

  componentDidMount() {
    this.getWeatherCity();
    this.getWeatherCityHourly();
  }

  getWeatherCity() {
    const {navigation} = this.props;
    const city = navigation.getParam('citySearch', 'Hanoi');
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=ebb42b00cdec55898025ba25c0277005`
    )
      .then(data => data.json())
      .then(data2 => {
        this.setState({
          dataWeather: data2
        });
      })
      .catch(error => {
        console.error(error);
        Alert.alert('ERROR CITY NAME');
      });
  }

  getWeatherCityHourly() {
    const {navigation} = this.props;
    const city1 = navigation.getParam('citySearch', 'Hanoi');
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

  render() {
    const {navigation} = this.props;
    if (navigation.getParam('citySearch')) {
      this.getWeatherCity();
    }
    const {dataWeather} = this.state;
    if (dataWeather == null) {
      return (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    const {list, listWeek} = this.state;
    if (navigation.getParam('citySearch')) {
      this.getWeatherCity();
    }
    return (
      <View>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.viewTextCity}>
            <Text style={styles.textCity}>{dataWeather.name}</Text>
            <Text style={styles.textMain}>{dataWeather.weather[0].main}</Text>
          </View>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.viewTop}>
                <Text style={styles.textTemp}>{dataWeather.main.temp}</Text>
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
                    {dataWeather.main.temp_max} {dataWeather.main.temp_min}
                  </Text>
                </View>
              </View>
              <FlatList
                style={styles.scrollViewHorizontal}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={list}
                renderItem={({item, index}) => {
                  return <HorizontalFlatListItem item={item} index={index} />;
                }}
                keyExtractor={item => `${item.main.temp}`}
              />
              <View style={styles.viewDayOfWeek}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={listWeek}
                  renderItem={({item, index}) => {
                    return <ShowDayOfWeek item={item} index={index} />;
                  }}
                  keyExtractor={index => `${index}`}
                />
              </View>
              <ShowDayInfo />
              <ShowDetailDay
                humidity={dataWeather.main.humidity}
                feelsLike={dataWeather.main.feels_like}
                tempMax={dataWeather.main.temp_max}
                tempMin={dataWeather.main.temp_min}
                windSpeed={dataWeather.wind.speed}
                pressure={dataWeather.main.pressure}
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
