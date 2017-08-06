import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';


export default class component2 extends Component{

  render(){
    return (
      <View>
      <Text style={{color: 'red', textAlign: 'center', paddingTop: '5%'}}>Hello Brad</Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('component2', () => component2);
