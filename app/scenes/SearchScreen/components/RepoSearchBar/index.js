import React, { Component } from 'react';
import {
  SearchBar,
} from 'react-native-elements';

export default class RepoSearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  render() {
    return (
      <SearchBar 
        lightTheme
        placeholder='Search for user...'
        autoCapitalize='none'
        onChangeText={this.handleChangeText} />
    );
  }

  handleChangeText(newUsername) {
    this.props.onChangeText(newUsername);
  }
}

