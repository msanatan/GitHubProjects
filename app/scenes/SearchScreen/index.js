import React, { Component } from 'react';
import { View } from 'react-native';
import RepoSearchBar from './components/RepoSearchBar';
import RepoSearchButton from './components/RepoSearchButton';
import RepoList from './components/RepoList';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: []
    };
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <RepoSearchBar />
        <RepoSearchButton />
        <RepoList />
      </View>
    );
  }
}

