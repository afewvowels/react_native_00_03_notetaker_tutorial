import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
  static propTypes = {
    text: PropTypes.string,
    onTextChange: PropTypes.func
  }

  render() {
    const { style, text, onTextChange } = this.props;
    return (
      <TextInput
        style={style}
        multiline
        onChangeText={onTextChange}
        value={text}
      />
    );
  }
}
