import React, { Component } from 'react';
import { Text } from 'react-native';

export default class RepoViewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.reponame
  });
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>Placeholder</Text>
    );
  }
}
