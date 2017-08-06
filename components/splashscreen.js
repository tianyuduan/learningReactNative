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
  View,
  TouchableOpacity
} from 'react-native';

import Login from './login/login.js';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
          showComponent: true,
        });

  }

  render() {
    let login = () => (
      <Login/>
    );

    let show = () => (
      this.state.showComponent ? <Login/> : null
    );

    return (
      <View style={styles.wrapper}>

        <Text style={styles.title}>
          Welcome to Connect!
        </Text>

        <View style={styles.loginWrapper}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleClick}
            >
            {show}
          <Text style={styles.buttonText}
            >LOGIN</Text>
          </TouchableOpacity>
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
    position: 'absolute',
    top: "70%",
    width: 150,
    height: 50,
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    alignItems: 'center',
    top: '100%'

  },
  buttonText: {
    textAlign: 'center',
    color: "#FFF",
  }
});

AppRegistry.registerComponent('SplashScreen', () => SplashScreen);
