import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import CoachMark from './CoachMark';

export default class TestApp extends Component {
  state = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    coachMarksVisibility: true
  };

  render() {
    const { x, y, width, height } = this.state;

    return (
      <View testID="container" style={styles.container}>
        <Text
          style={styles.welcome}
          testID="welcome"
          onLayout={event => {
            var { x, y, width, height } = event.nativeEvent.layout;
            this.setState(event.nativeEvent.layout);
          }}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions} testID="instructions">
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions} testID="refresh">
          Press Cmd+R to reload,{'\n'}
        </Text>

        {this.state.coachMarksVisibility &&
          <CoachMark
            x={x}
            y={y}
            width={width}
            height={height}
            text="This is this coach mark help text that needs to be displayed and it can be very long and has multiple lines."
            onPress={() => {
              this.setState({ coachMarksVisibility: false });
            }}
          />}
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

AppRegistry.registerComponent('coachMarks', () => TestApp);
