import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { getRepos } from '../../../../services/github';

export default class RepoSearchButton extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  render() {
    return (
      <Button 
        raised
        textStyle={{textAlign: 'center'}}
        title='Search'
        onPress={this.handlePress} />
    );
  }

  handlePress() {
    getRepos(this.props.username)
      .then((jsonData) => {
        this.props.onPress(jsonData);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

