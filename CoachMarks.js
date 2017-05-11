/* eslint-disable */
import React, { Component, PropTypes as T } from 'react';
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
const padding = 8;
const widgetToTextGap = 80;
const textColor = 'white';
const fontSize = 18;
const textPadding = 50;
const borderColor = green;
const linePadding = 0;
const lineWidth = 3;
const circleSize = 12;

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

const OkButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
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
      {title}
    </Text>
  </TouchableOpacity>
);

const CoachMarkView = ({
  left,
  top,
  width,
  height,
  onPress,
  text,
  buttonText = 'OK',
  hideStatusBar = true
}) => {
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

      <StatusBar hidden={hideStatusBar} />

      <View
        testID="topRectangle"
        style={{
          backgroundColor,
          opacity,
          position: 'absolute',
          left: 0,
          top: 0,
          width: deviceWidth,
          height: top - padding
        }}
      />

      <View
        testID="leftRectangle"
        style={{
          backgroundColor,
          opacity,
          position: 'absolute',
          left: 0,
          top: top - padding,
          width: left - padding,
          height: height + padding + padding
        }}
      />

      <View
        testID="content"
        style={{
          borderWidth: lineWidth,
          borderColor,
          position: 'absolute',
          left: left - padding,
          top: top - padding,
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
          left: left + width + padding,
          top: top - padding,
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
          top: top + height + padding,
          width: deviceWidth,
          height: deviceHeight
        }}
      />

      <Line
        left={left}
        top={top + height + padding + linePadding}
        width={lineWidth}
        height={widgetToTextGap - circleSize}
      />

      <Circle
        left={left - circleSize / 2 + 2}
        top={top + height + padding + linePadding + widgetToTextGap - circleSize}
      />

      <View
        testID="textLayout"
        style={{
          flexDirection: 'column',
          position: 'absolute',
          left: textPadding,
          top: top + height + padding + widgetToTextGap,
          width: deviceWidth - (textPadding + textPadding),
          paddingBottom: 40,
          backgroundColor: 'transparent'
        }}>
        <Text
          testID="coachText"
          style={{
            color: textColor,
            fontSize
          }}>
          {text}
        </Text>

        <OkButton title={buttonText} onPress={onPress} />
      </View>
    </View>
  );
};

class CoachMarks extends React.Component {
  static propTypes = {
    initialIndex: T.number,
    viewPositions: T.arrayOf(
      T.shape({
        x: T.number,
        y: T.number,
        width: T.number,
        height: T.number
      })
    ).isRequired,
    coachTexts: T.arrayOf(T.string).isRequired,
    onFinish: T.func.isRequired
  };

  static defaultProps = {
    initialIndex: 0
  };

  state = {
    currentIndex: 0
  };

  componentWillMount() {
    this.setState({ currentIndex: this.props.initialIndex });
  }

  getButtonText = () =>
    this.state.currentIndex !== this.props.viewPositions.length - 1 ? 'Next' : 'OK';

  navigateToNextScreen = () => {
    if (this.state.currentIndex < this.props.viewPositions.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    } else {
      this.setState({ currentIndex: -1 });
      this.props.onFinish();
    }
  };

  getViewPositions = () =>
    this.state.currentIndex >= 0
      ? this.props.viewPositions[this.state.currentIndex]
      : { x: 0, y: 0, width: 0, height: 0 };

  render() {
    const { x, y, width, height } = this.getViewPositions();
    const shouldShow = this.state.currentIndex >= 0 && !(width === 0 && height === 0);
    return (
      <View style={this.props.style}>
        {this.props.children}
        {shouldShow &&
          <CoachMarkView
            left={x}
            top={y}
            width={width}
            height={height}
            text={this.props.coachTexts[this.state.currentIndex]}
            buttonText={this.getButtonText()}
            onPress={this.navigateToNextScreen}
          />}
      </View>
    );
  }
}

export default CoachMarks;
