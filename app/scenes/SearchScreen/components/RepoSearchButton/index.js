import React, { Component } from 'react';
import { Button } from 'react-native-elements';

export default class RepoSearchButton extends Component {
  render() {
    return (
      <Button 
        raised
        textStyle={{textAlign: 'center'}}
        title='Search'/>
    );
  }
}

