import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { PlainInput } from './InputField'
import Login from './Login'
import {
  loginWithFacebook,
  logUserOut,
  logUserin,
  registerUser,
  checkUserLogin
} from './Auth'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View>
          <Login />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableHighlight
            onPress={() => loginWithFacebook()}
          >
            <Image
              source={require('./assets/fblogin.png')}
              style={{ alignSelf: 'flex-end' }}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




{/* <TouchableHighlight
  style={{ backgroundColor: 'blue', width: 124, height: 20 }}
  onPress={() => logUserOut()}
>
  <Text style={{ fontSize: 16, color: '#888' }}>
    {"Logout"}
  </Text>
</TouchableHighlight> */}