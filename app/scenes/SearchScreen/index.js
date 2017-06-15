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
    this.changeUsername = this.changeUsername.bind(this);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <RepoSearchBar 
          onChangeText={this.changeUsername}/>
        <RepoSearchButton />
        <RepoList />
      </View>
    );
  }

  changeUsername(newUsername) {
    this.setState({
      username: newUsername
    });
  }

  updateRepos(newRepos) {
    this.setSate({
      repos: newRepos
    });
  }
}

