import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './TextArea.component.style';

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    const { text } = this.state;
    return (
      <TextInput
        style={this.props.style}
        multiline={true}
        onChangeText={(text) => this.setState({text})}
        value={text}
      />
    );
  }
}
