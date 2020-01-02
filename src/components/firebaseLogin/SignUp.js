import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {firebaseApp} from './fireBaseConfig';
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', errorMessage: null};
  }

  handleSignUp = () => {
    const {email, password} = this.state;
    const {navigation} = this.props;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Login'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    const {errorMessage, email, password} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={emailInput => this.setState({email: emailInput})}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={passwordInput =>
            this.setState({password: passwordInput})
          }
          value={password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => navigation.navigate('Login')}
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
