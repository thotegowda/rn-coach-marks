import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import CoachMarks from './CoachMarks';

const noLayout = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
export default class TestApp extends Component {
  state = {
    welcomeLayout: noLayout,
    instructionsLayout: noLayout,
    refreshLayout: noLayout
  };

  render() {
    const { welcomeLayout, instructionsLayout, refreshLayout } = this.state;
    return (
      <CoachMarks
        style={styles.container}
        viewPositions={[welcomeLayout, instructionsLayout, refreshLayout]}
        coachTexts={[
          'This is this coach mark help text that needs to be displayed ',
          'This is this coach mark help text that needs to be displayed on the given view',
          'This is this coach mark help text that needs to be displayed and it can be very long and has multiple lines.'
        ]}
        onFinish={() => true}>
        <Text
          style={styles.welcome}
          testID="welcome"
          onLayout={event => this.setState({ welcomeLayout: event.nativeEvent.layout })}>
          Welcome to React Native!
        </Text>
        <Text
          style={styles.instructions}
          testID="instructions"
          onLayout={event => this.setState({ instructionsLayout: event.nativeEvent.layout })}>
          &gt;
          To get started, edit index.ios.js
        </Text>
        <Text
          style={styles.instructions}
          testID="refresh"
          onLayout={event => this.setState({ refreshLayout: event.nativeEvent.layout })}>
          &gt;
          Press Cmd+R to reload,{'\n'}
        </Text>
      </CoachMarks>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
