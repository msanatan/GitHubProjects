import React, { Component } from 'react';
import { WebView } from 'react-native';
import { getReadme } from '../../services/github';

export default class RepoViewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.reponame
  });
  constructor(props) {
    super(props);
    this.state = {
      readme: '',
    };
  }

  componentDidMount() {
    getReadme(this.props.navigation.state.params.url)
      .then((readme) => {
        this.setState({
          readme: readme
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <WebView 
        source={{html: this.state.readme}} />
    );
  }
}
