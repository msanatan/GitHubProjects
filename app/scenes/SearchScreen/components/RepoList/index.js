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
    return (
      <List>
        {
          this.props.list.map((item, i) => (
            <ListItem 
              key={i}
              title={item.name} />
          ))
        }
      </List>
    );
  }
}
