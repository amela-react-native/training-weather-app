import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ImageBackground
} from 'react-native';
export default class HomeComponent extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{width: '100%', height: '100%'}}>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.viewTop}>
                <Text style={styles.textCity}>Ha Noi</Text>
                <Text style={styles.textMain}>Cloud</Text>
                <Text style={styles.textTemp}>22</Text>
                <Text style={styles.textCirle}>°</Text>
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
    marginTop: 80,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  textCity: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  textMain: {
    color: 'white',
    fontSize: 16
  },
  textTemp: {
    color: 'white',
    fontSize: 85
  },
  textCirle: {
    fontSize: 80,
    color: 'white',
    position: 'absolute',
    top: 50,
    right: -35
  }
});
