import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputText: ''
    };
  }

  render() {
    const alignTextTop = { textAlignVertical: 'top' };
    const { textInputText } = this.state;
    const { style } = this.props;
    return (
      <TextInput
        style={[style, alignTextTop]}
        multiLine
        onChangeText={() => this.setState({ textInputText })}
        value={textInputText}
        underlineColorAndroid="transparent"
      />
    );
  }
}
