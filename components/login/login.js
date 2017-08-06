import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image,
  KeyboardAvoidingView} from 'react-native';
import Loginform from './loginform.js';

export default class Login extends Component{

  render(){
    return (
      <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}>

      <View style={styles.logoContainer}>
      <Image
      style={styles.logo}
      source={require('../images/logo.png')}
      />

      <Text style={styles.title}> An app made to connect one another</Text>
      </View>

      <View style={styles.formContainer}>
        <Loginform/>
      </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  logoContainer:{
    position: 'absolute',
    top: '10%',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 240,
    height: 200,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    width: 160,
    opacity: .9,
  }


});

AppRegistry.registerComponent('Login', () => Login);
