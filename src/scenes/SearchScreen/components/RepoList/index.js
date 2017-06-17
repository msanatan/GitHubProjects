import React, { Component } from 'react';
import { 
  List,
  ListItem,
} from 'react-native-elements';

export default class RepoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <List>
        {
          this.props.list.map((item, i) => (
            <ListItem 
              key={i}
              title={item.name}
              url={item.url}
              onPress={() => navigate('RepoView', {
                reponame: item.name
              })} />
          ))
        }
      </List>
    );
  }
}

