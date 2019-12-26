/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
export default class Search extends Component {
  state = {
    text: '',
    cities: null
  };

  fetchCities(text) {
    this.setState({text});
    fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
      .then(data => data.json())
      .then(city => {
        this.setState({
          cities: city.RESULTS.slice(0, 9)
        });
      });
  }

  onPress = () => {
    console.log('city ', this.state.cities);
    if (this.state.cities === null && this.state.cities.length === 0) {
      alert('null');
    } else {
      this.props.navigation.navigate('Home', {
        citySearch: this.state.text
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.text}
          placeholder="Select City"
          onChangeText={text => this.fetchCities(text)}
        />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.text}> SEARCH </Text>
        </TouchableOpacity>
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
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6DD5FA',
    borderRadius: 10,
    padding: 10,
    marginTop: 15
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});
