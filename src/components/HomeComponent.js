import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ImageBackground,
  Dimensions
} from 'react-native';
import Icon from 'react-native-ionicons';

const {width} = Dimensions.get('window');
export default class HomeComponent extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.viewTextCity}>
            <Text style={styles.textCity}>Ha Noi</Text>
            <Text style={styles.textMain}>Cloud</Text>
          </View>

          <ScrollView>
            <View style={styles.container}>
              <View style={styles.viewTop}>
                <Text style={styles.textTemp}>22</Text>
                <Text style={styles.textCirle}>°</Text>
              </View>
              <View style={styles.viewtextSpaceBetween}>
                <View>
                  <Text style={styles.textSpaceBetWeen}>Today Tuesday</Text>
                </View>
                <View>
                  <Text style={styles.textSpaceBetWeen}>22 24</Text>
                </View>
              </View>
              <ScrollView
                style={styles.scrollViewHorizontal}
                showsHorizontalScrollIndicator={false}
                horizontal>
                <View>
                  <View style={styles.vtextScrollViewHorizontal}>
                    <Text style={styles.textScrollViewHorizontal}>0 AM</Text>
                    <Text style={styles.textScrollViewHorizontal}>1 AM</Text>
                    <Text style={styles.textScrollViewHorizontal}>2 AM</Text>
                    <Text style={styles.textScrollViewHorizontal}>Child 2</Text>
                  </View>
                  <View style={styles.viconScrollViewHorizontal}>
                    <Icon
                      name="ios-cloudy-night"
                      size={25}
                      style={[
                        styles.textScrollViewHorizontal,
                        {paddingLeft: 10}
                      ]}
                    />
                    <Icon
                      name="ios-cloudy-night"
                      size={25}
                      style={[
                        styles.textScrollViewHorizontal,
                        {paddingLeft: 20}
                      ]}
                    />
                    <Icon
                      name="ios-cloudy-night"
                      size={25}
                      style={[
                        styles.textScrollViewHorizontal,
                        {paddingLeft: 20}
                      ]}
                    />
                  </View>
                  <View style={styles.vtextScrollViewHorizontal}>
                    <Text style={styles.textBottomScrollViewHorizontal}>
                      20 °c
                    </Text>
                    <Text style={styles.textBottomScrollViewHorizontal}>
                      20 °c
                    </Text>
                    <Text style={styles.textBottomScrollViewHorizontal}>
                      20 °c
                    </Text>
                    <Text style={styles.textBottomScrollViewHorizontal}>
                      20 °c
                    </Text>
                  </View>
                </View>
              </ScrollView>
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
