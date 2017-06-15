import React, { Component } from 'react';
import { View } from 'react-native';
import RepoSearchBar from './components/RepoSearchBar';
import RepoSearchButton from './components/RepoSearchButton';

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <RepoSearchBar />
        <RepoSearchButton />
      </View>
    );
  }
}

