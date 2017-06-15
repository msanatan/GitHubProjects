import React, { Component } from 'react';
import {
  SearchBar,
} from 'react-native-elements';

export default class RepoSearchBar extends Component {
  render() {
    return (
      <SearchBar 
        lightTheme
        placeholder='Search for user...'
        autoCapitalize='none' />
    );
  }
}

