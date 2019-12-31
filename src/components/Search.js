import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native';
export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      cities: null
    };
  }

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
    const {cities, text} = this.state;
    const {navigation} = this.props;
    if (cities === null && cities.length === 0) {
      Alert.alert('null');
    } else {
      navigation.navigate('Home', {
        citySearch: text
      });
    }
  };

  render() {
    const {text} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={text}
          placeholder="Select City"
          onChangeText={textInput => this.fetchCities(textInput)}
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
