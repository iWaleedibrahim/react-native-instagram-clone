import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Login from './Login'


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
        <Login />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1306C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});
