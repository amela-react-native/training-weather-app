import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', errorMessage: null};
  }

  handleLogin = () => {
    const {email, password} = this.state;
    const {navigation} = this.props;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Main'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    const {errorMessage, email, password} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={emailInput => this.setState({email: emailInput})}
          value={email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={passwordInput =>
            this.setState({password: passwordInput})
          }
          value={password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
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
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
});
