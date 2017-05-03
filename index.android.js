import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const green = '#3dc057';
const backgroundColor = '#000000';
const opacity = 0.9;
const padding = 10;
const widgetToTextGap = 80;
const textColor = 'white';
const fontSize = 18;
const textPadding = 60;
const borderColor = green;
const linePadding = 0;
const lineWidth = 3;
const circleSize = 15;

const Line = ({ left, top, width, height }) => (
  <View
    style={{
      backgroundColor: green,
      position: 'absolute',
      height,
      width,
      left,
      top
    }}
  />
);

const Circle = ({ left, top }) => (
  <View
    style={{
      position: 'absolute',
      left,
      top,
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      backgroundColor: green
    }}
  />
);

const OkButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{}}>
    <Text
      style={{
        marginTop: 20,
        paddingTop: 6,
        backgroundColor: green,
        alignSelf: 'flex-start',
        textAlign: 'center',
        height: 40,
        width: 100,
        fontSize,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 4
      }}>
      OK
    </Text>
  </TouchableOpacity>
);

const CoachMark = ({ x, y, width, height }) => {
  console.log(' abcd deviceWidth: ', deviceWidth, ' deviceHeight: ', deviceHeight);
  console.log(' abcd coachmarks render : ', x, y, width, height);
  return (
    <View
      testID="container"
      style={{
        flex: 1,
        opacity: 0.8,
        position: 'absolute',
        left: 0,
        top: 0,
        width: deviceWidth,
        height: deviceHeight
      }}>
      <StatusBar hidden />

      <View
        testID="topRectangle"
        style={{
          backgroundColor,
          opacity,
          position: 'absolute',
          left: 0,
          top: 0,
          width: deviceWidth,
          height: y - padding
        }}
      />

      <View
        testID="leftRectangle"
        style={{
          backgroundColor,
          opacity,
          position: 'absolute',
          left: 0,
          top: y - padding,
          width: x - padding,
          height: height + padding + padding
        }}
      />

      <View
        testID="content"
        style={{
          borderWidth: 2,
          borderColor,
          position: 'absolute',
          left: x - padding,
          top: y - padding,
          width: width + padding + padding,
          height: height + padding + padding
        }}
      />

      <View
        testID="rightRectangle"
        style={{
          backgroundColor,
          opacity,
          position: 'absolute',
          left: x + width + padding,
          top: y - padding,
          width: deviceWidth,
          height: height + padding + padding
        }}
      />

      <View
        testID="bottomRectangle"
        style={{
          backgroundColor,
          opacity,
          position: 'absolute',
          left: 0,
          top: y + height + padding,
          width: deviceWidth,
          height: deviceHeight
        }}
      />

      <Line
        left={x}
        top={y + height + padding + linePadding}
        width={lineWidth}
        height={widgetToTextGap - circleSize}
      />

      <Circle
        left={x - circleSize / 2 + 2}
        top={y + height + padding + linePadding + widgetToTextGap - circleSize}
      />

      <View
        testID="textLayout"
        style={{
          flexDirection: 'column',
          position: 'absolute',
          left: textPadding,
          top: y + height + padding + widgetToTextGap,
          width: deviceWidth - (textPadding + textPadding),
          height: height - (y - widgetToTextGap),
          paddingBottom: 40
        }}>
        <Text
          testID="coachText"
          style={{
            color: textColor,
            fontSize,
            fontFamily: 'Roboto-Medium'
          }}>
          This is this coach mark help text that needs to be displayed and it can be very long and has multiple lines.
        </Text>

        <OkButton />
      </View>
    </View>
  );
};

export default class coachMarks extends Component {
  state = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };

  getString() {
    const { x, y, width, height } = this.state;
    return `values : x: ${x} y: ${y} width: ${width} height: ${height}`;
  }

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

        <CoachMark x={x} y={y} width={width} height={height} />
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

AppRegistry.registerComponent('coachMarks', () => coachMarks);
