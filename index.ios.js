/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class coachMarks extends Component {
  render() {
    return (
      <View testID="container" style={styles.container}>
        <Text style={styles.welcome} testID="welcome">
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions} testID="instructions">
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions} testID="refresh">
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('coachMarks', () => coachMarks);
