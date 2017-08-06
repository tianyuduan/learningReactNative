/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './components/login/login.js';


export default class myapp extends Component {
  render() {
    return (
      <View style={styles.wrapper}>

        <Text style={styles.title}>
          Welcome to Connect!
        </Text>

        <View style={styles.loginWrapper}>
        <Text style={styles.login}>
          Login
        </Text>
        </View>


        <Text style={styles.subtitle}>
        Powered by React native
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    bottom: '10%'
  },
  loginWrapper: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#d6d7da',
    position: 'absolute',
    top: "70%",
    width: 150,
    height: 50,
  },
  login: {
    textAlign: 'center',
    color: 'white',
      fontWeight: 'bold',
      fontSize: 24,
  },
});

AppRegistry.registerComponent('myapp', () => myapp);
